import type { Metadata } from "next"
import Link from "next/link"
import { files, site, visibleContact } from "@/content/site"

export const metadata: Metadata = {
  title: "Operator",
  description:
    "I combine community behaviour, visual taste and hands-on execution to build and manage digital experiences.",
}

const operatorEmail = "anikahonveil@gmail.com"

const introduction = [
  "Her work sits somewhere between people and systems.",
  "She watches how communities behave.",
  "She builds around attention.",
  "She turns ideas into content.",
  "She runs events when things get chaotic.",
  "She automates the boring parts when humans shouldn't have to.",
]

const profile = [
  { label: "Primary skill", value: "Figuring things out." },
  { label: "Secondary skill", value: "Making them look good." },
  { label: "Current status", value: "Actively looking for interesting problems." },
]

const capabilities = [
  {
    code: "01",
    title: "Community",
    skills: ["Moderation", "Member support", "Ticket handling", "Event coordination", "Community interaction"],
    note: "A healthy community is partly built by the things nobody notices.",
  },
  {
    code: "02",
    title: "Social + creative",
    skills: ["Content concepts", "Hooks", "Reels", "Scripting", "Creative direction", "Visual identity"],
    note: "Good content gets attention. Good creative gives people a reason to stay.",
  },
  {
    code: "03",
    title: "Operations",
    skills: ["Live events", "Coordination", "Problem solving", "Communication", "Keeping things moving"],
    note: "When an event feels effortless, someone was paying attention.",
  },
  {
    code: "04",
    title: "Intelligence",
    skills: ["Web research", "Lead research", "Data structuring", "Python", "AI-assisted workflows"],
    note: "Messy information is only useful once someone makes sense of it.",
  },
  {
    code: "05",
    title: "Systems",
    skills: ["Automation", "n8n", "AI tools", "Cursor", "Workflow design", "Human-in-the-loop systems"],
    note: "Automate the repetition. Keep the judgment.",
  },
]

const experience = [
  {
    code: "AP-01",
    slug: "community-operations",
    title: "5K-member gaming community",
    role: "Community Operations",
    summary: "Moderation, member support, tickets, community interaction and live events.",
  },
  {
    code: "AP-02",
    slug: "live-event-operations",
    title: "5-day poker event",
    role: "Live Event Operations",
    summary: "Hosted and coordinated a live event through its final day and winner.",
  },
  {
    code: "AP-04",
    slug: "the-lead-machine",
    title: "B2B jewellery lead system",
    role: "Lead Intelligence",
    summary:
      "Web research, Python-based extraction, data structuring and AI-assisted workflow experimentation.",
  },
  {
    code: "AP-05",
    slug: "the-beauty-system",
    title: "Beauty / social creative",
    role: "Content + Creative Direction",
    summary: "Reel concepts, hooks, scripts, visual direction and AI-assisted ideation.",
  },
]

const tools = [
  "Python",
  "n8n",
  "AI tools",
  "Cursor",
  "Google Sheets",
  "Web research",
  "Workflow design",
  "Content systems",
]

const principles = [
  {
    code: "01",
    title: "Observe before optimising.",
    copy: "Understand the environment before trying to fix it.",
  },
  {
    code: "02",
    title: "People are part of the system.",
    copy: "A workflow that ignores human behaviour is usually a bad workflow.",
  },
  {
    code: "03",
    title: "Attention is expensive.",
    copy: "Don't waste it.",
  },
  {
    code: "04",
    title: "Automation should have a purpose.",
    copy: "Making something complicated with AI is not the same as making it better.",
  },
  {
    code: "05",
    title: "Taste matters.",
    copy: "Function gets something working. Taste determines whether people want to interact with it.",
  },
]

const availableFor = [
  "Community management",
  "Social media",
  "Web3",
  "Digital operations",
  "Creative projects",
]

function dossierHref(slug: string) {
  return files.some((file) => file.slug === slug) ? `/dossier/${slug}` : null
}

const socialLabels = new Set(["github", "linkedin", "instagram", "x"])

export default function OperatorPage() {
  const links = visibleContact().filter((link) => socialLabels.has(link.label.trim().toLowerCase()))

  return (
    <article className="sheet bg-paper text-inkdeep">
      <div className="h-[3px] bg-seal" />
      <div className="px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <header className="lg:grid lg:grid-cols-[minmax(0,1.45fr)_minmax(15rem,0.72fr)] lg:items-end lg:gap-16">
            <div className="min-w-0">
              <ul className="flex max-w-full flex-wrap gap-x-4 gap-y-2 font-mono text-[0.62rem] leading-5 tracking-[0.16em] text-seal uppercase sm:gap-x-5 sm:text-[0.65rem] sm:tracking-[0.22em]">
                <li>Operator</li>
                <li>Subject: AP-01</li>
                <li>Status: Active</li>
              </ul>
              <h1 className="mt-6 max-w-full text-balance font-serif text-[2.9rem] leading-[0.94] tracking-tight sm:text-6xl lg:text-7xl">
                {site.name}
              </h1>
              <p className="mt-4 max-w-xl text-pretty font-mono text-[0.64rem] leading-6 tracking-[0.12em] text-inkdeep/65 uppercase sm:text-[0.68rem] sm:tracking-[0.16em]">
                {site.field}
              </p>
              <div className="mt-10 max-w-xl">
                <p className="text-pretty font-serif text-[1.6rem] leading-snug tracking-tight sm:text-[1.85rem]">
                  {introduction[0]}
                </p>
                <div className="mt-6 space-y-2 text-[1.0625rem] leading-8">
                  {introduction.slice(1).map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </div>
            <dl className="mt-12 border-t border-inkdeep/15 lg:mt-0">
              {profile.map((item) => (
                <div key={item.label} className="border-b border-inkdeep/15 py-4 sm:py-5">
                  <dt className="font-mono text-[0.62rem] tracking-[0.16em] text-seal uppercase sm:tracking-[0.18em]">
                    {item.label}
                  </dt>
                  <dd className="mt-2 text-[1.05rem] leading-7">{item.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <section className="mt-16 sm:mt-20" aria-labelledby="capabilities">
            <h2 id="capabilities" className="font-mono text-[0.68rem] tracking-[0.22em] text-seal uppercase">
              Field capabilities
            </h2>
            <ol className="mt-6">
              {capabilities.map((field) => (
                <li
                  key={field.code}
                  className="grid gap-4 border-t border-inkdeep/15 py-8 last:border-b lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:py-10"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] tracking-[0.2em] text-seal">{field.code}</p>
                    <h3 className="mt-2 font-serif text-3xl tracking-tight sm:text-4xl">{field.title}</h3>
                  </div>
                  <div className="min-w-0">
                    <ul className="flex flex-wrap gap-x-2 gap-y-1 font-mono text-[0.72rem] leading-6 tracking-[0.06em] uppercase sm:tracking-[0.08em]">
                      {field.skills.map((skill, index) => (
                        <li key={skill}>
                          {skill}
                          {index < field.skills.length - 1 ? <span aria-hidden="true"> ·</span> : null}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 font-mono text-[0.62rem] tracking-[0.18em] text-seal uppercase">Field note</p>
                    <p className="mt-2 max-w-xl font-serif text-2xl leading-snug">{field.note}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-16 sm:mt-20" aria-labelledby="experience">
            <h2 id="experience" className="font-mono text-[0.68rem] tracking-[0.22em] text-seal uppercase">
              Selected field experience
            </h2>
            <ul className="mt-6">
              {experience.map((entry) => {
                const href = dossierHref(entry.slug)
                const body = (
                  <>
                    <p className="font-mono text-sm tracking-[0.14em] text-seal">{entry.code}</p>
                    <div className="min-w-0">
                      <h3 className="font-serif text-2xl leading-snug tracking-tight group-hover:text-seal sm:text-3xl">
                        {entry.title}
                      </h3>
                      <p className="mt-2 font-mono text-[0.65rem] tracking-[0.16em] uppercase">{entry.role}</p>
                    </div>
                    <p className="max-w-md text-[1.02rem] leading-7 lg:max-w-none">{entry.summary}</p>
                  </>
                )
                const className =
                  "group grid min-h-11 gap-3 border-t border-inkdeep/15 py-6 last:border-b motion-safe:transition-colors motion-safe:duration-150 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-x-8 sm:py-7 lg:grid-cols-[5.5rem_minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-baseline lg:gap-10"

                return (
                  <li key={entry.code}>
                    {href ? (
                      <Link href={href} className={`${className} hover:bg-inkdeep/[0.035] sm:-mx-3 sm:px-3`}>
                        {body}
                      </Link>
                    ) : (
                      <div className={className}>{body}</div>
                    )}
                  </li>
                )
              })}
            </ul>
          </section>

          <section className="mt-16 sm:mt-20" aria-labelledby="toolbox">
            <div className="border-t border-inkdeep/15 pt-8 lg:grid lg:grid-cols-[13rem_minmax(0,1fr)] lg:gap-14 lg:pt-10">
              <h2 id="toolbox" className="font-mono text-[0.68rem] tracking-[0.22em] text-seal uppercase">
                Toolbox
              </h2>
              <div className="mt-6 min-w-0 lg:mt-0">
                <ul className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <li key={tool}>
                      <span className="inline-block border border-inkdeep/20 px-2.5 py-1.5 font-mono text-[0.65rem] tracking-[0.14em] uppercase">
                        {tool}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 max-w-xl text-[1.0625rem] leading-8">
                  Tools change. The ability to learn them is the useful part.
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 sm:mt-20" aria-labelledby="principles">
            <h2 id="principles" className="font-mono text-[0.68rem] tracking-[0.22em] text-seal uppercase">
              Operating principles
            </h2>
            <ol className="mt-6">
              {principles.map((principle) => (
                <li
                  key={principle.code}
                  className="grid gap-3 border-t border-inkdeep/15 py-6 last:border-b lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-baseline lg:gap-12 lg:py-8"
                >
                  <h3 className="text-pretty font-mono text-[0.72rem] leading-6 tracking-[0.08em] uppercase sm:tracking-[0.12em]">
                    <span className="text-seal">{principle.code}</span>
                    <span aria-hidden="true"> — </span>
                    {principle.title}
                  </h3>
                  <p className="max-w-xl text-[1.0625rem] leading-8">{principle.copy}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </div>

      <section className="bg-inkdeep text-ivory" aria-labelledby="file-note">
        <div className="mx-auto max-w-5xl px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <h2 id="file-note" className="font-mono text-[0.68rem] tracking-[0.22em] text-stamp uppercase">
            File note
          </h2>
          <div className="mt-8 max-w-3xl">
            <p className="font-serif text-3xl leading-snug tracking-tight sm:text-5xl">
              I don&apos;t need to know everything before I start.
            </p>
            <p className="mt-8 max-w-2xl text-[1.0625rem] leading-8 text-copy">
              Give me a problem, a messy system, a community, a blank page or a process that makes everyone want to
              throw their laptop out the window.
            </p>
            <p className="mt-8 font-serif text-3xl leading-snug tracking-tight sm:text-4xl">
              I&apos;ll figure out where to start.
            </p>
          </div>
        </div>
      </section>

      <div className="px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <section className="mx-auto max-w-5xl" aria-labelledby="open-channel">
          <h2 id="open-channel" className="font-mono text-[0.68rem] tracking-[0.22em] text-seal uppercase">
            Open channel
          </h2>
          <dl className="mt-8 border-t border-inkdeep/15 lg:grid lg:grid-cols-3 lg:border-b">
            <div className="border-b border-inkdeep/15 py-4 lg:border-r lg:pr-8 lg:border-b-0">
              <dt className="font-mono text-[0.62rem] tracking-[0.18em] text-seal uppercase">Name</dt>
              <dd className="mt-2 font-serif text-2xl tracking-tight">{site.name}</dd>
            </div>
            <div className="border-b border-inkdeep/15 py-4 lg:border-r lg:px-8 lg:border-b-0">
              <dt className="font-mono text-[0.62rem] tracking-[0.18em] text-seal uppercase">Location</dt>
              <dd className="mt-2 font-mono text-[0.78rem] tracking-[0.08em] uppercase">Kolkata, India</dd>
            </div>
            <div className="border-b border-inkdeep/15 py-4 lg:pl-8 lg:border-b-0">
              <dt className="font-mono text-[0.62rem] tracking-[0.18em] text-seal uppercase">Email</dt>
              <dd className="mt-2 min-w-0">
                <a
                  href={`mailto:${operatorEmail}`}
                  className="inline-flex min-h-11 max-w-full items-center font-mono text-[0.72rem] tracking-[0.04em] break-words underline decoration-seal/40 underline-offset-4 hover:text-seal sm:text-[0.78rem] sm:tracking-[0.06em]"
                >
                  {operatorEmail}
                </a>
              </dd>
            </div>
          </dl>
          <a
            href={`mailto:${operatorEmail}`}
            className="mt-8 inline-flex min-h-11 max-w-full items-center border border-seal px-4 font-mono text-[0.68rem] tracking-[0.14em] text-seal uppercase hover:bg-seal hover:text-paper sm:tracking-[0.16em]"
          >
            Email the operator
          </a>
          {links.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.14em] uppercase underline decoration-seal/40 underline-offset-4 hover:text-seal"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-10 font-mono text-[0.62rem] tracking-[0.18em] text-seal uppercase">Available for</p>
          <ul className="mt-3 flex max-w-3xl flex-wrap gap-x-2 gap-y-1 font-mono text-[0.72rem] leading-6 tracking-[0.08em] uppercase sm:tracking-[0.1em]">
            {availableFor.map((item, index) => (
              <li key={item}>
                {item}
                {index < availableFor.length - 1 ? <span aria-hidden="true"> ·</span> : null}
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl font-serif text-2xl leading-snug sm:text-3xl">
            If the problem is interesting, I&apos;m probably interested.
          </p>
        </section>
      </div>
    </article>
  )
}
