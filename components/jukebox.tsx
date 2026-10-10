"use client"

import { useEffect, useRef, useState } from "react"

const MELODY = [523.25, 659.25, 783.99, 659.25, 587.33, 739.99, 880, 739.99]
const STEP = 0.22

export function Jukebox() {
  const [playing, setPlaying] = useState(false)
  const ctxRef = useRef<AudioContext | null>(null)
  const timerRef = useRef<number | null>(null)
  const cursorRef = useRef(0)
  const stepRef = useRef(0)

  useEffect(() => {
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current)
      void ctxRef.current?.close()
    }
  }, [])

  function stop() {
    if (timerRef.current) window.clearInterval(timerRef.current)
    timerRef.current = null
    void ctxRef.current?.close()
    ctxRef.current = null
    setPlaying(false)
  }

  function playNote(ctx: AudioContext, freq: number, time: number) {
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = "triangle"
    osc.frequency.setValueAtTime(freq, time)
    gain.gain.setValueAtTime(0.0001, time)
    gain.gain.exponentialRampToValueAtTime(0.04, time + 0.02)
    gain.gain.exponentialRampToValueAtTime(0.0001, time + STEP * 0.85)
    osc.connect(gain)
    gain.connect(ctx.destination)
    osc.start(time)
    osc.stop(time + STEP)
  }

  function start() {
    const ctx = new AudioContext()
    void ctx.resume()
    ctxRef.current = ctx
    cursorRef.current = ctx.currentTime + 0.05
    stepRef.current = 0

    const tick = () => {
      const audio = ctxRef.current
      if (!audio) return

      while (cursorRef.current < audio.currentTime + 0.45) {
        playNote(audio, MELODY[stepRef.current % MELODY.length], cursorRef.current)
        stepRef.current += 1
        cursorRef.current += STEP
      }
    }

    tick()
    timerRef.current = window.setInterval(tick, 120)
    setPlaying(true)
  }

  return (
    <button
      type="button"
      aria-pressed={playing}
      aria-label={playing ? "Stop background music" : "Play background music"}
      onClick={() => (playing ? stop() : start())}
      className="pixel-press inline-flex min-h-11 items-center gap-2 border-2 border-lilac bg-plum px-3 font-mono text-[0.68rem] tracking-[0.12em] text-cream uppercase hover:border-stamp hover:text-stamp"
    >
      <span className="pixel-bars inline-flex h-3 items-end gap-0.5" aria-hidden="true">
        <span className={`w-0.5 bg-mint ${playing ? "h-3" : "h-1"}`} />
        <span className={`w-0.5 bg-stamp ${playing ? "h-3" : "h-2"}`} />
        <span className={`w-0.5 bg-lilac ${playing ? "h-3" : "h-1.5"}`} />
      </span>
      {playing ? "Stop" : "Play"}
      <span className="text-lilac">BGM</span>
    </button>
  )
}
