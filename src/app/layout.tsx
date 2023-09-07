import "@/styles/globals.css";
import { Inter } from 'next/font/google'
import { Metadata } from "next";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Next-Auth Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(
        "text-slate-900 antialiased bg-slate-900",
        inter.className
      )}>
      <body>{children}</body>
    </html>
  )
}
