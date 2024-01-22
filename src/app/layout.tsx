import "@/styles/globals.css";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {

};

import { Metadata } from "next"
import { Inter } from "next/font/google"
import { ClerkProvider } from "@clerk/nextjs"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Toaster } from "@/components/ui/toaster";


const font = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = siteMetaData

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={font.className}>
          <ClerkProvider
            appearance={{
              variables: { colorPrimary: "#52AAB2" },
            }}
          >
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Toaster />
              {children}
              <SpeedInsights />
              <Analytics />
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    </>
  )
}
