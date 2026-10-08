import Link from "next/link"
import { getNeighbors } from "@/content/site"

const roles = [
  "Chat moderation",
  "Member support",
  "Ticket handling",
  "Community management",
  "Event coordination",
  "Gaming community operations",
]

const steps = ["Observe", "Understand context", "Respond", "Resolve", "Follow through"]

const situations = [
  {
    label: "Chat",
    copy: "Keeping conversations within community rules while allowing normal interaction.",
  },
  {
    label: "Tickets",
    copy: "Handling member issues and helping people reach the correct resolution.",
  },
  {
    label: "Conflict",
    copy: "Stepping into disputes and reducing unnecessary escalation.",
  },
  {
    label: "Events",
    copy: "Helping coordinate gaming and community events while keeping participants informed.",
  },
  {
    label: "Presence",
    copy: "Staying attentive during both busy and quiet periods.",
  },
]

const eventFlow = ["Community", "Participation", "Event", "Coordination", "Experience"]

const shows = [
  "Community awareness",
  "Moderation",
  "Conflict handling",
  "Member support",
  "Event coordination",
  "Operational responsibility",
]

function SignalPanel() {
  const rows = [
    ["Case", "AP-01"],
    ["Type", "Community operations"],
    ["Scale", "~5K members"],
    ["Environment", "Live gaming community"],
    ["Focus", "Moderation / support / events"],
    ["Status", "Completed"],
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
        ~5K is the approximate size of the community, as I knew it. It is not an audited count.
      </p>
    </dl>
  )
}

export function CommunityOperationsFile() {
  const { next } = getNeighbors("community-operations")

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

          <p className="mt-10 font-mono text-sm tracking-[0.16em] text-stamp">AP-01</p>
          <p className="mt-2 font-mono text-[0.68rem] tracking-[0.22em] text-muted uppercase">Community</p>
          <h1 className="mt-5 text-balance font-serif text-4xl leading-[1.12] tracking-tight sm:text-6xl">
            Community operations
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-copy">
            5,000 members. One live digital ecosystem.
          </p>
          <p className="mt-8 font-mono text-[0.72rem] leading-6 tracking-[0.12em] text-ivory uppercase">
            5,000 members
            <span className="mt-1 block">Live gaming community</span>
          </p>
          <p className="mt-4 font-mono text-[0.68rem] tracking-[0.14em] text-muted uppercase">
            Moderation · Member support · Events
          </p>
          <p className="mt-6 font-mono text-[0.65rem] tracking-[0.2em] text-stamp uppercase">
            Open file / case record
          </p>

          <div className="mt-10 lg:hidden">
            <SignalPanel />
          </div>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">The environment</h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                A live gaming community moves constantly. Conversations overlap, members need help, disputes
                appear, events need coordination, and the atmosphere of the server can change quickly.
              </p>
              <p>
                My job was to stay present inside that environment and keep the community functional without
                turning moderation into unnecessary friction.
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
              I moderated the server, handled member issues, responded to tickets and helped coordinate
              community activity and events.
            </p>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">How I operated</h2>
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
            <div className="mt-8 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>
                I learned the existing culture and communication patterns of the community before enforcing
                them consistently. When problems appeared, I focused on the actual context rather than treating
                every disagreement the same way.
              </p>
              <p>This is where my strength in reading tone and behaviour became useful.</p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              Live community operations
            </h2>
            <div className="mt-8">
              {situations.map((situation) => (
                <div key={situation.label} className="border-t border-rule py-6">
                  <h3 className="font-mono text-[0.72rem] tracking-[0.16em] text-stamp uppercase">
                    {situation.label}
                  </h3>
                  <p className="mt-3 max-w-xl text-[1.0625rem] leading-8">{situation.copy}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              From chat to live event
            </h2>
            <p className="mt-5 max-w-xl text-[1.0625rem] leading-8">
              Community management was not limited to moderation. I also participated in organizing and hosting
              gaming and community events, including poker and storytelling or game events.
            </p>
            <ol className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-3">
              {eventFlow.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="font-mono text-[0.72rem] tracking-[0.16em] uppercase">{step}</span>
                  {index < eventFlow.length - 1 ? (
                    <span className="font-mono text-stamp" aria-hidden="true">
                      <span className="sm:hidden">↓</span>
                      <span className="hidden sm:inline">→</span>
                    </span>
                  ) : null}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              The operator&apos;s lesson
            </h2>
            <div className="mt-5 max-w-xl space-y-6 text-[1.0625rem] leading-8">
              <p>Good moderation is mostly consistency.</p>
              <p>
                The important skill isn&apos;t simply knowing when to intervene. It is knowing when a situation
                needs intervention, when someone needs support, and when a conversation can resolve itself.
              </p>
              <p>
                A healthy community needs someone who notices changes in tone before they become larger
                problems.
              </p>
            </div>
          </section>

          <section className="mt-16 border-t border-rule pt-10">
            <h2 className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
              What this case shows
            </h2>
            <ul className="mt-6 grid sm:grid-cols-2">
              {shows.map((item) => (
                <li
                  key={item}
                  className="border-t border-rule py-3 font-mono text-[0.72rem] tracking-[0.14em] uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
              I don&apos;t just moderate the conversation. I pay attention to the environment around it.
            </p>
          </section>

          {next ? (
            <p className="mt-16 border-t border-rule pt-6">
              <Link
                href={`/dossier/${next.slug}`}
                className="font-mono text-[0.68rem] tracking-[0.16em] text-stamp uppercase hover:text-ivory"
              >
                Next in index — {next.title}
              </Link>
            </p>
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
