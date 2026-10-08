import Link from "next/link"
import { getNeighbors } from "@/content/site"

const notes = [
  {
    number: "01",
    title: "The invisible hierarchy",
    category: "Communities",
    label: "Observation / community",
    text: "Online communities rarely operate as flat groups. Reputation, access, knowledge and visibility create informal hierarchies long before anyone writes them into the rules.",
  },
  {
    number: "02",
    title: "Why FOMO works even when people know it is FOMO",
    category: "Attention / consumer behaviour",
    label: "Observation / attention",
    text: "Knowing that scarcity is being used as a marketing device does not necessarily remove the pressure created by scarcity. Awareness and behaviour are not always the same thing.",
    related: [{ href: "/dossier/psychology-of-last-chance", label: "See also → AP-03" }],
  },
  {
    number: "03",
    title: "Moderation is social engineering",
    category: "Communities",
    label: "Observation / community operations",
    text: "A moderator does more than remove messages. Timing, tone and consistency can influence what a community considers normal behaviour.",
    related: [{ href: "/dossier/community-operations", label: "See also → AP-01" }],
  },
  {
    number: "04",
    title: "A bad process automated is still a bad process",
    category: "Automation",
    label: "Observation / systems",
    text: "Automation does not automatically improve a workflow. If the underlying process is unclear, automation can simply make the confusion happen faster.",
    related: [
      { href: "/dossier/the-lead-machine", label: "See also → AP-04" },
      { href: "/dossier/automation-workflow-lab", label: "See also → AP-06" },
    ],
  },
  {
    number: "05",
    title: "People do not join communities for rules",
    category: "Community / web3",
    label: "Observation / community design",
    text: "Rules establish boundaries. They rarely create belonging.\n\nPeople stay because they find value, identity, recognition, entertainment, information or other people they want to return to.",
  },
  {
    number: "06",
    title: "Attention is a resource",
    category: "Digital culture",
    label: "Observation / attention",
    text: "Every notification, hook, countdown and recommendation is competing for the same limited resource: attention. The interesting question is not only how to capture it, but what deserves to keep it.",
  },
]

const lens = ["Behaviour", "Pattern", "System", "Intervention", "Observation"]

const principles = [
  "Observe before optimising.",
  "Context matters more than isolated behaviour.",
  "Good systems reduce friction.",
  "Automation should serve the process.",
  "Community health is partly about invisible work.",
  "Attention should be treated as something valuable.",
]

const related = [
  {
    code: "AP-01",
    title: "Community operations",
    href: "/dossier/community-operations",
    note: "Moderation, member behaviour, community health",
  },
  {
    code: "AP-03",
    title: "The psychology of “last chance”",
    href: "/dossier/psychology-of-last-chance",
    note: "FOMO, scarcity, attention",
  },
  {
    code: "AP-04",
    title: "The lead machine",
    href: "/dossier/the-lead-machine",
    note: "Information systems, research and structured data",
  },
  {
    code: "AP-06",
    title: "The workflow lab",
    href: "/dossier/automation-workflow-lab",
    note: "Automation, AI-assisted systems, experimentation",
  },
]

function SignalPanel() {
  const rows = [
    ["Case", "AP-07"],
    ["Field", "Digital culture"],
    ["Notes", "Field notes"],
    ["Status", "Active"],
    ["Type", "Self-directed"],
  ]
  const subjects = ["Community", "Attention", "Systems", "Internet culture"]

  return (
    <dl>
      {rows.slice(0, 3).map(([label, value]) => (
        <div key={label} className="border-t border-rule py-3">
          <dt className="font-mono text-[0.62rem] tracking-[0.22em] text-stamp uppercase">{label}</dt>
          <dd className="mt-1 font-mono text-[0.72rem] tracking-[0.08em] text-ivory uppercase">{value}</dd>
        </div>
      ))}
      <div className="border-t border-rule py-3">
        <dt className="font-mono text-[0.62rem] tracking-[0.22em] text-stamp uppercase">Subjects</dt>
        <dd className="mt-1 font-mono text-[0.72rem] leading-6 tracking-[0.08em] text-ivory uppercase">
          {subjects.map((subject) => (
            <span key={subject} className="block">
              {subject}
            </span>
          ))}
        </dd>
      </div>
      {rows.slice(3).map(([label, value]) => (
        <div key={label} className="border-t border-rule py-3">
          <dt className="font-mono text-[0.62rem] tracking-[0.22em] text-stamp uppercase">{label}</dt>
          <dd className="mt-1 font-mono text-[0.72rem] tracking-[0.08em] text-ivory uppercase">{value}</dd>
        </div>
      ))}
      <div className="border-t border-rule pt-3 text-sm leading-6 text-copy">
        Self-directed observations. Not a client project, a publication, or a formal study.
      </div>
    </dl>
  )
}

export function DigitalCultureExperimentsFile() {
  const { previous } = getNeighbors("digital-culture-experiments")

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

          <p className="mt-10 font-mono text-sm tracking-[0.16em] text-stamp">AP-07</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">Digital culture</p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl">
            Digital culture experiments
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            Observations on communities, attention, behaviour and the systems shaping the internet.
          </p>
          <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
            Self-directed
            <span className="mt-1 block">Field notes</span>
            <span className="mt-1 block">Digital culture</span>
          </p>
          <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">Status: Active</p>
          <p className="mt-6 font-mono text-[0.65rem] tracking-[0.2em] text-stamp uppercase">Field notes / 07</p>

          <div className="mt-10 lg:hidden">
            <SignalPanel />
          </div>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              Why study the internet?
            </h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>The internet is not just a collection of platforms. It is a collection of behaviours.</p>
              <p>People form hierarchies in communities.</p>
              <p>Scarcity changes attention.</p>
              <p>Moderation changes conversation.</p>
              <p>Algorithms reward certain behaviours.</p>
              <p>Automation changes how work gets done.</p>
              <p>I like observing the systems underneath the interface.</p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">Field note index</h2>
            <p className="mt-4 max-w-xl text-sm leading-6 text-muted">
              Observations from looking. Not findings from a formal study.
            </p>
            <div className="mt-8 border-b border-rule">
              {notes.map((note) => (
                <details key={note.number} className="group border-t border-rule">
                  <summary className="cursor-pointer list-none py-7 marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-baseline justify-between gap-4">
                      <span className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp">
                        Field note {note.number}
                      </span>
                      <span className="font-mono text-[0.62rem] tracking-[0.16em] text-stamp uppercase motion-safe:transition-colors motion-safe:duration-150 group-hover:text-ivory">
                        <span className="group-open:hidden">Open note →</span>
                        <span className="hidden group-open:inline">Close note</span>
                      </span>
                    </span>
                    <h3 className="mt-3 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">{note.title}</h3>
                    <span className="mt-2 block font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                      {note.category}
                    </span>
                  </summary>
                  <div className="max-w-xl pb-8">
                    <div className="space-y-6 text-[1.0625rem] leading-8">
                      {note.text.split("\n\n").map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <p className="mt-4 font-mono text-[0.62rem] tracking-[0.16em] text-stamp uppercase">
                      {note.label}
                    </p>
                    {note.related ? (
                      <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                        {note.related.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="font-mono text-[0.65rem] tracking-[0.14em] text-muted uppercase hover:text-ivory"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </p>
                    ) : null}
                  </div>
                </details>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              How I look at digital systems
            </h2>
            <p className="mt-4 font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">
              Personal framework · Not a formal methodology
            </p>
            <ol className="mt-8">
              {lens.map((step, index) => (
                <li key={step}>
                  <p className="font-serif text-3xl leading-none tracking-tight">{step}</p>
                  {index < lens.length - 1 ? (
                    <p className="py-4 font-mono text-lg leading-none text-stamp" aria-hidden="true">
                      ↓
                    </p>
                  ) : null}
                </li>
              ))}
            </ol>
            <div className="mt-8 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>I tend to look at digital problems from the behaviour outward.</p>
              <p>What are people actually doing?</p>
              <p>What pattern keeps appearing?</p>
              <p>What system is producing it?</p>
              <p>Where can the experience be improved?</p>
              <p>What changes after the intervention?</p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              Field note principles
            </h2>
            <ol className="mt-6">
              {principles.map((principle, index) => (
                <li key={principle} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-rule py-4">
                  <span className="font-mono text-[0.68rem] tracking-[0.14em] text-stamp">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[1.0625rem] leading-7">{principle}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">Related files</h2>
            <ul className="mt-6 border-b border-rule">
              {related.map((file) => (
                <li key={file.code} className="border-t border-rule">
                  <Link href={file.href} className="group block py-5">
                    <span className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp">{file.code}</span>
                    <span className="mt-2 block font-serif text-2xl leading-snug group-hover:text-copy">{file.title}</span>
                    <span className="mt-2 block font-mono text-[0.65rem] tracking-[0.12em] text-muted uppercase motion-safe:transition-colors motion-safe:duration-150 group-hover:text-ivory">
                      → {file.note}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <p className="max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
              I am interested in what happens underneath the interface.
            </p>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-8">
              Communities, attention, automation and digital behaviour are not separate problems. They are
              different expressions of how people interact with systems.
            </p>
            <p className="mt-12 font-mono text-[0.65rem] tracking-[0.2em] text-muted uppercase">End of file</p>
            <p className="mt-4">
              <Link
                href="/"
                className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory"
              >
                Return to archive →
              </Link>
            </p>
          </section>

          {previous ? (
            <nav aria-label="Adjacent files" className="mt-16 border-t border-rule pt-6">
              <Link
                href={`/dossier/${previous.slug}`}
                className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory"
              >
                Previous — {previous.code}
              </Link>
            </nav>
          ) : null}
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
