import Link from "next/link"
import { getNeighbors, site } from "@/content/site"

const duties = [
  "Reel concepts",
  "Hook development",
  "Scripting",
  "Creative direction",
  "Visual direction",
  "AI-assisted ideation",
  "Content strategy",
  "Aesthetic development",
]

const stages = [
  {
    label: "Observe",
    copy: "Understand the audience, platform and existing visual language.",
  },
  {
    label: "Ideate",
    copy: "Generate concepts that fit the brand rather than chasing random trends.",
  },
  {
    label: "Hook",
    copy: "Identify the first visual or verbal moment that earns attention.",
  },
  {
    label: "Script",
    copy: "Structure the idea so the content communicates quickly.",
  },
  {
    label: "Visual direction",
    copy: "Decide how the idea should look, move and feel.",
  },
  {
    label: "Reel",
    copy: "Turn the concept into a coherent short-form piece.",
  },
  {
    label: "Distribution",
    copy: "Think about how the content fits the platform and audience.",
  },
]

function SignalPanel() {
  const rows = [
    ["Case", "AP-05"],
    ["Type", "Social / creative"],
    ["Field", "Beauty / makeup"],
    ["Format", "Short-form content"],
    ["Direction", "Creative direction"],
    ["Writing", "Scripting"],
    ["Assist", "AI-assisted ideation"],
    ["Status", "Completed / ongoing"],
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
        This file does not include a job title, follower count, or engagement figure.
      </p>
    </dl>
  )
}

export function BeautySystemFile() {
  const { previous, next } = getNeighbors("the-beauty-system")

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
          <p className="mt-3 font-mono text-sm tracking-[0.16em] text-stamp">AP-05</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
            Social / creative
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight lg:text-6xl">
            The beauty system
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            Turning a beauty brand’s ideas into content people actually want to watch.
          </p>
          <div className="hidden lg:block">
            <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
              Beauty / makeup
              <span className="mt-1 block">Short-form content</span>
              <span className="mt-1 block">Creative direction</span>
              <span className="mt-1 block">Scripting</span>
              <span className="mt-1 block">AI-assisted ideation</span>
            </p>
            <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
              Status: Completed / ongoing
            </p>
            <p className="mt-6 font-mono text-[0.65rem] tracking-[0.2em] text-stamp uppercase">
              Open file / case record
            </p>
          </div>

          <div className="mt-10 lg:hidden">
            <SignalPanel />
          </div>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              The attention problem
            </h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>Beauty content has to communicate quickly.</p>
              <p>
                The visual has to stop the scroll, the idea has to make sense almost immediately, and the
                content still needs to feel consistent with the identity of the person or brand behind it.
              </p>
              <p>
                My role was to think through the idea, structure the content and translate it into something
                visually coherent.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">What I do</h2>
            <ul className="mt-6 grid sm:grid-cols-2">
              {duties.map((duty) => (
                <li
                  key={duty}
                  className="border-t border-rule py-3 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
                >
                  {duty}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-8">
              I work from the idea outward: what is the viewer supposed to notice first, why should they keep
              watching, and how should the content feel when they reach the end?
            </p>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              The content system
            </h2>
            <ol className="mt-10 max-w-xl">
              {stages.map((stage, index) => (
                <li key={stage.label}>
                  <p className="font-mono text-[0.62rem] tracking-[0.22em] text-stamp">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl leading-none tracking-tight sm:text-4xl">
                    {stage.label}
                  </h3>
                  <p className="mt-3 text-[1.0625rem] leading-8">{stage.copy}</p>
                  {index < stages.length - 1 ? (
                    <p className="py-6 font-mono text-xl leading-none text-stamp" aria-hidden="true">
                      ↓
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
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
