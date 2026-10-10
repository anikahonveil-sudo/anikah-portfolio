import Link from "next/link"

export default function NotFound() {
  return (
    <div className="px-5 py-24 sm:px-8">
      <p className="font-mono text-[0.68rem] tracking-[0.18em] text-stamp uppercase">Missing file</p>
      <h1 className="mt-4 max-w-xl font-display text-3xl leading-tight text-cream sm:text-5xl">
        This file is not in the archive.
      </h1>
      <Link
        href="/"
        className="mt-8 inline-block font-mono text-[0.68rem] tracking-[0.2em] text-stamp uppercase hover:text-ivory"
      >
        Return to the index
      </Link>
    </div>
  )
}
