import Link from "next/link"
import { GroundStrip } from "@/components/pixel-bits"
import { getNeighbors, site } from "@/content/site"

const roles = [
  "Event hosting",
  "Participant coordination",
  "Live event monitoring",
  "Communication",
  "Problem handling",
  "Event flow",
]

const days = [
  {
    day: "Day 01",
    title: "Opening",
    copy: "Participants enter and the event begins.",
  },
  {
    day: "Day 02",
    title: "Continuation",
    copy: "Games continue and participants move through the event.",
  },
  {
    day: "Day 03",
    title: "Progression",
    copy: "The field narrows and the event continues.",
  },
  {
    day: "Day 04",
    title: "Final stage",
    copy: "Remaining participants compete toward the final.",
  },
  {
    day: "Day 05",
    title: "Finals",
    copy: "The event concludes and the winners are determined.",
  },
]

const duties = [
  {
    label: "Flow",
    copy: "The event needed to keep moving without unnecessary delays.",
  },
  {
    label: "Communication",
    copy: "Participants needed clear information about what was happening.",
  },
  {
    label: "Monitoring",
    copy: "I had to pay attention to whether the game and event process were running smoothly.",
  },
  {
    label: "Responsibility",
    copy: "Once the event was underway, someone had to stay present and deal with problems as they appeared.",
  },
]

const loop = ["Monitor", "Communicate", "Respond", "Adjust", "Continue"]

function SignalPanel() {
  const rows = [
    ["Case", "AP-02"],
    ["Type", "Live event operations"],
    ["Duration", "5 days"],
    ["Format", "Poker event"],
    ["Role", "Event host / operator"],
    ["Work", "Paid"],
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
        Paid means the work was paid. The amount is not part of this record.
      </p>
    </dl>
  )
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <ol className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3 sm:gap-y-3">
      {steps.map((step, index) => (
        <li key={step} className="flex items-center gap-3">
          <span className="font-mono text-[0.72rem] tracking-[0.16em] uppercase">{step}</span>
          {index < steps.length - 1 ? (
            <span className="font-mono text-stamp" aria-hidden="true">
              <span className="sm:hidden">↓</span>
              <span className="hidden sm:inline">→</span>
            </span>
          ) : null}
        </li>
      ))}
    </ol>
  )
}

export function LiveEventOperationsFile() {
  const { previous, next } = getNeighbors("live-event-operations")

  return (
    <article className="case-file">
      <div className="overflow-hidden px-5 pt-4 sm:px-8 lg:px-10">
        <GroundStrip />
      </div>
      <div className="px-5 py-12 sm:px-8 sm:py-16 lg:grid lg:grid-cols-[minmax(0,1fr)_14.5rem] lg:items-start lg:gap-14 lg:px-10">
        <div className="mx-auto w-full max-w-2xl lg:mx-0">
          <Link
            href="/"
            className="font-mono text-[0.65rem] tracking-[0.22em] text-stamp uppercase hover:text-ivory"
          >
            Return to index
          </Link>

          <p className="mt-10 font-mono text-[0.62rem] tracking-[0.22em] text-muted uppercase">{site.name}</p>
          <p className="mt-3 font-mono text-sm tracking-[0.16em] text-stamp">AP-02</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">
            Event operations
          </p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight lg:text-6xl">
            Live event operations
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            Five days. One winner. A live event that had to keep moving.
          </p>
          <div className="hidden lg:block">
            <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
              5 days
              <span className="mt-1 block">Poker event</span>
              <span className="mt-1 block">Event host / operator</span>
              <span className="mt-1 block">Paid work</span>
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
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">The context</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                A live poker event is not only about the game itself. Someone has to keep participants
                informed, maintain the flow of the event, respond when something goes wrong, and make sure the
                experience continues from one stage to the next.
              </p>
              <p>
                I was responsible for helping run the event across five days, from the early stages through the
                final winner.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">My role</h2>
            <ul className="mt-6 grid sm:grid-cols-2">
              {roles.map((role) => (
                <li
                  key={role}
                  className="border-t border-rule py-3 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
                >
                  {role}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-xl text-[1.0625rem] leading-8">
              I helped host and coordinate the event, kept participants engaged, monitored the game flow,
              handled issues as they appeared, and stayed responsible for keeping the event moving until the
              winners were determined.
            </p>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              The five-day timeline
            </h2>
            <ol className="mt-8 border-l border-stamp/40">
              {days.map((item) => (
                <li key={item.day} className="border-t border-rule py-6 pl-6 first:border-t-0">
                  <p className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp uppercase">{item.day}</p>
                  <h3 className="mt-2 font-serif text-2xl leading-snug">{item.title}</h3>
                  <p className="mt-2 max-w-xl text-[1.0625rem] leading-8">{item.copy}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              What had to work
            </h2>
            <div className="mt-8">
              {duties.map((duty) => (
                <div key={duty.label} className="border-t border-rule py-6">
                  <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-stamp uppercase">
                    {duty.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-[1.0625rem] leading-8">{duty.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">Operator loop</h2>
            <Flow steps={loop} />
            <p className="mt-8 max-w-xl text-[1.0625rem] leading-8">
              Live event work is attention applied in order: watch what is happening, tell people, deal with
              the break, adjust, and continue until the event is actually finished.
            </p>
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
