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
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-8">
            <Link href="/" className="font-mono text-[0.68rem] tracking-[0.28em] uppercase">
              <span className="text-stamp">{site.mark}</span>
              <span className="text-muted"> / 00</span>
            </Link>
            <nav aria-label="Archive" className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[0.68rem] tracking-[0.22em] uppercase">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="hover:text-stamp">
                  {item.label}
                </Link>
              ))}
              {links.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-stamp">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}
