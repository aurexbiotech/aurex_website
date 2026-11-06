import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import { defaultKeywords, organizationSchema, siteName, siteUrl } from '@/lib/seo'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Diagnostic and Laboratory Equipment`,
    template: `%s | ${siteName}`,
  },
  description: "AUREX Biotech supplies precision diagnostic equipment, clinical laboratory instrumentation, biochemistry analyzers, and diagnostic automation solutions across India.",
  keywords: defaultKeywords,
  authors: [{ name: siteName }],
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${siteName} | Diagnostic and Laboratory Equipment`,
    description: "Precision diagnostic equipment, laboratory instruments, biochemistry analyzers, and diagnostic solutions from AUREX Biotech.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: `${siteUrl}/images/company-logo.png`,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Diagnostic and Laboratory Equipment`,
    description: "Precision diagnostic equipment, laboratory instruments, biochemistry analyzers, and diagnostic solutions from AUREX.",
    images: [`${siteUrl}/images/company-logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans antialiased bg-[#F6F8FB] text-[#111827]`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
