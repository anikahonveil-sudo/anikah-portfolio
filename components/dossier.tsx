import Link from "next/link"
import type { ArchiveFile } from "@/content/site"
import { getNeighbors } from "@/content/site"

export function Dossier({ file }: { file: ArchiveFile }) {
  const { previous, next } = getNeighbors(file.slug)
  const sections = [
    ["Context", file.context],
    ["My role", file.position],
    ["What I did", file.record],
    ["Process", file.method],
    ["What I learned", file.note],
    ...(file.finding.trim() ? [["Outcome", file.finding]] : []),
  ]

  return (
    <article className="sheet bg-paper text-inkdeep">
      <div className="h-[3px] bg-seal" />
      <div className="px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <Link href="/" className="font-mono text-[0.65rem] tracking-[0.22em] text-seal uppercase hover:text-inkdeep">
            Return to index
          </Link>
          <dl className="mt-10 grid gap-6 border-t border-inkdeep/15 pt-6 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[0.65rem] tracking-[0.22em] text-seal uppercase">
                Case file number
              </dt>
              <dd className="mt-2 font-mono text-sm tracking-[0.08em]">{file.code}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.65rem] tracking-[0.22em] text-seal uppercase">Category</dt>
              <dd className="mt-2 text-base">{file.collection}</dd>
            </div>
          </dl>
          <h1 className="mt-10 text-balance font-serif text-4xl leading-[1.12] tracking-tight sm:text-5xl">
            {file.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8">{file.abstract}</p>
          <ul className="mt-8 space-y-1 font-mono text-[0.72rem] tracking-[0.12em] uppercase">
            {file.signals.map((signal) => (
              <li key={signal}>{signal}</li>
            ))}
          </ul>
          <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-dusk uppercase">
            {file.tags.join(" · ")}
          </p>
          <div className="mt-14 space-y-11">
            {sections.map(([label, copy]) => (
              <section key={label}>
                <h2 className="font-mono text-[0.65rem] tracking-[0.22em] text-seal uppercase">
                  {label}
                </h2>
                <p className="mt-3 max-w-xl text-[1.0625rem] leading-8">{copy}</p>
              </section>
            ))}
          </div>
          <nav aria-label="Adjacent files" className="mt-16 grid gap-6 border-t border-inkdeep/15 pt-6 sm:grid-cols-2">
            {previous ? (
              <Link href={`/dossier/${previous.slug}`} className="hover:text-seal">
                <span className="block font-mono text-[0.62rem] tracking-[0.18em] text-dusk uppercase">
                  Previous in index
                </span>
                <span className="mt-2 block text-lg leading-snug">{previous.title}</span>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={`/dossier/${next.slug}`} className="hover:text-seal sm:text-right">
                <span className="block font-mono text-[0.62rem] tracking-[0.18em] text-dusk uppercase">
                  Next in index
                </span>
                <span className="mt-2 block text-lg leading-snug">{next.title}</span>
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </article>
  )
}
