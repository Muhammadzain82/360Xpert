import { SpeedInsights } from "@vercel/speed-insights/next"

import type { Metadata } from "next";

import { Inter } from "next/font/google";


import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <SpeedInsights/>
        
        {/* <Footer/> */}
        </body>
    </html>
  );
}
