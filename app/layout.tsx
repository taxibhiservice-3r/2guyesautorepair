import type { Metadata } from "next"
import { Barlow_Condensed, Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { JsonLd } from "@/components/JsonLd"
import { buildLocalBusinessSchema } from "@/lib/schemas"
import { NAP, SITE_URL } from "@/lib/constants"

const barlow = Barlow_Condensed({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Auto Repair Springfield Oregon | Two Guys Automotive Repair",
    template: "%s | Two Guys Automotive Repair — Springfield, OR",
  },
  description:
    "Trusted auto repair shop and mechanic in Springfield, OR. Brakes, oil changes, transmission, diagnostics, timing belts & more. Walk-ins welcome. (541) 744-3626.",
  keywords: [
    "auto repair Springfield Oregon",
    "auto shop Springfield OR",
    "mechanic Springfield Oregon",
    "oil change near me Springfield",
    "brake repair Springfield OR",
    "transmission service Springfield",
    "auto diagnostics Eugene Oregon",
    "Two Guys Automotive Repair",
  ],
  openGraph: {
    siteName: NAP.name,
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: SITE_URL,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${inter.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <JsonLd schema={buildLocalBusinessSchema()} />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
