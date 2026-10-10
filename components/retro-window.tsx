import { PixelIcon, type PixelGlyph } from "@/components/pixel-bits"

export function RetroWindow({
  title,
  children,
  tone = "night",
  id,
  glyph,
  className = "",
}: {
  title: string
  children: React.ReactNode
  tone?: "night" | "paper" | "dialog"
  id?: string
  glyph?: PixelGlyph
  className?: string
}) {
  const paper = tone === "paper"
  const dialog = tone === "dialog"
  const frame = dialog
    ? "profile-window border-[#171522] bg-[#171522] text-[#f6e8d5]"
    : paper
      ? "profile-window border-rule bg-paper text-ink"
      : "border-lilac"
  const bar = dialog
    ? "border-[#171522] bg-pink text-[#171522]"
    : paper
      ? "border-[#171522] bg-[#171522] text-[#f6e8d5]"
      : "border-lilac text-cream"
  const square = "border-pink"

  return (
    <section aria-labelledby={id} className={`min-w-0 border-2 ${frame} ${className}`}>
      <div className={`flex items-center justify-between gap-3 border-b-2 px-2 py-1.5 ${bar}`}>
        <h2 id={id} className="flex min-w-0 items-center gap-2 font-mono text-[0.65rem] leading-5 tracking-[0.14em] uppercase">
          {glyph ? <PixelIcon name={glyph} className="h-3.5 w-3.5 shrink-0" /> : null}
          <span className="min-w-0">{title}</span>
        </h2>
        <span aria-hidden="true" className="flex shrink-0 items-center gap-1">
          <PixelIcon name="star" className="h-2.5 w-2.5" />
          <span className={`h-2.5 w-2.5 border ${square}`} />
          <span className="h-2.5 w-2.5 border border-[#69e5b1]" />
        </span>
      </div>
      <div className={paper || dialog ? "p-3 sm:p-4" : "p-3"}>{children}</div>
    </section>
  )
}
