import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildLocationPageSchema, buildFaqSchema } from "@/lib/schemas"
import { NAP, HOURS, SERVICE_PAGES, SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"

const PAGE_URL = `${SITE_URL}/locations/junction-city-or-auto-repair`

const FAQS = [
  {
    question: "Does Two Guys Automotive Repair serve Junction City, OR?",
    answer:
      "Yes. Junction City customers drive down regularly to our shop at 191 N 39th St, Springfield, OR. The trip south on OR-99 takes approximately 25–30 minutes. We offer the full range of auto repair services — from a quick oil change to complete transmission service — and walk-ins are always welcome.",
  },
  {
    question: "How far is the drive from Junction City to Two Guys Automotive?",
    answer:
      "Junction City is approximately 20 miles north of Springfield. Taking OR-99 South toward Eugene and Springfield, the drive typically takes 25–30 minutes. Our shop is at 191 N 39th St, Springfield, OR 97478.",
  },
  {
    question: "Why do Junction City drivers come to Two Guys Automotive?",
    answer:
      "Junction City has limited local options for full-service auto repair. Two Guys Automotive Repair offers the complete range of services — brakes, transmission, diagnostics, timing belts, oil changes, and more — under one roof. Our 4.6-star Google rating and 5-star Facebook rating reflect the consistent quality that Junction City customers recognize and trust.",
  },
]

export const metadata: Metadata = {
  title: "Auto Repair Shop Serving Junction City, OR | Two Guys Automotive Repair",
  description:
    "Auto repair shop serving Junction City, OR — 25 min south in Springfield. Brakes, oil changes, transmission, diagnostics & more. Walk-ins welcome. (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Auto Repair Shop Serving Junction City, OR | Two Guys Automotive",
    description:
      "Serving Junction City, OR — 25 min south via OR-99. Full-service auto repair in Springfield. Walk-ins welcome. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function JunctionCityLocationPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Locations", url: `${SITE_URL}/locations` },
            { name: "Junction City, OR", url: PAGE_URL },
          ]),
          buildLocationPageSchema("Junction City"),
          buildFaqSchema(FAQS),
        ]}
      />

      {/* Page header */}
      <section
        className="border-b px-4 py-14 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex flex-wrap gap-2 text-sm" style={{ color: "var(--color-secondary)" }}>
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/locations" className="hover:text-white transition-colors">Locations</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Junction City, OR</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Repair Shop Serving{" "}
            <span style={{ color: "var(--color-accent)" }}>Junction City, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Located in Springfield — approximately 25 minutes south via OR-99. Junction City
            drivers choose Two Guys Automotive for honest repairs and fair pricing.
          </p>
        </div>
      </section>

      {/* Intro + NAP */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Junction City sits about 20 miles north of Springfield along OR-99, and drivers
                from Junction City regularly make the trip south to Two Guys Automotive Repair when
                they want a mechanic shop with a verified track record and transparent pricing. The
                drive down OR-99 to our shop at 191 N 39th St, Springfield takes approximately
                25–30 minutes — a straightforward run down the Willamette Valley corridor.
              </p>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Junction City is a close-knit community with limited local options for full-service
                mechanical work. Two Guys Automotive Repair provides the complete range of services
                that any vehicle needs — from a routine oil change to timing belt replacement —
                under one roof. Many Junction City customers schedule service visits around other
                errands in Springfield or Eugene, making the trip an efficient use of their time.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                <strong style={{ color: "var(--color-primary)" }}>Directions from Junction City:</strong>{" "}
                Take OR-99 South through Harrisburg toward Eugene and Springfield. Continue south
                until you reach the Springfield area, then follow local roads to 191 N 39th St,
                Springfield, OR 97478.
              </p>
            </div>

            {/* NAP + Hours */}
            <div className="flex flex-col gap-6">
              <div
                className="border p-6"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
                  Shop Address
                </p>
                <address className="not-italic text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  <a
                    href={NAP.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {NAP.address.street}<br />
                    {NAP.address.city}, {NAP.address.state} {NAP.address.zip}
                  </a>
                </address>
                <a
                  href={NAP.phone.href}
                  className="mt-3 block text-2xl font-extrabold transition-opacity hover:opacity-80"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                >
                  {NAP.phone.display}
                </a>
              </div>

              <div
                className="border p-6"
                style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--color-accent)" }}>
                  Hours
                </p>
                <table className="w-full text-sm">
                  <tbody>
                    {HOURS.map((h) => (
                      <tr key={h.day} className="border-b last:border-0" style={{ borderColor: "var(--color-border)" }}>
                        <td className="py-1.5 pr-6 font-medium" style={{ color: "var(--color-primary)" }}>
                          {h.day}
                        </td>
                        <td style={{ color: "var(--color-secondary)" }}>{h.label}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        className="border-t px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Services Available to Junction City Drivers
          </h2>
          <div
            className="grid grid-cols-2 gap-px border sm:grid-cols-3 lg:grid-cols-4"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-border)" }}
          >
            {SERVICE_PAGES.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group flex flex-col gap-2 p-4 transition-colors hover:bg-white/5"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <span
                  className="text-base font-bold leading-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                >
                  {s.name}
                </span>
                <span className="text-xs leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  {s.shortDesc}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="border-t px-4 py-12 sm:px-6" style={{ borderColor: "var(--color-border)" }}>
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-6 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Shop Location
          </h2>
          <div
            className="overflow-hidden border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <iframe
              src={NAP.mapEmbedSrc}
              width="100%"
              height="320"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Two Guys Automotive Repair — 191 N 39th St, Springfield, OR 97478"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="border-t px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-8 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Junction City Auto Repair FAQ
          </h2>
          <div
            className="grid gap-px border sm:grid-cols-2 lg:grid-cols-3"
            style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-border)" }}
          >
            {FAQS.map((faq) => (
              <div key={faq.question} className="p-5" style={{ backgroundColor: "var(--color-panel)" }}>
                <h3
                  className="mb-2 text-base font-bold"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
                >
                  {faq.question}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock
        heading="Serving Junction City, OR Drivers"
        subtext="25 minutes south on OR-99. 191 N 39th St, Springfield, OR. Walk-ins welcome, or call (541) 744-3626."
      />
    </>
  )
}
