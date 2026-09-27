import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema } from "@/lib/schemas"
import { LOCATION_PAGES, SITE_URL } from "@/lib/constants"

const PAGE_URL = `${SITE_URL}/locations`

export const metadata: Metadata = {
  title: "Auto Repair Service Areas — Springfield, Eugene & Junction City, OR | Two Guys Automotive",
  description:
    "Two Guys Automotive Repair serves Springfield, Eugene, and Junction City, OR. Find your city and see the full list of services available to you.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Service Areas — Springfield, Eugene & Junction City | Two Guys Automotive",
    description:
      "Auto repair shop serving Springfield, Eugene, and Junction City, OR. Honest work, fair prices, 4.6★ Google. (541) 744-3626.",
    url: PAGE_URL,
  },
}

const LOCATION_DETAILS: Record<string, { tagline: string; detail: string }> = {
  "springfield-or-auto-repair": {
    tagline: "Our home base",
    detail: "191 N 39th St — the shop is here",
  },
  "eugene-or-auto-repair": {
    tagline: "~15 min drive east via I-105",
    detail: "Eugene drivers trust us for honest service",
  },
  "junction-city-or-auto-repair": {
    tagline: "~25 min drive south via OR-99",
    detail: "Junction City customers rely on us regularly",
  },
}

export default function LocationsPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Locations", url: PAGE_URL },
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
                Locations
              </li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Serving{" "}
            <span style={{ color: "var(--color-accent)" }}>Lane County, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Two Guys Automotive Repair is located in Springfield, OR, and serves customers from
            Springfield, Eugene, Junction City, and the surrounding Lane County area. Select your
            city below for location-specific details and directions.
          </p>
        </div>
      </section>

      {/* Location cards */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div
            className="grid gap-px border sm:grid-cols-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
          >
            {LOCATION_PAGES.map((loc) => {
              const details = LOCATION_DETAILS[loc.slug]
              return (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group flex flex-col gap-3 p-6 transition-colors hover:bg-white/5"
                  style={{ backgroundColor: "var(--color-panel)" }}
                >
                  <p
                    className="text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-accent)" }}
                  >
                    {details.tagline}
                  </p>
                  <p
                    className="text-3xl font-extrabold leading-tight"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                  >
                    {loc.city}, {loc.state}
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-secondary)" }}>
                    {details.detail}
                  </p>
                  <span
                    className="mt-auto text-sm font-semibold"
                    style={{ color: "var(--color-accent)" }}
                  >
                    View details &#8599;
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Shop info */}
      <section
        className="border-t px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-4 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            One Shop. Every Service Your Vehicle Needs.
          </h2>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
            Our auto repair garage at 191 N 39th St in Springfield handles everything —{" "}
            <Link href="/services/brake-repair-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              brake repair
            </Link>
            ,{" "}
            <Link href="/services/oil-change-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              oil changes
            </Link>
            ,{" "}
            <Link href="/services/transmission-service-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              transmission service
            </Link>
            ,{" "}
            <Link href="/services/auto-diagnostics-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              auto diagnostics
            </Link>
            , timing belts, coolant service, fuel injection, and more. Rated 4.6★ on Google and
            4.8★ on SureCritic (136 reviews). Walk-ins welcome.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center rounded-sm border px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-secondary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            View All Services
          </Link>
        </div>
      </section>
    </>
  )
}
