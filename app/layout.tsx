import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cool Made & Co. | Commercial AC Rental Kolkata",
  description: "Kolkata's trusted B2B partner for large-scale commercial air conditioning rentals. Tower AC, Portable AC, and Ductable systems for trade fairs, warehouses, factories, and corporate events.",
  keywords: [
    "commercial AC rental",
    "industrial air conditioning",
    "tower AC rental",
    "portable AC rental",
    "ductable AC systems",
    "trade fair cooling",
    "warehouse cooling",
    "factory AC rental",
    "B2B AC rental India",
    "corporate event cooling",
  ],
  authors: [{ name: "Cool Made & Co." }],
  icons: {
    icon: [
      { url: "/images/favicon_io/favicon.ico", type: "image/x-icon" },
      { url: "/images/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/images/favicon_io/favicon.ico",
    apple: "/images/favicon_io/apple-touch-icon.png",
  },
  openGraph: {
    title: "Cool Made & Co. | Commercial AC Rental Services",
    description: "Large-scale commercial air conditioning rentals for trade fairs, warehouses, factories, and corporate events. B2B solutions only.",
    url: "https://coolmadeco.com",
    siteName: "Cool Made & Co.",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cool Made & Co. | Commercial AC Rental Services",
    description: "Large-scale commercial air conditioning rentals for trade fairs, warehouses, factories, and corporate events.",
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
        <link rel="icon" type="image/x-icon" href="/images/favicon_io/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon_io/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon_io/apple-touch-icon.png" />
        <link rel="manifest" href="/images/favicon_io/site.webmanifest" />
        <link rel="canonical" href="https://coolmadeco.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
