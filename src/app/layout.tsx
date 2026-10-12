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
  description: "Analyze Biotech supplies diagnostic equipment, laboratory equipment, biochemistry analyzers, and laboratory diagnostic solutions.",
  keywords: defaultKeywords,
  authors: [{ name: siteName }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: `${siteName} | Diagnostic and Laboratory Equipment`,
    description: "Diagnostic equipment, laboratory equipment, biochemistry analyzers, and laboratory diagnostic solutions from Analyze Biotech.",
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
      <body className={`${inter.variable} ${aboreto.variable} font-sans antialiased`}>
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
