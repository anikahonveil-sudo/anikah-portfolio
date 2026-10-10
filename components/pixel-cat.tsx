"use client"

import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

const INK = "#171522"
const CREAM = "#f6e8d5"
const PINK = "#f17dba"
const MINT = "#69e5b1"

const ROWS = [
  "................",
  "....pppp........",
  "...ppwwpp.......",
  "..ww....ww......",
  "..w#wwww#w......",
  ".wwwwwwwwww.....",
  ".wwmwwwwmww.....",
  ".wwww##wwww.....",
  "..wwwwwwww......",
  "..wwwwwwww......",
  "..wwwwwwwttt....",
  "...wwwwww..tn...",
  "...ww..ww.......",
  "...ww..ww.......",
  "................",
  "................",
]

const CLICKS = [
  "Archive patrol.",
  "Pink bow stays on.",
  "This corner is mine.",
  "Mint break?",
  "Still reading with you.",
]

function routeLine(pathname: string) {
  if (pathname === "/") return "Back to the title screen."
  if (pathname === "/operator") return "Player file open."
  if (pathname.startsWith("/dossier/")) return "Case file open."
  return "New room."
}

function cells(mark: string) {
  const spots: { x: number; y: number }[] = []
  ROWS.forEach((row, y) => {
    for (let x = 0; x < row.length; x++) {
      if (row[x] === mark) spots.push({ x, y })
    }
  })
  return spots
}

const ink = cells("#")
const cream = cells("w")
const bow = cells("p")
const eyes = cells("m")
const tail = cells("t")
const tip = cells("n")

function Pixels({
  spots,
  fill,
  className,
}: {
  spots: { x: number; y: number }[]
  fill: string
  className?: string
}) {
  return (
    <g className={className}>
      {spots.map((spot) => (
        <rect key={`${spot.x}-${spot.y}`} x={spot.x} y={spot.y} width="1" height="1" fill={fill} />
      ))}
    </g>
  )
}

function CatSprite() {
  return (
    <svg viewBox="0 0 16 16" className="cat-sprite h-full w-full" aria-hidden="true" shapeRendering="crispEdges">
      <Pixels spots={ink} fill={INK} />
      <Pixels spots={cream} fill={CREAM} />
      <Pixels spots={bow} fill={PINK} />
      <g className="cat-tail">
        <Pixels spots={tail} fill={CREAM} />
        <Pixels spots={tip} fill={MINT} />
      </g>
      <Pixels spots={eyes} fill={MINT} className="cat-eyes" />
      <g className="cat-sleep">
        <rect x="12" y="1" width="3" height="1" fill={MINT} />
        <rect x="14" y="2" width="1" height="1" fill={MINT} />
        <rect x="13" y="3" width="1" height="1" fill={MINT} />
        <rect x="12" y="4" width="3" height="1" fill={MINT} />
      </g>
    </svg>
  )
}

function HideMark() {
  return (
    <svg viewBox="0 0 7 7" className="h-3.5 w-3.5" aria-hidden="true" shapeRendering="crispEdges">
      <path
        fill="currentColor"
        d="M0 0h2v1H0zm5 0h2v1H5zM1 1h2v1H1zm4 0h2v1H4zM2 2h3v1H2zM3 3h1v1H3zM2 4h3v1H2zM1 5h2v1H1zm4 0h2v1H4zM0 6h2v1H0zm5 0h2v1H5z"
      />
    </svg>
  )
}

export function PixelCat() {
  const pathname = usePathname()
  const [line, setLine] = useState<string | null>(null)
  const [dismissed, setDismissed] = useState(false)
  const timer = useRef<number | null>(null)
  const lastPath = useRef<string | null>(null)
  const clickIndex = useRef(0)
  const dismissedRef = useRef(false)
  const restoreRef = useRef<HTMLButtonElement>(null)
  const catRef = useRef<HTMLButtonElement>(null)
  const focusTarget = useRef<"restore" | "cat" | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  useEffect(() => {
    if (focusTarget.current === "restore") restoreRef.current?.focus()
    if (focusTarget.current === "cat") catRef.current?.focus()
    focusTarget.current = null
  }, [dismissed])

  useEffect(() => {
    if (lastPath.current === null) {
      lastPath.current = pathname
      return
    }
    if (lastPath.current === pathname) return
    lastPath.current = pathname
    if (dismissedRef.current) return

    setLine(routeLine(pathname))
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setLine(null), 4200)
  }, [pathname])

  function say(text: string) {
    setLine(text)
    if (timer.current) window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setLine(null), 4200)
  }

  function poke() {
    const text = CLICKS[clickIndex.current % CLICKS.length]
    clickIndex.current += 1
    say(text)
  }

  function clearLine() {
    if (timer.current) window.clearTimeout(timer.current)
    setLine(null)
  }

  function hide() {
    dismissedRef.current = true
    focusTarget.current = "restore"
    clearLine()
    setDismissed(true)
  }

  function restore() {
    dismissedRef.current = false
    focusTarget.current = "cat"
    setDismissed(false)
  }

  return (
    <div
      className="pointer-events-none fixed right-3 bottom-[max(0.75rem,env(safe-area-inset-bottom))] z-40 flex flex-col items-end"
      onKeyDown={(event) => {
        if (event.key === "Escape") clearLine()
      }}
    >
      {line ? (
        <div
          id="pixel-cat-line"
          role="status"
          className="pointer-events-auto mb-2 flex max-w-[min(16rem,calc(100vw-1.5rem))] items-center gap-1 border-2 border-stamp bg-plum py-1 pr-1 pl-3 text-sm leading-5 text-cream shadow-[2px_2px_0_#a997f7]"
        >
          <p>{line}</p>
          <button
            type="button"
            aria-label="Dismiss message"
            onClick={clearLine}
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center text-lg leading-none text-stamp"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
      ) : null}

      {dismissed ? (
        <button
          ref={restoreRef}
          type="button"
          onClick={restore}
          className="pointer-events-auto inline-flex min-h-11 items-center border-2 border-stamp bg-plum px-3 font-mono text-[0.68rem] tracking-[0.12em] text-cream uppercase"
        >
          Show cat
        </button>
      ) : (
        <div className="pointer-events-auto flex items-end gap-1">
          <button
            type="button"
            aria-label="Hide pixel cat"
            onClick={hide}
            className="inline-flex h-11 w-11 items-center justify-center text-stamp"
          >
            <HideMark />
          </button>
          <button
            ref={catRef}
            type="button"
            aria-label="Pixel cat"
            aria-expanded={line !== null}
            aria-controls={line ? "pixel-cat-line" : undefined}
            onClick={poke}
            className="inline-flex h-12 w-12 items-center justify-center border-2 border-[#f17dba] bg-[#171522] sm:h-16 sm:w-16"
          >
            <CatSprite />
          </button>
        </div>
      )}
    </div>
  )
}
