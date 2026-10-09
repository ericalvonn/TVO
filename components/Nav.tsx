"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/content";
import { buttonClass } from "./Button";
import Logo from "./Logo";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu on navigation; lock page scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-primary text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center">
            {site.nav.map((item) => {
              // "Youth" aliases a Programs sub-page; highlight only the most specific match.
              const active =
                isActive(pathname, item.href) && !(item.href === "/programs" && pathname.startsWith("/programs/youth"));
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`block whitespace-nowrap border-b-2 px-1.5 py-1 text-[0.8rem] font-medium 2xl:px-2 2xl:text-sm transition-colors hover:text-white ${
                      active ? "border-orange-acts text-white" : "border-transparent text-white/75 hover:border-blue-action"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href={site.donate.href} className={buttonClass("orange", "whitespace-nowrap !px-3 !py-2 text-xs sm:!px-4 sm:text-sm")}>
            {site.donate.label}
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-navy-primary xl:hidden">
          <div className="border-b border-white/10 px-4 py-4 sm:px-6">
            <Link href={site.donate.href} className={buttonClass("orange", "w-full")}>
              {site.donate.label}
            </Link>
          </div>
          <nav aria-label="Mobile">
            <ul className="px-4 py-2 sm:px-6">
              {site.nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-white/10">
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-center font-display text-xl uppercase tracking-wide ${
                        active ? "text-orange-acts" : "text-white"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
