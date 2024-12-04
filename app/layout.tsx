import type { Metadata } from "next";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "../public/styles/globals.css";

export const metadata: Metadata = {
  title: "Encomendas",
  description: "Site para rastreio de encomendas",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}