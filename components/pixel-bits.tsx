function Star({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className}>
      <path fill="currentColor" d="M5 0h2v5h5v2H7v5H5V7H0V5h5z" />
    </svg>
  )
}

function Moon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M9 1.5a6.5 6.5 0 1 0 5.2 10.4A5.5 5.5 0 0 1 9 1.5z" />
    </svg>
  )
}

function Flower({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <circle cx="8" cy="3.2" r="2.1" fill="currentColor" />
      <circle cx="12.6" cy="8" r="2.1" fill="currentColor" />
      <circle cx="8" cy="12.8" r="2.1" fill="currentColor" />
      <circle cx="3.4" cy="8" r="2.1" fill="currentColor" />
      <circle cx="8" cy="8" r="1.6" fill="var(--surface)" />
    </svg>
  )
}

function Butterfly({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M7 8 2 3v6zm2 0 5-5v6zM7 8 3 13h4zm2 0h4l-4 5z" />
    </svg>
  )
}

function Mushroom({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M4 6h8v2H4zM2 8h12v2H2z" />
      <path fill="var(--surface)" d="M5 7h2v1H5zm4 0h2v1H9z" />
      <path fill="currentColor" d="M7 10h2v4H7z" />
    </svg>
  )
}

function Grass({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M0 10h16v6H0zm2 0V6h2v4zm5 0V4h2v6zm5 0V7h2v3z" />
    </svg>
  )
}

function Chat({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M1 2h14v9H8l-4 3v-3H1z" />
    </svg>
  )
}

function Flag({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M3 1h2v14H3zm2 1h8v6H5z" />
    </svg>
  )
}

function Page({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M3 1h7l3 3v11H3zm7 0v3h3M5 8h6v1H5zm0 3h6v1H5z" />
    </svg>
  )
}

function Grid({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M1 1h6v6H1zm8 0h6v6H9zM1 9h6v6H1zm8 0h6v6H9z" />
    </svg>
  )
}

function Nodes({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className}>
      <path fill="currentColor" d="M1 6h4v4H1zm10 0h4v4h-4zM6 7h4v2H6zM7 1h2v4H7zm0 10h2v4H7z" />
    </svg>
  )
}

const marks: Record<string, typeof Star> = {
  "community-operations": Chat,
  "live-event-operations": Flag,
  "psychology-of-last-chance": Page,
  "the-lead-machine": Grid,
  "the-beauty-system": Flower,
  "automation-workflow-lab": Nodes,
  "digital-culture-experiments": Butterfly,
}

export function LevelMark({ slug, className }: { slug: string; className: string }) {
  const Mark = marks[slug] ?? Star
  return <Mark className={className} />
}

const glyphs = {
  star: Star,
  moon: Moon,
  flower: Flower,
  butterfly: Butterfly,
  mushroom: Mushroom,
  grass: Grass,
  chat: Chat,
  flag: Flag,
  page: Page,
  grid: Grid,
  nodes: Nodes,
}

export type PixelGlyph = keyof typeof glyphs

export function PixelIcon({ name, className }: { name: PixelGlyph; className: string }) {
  const Icon = glyphs[name]
  return (
    <span aria-hidden="true" className={`inline-flex shrink-0 ${className}`}>
      <Icon className="h-full w-full" />
    </span>
  )
}

export function PixelBadge({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`grid h-14 w-14 shrink-0 grid-cols-2 place-items-center border-2 border-[#171522] bg-[#f6e8d5] ${className}`}
    >
      <Flower className="h-4 w-4 text-[#9d245c]" />
      <Star className="h-3 w-3 text-[#9d245c]" />
      <Moon className="h-4 w-4 text-[#5c4670]" />
      <Butterfly className="h-4 w-4 text-[#0b6b48]" />
    </div>
  )
}

export function PixelBits() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      <Star className="pixel-twinkle absolute top-3 right-3 h-3.5 w-3.5 text-stamp" />
    </div>
  )
}

const ground = ["grass", "flower", "grass", "mushroom", "grass", "star", "grass"] as const
const groundTiles = Array.from({ length: 8 }, () => ground).flat()

export function GroundStrip({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`flex h-8 items-end overflow-hidden ${className}`}>
      {groundTiles.map((tile, index) => (
        <span key={`${tile}-${index}`} className="relative inline-flex h-8 w-5 shrink-0 items-end justify-center">
          <Grass className="absolute inset-x-0 bottom-0 h-3 w-5 text-mint" />
          {tile === "flower" ? <Flower className="relative mb-2 h-3.5 w-3.5 text-stamp" /> : null}
          {tile === "mushroom" ? <Mushroom className="relative mb-2 h-4 w-4 text-stamp" /> : null}
          {tile === "star" ? (
            <Star className={`relative mb-3 h-2.5 w-2.5 text-lilac ${index % 14 === 5 ? "pixel-twinkle" : ""}`} />
          ) : null}
        </span>
      ))}
    </div>
  )
}
