import type { Metadata } from "next";
import { Gabarito} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import LenisScroll from "./LenisScroll";

const gabaritoSerif = Gabarito({
  variable: '--gabarito-font', 
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "100xCanvas",
  description: "canvas by 100xdevs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gabaritoSerif.className} antialiased`}
      >
        <Navbar />
        {children}
        <LenisScroll />
        <Footer />
      </body>
    </html>
  );
}
