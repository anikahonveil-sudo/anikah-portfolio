import Link from "next/link"
import { getNeighbors, site } from "@/content/site"

const built = [
  {
    label: "Research",
    copy: "I looked for B2B jewellery prospects whose details were specific enough for someone else to use.",
  },
  {
    label: "Collection",
    copy: "Web scraping and Python handled the repetitive gathering of company and contact information from scattered pages.",
  },
  {
    label: "Records",
    copy: "AI assisted where it helped turn those details into a consistent lead record.",
  },
  {
    label: "Judgment",
    copy: "I still decided whether a record was specific enough to keep. The workflow was not fully autonomous.",
  },
]

function SignalPanel() {
  const rows = [
    ["Case", "AP-04"],
    ["Type", "Lead intelligence"],
    ["Market", "B2B"],
    ["Sector", "Jewellery"],
    ["Stack", "Python"],
    ["Method", "Web scraping"],
    ["Assist", "AI-assisted automation"],
    ["Status", "Completed"],
  ]

  return (
    <dl>
      {rows.map(([label, value]) => (
        <div key={label} className="border-t border-rule py-2.5 lg:py-3">
          <dt className="font-mono text-[0.62rem] tracking-[0.22em] text-stamp uppercase">{label}</dt>
          <dd className="mt-1 font-mono text-[0.72rem] tracking-[0.08em] text-ivory uppercase">{value}</dd>
        </div>
      ))}
      <p className="border-t border-rule pt-3 text-sm leading-6 text-copy">
        This file records a structured workflow. It does not state a lead count, a conversion, or revenue.
      </p>
    </dl>
  )
}

export function LeadMachineFile() {
  const { previous, next } = getNeighbors("the-lead-machine")

  return (
    <article className="case-file">
      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_14.5rem] lg:items-start lg:gap-14 lg:px-10">
        <div className="mx-auto w-full max-w-2xl lg:mx-0">
          <Link
            href="/"
            className="font-mono text-[0.65rem] tracking-[0.22em] text-stamp uppercase hover:text-ivory"
          >
            Return to index
          </Link>

          <p className="mt-10 font-mono text-[0.62rem] tracking-[0.22em] text-muted uppercase">{site.name}</p>
          <p className="mt-3 font-mono text-sm tracking-[0.16em] text-stamp">AP-04</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
            Lead intelligence
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight lg:text-6xl">
            The lead machine
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            Turning messy web information into structured B2B prospect data.
          </p>
          <div className="hidden lg:block">
            <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
              B2B
              <span className="mt-1 block">Jewellery</span>
              <span className="mt-1 block">Python</span>
              <span className="mt-1 block">Web scraping</span>
              <span className="mt-1 block">AI-assisted automation</span>
            </p>
            <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              Status: Completed
            </p>
            <p className="mt-6 font-mono text-[0.65rem] tracking-[0.2em] text-stamp uppercase">
              Open file / case record
            </p>
          </div>

          <div className="mt-10 lg:hidden">
            <SignalPanel />
          </div>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">The input</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                Finding useful B2B prospects manually is repetitive. Information is scattered across websites,
                directories and pages, while the useful details often need to be extracted and organized
                before they can actually be used.
              </p>
              <p>
                The goal was to turn that messy research process into a more structured lead-generation
                workflow.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">What I built</h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-8">
              I researched B2B jewellery prospects and built structured lead databases from that research.
              Scraping and Python carried the repetitive collection. AI helped shape a record. Neither one
              decided which lead was real.
            </p>
            <ul className="mt-8">
              {built.map((item) => (
                <li key={item.label} className="border-t border-rule py-4">
                  <p className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp uppercase">{item.label}</p>
                  <p className="mt-2 max-w-xl text-[1.0625rem] leading-8">{item.copy}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">The record</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                The output was structured company and contact information: a consistent row someone else
                could use. This file does not state how many leads that produced, or what they converted
                into.
              </p>
              <p>
                Python and AI sped up collection. They did not replace the decision to keep a record.
              </p>
            </div>
          </section>

          <nav aria-label="Adjacent files" className="mt-16 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
            {previous ? (
              <Link
                href={`/dossier/${previous.slug}`}
                className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory"
              >
                Previous — {previous.code}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/dossier/${next.slug}`}
                className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory sm:text-right"
              >
                Next — {next.code}
              </Link>
            ) : null}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-8">
            <SignalPanel />
          </div>
        </aside>
      </div>
    </article>
  )
}
