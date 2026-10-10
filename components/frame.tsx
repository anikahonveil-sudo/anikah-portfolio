import Link from "next/link"
import { Jukebox } from "@/components/jukebox"
import { PixelCat } from "@/components/pixel-cat"
import { PixelIcon, type PixelGlyph } from "@/components/pixel-bits"
import { ThemeToggle } from "@/components/theme-toggle"
import { nav, site, visibleContact } from "@/content/site"

const navIcons: Record<string, PixelGlyph> = {
  "/": "star",
  "/operator": "chat",
}

export function Frame({ children }: { children: React.ReactNode }) {
  const links = visibleContact()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b-2 border-stamp">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3 sm:px-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center font-display text-lg leading-none text-stamp sm:text-xl"
          >
            {site.archive}
          </Link>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <nav aria-label="Archive" className="flex flex-wrap items-center gap-x-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.14em] uppercase hover:text-stamp"
                >
                  {navIcons[item.href] ? <PixelIcon name={navIcons[item.href]} className="h-3.5 w-3.5 text-stamp" /> : null}
                  {item.label}
                </Link>
              ))}
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.14em] uppercase hover:text-stamp"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Jukebox />
            <ThemeToggle />
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <PixelCat />
    </div>
  )
}
