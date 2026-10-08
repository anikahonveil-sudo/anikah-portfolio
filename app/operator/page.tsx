import type { Metadata } from "next"
import { operator, site, visibleContact } from "@/content/site"

export const metadata: Metadata = {
  title: "Operator",
  description: site.secondary,
}

export default function OperatorPage() {
  const links = visibleContact()

  return (
    <article className="sheet bg-paper text-inkdeep">
      <div className="h-[3px] bg-seal" />
      <div className="px-5 py-12 sm:px-10 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <p className="font-mono text-[0.68rem] tracking-[0.28em] text-seal uppercase">
            Personnel file
          </p>
          <h1 className="mt-4 font-serif text-4xl tracking-tight sm:text-5xl">{site.name}</h1>
          <dl className="mt-10 border-t border-inkdeep/15">
            <div className="grid gap-2 border-b border-inkdeep/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-mono text-[0.65rem] tracking-[0.18em] text-seal uppercase">Field</dt>
              <dd>{site.field}</dd>
            </div>
            <div className="grid gap-2 border-b border-inkdeep/15 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <dt className="font-mono text-[0.65rem] tracking-[0.18em] text-seal uppercase">Statement</dt>
              <dd className="text-lg leading-8">{site.statement}</dd>
            </div>
          </dl>
          <div className="mt-10 max-w-xl space-y-6 text-[1.0625rem] leading-8">
            {operator.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {links.length > 0 ? (
            <section className="mt-12" aria-labelledby="correspondence">
              <h2 id="correspondence" className="font-mono text-[0.65rem] tracking-[0.22em] text-seal uppercase">
                Correspondence
              </h2>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="underline decoration-seal/40 underline-offset-4 hover:text-seal">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>
      </div>
    </article>
  )
}
