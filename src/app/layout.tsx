import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { MobileNavBar } from "@/components/MobileNavBar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlas CORP",
  description: "Software Development Agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <>
          <Navigation />
          <MobileNavBar />
        </>
        <main className="bg-white flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
