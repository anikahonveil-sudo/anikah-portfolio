import type { Metadata } from "next"
import { IBM_Plex_Mono, Nunito, Pixelify_Sans } from "next/font/google"
import { Frame } from "@/components/frame"
import { site } from "@/content/site"
import "./globals.css"

const pixel = Pixelify_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
})

const nunito = Nunito({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
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

const themeBoot = `(function(){try{var k="anikah-theme";var s=localStorage.getItem(k);var t=s==="day"||s==="night"?s:window.matchMedia("(prefers-color-scheme: light)").matches?"day":"night";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","night")}})();`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-theme="night" className={`${pixel.variable} ${nunito.variable} ${plexMono.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body className="min-h-full bg-plum font-sans text-cream antialiased">
        <Frame>{children}</Frame>
      </body>
    </html>
  )
}
