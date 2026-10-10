"use client"

import { useEffect, useState } from "react"

const storageKey = "anikah-theme"

function Sun({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M7 0h2v3H7zm0 13h2v3H7zM0 7h3v2H0zm13 0h3v2h-3zM2 3.4 3.4 2l2 2L4 5.4zM10.6 12l1.4-1.4 2 2-1.4 1.4zM3.4 12 2 13.4l2 2L5.4 14zM12 3.4 10.6 2l2-2L14 1.4zM5 5h6v6H5z"
      />
    </svg>
  )
}

function Moon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 16 16" className={className} aria-hidden="true">
      <path fill="currentColor" d="M9 1.5a6.5 6.5 0 1 0 5.2 10.4A5.5 5.5 0 0 1 9 1.5z" />
    </svg>
  )
}

function readTheme(): "day" | "night" {
  return document.documentElement.dataset.theme === "day" ? "day" : "night"
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"day" | "night" | null>(null)

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: light)")

    const apply = () => {
      let stored: string | null = null
      try {
        stored = localStorage.getItem(storageKey)
      } catch {
        stored = null
      }
      const next = stored === "day" || stored === "night" ? stored : media.matches ? "day" : "night"
      document.documentElement.dataset.theme = next
      setTheme(next)
    }

    apply()
    const onStorage = (event: StorageEvent) => {
      if (event.key === storageKey) apply()
    }
    media.addEventListener("change", apply)
    window.addEventListener("storage", onStorage)
    return () => {
      media.removeEventListener("change", apply)
      window.removeEventListener("storage", onStorage)
    }
  }, [])

  function toggle() {
    const next = readTheme() === "day" ? "night" : "day"
    document.documentElement.dataset.theme = next
    try {
      localStorage.setItem(storageKey, next)
    } catch {
      /* private browsing can block storage; the choice still applies this visit */
    }
    setTheme(next)
  }

  const label =
    theme === "day" ? "Switch to night mode" : theme === "night" ? "Switch to day mode" : "Switch color theme"

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      className="pixel-press inline-flex h-11 w-11 shrink-0 items-center justify-center border-2 border-stamp bg-plum text-stamp"
    >
      <Sun className="theme-sun h-4 w-4" />
      <Moon className="theme-moon h-4 w-4" />
    </button>
  )
}
