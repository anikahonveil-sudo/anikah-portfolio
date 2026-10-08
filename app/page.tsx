import { Catalog } from "@/components/catalog"
import { catalogEntries, investigating, site, visibleContact } from "@/content/site"

export default function IndexPage() {
  const links = visibleContact()

  return (
    <div className="ledger px-5 pt-12 pb-20 sm:px-8 sm:pt-16">
      <p className="font-mono text-[0.68rem] tracking-[0.32em] text-stamp uppercase">
        {site.name}
      </p>
      <h1 className="mt-5 max-w-3xl text-balance font-serif text-[2.6rem] leading-[1.12] tracking-tight lg:text-6xl">
        {site.statement}
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-8 text-copy">
        {site.secondary}
      </p>
      <p className="mt-8 max-w-xl font-mono text-[0.68rem] leading-6 tracking-[0.18em] text-muted uppercase">
        {site.field}
      </p>
      {links.length > 0 ? (
        <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.68rem] tracking-[0.16em] uppercase">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-stamp hover:text-ivory">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
      <section
        aria-labelledby="investigating"
        className="mt-14 grid gap-10 border-t border-rule pt-6 sm:grid-cols-2"
      >
        <div>
          <h2 id="investigating" className="font-mono text-[0.68rem] tracking-[0.28em] text-stamp uppercase">
            Currently investigating
          </h2>
          <ul className="mt-4 space-y-2 font-mono text-[0.72rem] tracking-[0.16em] uppercase">
            {investigating.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-mono text-[0.68rem] tracking-[0.28em] text-stamp uppercase">Status</h2>
          <p className="mt-4 max-w-xs font-mono text-[0.72rem] leading-6 tracking-[0.14em] uppercase">
            {site.status}
          </p>
        </div>
      </section>
      <Catalog entries={catalogEntries} />
    </div>
  )
}
