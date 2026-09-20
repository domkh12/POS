import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import localFont from 'next/font/local';
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
      suppressHydrationWarning
      className={cn(kantumruyPro.className, "font-sans", geist.variable)}
    >
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <body className="min-h-full flex flex-col px-20">
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
