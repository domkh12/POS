import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import localFont from 'next/font/local';

const kantumruyPro = localFont({
  src: [
    {
      path: "./fonts/KantumruyPro-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/KantumruyPro-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/KantumruyPro-Bold.ttf",
      weight: "700",
      style: "normal",
    }
  ]
});

export const metadata: Metadata = {
  title: "SwiftPOS",
  description: "A modern point-of-sale system for small businesses free to use and customize.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={kantumruyPro.className}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
