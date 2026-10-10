"use client"

import Link from "next/link"
import { useState } from "react"
import { LevelMark } from "@/components/pixel-bits"
import { collections, type CatalogEntry } from "@/content/site"

const filters = ["All", ...collections] as const

const featuredSlugs = [
  "community-operations",
  "live-event-operations",
  "psychology-of-last-chance",
  "the-lead-machine",
]

function levelLabel(code: string) {
  const number = code.split("-")[1]
  return number ? `Level ${number}` : code
}

function LevelCard({ entry, featured = false }: { entry: CatalogEntry; featured?: boolean }) {
  return (
    <Link
      href={`/dossier/${entry.slug}`}
      className={`level-card group flex min-h-11 min-w-0 gap-3 border-2 bg-plum p-4 motion-safe:transition-transform motion-safe:duration-150 hover:border-mint ${featured ? "border-stamp" : "border-rule"}`}
    >
      <LevelMark slug={entry.slug} className="mt-0.5 h-4 w-4 shrink-0 text-mint" />
      <span className="min-w-0">
        <span className="font-mono text-[0.68rem] tracking-[0.14em] text-mint uppercase">
          {levelLabel(entry.code)}
          <span className="ml-2 text-stamp">{entry.code}</span>
        </span>
        <span className="mt-2 block font-mono text-[0.62rem] tracking-[0.12em] text-lilac uppercase">
          {entry.collection}
        </span>
        <span className="mt-1 block text-balance font-sans text-xl leading-snug font-semibold text-cream group-hover:text-stamp sm:text-2xl">
          {entry.title}
        </span>
        <span className="mt-2 block text-pretty text-sm leading-6 text-cream">{entry.abstract}</span>
        <span className="mt-3 inline-flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.14em] text-stamp uppercase">
          {featured ? "Play" : "Open"}
        </span>
      </span>
    </Link>
  )
}

export function Catalog({ entries }: { entries: CatalogEntry[] }) {
  const [collection, setCollection] = useState<(typeof filters)[number]>("All")
  const [query, setQuery] = useState("")

  const featured = featuredSlugs.flatMap((slug) => {
    const entry = entries.find((item) => item.slug === slug)
    return entry ? [entry] : []
  })

  const needle = query.trim().toLowerCase()
  const shown = entries.filter((entry) => {
    if (collection !== "All" && entry.collection !== collection) return false
    if (!needle) return true

    return [entry.code, entry.title, entry.abstract, entry.collection, entry.signals.join(" "), entry.tags.join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(needle)
  })

  return (
    <div className="mx-auto mt-14 max-w-5xl">
      <section aria-labelledby="featured">
        <h2
          id="featured"
          tabIndex={-1}
          className="scroll-mt-6 font-mono text-[0.68rem] tracking-[0.18em] text-mint uppercase"
        >
          Unlocked files
        </h2>
        <p className="mt-3 max-w-xl text-base leading-7 text-cream">
          Four places to start. Every file below keeps its original record.
        </p>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {featured.map((entry) => (
            <li key={entry.slug} className="min-w-0">
              <LevelCard entry={entry} featured />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14" aria-labelledby="levels">
        <div className="flex flex-col gap-6 border-t-2 border-rule pt-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2
              id="levels"
              tabIndex={-1}
              className="scroll-mt-6 font-mono text-[0.68rem] tracking-[0.18em] text-stamp uppercase"
            >
              All levels
            </h2>
            <label className="mt-4 block max-w-md">
              <span className="sr-only">Query the index</span>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Query the index"
                className="min-h-11 w-full border-b-2 border-rule bg-transparent py-2 font-mono text-sm text-cream outline-none placeholder:text-lilac focus:border-stamp"
              />
            </label>
          </div>
          <p aria-live="polite" className="font-mono text-[0.68rem] tracking-[0.14em] text-lilac uppercase">
            {String(shown.length).padStart(2, "0")} / {String(entries.length).padStart(2, "0")} case files
          </p>
        </div>

        <div
          className="mt-6 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter by collection"
        >
          {filters.map((filter) => {
            const pressed = collection === filter

            return (
              <button
                key={filter}
                type="button"
                aria-pressed={pressed}
                onClick={() => setCollection(filter)}
                className={
                  pressed
                    ? "inline-flex min-h-11 items-center bg-pink px-3 py-2 font-mono text-[0.65rem] tracking-[0.12em] text-[#171522] uppercase"
                    : "inline-flex min-h-11 items-center border border-rule px-3 py-2 font-mono text-[0.65rem] tracking-[0.12em] text-cream uppercase hover:border-stamp hover:text-stamp"
                }
              >
                {filter}
              </button>
            )
          })}
        </div>

        <p className="mt-4 max-w-xl text-sm leading-6 text-cream">
          Accession numbers mark the catalog. They are not rankings.
        </p>

        {shown.length === 0 ? (
          <p className="mt-10 border-t border-rule py-10 text-lg leading-8">No file matches this query.</p>
        ) : (
          <ol className="mt-8 border-b border-rule">
            {shown.map((entry) => (
              <li key={entry.slug}>
                <LevelCard entry={entry} />
              </li>
            ))}
          </ol>
        )}
      </section>
    </div>
  )
}
