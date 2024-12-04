import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "../public/styles/globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Inter as FontSans } from "next/font/google";

export const metadata: Metadata = {
  title: "Encomendas",
  description: "Site para rastreio de encomendas",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <ClerkProvider>
              {children}
              <Navbar />
            </ClerkProvider>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}