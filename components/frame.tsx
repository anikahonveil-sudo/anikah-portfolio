import Link from "next/link"
import { nav, site, visibleContact } from "@/content/site"

export function Frame({ children }: { children: React.ReactNode }) {
  const links = visibleContact()

  return (
    <div className="md:grid md:min-h-full md:grid-cols-[3.25rem_1fr]">
      <aside className="hidden border-r border-rule md:block">
        <div className="sticky top-0 flex h-screen items-center justify-center">
          <p className="font-mono text-[0.62rem] tracking-[0.42em] text-muted uppercase [writing-mode:vertical-rl]">
            {site.archive}
          </p>
        </div>
      </aside>
      <div className="flex min-h-screen flex-col">
        <header className="border-b border-rule">
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 sm:px-8 md:py-4">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center font-mono text-[0.68rem] tracking-[0.28em] uppercase md:min-h-0"
            >
              <span className="text-stamp">{site.mark}</span>
              <span className="text-muted"> / 00</span>
            </Link>
            <nav
              aria-label="Archive"
              className="flex flex-wrap items-center gap-x-5 font-mono text-[0.68rem] tracking-[0.22em] uppercase"
            >
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="inline-flex min-h-11 items-center hover:text-stamp md:min-h-0"
                >
                  {item.label}
                </Link>
              ))}
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center hover:text-stamp md:min-h-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <p className="border-t border-rule px-5 py-3 font-mono text-[0.62rem] text-muted md:hidden sm:px-8">
            The Internet Culture Archive
          </p>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
