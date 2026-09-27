import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServiceSchema } from "@/lib/schemas"
import { SERVICES, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Auto Repair Services Springfield OR — Brakes, Oil Changes, Transmission",
  description:
    "Springfield, OR auto repair services: brakes, oil changes, transmission service, auto diagnostics, timing belts, coolant, fuel injection & power steering. Call (541) 744-3626.",
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: "Auto Repair Services in Springfield, OR | Two Guys Automotive",
    description:
      "Brakes, oil changes, transmission, fuel injection, coolant, diagnostics, timing belts & power steering — Springfield, OR mechanic shop.",
    url: `${SITE_URL}/services`,
  },
}

// Location-enhanced H2 labels for high-value keyword services
const SERVICE_LABELS: Record<string, string> = {
  "oil-changes": "Oil Change Service — Springfield, OR",
  "brakes": "Brake Repair — Springfield & Eugene, OR",
  "auto-diagnostics": "Auto Diagnostics & Check Engine Light — Springfield, OR",
  "transmission-service": "Transmission Service — Springfield, OR",
}

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
          ]),
          ...SERVICES.map(buildServiceSchema),
        ]}
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
            Two Guys Automotive Repair is a full-service mechanic shop and auto garage in
            Springfield, OR, serving Eugene, Junction City, and Lane County. Every service
            below is performed at 191 N 39th St, Springfield, OR 97478.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section aria-label="Service details" className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div>
            {SERVICES.map((s, i) => (
              <div
                key={s.slug}
                id={s.slug}
                className="grid gap-4 py-10 sm:grid-cols-[1fr_2fr]"
                style={
                  i > 0
                    ? { borderTop: "1px solid var(--color-border)" }
                    : undefined
                }
              >
                <div>
                  <p
                    className="mb-1 text-xs font-semibold uppercase tracking-widest"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Service {String(i + 1).padStart(2, "0")}
                  </p>
                  <h2
                    className="text-3xl font-extrabold sm:text-4xl"
                    style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                  >
                    {SERVICE_LABELS[s.slug] ?? s.name}
                  </h2>
                </div>
                <div>
                  <p
                    className="mb-2 text-base font-medium"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {s.shortDesc}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                    {s.longDesc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="border-t px-4 py-14 text-center sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-lg">
          <h2
            className="mb-3 text-4xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Book Your Repair in Springfield Today
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-secondary)" }}>
            Call our auto shop at (541) 744-3626 or send a message — walk-ins are always
            welcome at 191 N 39th St, Springfield, OR.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href="tel:+15417443626"
              className="inline-flex items-center rounded-sm px-8 py-3 text-base font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Call (541) 744-3626
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-sm border px-8 py-3 text-base font-semibold transition-colors hover:border-white hover:text-white"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-secondary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
