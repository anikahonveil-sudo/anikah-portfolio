import Link from "next/link"
import { getNeighbors } from "@/content/site"

const shows = [
  "Curiosity",
  "System thinking",
  "Automation",
  "AI-assisted research",
  "Process design",
  "Experimentation",
]

const tools = ["Python", "AI tools", "n8n", "Cursor", "Google Sheets", "Web research", "Workflow design"]

const experiments = [
  {
    code: "001",
    title: "AI-assisted research",
    mark: "Experimental · Self-directed",
    status: "Exploring",
    steps: ["Research", "Collect", "Structure", "AI-assist", "Review"],
    lead: "Can AI reduce the repetitive parts of research without replacing human judgment?",
    copy: "AI can help organize, summarize and transform information, but the operator still has to decide what matters and whether the output is useful.",
  },
  {
    code: "002",
    title: "Lead research automation",
    mark: "Extension of AP-04",
    status: "Experimental",
    steps: ["Source", "Extract", "Process", "Qualify", "Database"],
    lead: "How much of a repetitive research process can be systemized?",
    copy: "This experiment extends the lead-generation work in AP-04. It asks where collection can be repeated by a workflow, and where a person still has to qualify the record. It is not a second account of that case.",
    href: "/dossier/the-lead-machine",
    hrefLabel: "Open AP-04",
  },
  {
    code: "003",
    title: "Community workflow",
    mark: "Concept · Experiment",
    status: "Concept",
    steps: ["Member", "Question / issue", "Ticket", "Response", "Resolution", "Follow-up"],
    lead: "How could a support path be structured without taking the person out of moderation?",
    copy: "This is an exploration of how repetitive community-support processes could be structured without removing the human element from moderation. It is not deployed in the community of about 5,000 members.",
  },
  {
    code: "004",
    title: "Content ideation",
    mark: "Experimental · Related to AP-05",
    status: "Exploring",
    steps: ["Observe", "Idea", "Hook", "Script", "Visual", "Publish", "Learn"],
    lead: "Where can AI vary an idea, and where does taste still decide?",
    copy: "This explores how AI can assist with generating variations and organizing ideas while human taste remains responsible for the final creative direction. It is a lab question beside the content system in AP-05, not that file repeated.",
    href: "/dossier/the-beauty-system",
    hrefLabel: "Open AP-05",
  },
]

const loop = ["Hypothesis", "Build", "Test", "Observe", "Iterate"]

function Diagram({ steps, prominent = false }: { steps: string[]; prominent?: boolean }) {
  return (
    <ol className={prominent ? "mt-8" : "mt-4 flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-2 sm:gap-y-2"}>
      {steps.map((step, index) => (
        <li key={step} className={prominent ? undefined : "flex flex-col items-start sm:flex-row sm:items-center sm:gap-2"}>
          <span
            className={
              prominent
                ? "font-serif text-3xl leading-none tracking-tight sm:text-4xl"
                : "inline-block border border-rule px-2 py-1 font-mono text-[0.65rem] tracking-[0.14em] uppercase motion-safe:transition-colors motion-safe:duration-150 hover:border-stamp"
            }
          >
            {step}
          </span>
          {index < steps.length - 1 ? (
            <span
              className={
                prominent
                  ? "block py-4 font-mono text-lg leading-none text-stamp"
                  : "py-2 font-mono text-stamp sm:py-0"
              }
              aria-hidden="true"
            >
              <span className={prominent ? undefined : "sm:hidden"}>↓</span>
              {prominent ? null : <span className="hidden sm:inline">→</span>}
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

function SignalPanel() {
  const rows = [
    ["Lab", "AP-06"],
    ["Type", "Self-directed experiments"],
    ["Focus", "Automation / AI / systems"],
    ["Mode", "Human-in-the-loop"],
    ["Status", "Active"],
  ]

  return (
    <dl>
      {rows.map(([label, value]) => (
        <div key={label} className="border-t border-rule py-3">
          <dt className="font-mono text-[0.62rem] tracking-[0.22em] text-stamp uppercase">{label}</dt>
          <dd className="mt-1 font-mono text-[0.72rem] tracking-[0.08em] text-ivory uppercase">{value}</dd>
        </div>
      ))}
      <p className="border-t border-rule pt-3 text-sm leading-6 text-copy">
        Self-directed experiments. Not paid client work, and not a system claimed as deployed.
      </p>
    </dl>
  )
}

export function WorkflowLabFile() {
  const { previous, next } = getNeighbors("automation-workflow-lab")

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

          <p className="mt-10 font-mono text-sm tracking-[0.16em] text-stamp">AP-06</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
            Automation / experiment
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl">
            The workflow lab
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            Experiments in automation, AI-assisted research and digital systems.
          </p>
          <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
            Self-directed
            <span className="mt-1 block">Experimental</span>
            <span className="mt-1 block">AI / automation</span>
            <span className="mt-1 block">Workflow design</span>
          </p>
          <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">Status: Active</p>
          <p className="mt-6 font-mono text-[0.65rem] tracking-[0.2em] text-stamp uppercase">
            Open file / laboratory record
          </p>

          <div className="mt-10 lg:hidden">
            <SignalPanel />
          </div>

          <section className="mt-14 border-t border-rule pt-8">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">Why the lab exists</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>I like figuring out how repetitive digital work can be turned into a system.</p>
              <p>
                The lab is where I experiment with AI tools, automation platforms and workflow design to
                understand what can be made faster, cleaner or more repeatable.
              </p>
              <p>These are self-directed experiments, not claims of client work.</p>
            </div>
          </section>

          <div className="mt-14 border-t border-rule">
            {experiments.map((experiment) => (
              <section key={experiment.code} className="border-b border-rule py-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                  <p className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp">
                    Experiment {experiment.code}
                  </p>
                  <p className="font-mono text-[0.62rem] tracking-[0.16em] text-muted uppercase">
                    {experiment.status}
                  </p>
                </div>
                <h2 className="mt-3 font-serif text-2xl leading-snug sm:text-3xl">{experiment.title}</h2>
                <p className="mt-2 font-mono text-[0.62rem] tracking-[0.16em] text-ivory uppercase">
                  {experiment.mark}
                </p>
                {experiment.code === "001" ? (
                  <p className="mt-4 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase">Question</p>
                ) : null}
                <p className="mt-3 max-w-xl text-[1.0625rem] leading-8">{experiment.lead}</p>
                <p className="mt-5 font-mono text-[0.62rem] tracking-[0.18em] text-muted uppercase">Process</p>
                <Diagram steps={experiment.steps} />
                <p className="mt-4 max-w-xl text-[1.0625rem] leading-8">{experiment.copy}</p>
                {experiment.href ? (
                  <p className="mt-4">
                    <Link
                      href={experiment.href}
                      className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory"
                    >
                      {experiment.hrefLabel}
                    </Link>
                  </p>
                ) : null}
              </section>
            ))}
          </div>

          <section className="mt-14 border-t border-rule pt-8">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              The experiment loop
            </h2>
            <Diagram steps={loop} prominent />
            <p className="mt-8 max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
              An experiment does not need to succeed to be useful. It needs to teach you something.
            </p>
          </section>

          <section className="mt-14 border-t border-rule pt-8">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">Human in the loop</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                I am interested in automation because it removes repetitive work, not because automation is
                inherently impressive.
              </p>
              <p>The useful question is:</p>
            </div>
            <p className="mt-6 max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
              What should the machine do, and what should the human still decide?
            </p>
          </section>

          <section className="mt-14 border-t border-rule pt-8">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">Current toolbox</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <li key={tool}>
                  <span className="inline-block border border-rule px-2 py-1 font-mono text-[0.65rem] tracking-[0.14em] uppercase motion-safe:transition-colors motion-safe:duration-150 hover:border-stamp hover:text-ivory">
                    {tool}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-14 border-t border-rule pt-8">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              What this case shows
            </h2>
            <ul className="mt-5 grid sm:grid-cols-2">
              {shows.map((item) => (
                <li
                  key={item}
                  className="border-t border-rule py-3 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
              I like understanding a process before I automate it.
            </p>
            <p className="mt-8">
              <Link
                href="/"
                className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory"
              >
                [ Return to archive ]
              </Link>
            </p>
          </section>

          <nav aria-label="Adjacent files" className="mt-14 grid gap-6 border-t border-rule pt-6 sm:grid-cols-2">
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
