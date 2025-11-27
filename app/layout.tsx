import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OrganizationSchema, SoftwareApplicationSchema } from "@/components/seo/SchemaMarkup";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Appello - Purpose-Built Software for ICI Trade Contractors",
  description: "Run your mechanical, HVAC, or electrical business with software that actually understands ICI work. Replace spreadsheets, clipboards, and 5+ disconnected apps with one integrated platform built specifically for trade contractors.",
  openGraph: {
    title: "Appello - Purpose-Built Software for ICI Trade Contractors",
    description: "More building, less paperwork. Software that actually understands ICI work.",
    type: "website",
    url: "https://www.useappello.com",
    siteName: "Appello",
  },
  twitter: {
    card: "summary_large_image",
    title: "Appello - Purpose-Built Software for ICI Trade Contractors",
    description: "More building, less paperwork. Software that actually understands ICI work.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <OrganizationSchema />
        <SoftwareApplicationSchema />
      </head>
      <body className={inter.className}>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        {children}
      </body>
    </html>
  );
}

