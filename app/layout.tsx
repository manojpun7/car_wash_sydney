import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SloganBanner from "@/components/SloganBanner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cabinetGrotesk = localFont({
  src: [
    {
      path: "../public/fonts/cabinet-grotesk/CabinetGrotesk-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/cabinet-grotesk/CabinetGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/cabinet-grotesk/CabinetGrotesk-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cabinet-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "My App",
  description: "Using Cabinet Grotesk globally",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${cabinetGrotesk.variable} antialiased`}>
        <SloganBanner />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
