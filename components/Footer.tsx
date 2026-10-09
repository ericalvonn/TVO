import Link from "next/link";
import { site } from "@/lib/content";
import Button from "./Button";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="bg-navy-primary text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-bold uppercase leading-tight tracking-wide md:text-3xl">{site.tagline}</p>
          <p className="mt-4 text-white/80">
            {site.shortName} — {site.name}
          </p>
          <p className="mt-1 font-mono text-sm text-white/60">{site.location}</p>
          <div className="mt-6">
            <Button href={site.donate.href}>SUPPORT ACTS</Button>
          </div>
        </div>

        <nav aria-label="Footer">
          <h2 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts">Explore</h2>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm md:grid-cols-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/80 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts">Contact</h2>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={site.contact.phoneHref} className="flex items-center gap-2 font-mono text-white/80 hover:text-white">
                <Icon name="phone" className="h-4 w-4 shrink-0" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="flex items-center gap-2 break-all text-white/80 hover:text-white">
                <Icon name="mail" className="h-4 w-4 shrink-0" />
                {site.contact.email}
              </a>
            </li>
          </ul>
          {site.social.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-4 text-sm">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-6 font-mono text-xs text-white/50 sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
