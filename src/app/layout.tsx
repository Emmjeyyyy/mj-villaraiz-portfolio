import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mjvillaraiz.dev'),
  title: "MJ Villaraiz | Creative Developer & 3D Designer",
  description: "A showcase of creative development, 3D experiences, and modern web applications by MJ VINZ CARLOS VILLARAIZ.",
  keywords: ["MJ Villaraiz", "Creative Developer", "3D Designer", "Web Developer", "Frontend Developer", "React", "Next.js", "Portfolio"],
  openGraph: {
    title: "MJ Villaraiz | Creative Developer",
    description: "A showcase of creative development, 3D experiences, and modern web applications by MJ VINZ CARLOS VILLARAIZ.",
    url: 'https://mjvillaraiz.dev',
    siteName: 'MJ Villaraiz Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-black" style={{ background: 'black' }} suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
