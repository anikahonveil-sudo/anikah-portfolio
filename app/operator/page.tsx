import type { Metadata } from "next"
import Link from "next/link"
import { GroundStrip, LevelMark, PixelBadge, PixelIcon } from "@/components/pixel-bits"
import { RetroWindow } from "@/components/retro-window"
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

  const [givenName, ...familyName] = site.name.split(" ")

  return (
    <article className="sheet bg-paper text-inkdeep">
      <div className="h-[3px] bg-stamp" />
      <div className="mx-auto max-w-5xl overflow-hidden px-4 pt-3 sm:px-8">
        <GroundStrip />
      </div>
      <header className="mx-auto max-w-5xl px-4 pt-6 sm:px-8 sm:pt-8">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="inline-flex items-center gap-2 border-2 border-pink bg-[#171522] px-2 py-1 font-mono text-[0.68rem] tracking-[0.16em] text-[#f6e8d5] uppercase">
              <PixelIcon name="star" className="pixel-twinkle h-3 w-3 text-pink" />
              Player 01
            </p>
            <h1 className="mt-4 max-w-full">
              <span className="block font-display text-[2.15rem] leading-none text-ink uppercase sm:text-6xl">
                {givenName}
              </span>
              <span className="mt-1 block font-sans text-3xl font-light text-dusk italic sm:text-5xl">
                {familyName.join(" ")}
              </span>
            </h1>
          </div>
          <PixelBadge className="mt-1" />
        </div>
        <p className="mt-4 max-w-xl font-sans text-base leading-7">{site.field}</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/"
            className="pixel-press inline-flex min-h-11 items-center border-2 border-[#171522] bg-pink px-4 font-mono text-[0.68rem] tracking-[0.14em] text-[#171522] uppercase"
          >
            Title screen
          </Link>
          <Link
            href="/#levels"
            className="pixel-press inline-flex min-h-11 items-center border-2 border-ink bg-paper px-4 font-mono text-[0.68rem] tracking-[0.14em] text-ink uppercase"
          >
            Case files
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-4 px-4 py-8 sm:px-8 sm:py-10 lg:grid-cols-2">
        <RetroWindow tone="paper" title="Player profile" id="profile" glyph="flower">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[0.62rem] leading-5 tracking-[0.12em] text-dusk uppercase">
            <li>Operator</li>
            <li>Subject: AP-01</li>
            <li>Status: Active</li>
          </ul>
          <p className="mt-4 font-sans text-lg leading-snug font-semibold">{introduction[0]}</p>
          <div className="mt-3 space-y-2 font-sans text-base leading-7">
            {introduction.slice(1).map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <dl className="mt-5 border-t border-ink/15">
            {profile.map((item) => (
              <div key={item.label} className="border-b border-ink/15 py-3">
                <dt className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">{item.label}</dt>
                <dd className="mt-1 font-sans text-base leading-7">{item.value}</dd>
              </div>
            ))}
          </dl>
        </RetroWindow>

        <RetroWindow tone="paper" title="Current quests" id="experience" glyph="flag">
          <p className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">Selected field experience</p>
          <ul className="mt-3 space-y-3">
            {experience.map((entry) => {
              const href = dossierHref(entry.slug)
              const body = (
                <>
                  <div className="flex items-center gap-2">
                    <LevelMark slug={entry.slug} className="h-4 w-4 shrink-0 text-stamp" />
                    <p className="font-mono text-[0.68rem] tracking-[0.12em]">{entry.code}</p>
                  </div>
                  <h3 className="mt-2 font-sans text-lg leading-snug font-semibold group-hover:underline">{entry.title}</h3>
                  <p className="mt-1 font-mono text-[0.62rem] tracking-[0.1em] text-dusk uppercase">{entry.role}</p>
                  <p className="mt-2 font-sans text-base leading-7">{entry.summary}</p>
                  {href ? <p className="mt-2 font-mono text-[0.62rem] tracking-[0.12em] uppercase">Open</p> : null}
                </>
              )
              const className = "quest-card group block min-w-0 border-2 border-ink/20 p-3"

              return (
                <li key={entry.code}>
                  {href ? (
                    <Link href={href} className={className}>
                      {body}
                    </Link>
                  ) : (
                    <div className={className}>{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </RetroWindow>

        <RetroWindow tone="paper" title="Skill tree" id="capabilities" glyph="nodes" className="lg:col-span-2">
          <ol className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((field) => (
              <li key={field.code} className="min-w-0 border border-ink/15 p-3">
                <p className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk">{field.code}</p>
                <h3 className="mt-1 font-display text-xl leading-tight text-ink uppercase">{field.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1 font-sans text-sm leading-6">
                  {field.skills.map((skill, index) => (
                    <li key={skill}>
                      {skill}
                      {index < field.skills.length - 1 ? <span aria-hidden="true"> ·</span> : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">Field note</p>
                <p className="mt-1 font-sans text-sm leading-6">{field.note}</p>
              </li>
            ))}
          </ol>
        </RetroWindow>

        <RetroWindow tone="paper" title="Inventory" id="toolbox" glyph="grid">
          <ul className="flex flex-wrap gap-2">
            {tools.map((tool) => (
              <li key={tool}>
                <span className="inline-block border border-ink/25 px-2 py-1 font-mono text-[0.62rem] tracking-[0.1em] uppercase">
                  {tool}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 font-sans text-base leading-7">Tools change. The ability to learn them is the useful part.</p>
        </RetroWindow>

        <RetroWindow tone="paper" title="Operating principles" id="principles" glyph="page">
          <ol className="space-y-4">
            {principles.map((principle) => (
              <li key={principle.code} className="min-w-0 border-t border-ink/15 pt-3 first:border-t-0 first:pt-0">
                <h3 className="font-sans text-base leading-7 font-semibold">
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk">{principle.code}</span>
                  <span aria-hidden="true"> — </span>
                  {principle.title}
                </h3>
                <p className="mt-1 font-sans text-base leading-7">{principle.copy}</p>
              </li>
            ))}
          </ol>
        </RetroWindow>

        <RetroWindow tone="dialog" title="File note" id="file-note" glyph="moon" className="lg:col-span-2">
          <p className="max-w-3xl font-sans text-2xl leading-snug font-semibold sm:text-3xl">
            I don&apos;t need to know everything before I start.
          </p>
          <p className="mt-4 max-w-2xl font-sans text-base leading-7">
            Give me a problem, a messy system, a community, a blank page or a process that makes everyone want to throw
            their laptop out the window.
          </p>
          <p className="mt-4 font-sans text-2xl leading-snug font-semibold">I&apos;ll figure out where to start.</p>
        </RetroWindow>

        <RetroWindow tone="paper" title="Open channel" id="open-channel" glyph="chat" className="lg:col-span-2">
          <dl className="grid gap-4 sm:grid-cols-3">
            <div className="min-w-0">
              <dt className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">Name</dt>
              <dd className="mt-1 font-sans text-lg leading-snug font-semibold">{site.name}</dd>
            </div>
            <div className="min-w-0">
              <dt className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">Location</dt>
              <dd className="mt-1 font-sans text-base leading-7">Kolkata, India</dd>
            </div>
            <div className="min-w-0">
              <dt className="font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">Email</dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${operatorEmail}`}
                  className="inline-flex min-h-11 max-w-full items-center font-sans text-base leading-7 break-all underline decoration-ink/30 underline-offset-4 hover:decoration-stamp"
                >
                  {operatorEmail}
                </a>
              </dd>
            </div>
          </dl>
          <a
            href={`mailto:${operatorEmail}`}
            className="pixel-press mt-4 inline-flex min-h-11 max-w-full items-center border-2 border-[#171522] bg-pink px-4 font-mono text-[0.68rem] tracking-[0.12em] text-[#171522] uppercase"
          >
            Email the operator
          </a>
          {links.length > 0 ? (
            <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.12em] uppercase underline decoration-ink/30 underline-offset-4 hover:decoration-stamp"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-5 font-mono text-[0.62rem] tracking-[0.12em] text-dusk uppercase">Available for</p>
          <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 font-sans text-base leading-7">
            {availableFor.map((item, index) => (
              <li key={item}>
                {item}
                {index < availableFor.length - 1 ? <span aria-hidden="true"> ·</span> : null}
              </li>
            ))}
          </ul>
          <p className="mt-4 max-w-xl font-sans text-lg leading-snug font-semibold">
            If the problem is interesting, I&apos;m probably interested.
          </p>
        </RetroWindow>
      </div>
    </article>
  )
}
