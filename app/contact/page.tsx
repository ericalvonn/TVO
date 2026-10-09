import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "./ContactForm";
import Icon from "@/components/Icon";
import Section from "@/components/Section";
import { site } from "@/lib/content";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  const details = [
    { icon: "phone", label: "Phone", value: site.contact.phone, href: site.contact.phoneHref, mono: true },
    { icon: "mail", label: "Email", value: site.contact.email, href: `mailto:${site.contact.email}` },
    { icon: "globe", label: "Website", value: site.contact.website, href: site.contact.websiteHref },
    { icon: "pin", label: "Address", value: site.contact.address },
  ];

  return (
    <Section tone="light">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-orange-acts">Contact ACTS</p>
          <h1 className="text-5xl font-bold uppercase leading-none md:text-7xl">GET IN TOUCH</h1>
          <ul className="mt-10 space-y-6">
            {details.map((d) => (
              <li key={d.label} className="flex gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center bg-navy-primary text-white">
                  <Icon name={d.icon} className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-navy-primary/60">{d.label}</p>
                  {d.href ? (
                    <a href={d.href} className={`break-all text-lg text-blue-action hover:underline ${d.mono ? "font-mono" : ""}`}>
                      {d.value}
                    </a>
                  ) : (
                    <p className="text-lg">{d.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          {site.social.length > 0 && (
            <ul className="mt-8 flex flex-wrap gap-4">
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-blue-action hover:underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Suspense>
          <ContactForm />
        </Suspense>
      </div>
    </Section>
  );
}
