import Link from "next/link"
import { getNeighbors, site } from "@/content/site"

const examined = [
  "FOMO",
  "Scarcity",
  "Urgency",
  "Perceived loss",
  "Purchase behaviour",
]

function SignalPanel() {
  const rows = [
    ["Case", "AP-03"],
    ["Type", "Consumer research"],
    ["Sample", "42 respondents"],
    ["Subject", "Consumer behaviour"],
    ["Focus", "FOMO marketing"],
    ["Standing", "Independent research"],
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
        This was independent research, not a study commissioned by a brand. The percentages below are
        approximate and describe these 42 respondents only.
      </p>
    </dl>
  )
}

export function LastChanceResearchFile() {
  const { previous, next } = getNeighbors("psychology-of-last-chance")

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
          <p className="mt-3 font-mono text-sm tracking-[0.16em] text-stamp">AP-03</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
            Consumer research
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight lg:text-6xl">
            The psychology of “last chance”
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            An independent study of FOMO, scarcity and consumer behaviour.
          </p>
          <div className="hidden lg:block">
            <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
              42 respondents
              <span className="mt-1 block">Consumer behaviour</span>
              <span className="mt-1 block">FOMO marketing</span>
              <span className="mt-1 block">Independent research</span>
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
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">The question</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>Why does “limited time” make people want something more?</p>
              <p>
                This study examined how fear of missing out influences consumer behaviour, particularly when
                brands use scarcity, urgency and limited availability to encourage action.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">The study</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                This was an independent academic research project on FOMO marketing and its effect on
                consumers. It was not commissioned by a brand or an industry client.
              </p>
              <p>42 people responded to the survey.</p>
            </div>
            <h3 className="mt-8 font-mono text-[0.68rem] tracking-[0.18em] text-muted uppercase">
              The research explored
            </h3>
            <ul className="mt-4">
              {examined.map((item) => (
                <li
                  key={item}
                  className="border-t border-rule py-3 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              What the responses showed
            </h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                About 80 percent of respondents said they were affected by FOMO. About 45 percent considered
                FOMO marketing manipulative. Both figures are approximate, and they describe this group of 42
                people only.
              </p>
              <p>
                I also looked at public examples of the same pattern, including Zara’s drop cycles and
                Nykaa’s flash deals. Those were examples in the study, not clients.
              </p>
              <p>A sample of this size can show a split inside the group. It cannot speak for every shopper.</p>
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
