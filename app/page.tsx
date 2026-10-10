import Link from "next/link"
import { Catalog } from "@/components/catalog"
import { GameStart } from "@/components/game-start"
import { GroundStrip, PixelBits } from "@/components/pixel-bits"
import { RetroWindow } from "@/components/retro-window"
import { catalogEntries, investigating, site, visibleContact } from "@/content/site"

const inventory = [
  "Python",
  "n8n",
  "AI tools",
  "Cursor",
  "Google Sheets",
  "Web research",
  "Workflow design",
  "Content systems",
]

export default function IndexPage() {
  const links = visibleContact()
  const [givenName, ...familyName] = site.name.split(" ")

  return (
    <div className="px-4 pt-8 pb-20 sm:px-8 sm:pt-12">
      <section className="relative mx-auto max-w-5xl overflow-hidden border-2 border-stamp px-4 pt-8 pb-4 sm:px-8 sm:pt-12">
        <PixelBits />
        <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)] lg:items-start lg:gap-10">
          <div className="min-w-0 max-w-xl">
            <p className="font-mono text-[0.68rem] tracking-[0.18em] text-mint uppercase">Player 01</p>
            <h1 className="mt-4">
              <span className="block font-display text-[2.35rem] leading-none text-stamp uppercase sm:text-6xl lg:text-7xl">
                {givenName}
              </span>
              <span className="mt-2 block font-sans text-3xl font-light tracking-wide text-lilac italic sm:text-5xl">
                {familyName.join(" ")}
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-cream sm:text-xl">
              {site.statement}
              <span aria-hidden="true" className="pixel-blink ml-1 inline-block h-4 w-2 translate-y-0.5 bg-stamp align-middle" />
            </p>
            <GameStart />
            <p className="mt-8 text-base leading-7 text-cream">{site.secondary}</p>
            <p className="mt-4 font-mono text-[0.68rem] leading-6 tracking-[0.12em] text-lilac uppercase">{site.field}</p>
            {links.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.68rem] tracking-[0.12em] uppercase">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="inline-flex min-h-11 items-center text-stamp hover:text-cream">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="grid min-w-0 gap-3">
            <RetroWindow title="Player profile" glyph="chat">
              <p className="font-sans text-lg leading-snug font-semibold text-cream">{site.name}</p>
              <p className="mt-2 font-mono text-[0.68rem] leading-5 tracking-[0.08em] text-lilac uppercase">{site.field}</p>
              <p className="mt-3 text-sm leading-6 text-cream">{site.status}</p>
              <Link
                href="/operator"
                className="mt-2 inline-flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.12em] text-stamp uppercase hover:text-cream"
              >
                Open profile
              </Link>
            </RetroWindow>
            <RetroWindow title="Current quests" glyph="flag">
              <ul className="space-y-1.5 font-mono text-[0.72rem] tracking-[0.08em] text-cream uppercase">
                {investigating.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RetroWindow>
            <RetroWindow title="Inventory" glyph="grid">
              <p className="font-mono text-[0.68rem] tracking-[0.1em] text-mint uppercase">
                {String(catalogEntries.length).padStart(2, "0")} case files
              </p>
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {inventory.map((item) => (
                  <li
                    key={item}
                    className="border border-rule px-1.5 py-1 font-mono text-[0.62rem] tracking-[0.08em] text-cream uppercase"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RetroWindow>
          </div>
        </div>
        <GroundStrip className="mt-8" />
      </section>

      <Catalog entries={catalogEntries} />
    </div>
  )
}
