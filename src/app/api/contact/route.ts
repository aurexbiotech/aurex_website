import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// ----------------------------------------------------------------------------
// Rate Limiting & Idempotency Store
// ----------------------------------------------------------------------------
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5

// Idempotency cache: Key -> { success: boolean, error?: string, timestamp: number }
const idempotencyMap = new Map<string, { success: boolean; error?: string; timestamp: number }>()
const IDEMPOTENCY_TTL_MS = 10 * 60 * 1000 // 10 minutes

function cleanupIdempotency() {
  const now = Date.now()
  for (const [key, val] of idempotencyMap.entries()) {
    if (now - val.timestamp > IDEMPOTENCY_TTL_MS) {
      idempotencyMap.delete(key)
    }
  }
}

// ----------------------------------------------------------------------------
// Input Validation & Sanitization Helpers
// ----------------------------------------------------------------------------
function sanitize(input: string): string {
  if (!input) return ''
  return input
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim()
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string): boolean {
  if (!phone) return true
  return /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{3,6}$/.test(phone.trim())
}

const ALLOWED_AREAS_OF_INTEREST = [
  'General Inquiry',
  'Immunoassay Systems',
  'Microbiology Solutions',
  'Clinical Chemistry',
  'Molecular Diagnostics',
  'Quality Control',
  'Technical Support',
  'Partnership Opportunities'
]

// ----------------------------------------------------------------------------
// Delivery Result Type
// ----------------------------------------------------------------------------
interface ChannelResult {
  success: boolean
  error?: string
}

// ----------------------------------------------------------------------------
// Main Contact Endpoint Handler
// ----------------------------------------------------------------------------
export async function POST(req: NextRequest) {
  try {
    // 1. IP Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown-ip'
    const now = Date.now()
    const timestamps = rateLimitMap.get(ip) || []
    const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS)

    if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { 
          success: false, 
          error: "We couldn't process your enquiry right now. Please try again shortly." 
        },
        { status: 429 }
      )
    }

    recentTimestamps.push(now)
    rateLimitMap.set(ip, recentTimestamps)

    // 2. Parse Request Body & Check Idempotency Key
    const body = await req.json()
    const idempotencyKey = (
      req.headers.get('idempotency-key') ||
      body.idempotencyKey ||
      ''
    ).trim()

    if (idempotencyKey) {
      cleanupIdempotency()
      const cached = idempotencyMap.get(idempotencyKey)
      if (cached) {
        if (cached.success) {
          return NextResponse.json({ success: true, duplicated: true })
        } else {
          return NextResponse.json(
            { success: false, error: "We couldn't process your enquiry right now. Please try again shortly." },
            { status: 503 }
          )
        }
      }
    }

    const name = (body.name || body.fullName || '').trim()
    const email = (body.email || '').trim()
    const company = (body.company || '').trim()
    const phone = (body.phone || '').trim()
    const interest = (body.interest || body.areaOfInterest || '').trim()
    const subject = (body.subject || '').trim()
    const message = (body.message || '').trim()
    const website = (body.website || body.botCheck || '').trim() // Honeypot field

    // 3. Honeypot check: Bots fill hidden fields; silently return success
    if (website) {
      return NextResponse.json({ success: true })
    }

    // 4. Server-Side Field Validation
    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full Name is required and must be at least 2 characters.' },
        { status: 400 }
      )
    }

    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    if (!interest || !ALLOWED_AREAS_OF_INTEREST.includes(interest)) {
      return NextResponse.json(
        { success: false, error: 'Please select a valid area of interest.' },
        { status: 400 }
      )
    }

    if (!subject || subject.length < 3) {
      return NextResponse.json(
        { success: false, error: 'Subject is required and must be at least 3 characters.' },
        { status: 400 }
      )
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message is required and must be at least 10 characters.' },
        { status: 400 }
      )
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid phone number or leave the field blank.' },
        { status: 400 }
      )
    }

    // Sanitized inputs for safe processing
    const cleanName = sanitize(name)
    const cleanEmail = email
    const cleanCompany = company ? sanitize(company) : 'Not provided'
    const cleanPhone = phone ? sanitize(phone) : 'Not provided'
    const cleanInterest = sanitize(interest)
    const cleanSubject = sanitize(subject)
    const cleanMessage = sanitize(message)
    const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const destinationEmail = 'aurexbiotech@gmail.com'
    const emailSubject = `New AUREX Website Enquiry — ${cleanSubject}`

    const isSimulation = process.env.CONTACT_SIMULATE_DELIVERY === 'true'
    const simulateFailEmail = process.env.CONTACT_SIMULATE_FAIL_EMAIL === 'true'
    const simulateFailWhatsApp = process.env.CONTACT_SIMULATE_FAIL_WHATSAPP === 'true'
    const requireLiveCreds = process.env.REQUIRE_LIVE_CREDENTIALS === 'true'

    // ------------------------------------------------------------------------
    // 5. Channel 1: Automatic Server-Side Email Delivery
    // ------------------------------------------------------------------------
    let emailResult: ChannelResult = { success: false }

    if (isSimulation) {
      if (simulateFailEmail) {
        emailResult = { success: false, error: 'Simulated Email Failure' }
      } else {
        emailResult = { success: true }
      }
    } else {
      const resendApiKey = process.env.RESEND_API_KEY
      if (resendApiKey) {
        // Resend API
        try {
          const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${resendApiKey}`
            },
            signal: AbortSignal.timeout(8000),
            body: JSON.stringify({
              from: process.env.EMAIL_FROM || 'AUREX Contact <onboarding@resend.dev>',
              to: [destinationEmail],
              reply_to: cleanEmail,
              subject: emailSubject,
              text: `New AUREX Website Enquiry\n\nFull Name: ${cleanName}\nEmail: ${cleanEmail}\nCompany: ${cleanCompany}\nPhone: ${cleanPhone}\nArea of Interest: ${cleanInterest}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\nSubmitted on: ${submissionTime} IST`,
              html: `
                <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
                  <div style="background:#133C99;color:#fff;padding:24px;">
                    <h1 style="margin:0;font-size:20px;">New AUREX Website Enquiry</h1>
                    <p style="margin:6px 0 0 0;font-size:13px;color:#E0E7FF;">Submitted via Website Contact Form</p>
                  </div>
                  <div style="padding:24px;color:#111827;font-size:14px;line-height:1.6;">
                    <p><strong>Full Name:</strong> ${cleanName}</p>
                    <p><strong>Email Address:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
                    <p><strong>Company:</strong> ${cleanCompany}</p>
                    <p><strong>Phone Number:</strong> ${cleanPhone}</p>
                    <p><strong>Area of Interest:</strong> ${cleanInterest}</p>
                    <p><strong>Subject:</strong> ${cleanSubject}</p>
                    <div style="margin-top:16px;padding:16px;background:#F6F8FB;border-radius:8px;border:1px solid #e2e8f0;">
                      <strong>Message:</strong><br/>
                      <pre style="white-space:pre-wrap;font-family:inherit;margin:8px 0 0 0;">${cleanMessage}</pre>
                    </div>
                  </div>
                  <div style="padding:16px 24px;background:#F6F8FB;border-top:1px solid #e2e8f0;font-size:12px;color:#64748B;text-align:center;">
                    Received on ${submissionTime} IST • AUREX Biotech Automation
                  </div>
                </div>
              `
            })
          })

          if (resendResponse.ok) {
            emailResult = { success: true }
          } else {
            const err = await resendResponse.text()
            emailResult = { success: false, error: `Resend error: ${err}` }
          }
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err)
          emailResult = { success: false, error: `Resend exception: ${msg}` }
        }
      } else if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        // SMTP / Nodemailer Provider
        try {
          const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
          const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
          const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpPort === 465,
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            },
            connectionTimeout: 8000,
            greetingTimeout: 8000,
            socketTimeout: 8000
          })

          await transporter.sendMail({
            from: process.env.EMAIL_FROM || `"AUREX Website" <${process.env.SMTP_USER}>`,
            to: destinationEmail,
            replyTo: cleanEmail,
            subject: emailSubject,
            text: `New AUREX Website Enquiry\n\nFull Name: ${cleanName}\nEmail: ${cleanEmail}\nCompany: ${cleanCompany}\nPhone: ${cleanPhone}\nArea of Interest: ${cleanInterest}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}\n\nSubmitted on: ${submissionTime} IST`,
            html: `
              <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#fff;border-radius:12px;border:1px solid #e2e8f0;overflow:hidden;">
                <div style="background:#133C99;color:#fff;padding:24px;">
                  <h1 style="margin:0;font-size:20px;">New AUREX Website Enquiry</h1>
                  <p style="margin:6px 0 0 0;font-size:13px;color:#E0E7FF;">Submitted via Website Contact Form</p>
                </div>
                <div style="padding:24px;color:#111827;font-size:14px;line-height:1.6;">
                  <p><strong>Full Name:</strong> ${cleanName}</p>
                  <p><strong>Email Address:</strong> <a href="mailto:${cleanEmail}">${cleanEmail}</a></p>
                  <p><strong>Company:</strong> ${cleanCompany}</p>
                  <p><strong>Phone Number:</strong> ${cleanPhone}</p>
                  <p><strong>Area of Interest:</strong> ${cleanInterest}</p>
                  <p><strong>Subject:</strong> ${cleanSubject}</p>
                  <div style="margin-top:16px;padding:16px;background:#F6F8FB;border-radius:8px;border:1px solid #e2e8f0;">
                    <strong>Message:</strong><br/>
                    <pre style="white-space:pre-wrap;font-family:inherit;margin:8px 0 0 0;">${cleanMessage}</pre>
                  </div>
                </div>
                <div style="padding:16px 24px;background:#F6F8FB;border-top:1px solid #e2e8f0;font-size:12px;color:#64748B;text-align:center;">
                  Received on ${submissionTime} IST • AUREX Biotech Automation
                </div>
              </div>
            `
          })

          emailResult = { success: true }
        } catch (err: unknown) {
          const msg = err instanceof Error ? err.message : String(err)
          emailResult = { success: false, error: `SMTP exception: ${msg}` }
        }
      } else if (requireLiveCreds) {
        emailResult = { success: false, error: 'Email service credentials not configured (SMTP_USER/SMTP_PASS or RESEND_API_KEY missing).' }
      } else {
        // Safe development fallback: Record enquiry details and succeed gracefully
        console.log('[AUREX Contact Form - Email Channel Ready]:', {
          destination: destinationEmail,
          senderName: cleanName,
          senderEmail: cleanEmail,
          subject: cleanSubject,
          time: submissionTime
        })
        emailResult = { success: true }
      }
    }

    // ------------------------------------------------------------------------
    // 6. Channel 2: Automatic Server-Side WhatsApp Business Platform API Delivery
    // ------------------------------------------------------------------------
    let whatsappResult: ChannelResult = { success: false }

    const rawRecipient = (process.env.WHATSAPP_RECIPIENT_NUMBER || '919543910101').replace(/\D/g, '')
    const whatsappRecipient = rawRecipient.startsWith('91') ? rawRecipient : `91${rawRecipient}`
    const phoneId = process.env.WHATSAPP_PHONE_NUMBER_ID
    const accessToken = process.env.WHATSAPP_ACCESS_TOKEN
    const templateName = process.env.WHATSAPP_TEMPLATE_NAME
    const templateLang = process.env.WHATSAPP_TEMPLATE_LANGUAGE || 'en_US'
    const gatewayUrl = process.env.WHATSAPP_GATEWAY_URL

    if (isSimulation) {
      if (simulateFailWhatsApp) {
        whatsappResult = { success: false, error: 'Simulated WhatsApp Failure' }
      } else {
        whatsappResult = { success: true }
      }
    } else if (gatewayUrl) {
      // Authorized Custom WhatsApp Gateway / Webhook
      try {
        const gwRes = await fetch(gatewayUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {})
          },
          signal: AbortSignal.timeout(8000),
          body: JSON.stringify({
            recipient: whatsappRecipient,
            name: cleanName,
            email: cleanEmail,
            company: cleanCompany,
            phone: cleanPhone,
            interest: cleanInterest,
            subject: cleanSubject,
            message: cleanMessage,
            timestamp: submissionTime
          })
        })

        if (gwRes.ok) {
          whatsappResult = { success: true }
        } else {
          const err = await gwRes.text()
          whatsappResult = { success: false, error: `Gateway error: ${err}` }
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        whatsappResult = { success: false, error: `WhatsApp Gateway exception: ${msg}` }
      }
    } else if (phoneId && accessToken) {
      // Official Meta WhatsApp Business Cloud API
      try {
        const metaApiUrl = `https://graph.facebook.com/v21.0/${phoneId}/messages`
        
        let metaPayload: Record<string, unknown>

        if (templateName) {
          // Pre-approved business template message
          metaPayload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: whatsappRecipient,
            type: 'template',
            template: {
              name: templateName,
              language: { code: templateLang },
              components: [
                {
                  type: 'body',
                  parameters: [
                    { type: 'text', text: cleanName },
                    { type: 'text', text: cleanEmail },
                    { type: 'text', text: cleanCompany },
                    { type: 'text', text: cleanPhone },
                    { type: 'text', text: cleanInterest },
                    { type: 'text', text: cleanSubject },
                    { type: 'text', text: cleanMessage.slice(0, 500) }
                  ]
                }
              ]
            }
          }
        } else {
          // Standard formatted text message
          const formattedMessage = [
            `*NEW AUREX WEBSITE ENQUIRY*`,
            `━━━━━━━━━━━━━━━━━━━━`,
            `👤 *Full Name:* ${cleanName}`,
            `📧 *Email:* ${cleanEmail}`,
            `🏢 *Company:* ${cleanCompany}`,
            `📞 *Phone:* ${cleanPhone}`,
            `🔬 *Area of Interest:* ${cleanInterest}`,
            `📋 *Subject:* ${cleanSubject}`,
            ``,
            `💬 *Message:*`,
            cleanMessage,
            `━━━━━━━━━━━━━━━━━━━━`,
            `⏰ *Time:* ${submissionTime} IST`
          ].join('\n')

          metaPayload = {
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: whatsappRecipient,
            type: 'text',
            text: {
              preview_url: false,
              body: formattedMessage
            }
          }
        }

        const metaResponse = await fetch(metaApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`
          },
          signal: AbortSignal.timeout(8000),
          body: JSON.stringify(metaPayload)
        })

        const metaData = await metaResponse.json()

        if (metaResponse.ok && Array.isArray(metaData.messages) && metaData.messages.length > 0) {
          whatsappResult = { success: true }
        } else {
          const errCode = metaData?.error?.code || metaResponse.status
          const errMsg = metaData?.error?.message || 'Meta API rejected message'
          whatsappResult = { success: false, error: `WhatsApp Cloud API error [${errCode}]: ${errMsg}` }
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : String(err)
        whatsappResult = { success: false, error: `WhatsApp Cloud API exception: ${msg}` }
      }
    } else if (requireLiveCreds) {
      whatsappResult = { 
        success: false, 
        error: 'WhatsApp Business API credentials not configured (WHATSAPP_PHONE_NUMBER_ID or WHATSAPP_ACCESS_TOKEN missing).' 
      }
    } else {
      // Safe development fallback: Record WhatsApp enquiry and succeed gracefully
      console.log('[AUREX Contact Form - WhatsApp Channel Ready]:', {
        recipient: whatsappRecipient,
        senderName: cleanName,
        subject: cleanSubject,
        time: submissionTime
      })
      whatsappResult = { success: true }
    }

    // ------------------------------------------------------------------------
    // 7. Combined Verification & Secure Response
    // ------------------------------------------------------------------------
    if (!emailResult.success || !whatsappResult.success) {
      console.error('[AUREX Contact Delivery Failure]', {
        emailChannel: emailResult.success ? 'DELIVERED' : `FAILED: ${emailResult.error}`,
        whatsappChannel: whatsappResult.success ? 'DELIVERED' : `FAILED: ${whatsappResult.error}`
      })

      if (idempotencyKey) {
        idempotencyMap.set(idempotencyKey, { success: false, timestamp: Date.now() })
      }

      return NextResponse.json(
        { 
          success: false, 
          error: "We couldn't process your enquiry right now. Please try again shortly." 
        },
        { status: 503 }
      )
    }

    // Both channels succeeded
    if (idempotencyKey) {
      idempotencyMap.set(idempotencyKey, { success: true, timestamp: Date.now() })
    }

    return NextResponse.json({ success: true })

  } catch (error: unknown) {
    const errText = error instanceof Error ? error.message : String(error)
    console.error('[AUREX Contact API Fatal Exception]:', errText)

    return NextResponse.json(
      { 
        success: false, 
        error: "We couldn't process your enquiry right now. Please try again shortly." 
      },
      { status: 500 }
    )
  }
}
