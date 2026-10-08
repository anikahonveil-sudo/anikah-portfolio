"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { collections, type CatalogEntry } from "@/content/site"

const filters = ["All", ...collections] as const

export function Catalog({ entries }: { entries: CatalogEntry[] }) {
  const [collection, setCollection] = useState<(typeof filters)[number]>("All")
  const [query, setQuery] = useState("")

  const shown = useMemo(() => {
    const needle = query.trim().toLowerCase()

    return entries.filter((entry) => {
      if (collection !== "All" && entry.collection !== collection) return false
      if (!needle) return true

      return [
        entry.code,
        entry.title,
        entry.abstract,
        entry.collection,
        entry.signals.join(" "),
        entry.tags.join(" "),
      ]
        .join(" ")
        .toLowerCase()
        .includes(needle)
    })
  }, [collection, entries, query])

  return (
    <section className="mt-12" aria-labelledby="catalog-heading">
      <div className="flex flex-col gap-6 border-t border-rule pt-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 id="catalog-heading" className="font-mono text-[0.68rem] tracking-[0.28em] text-stamp uppercase">
            Catalog
          </h2>
          <label className="mt-4 block max-w-md">
            <span className="sr-only">Query the index</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Query the index"
              className="w-full border-b border-rule bg-transparent py-2 font-mono text-sm text-ivory outline-none placeholder:text-muted focus:border-stamp"
            />
          </label>
        </div>
        <p aria-live="polite" className="font-mono text-[0.68rem] tracking-[0.18em] text-muted uppercase">
          {String(shown.length).padStart(2, "0")} / {String(entries.length).padStart(2, "0")} case files
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by collection">
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
                  ? "bg-stamp px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.16em] text-ink uppercase"
                  : "border border-rule px-3 py-1.5 font-mono text-[0.65rem] tracking-[0.16em] text-ivory uppercase hover:border-stamp hover:text-stamp"
              }
            >
              {filter}
            </button>
          )
        })}
      </div>

      <p className="mt-4 max-w-xl text-sm leading-6 text-copy">
        Accession numbers mark the catalog. They are not rankings.
      </p>

      {shown.length === 0 ? (
        <p className="mt-10 border-t border-rule py-10 text-lg leading-8">
          No file matches this query.
        </p>
      ) : (
        <ol className="mt-8 border-t border-rule">
          {shown.map((entry) => (
            <li key={entry.slug} className="border-b border-rule">
              <Link href={`/dossier/${entry.slug}`} className="group block py-9 sm:py-12">
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.14em] text-stamp">{entry.code}</span>
                  <span className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp uppercase">
                    Open file →
                  </span>
                </span>
                <span className="mt-5 block font-mono text-[0.68rem] tracking-[0.2em] text-muted uppercase">
                  {entry.collection}
                </span>
                <span className="mt-3 block max-w-3xl font-serif text-3xl leading-snug group-hover:text-paper sm:text-4xl">
                  {entry.title}
                </span>
                <span className="mt-5 block space-y-1 font-mono text-[0.72rem] tracking-[0.12em] text-ivory uppercase">
                  {entry.signals.map((signal) => (
                    <span key={signal} className="block">
                      {signal}
                    </span>
                  ))}
                </span>
                <span className="mt-4 block font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
                  {entry.tags.join(" · ")}
                </span>
                <span className="mt-4 block max-w-xl text-base leading-7 text-copy">{entry.abstract}</span>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </section>
  )
}
