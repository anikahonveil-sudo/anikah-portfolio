/**
 * Archive copy. Edit this file to change the words on the site.
 *
 * Correspondence — add real links only. Leave the array empty until you have them.
 * Empty links are not shown.
 *
 *   { label: "Email", href: "mailto:you@domain.com" },
 *   { label: "LinkedIn", href: "https://www.linkedin.com/in/your-name" },
 *
 * Files — copy an object and change `slug` and `code`.
 * Leave `finding` as "" when there is no real result. Blank findings are not shown.
 * Do not add clients, metrics, quotes, or outcomes you cannot verify.
 * Accession codes (AP-01) are catalog marks, not rankings or scores.
 */

export type ContactLink = {
  label: string
  href: string
}

export type Collection =
  | "Community"
  | "Event operations"
  | "Consumer research"
  | "Lead intelligence"
  | "Social / creative"
  | "Automation"
  | "Experiment"

export type ArchiveFile = {
  slug: string
  code: string
  title: string
  abstract: string
  signals: string[]
  tags: string[]
  collection: Collection
  context: string
  position: string
  record: string
  method: string
  finding: string
  note: string
}

export type CatalogEntry = Pick<
  ArchiveFile,
  "slug" | "code" | "title" | "abstract" | "signals" | "tags" | "collection"
>

export const collections: Collection[] = [
  "Community",
  "Event operations",
  "Consumer research",
  "Lead intelligence",
  "Social / creative",
  "Automation",
  "Experiment",
]

export const site = {
  name: "Anikah Parveen",
  archive: "The Internet Culture Archive",
  mark: "ICA",
  field: "Community / Social / Web3 / Digital culture",
  statement: "I build digital spaces people actually want to be in.",
  secondary:
    "I combine community behaviour, visual taste and hands-on execution to build and manage digital experiences.",
  status: "Open to community / social / web3 work",
}

export const investigating = [
  "Communities",
  "Attention",
  "Digital culture",
  "Automation",
]

export const contact: ContactLink[] = []

export const nav = [
  { href: "/", label: "Index" },
  { href: "/operator", label: "Operator" },
]

export const operator = [
  "A digital room has a mood. People stay when the tone is kept, the next step is obvious, and the place looks like it belongs to them. I work on that layer.",
  "The files in this archive are the work. Discord moderation. Gaming events and poker tournaments, handled in the room. Social publishing for a makeup artist. Founder research, kept in large databases. A survey on fear of missing out in marketing — 42 people answered. On my own time I test n8n and other AI tools, to see which steps can become a workflow.",
  "Web3 sits in the same field for me: status, ritual, and places people return to. There is no separate web3 client file here. I only enter work I can describe plainly.",
]

export const files: ArchiveFile[] = [
  {
    slug: "community-operations",
    code: "AP-01",
    title: "Community operations",
    abstract:
      "A live gaming Discord of about 5,000 members: chat, tickets, support, and the events inside the community.",
    signals: ["About 5K members", "Live community", "Role: Moderator", "Focus: Behaviour"],
    tags: ["Moderation", "Support", "Events"],
    collection: "Community",
    context:
      "This was a gaming Discord, a live community of about 5,000 members. At that size the room needs a person in it: chat moves quickly, issues arrive as tickets, and events are part of how people stay.",
    position:
      "I was a moderator. The work covered chat moderation, ticket handling, member support, and community interaction, including the events the community ran.",
    record:
      "I moderated chat and handled tickets when a member needed a person rather than a rule. I supported members in the ordinary course of the community, and I took part in its events: gaming events, poker events, and storytelling and game events.",
    method:
      "I treated behaviour as the job. Chat, tickets, and events were the same room in different forms, so the standard had to hold in all three. I dealt with issues as they showed up instead of letting them set the tone.",
    finding: "",
    note: "In a live community, moderation, support, and events are one practice. People stay when the room is looked after, not only when something is announced.",
  },
  {
    slug: "live-event-operations",
    code: "AP-02",
    title: "Live event operations",
    abstract:
      "A paid poker event I hosted across five days, kept going until winners were decided.",
    signals: ["5 days", "Poker event", "Role: Event host / operator", "Status: Completed"],
    tags: ["Participation", "Gameplay", "Coordination"],
    collection: "Event operations",
    context:
      "This was a poker event in its own right, separate from day-to-day community moderation. It ran across five days and continued until winners were determined.",
    position:
      "I hosted and operated the event. The work was paid. I am not publishing the fee.",
    record:
      "I encouraged participation, checked that gameplay was running smoothly, coordinated participants, and handled issues as they came up. Event operations were my responsibility for the length of the event.",
    method:
      "A five-day event has to stay intelligible. I watched the gameplay, stepped in when something snagged, and kept people clear on what was happening until the event actually finished.",
    finding:
      "The event ran for five days and was completed through to winners. It was paid work.",
    note: "A long event is an operations problem. The host’s job is to keep participation possible and the game intact until it ends.",
  },
  {
    slug: "psychology-of-last-chance",
    code: "AP-03",
    title: "The psychology of “last chance”",
    abstract:
      "Independent research on FOMO in marketing. Not a study commissioned by a brand.",
    signals: ["42 respondents", "Type: Research", "Focus: Attention", "Status: Completed"],
    tags: ["FOMO", "Survey", "Independent"],
    collection: "Consumer research",
    context:
      "I wanted to look at “last chance” marketing directly: the pressure to act before something disappears. This was my own research, not work commissioned by an industry client.",
    position: "I set the question, wrote the survey, collected the responses, and read them.",
    record:
      "I asked people how fear of missing out shows up in marketing. I also looked at public examples of the pattern, including Zara’s drop cycles and Nykaa’s flash deals. Those were examples I studied, not clients.",
    method:
      "A narrow survey, then a close read. I treated the answers as evidence from this group of respondents, not as a rule for every shopper.",
    finding:
      "42 people responded. About 80 percent said they were affected by FOMO. About 45 percent considered FOMO marketing manipulative. Both figures are approximate and belong only to this survey.",
    note: "The useful split was between feeling the pressure and distrusting it. A sample of 42 can show that split. It cannot speak for a whole market.",
  },
  {
    slug: "the-lead-machine",
    code: "AP-04",
    title: "The lead machine",
    abstract:
      "B2B lead research for jewellery, using scraping, Python, and AI to build structured databases.",
    signals: ["B2B", "Stack: Python + AI", "Type: Automation"],
    tags: ["Jewellery", "Research", "Databases"],
    collection: "Lead intelligence",
    context:
      "The work was B2B lead generation in jewellery. Outreach depends on records that are specific enough for someone else to use.",
    position:
      "I researched leads and built the databases. The stack was web scraping, Python, and AI-assisted automation, with research underneath all of it.",
    record:
      "I gathered company and contact information, used scraping and Python for the repetitive collection, and used AI where it helped shape a record. The result was structured lead databases. I am not stating how many leads that produced, or what they converted into.",
    method:
      "Research first, then a consistent row. Automation carried steps that repeated. I still had to decide whether a record was specific enough to keep.",
    finding: "",
    note: "The machine is a standard for the record, not a revenue claim. Python and AI sped up collection. They did not decide which lead was real.",
  },
  {
    slug: "the-beauty-system",
    code: "AP-05",
    title: "The beauty system",
    abstract:
      "Reel concepts, scripts, and creative direction for a makeup artist’s short-form presence.",
    signals: ["Social", "Reels", "Creative direction", "Content strategy"],
    tags: ["Scripts", "Aesthetics", "Short-form"],
    collection: "Social / creative",
    context:
      "A makeup artist’s brand has to read in short-form video, and it still has to look like that artist. This was creative and social work for the brand, not a report on its growth.",
    position:
      "I worked on concepts, creative direction, and writing: reel ideas, scripts, and the visual line of the content.",
    record:
      "I developed reel concepts, wrote scripts, and used AI to push ideation further. Taste stayed with the brand. I worked from how short-form content actually moves, and from the artist’s aesthetic, rather than from a posting quota.",
    method:
      "The look of the brand came first, then the idea for the reel, then the script. Strategy meant choosing what belonged in a short video.",
    finding: "",
    note: "A reel holds when the concept, the words, and the aesthetic are one decision. I do not have follower or engagement figures for this work.",
  },
  {
    slug: "automation-workflow-lab",
    code: "AP-06",
    title: "Automation / workflow lab",
    abstract:
      "Personal experiments with n8n and AI tools. Not a client system, and not a claim about time saved.",
    signals: ["n8n", "AI tools", "Type: Personal practice"],
    tags: ["Workflows", "Tests", "Systems"],
    collection: "Automation",
    context:
      "A lot of digital work is the same step, done again. I wanted to see what could move through a workflow and what still needed a person watching it.",
    position:
      "I ran these experiments myself, to learn the tools and to see which tasks were ready to be systematized. This was not a client build.",
    record:
      "I used n8n and other AI tools to connect ordinary steps: passing information along, drafting a first version, and seeing where the chain failed. Each test stayed small enough that a break was visible.",
    method:
      "One workflow at a time. I named the input, the step I hoped to hand off, and what finished looked like. If the rule was unclear, I left that step manual.",
    finding: "",
    note: "Automation suits a task that is repetitive and already defined. It is a poor place for a judgment: who to contact, what a community needs, whether a line is right.",
  },
  {
    slug: "digital-culture-experiments",
    code: "AP-07",
    title: "Digital culture experiments",
    abstract:
      "Personal tests of formats and attention in digital culture. Not a client file, and not a published study.",
    signals: ["Personal", "Type: Experiment", "Focus: Digital culture"],
    tags: ["Formats", "Attention", "Tests"],
    collection: "Experiment",
    context:
      "Some questions about internet culture do not belong in a client brief. I keep them as small tests: a format, a prompt, a way people gather, and whether it holds attention.",
    position: "I ran these myself. They sit next to the workflow lab, and they are not a second version of it.",
    record:
      "I tried short tests around formats and attention, using the tools in front of me, including AI, to see what behaved like a real cultural pattern and what only looked like one. There is no client and no published result attached to this file.",
    method:
      "One question at a time. If I could not say what the test was for, I stopped. I did not turn a private test into a case study with numbers.",
    finding: "",
    note: "An experiment is only useful when the question is specific. Activity by itself does not become evidence.",
  },
]

export const catalogEntries: CatalogEntry[] = files.map(
  ({ slug, code, title, abstract, signals, tags, collection }) => ({
    slug,
    code,
    title,
    abstract,
    signals,
    tags,
    collection,
  }),
)

export function visibleContact() {
  return contact.filter((link) => link.label.trim() && link.href.trim())
}

export function getFile(slug: string) {
  return files.find((file) => file.slug === slug)
}

export function getNeighbors(slug: string) {
  const index = files.findIndex((file) => file.slug === slug)

  return {
    previous: index > 0 ? files[index - 1] : undefined,
    next: index >= 0 && index < files.length - 1 ? files[index + 1] : undefined,
  }
}
