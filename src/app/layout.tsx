import type { Metadata } from "next";
import Script from 'next/script'; // Script'i import ediyoruz
import localFont from "next/font/local";

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ScriptLoader from '../components/ScriptLoader';
import "./globals.css";

// Font tanımlamaları
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Quirky - Modern Web Çözümleri",
  description: "Modern ve profesyonel web çözümleri",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" data-wf-page="66f30c8d2ac082d2aee64be3" data-wf-site="66f30c8d2ac082d2aee64be2">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
      <Navbar />

        {/* Ana içerik */}
        <main>{children}</main>

        <Footer />

        <ScriptLoader />
      </body>
    </html>
  );
}