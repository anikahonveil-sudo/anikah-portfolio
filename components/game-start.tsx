"use client"

function moveTo(id: string) {
  const target = document.getElementById(id)
  if (!target) return

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
  target.focus({ preventScroll: true })
}

const menuButton =
  "pixel-press inline-flex min-h-11 items-center justify-center border-2 px-5 font-mono text-[0.72rem] tracking-[0.14em] uppercase"

export function GameStart() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={() => moveTo("levels")}
        className={`${menuButton} border-[#171522] bg-pink text-[#171522] hover:bg-[#f6e8d5]`}
      >
        Start
      </button>
      <a
        href="#featured"
        onClick={(event) => {
          event.preventDefault()
          moveTo("featured")
        }}
        className={`${menuButton} border-mint bg-plum text-mint hover:bg-[#69e5b1] hover:text-[#171522]`}
      >
        Explore
      </a>
    </div>
  )
}
