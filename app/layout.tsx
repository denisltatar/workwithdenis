import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL('https://workwithdenis.com'),
  title: "Work With Denis - Custom Web Development",
  description: "Professional web development services. Custom websites, e-commerce solutions, and web applications that help your business grow online.",
  icons: {
    icon: '/green bowtie.png',
    apple: '/green bowtie.png',
  },
  openGraph: {
    title: "Work With Denis - Custom Web Development",
    description: "Professional web development services. Custom websites, e-commerce solutions, and web applications that help your business grow online.",
    images: ['/workwithdenis-logo.png'],
    url: 'https://workwithdenis.com',
    siteName: 'Work With Denis',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Work With Denis - Custom Web Development",
    description: "Professional web development services. Custom websites, e-commerce solutions, and web applications that help your business grow online.",
    images: ['/workwithdenis-logo.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
