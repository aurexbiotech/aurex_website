import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// In-memory rate limiting map: IP -> array of timestamps
const rateLimitMap = new Map<string, number[]>()
const RATE_LIMIT_WINDOW_MS = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5

// Helper to sanitize text and prevent HTML injection in emails
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

// Simple email regex validation
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

// Simple phone regex validation (optional field, 7 to 15 digits/symbols)
function isValidPhone(phone: string): boolean {
  if (!phone) return true
  return /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{3,6}$/.test(phone.trim())
}

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown-ip'
    const now = Date.now()
    const timestamps = rateLimitMap.get(ip) || []
    const recentTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW_MS)

    if (recentTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Too many requests. Please wait a minute before submitting again.' 
        },
        { status: 429 }
      )
    }

    recentTimestamps.push(now)
    rateLimitMap.set(ip, recentTimestamps)

    // 2. Parse Request Body
    const body = await req.json()
    const name = body.name || body.fullName
    const email = body.email
    const company = body.company
    const phone = body.phone
    const interest = body.interest || body.areaOfInterest
    const subject = body.subject
    const message = body.message
    const website = body.website || body.botCheck // Honeypot field for anti-spam bots

    // 3. Honeypot check: Bots fill hidden fields
    if (website) {
      // Silently return success to mislead spambots
      return NextResponse.json({ success: true, message: 'Message received' })
    }

    // 4. Validate Required Fields
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Full Name is required and must be at least 2 characters.' },
        { status: 400 }
      )
    }

    if (!email || typeof email !== 'string' || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'A valid email address is required.' },
        { status: 400 }
      )
    }

    if (!subject || typeof subject !== 'string' || subject.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Subject is required and must be at least 3 characters.' },
        { status: 400 }
      )
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message is required and must be at least 10 characters.' },
        { status: 400 }
      )
    }

    if (!interest || typeof interest !== 'string') {
      return NextResponse.json(
        { success: false, error: 'Area of Interest is required.' },
        { status: 400 }
      )
    }

    if (phone && !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid phone number or leave the field blank.' },
        { status: 400 }
      )
    }

    // Sanitize user inputs
    const cleanName = sanitize(name)
    const cleanEmail = email.trim()
    const cleanCompany = company ? sanitize(company) : 'Not provided'
    const cleanPhone = phone ? sanitize(phone) : 'Not provided'
    const cleanInterest = sanitize(interest)
    const cleanSubject = sanitize(subject)
    const cleanMessage = sanitize(message)
    const submissionTime = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })

    const destinationEmail = 'aurexbiotech@gmail.com'
    const emailSubject = `New AUREX Website Enquiry — ${cleanSubject}`

    // 5. Check Email Provider Configuration
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com'
    const smtpPort = parseInt(process.env.SMTP_PORT || '587', 10)
    const smtpUser = process.env.SMTP_USER
    const smtpPass = process.env.SMTP_PASS
    const resendApiKey = process.env.RESEND_API_KEY

    // Plain text content
    const textBody = `
A new enquiry has been submitted through the AUREX website.

Full Name: ${cleanName}
Email Address: ${cleanEmail}
Company: ${cleanCompany}
Phone Number: ${cleanPhone}
Area of Interest: ${cleanInterest}
Subject: ${cleanSubject}

Message:
${cleanMessage}

Submitted on: ${submissionTime} IST
`.trim()

    // HTML Content
    const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F6F8FB; margin: 0; padding: 24px; color: #111827; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #BFBFBF40; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #133C99; color: #ffffff; padding: 24px; text-align: left; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 700; letter-spacing: 0.5px; }
    .header p { margin: 6px 0 0 0; font-size: 13px; color: #E0E7FF; }
    .content { padding: 24px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 700; color: #64748B; text-transform: uppercase; letter-spacing: 0.8px; margin-bottom: 4px; }
    .value { font-size: 15px; color: #111827; font-weight: 500; }
    .message-box { background: #F6F8FB; border: 1px solid #BFBFBF50; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; white-space: pre-wrap; color: #111827; }
    .footer { padding: 16px 24px; background: #F6F8FB; border-top: 1px solid #BFBFBF30; font-size: 12px; color: #64748B; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>New AUREX Website Enquiry</h1>
      <p>Submitted via Website Contact Form</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Full Name</div>
        <div class="value">${cleanName}</div>
      </div>
      <div class="field">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:${cleanEmail}" style="color: #1646AF; text-decoration: none;">${cleanEmail}</a></div>
      </div>
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${cleanCompany}</div>
      </div>
      <div class="field">
        <div class="label">Phone Number</div>
        <div class="value">${cleanPhone}</div>
      </div>
      <div class="field">
        <div class="label">Area of Interest</div>
        <div class="value">${cleanInterest}</div>
      </div>
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${cleanSubject}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box">${cleanMessage}</div>
      </div>
    </div>
    <div class="footer">
      Received on ${submissionTime} IST • AUREX Biotech Automation
    </div>
  </div>
</body>
</html>
`.trim()

    // 6. Delivery via Resend if RESEND_API_KEY is configured
    if (resendApiKey) {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'AUREX Contact <onboarding@resend.dev>',
          to: [destinationEmail],
          reply_to: cleanEmail,
          subject: emailSubject,
          text: textBody,
          html: htmlBody
        })
      })

      if (!resendResponse.ok) {
        const errorData = await resendResponse.json()
        console.error('[AUREX Contact API] Resend email delivery failed:', errorData)
        return NextResponse.json(
          { 
            success: false, 
            error: 'Email delivery failed. Please use WhatsApp to send your enquiry directly.' 
          },
          { status: 500 }
        )
      }

      return NextResponse.json({
        success: true,
        emailDelivered: true,
        message: 'Your enquiry has been successfully delivered to aurexbiotech@gmail.com.'
      })
    }

    // 7. Delivery via SMTP / Nodemailer if SMTP credentials are provided
    if (smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      })

      await transporter.sendMail({
        from: process.env.EMAIL_FROM || `"AUREX Website" <${smtpUser}>`,
        to: destinationEmail,
        replyTo: cleanEmail,
        subject: emailSubject,
        text: textBody,
        html: htmlBody
      })

      return NextResponse.json({
        success: true,
        emailDelivered: true,
        message: 'Your enquiry has been successfully delivered to aurexbiotech@gmail.com.'
      })
    }

    // 8. Fallback when Email credentials are not yet configured in environment
    console.warn(
      '[AUREX Contact API] No email credentials found in environment (SMTP_USER/SMTP_PASS or RESEND_API_KEY). ' +
      'Data received successfully. To enable live delivery, set SMTP_USER and SMTP_PASS in .env.local.'
    )

    return NextResponse.json({
      success: true,
      emailDelivered: false,
      requiresEmailConfig: true,
      message: 'Enquiry received. Email delivery requires SMTP credentials (SMTP_USER and SMTP_PASS) in .env.local.'
    })

  } catch (error: unknown) {
    console.error('[AUREX Contact API Error]:', error)
    return NextResponse.json(
      { 
        success: false, 
        error: 'An unexpected server error occurred while processing your enquiry. Please use WhatsApp to connect directly.' 
      },
      { status: 500 }
    )
  }
}
