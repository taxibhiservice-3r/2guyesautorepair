import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema } from "@/lib/schemas"
import { SERVICE_PAGES, SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"

export const metadata: Metadata = {
  title: "Auto Repair Services Springfield OR — Brakes, Oil Changes, Transmission",
  description:
    "Springfield, OR auto repair services: brake repair, oil changes, transmission service, auto diagnostics, timing belts, coolant, fuel injection & power steering. (541) 744-3626.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Auto Repair Services in Springfield, OR | Two Guys Automotive",
    description:
      "Brake repair, oil changes, transmission, diagnostics, timing belt & chain, coolant, fuel injection, power steering — Springfield, OR mechanic shop.",
    url: `${SITE_URL}/services`,
  },
}

// Legacy anchor IDs mapped to service page slugs for /services#fragment support
const LEGACY_ANCHORS: Record<string, string> = {
  "brake-repair-springfield-or": "brakes",
  "oil-change-springfield-or": "oil-changes",
  "transmission-service-springfield-or": "transmission-service",
  "auto-diagnostics-springfield-or": "auto-diagnostics",
  "timing-belt-chain-springfield-or": "timing-belts",
  "coolant-system-service-springfield-or": "coolant-system-service",
  "fuel-injection-service-springfield-or": "fuel-injection-service",
  "power-steering-service-springfield-or": "power-steering-service",
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Services", url: `${SITE_URL}/services` },
        ])}
      />

      {/* Page header */}
      <section
        className="border-b px-4 py-14 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex gap-2 text-sm" style={{ color: "var(--color-secondary)" }}>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>
                Services
              </li>
            </ol>
          </nav>

          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Repair Services
            <br />
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Two Guys Automotive Repair is a full-service mechanic shop at 191 N 39th St, Springfield,
            OR — serving Springfield, Eugene, Junction City, and Lane County. Select a service below
            for detailed information, pricing guidance, and FAQs.
          </p>
        </div>
      </section>

      {/* Service card grid */}
      <section aria-label="Service list" className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-px border sm:grid-cols-2 lg:grid-cols-4"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
          >
            {SERVICE_PAGES.map((s) => (
              <Link
                key={s.slug}
                id={LEGACY_ANCHORS[s.slug]}
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-3 p-6 transition-colors hover:bg-white/5"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <p
                  className="text-xl font-extrabold leading-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                >
                  {s.name}
                </p>
                <p className="flex-1 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  {s.shortDesc}
                </p>
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-accent)" }}
                >
                  Learn more &#8599;
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Location context */}
      <section
        className="border-t px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-4 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Serving Springfield, Eugene &amp; Junction City
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
            All services are performed at our shop at 191 N 39th St, Springfield, OR 97478.
            Customers from Eugene and Junction City regularly make the short drive for honest
            auto repair at fair prices.
          </p>
          <div
            className="grid gap-px border sm:grid-cols-3"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-border)" }}
          >
            {[
              {
                slug: "springfield-or-auto-repair",
                city: "Springfield, OR",
                detail: "Our shop — 191 N 39th St",
                accent: true,
              },
              {
                slug: "eugene-or-auto-repair",
                city: "Eugene, OR",
                detail: "~15 min drive via I-105 East",
                accent: false,
              },
              {
                slug: "junction-city-or-auto-repair",
                city: "Junction City, OR",
                detail: "~25 min drive via OR-99 South",
                accent: false,
              },
            ].map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="block p-5 transition-colors hover:bg-white/5"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <p
                  className="text-lg font-extrabold"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: loc.accent ? "var(--color-accent)" : "var(--color-primary)",
                  }}
                >
                  {loc.city}
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--color-secondary)" }}>
                  {loc.detail}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        heading="Book Your Repair in Springfield"
        subtext="Call our auto shop at (541) 744-3626 or send a message — walk-ins are always welcome at 191 N 39th St."
      />
    </>
  )
}
