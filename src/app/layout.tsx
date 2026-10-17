import type { Metadata } from "next";
import { Inter, Aboreto } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar'
import { defaultKeywords, organizationSchema, siteName, siteUrl } from '@/lib/seo'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const aboreto = Aboreto({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aboreto",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Diagnostic and Laboratory Equipment`,
    template: `%s | ${siteName}`,
  },
  description: "AUREX supplies precision diagnostic equipment, clinical laboratory instrumentation, biochemistry analyzers, and diagnostic automation solutions.",
  keywords: defaultKeywords,
  authors: [{ name: siteName }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} | Diagnostic and Laboratory Equipment`,
    description: "Precision diagnostic equipment, laboratory instruments, biochemistry analyzers, and diagnostic solutions from AUREX.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/images/company-logo.png",
        alt: `${siteName} logo`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${aboreto.variable} font-sans antialiased bg-[#F1F5F9] text-[#111827]`}>
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
