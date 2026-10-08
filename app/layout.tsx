import type { Metadata } from "next"
import { IBM_Plex_Mono, IBM_Plex_Sans, Instrument_Serif } from "next/font/google"
import { Frame } from "@/components/frame"
import { site } from "@/content/site"
import "./globals.css"

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-instrument",
})

const plexSans = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-sans",
})

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex-mono",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.archive}`,
    template: `%s — ${site.archive}`,
  },
  description: site.statement,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${instrument.variable} ${plexSans.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full bg-ink font-sans text-ivory antialiased">
        <Frame>{children}</Frame>
      </body>
    </html>
  )
}
