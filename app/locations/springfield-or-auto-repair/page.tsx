import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildLocationPageSchema, buildFaqSchema } from "@/lib/schemas"
import { NAP, HOURS, SERVICE_PAGES, SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"

const PAGE_URL = `${SITE_URL}/locations/springfield-or-auto-repair`

const FAQS = [
  {
    question: "Where is Two Guys Automotive Repair located in Springfield?",
    answer:
      "Our shop is at 191 N 39th St, Springfield, OR 97478. We are open Monday through Friday 8:00 AM to 5:30 PM and Saturday 8:00 AM to 2:00 PM. No appointment is needed — walk-ins are always welcome. Call (541) 744-3626 if you would like to confirm availability before coming in.",
  },
  {
    question: "Do I need an appointment for auto repair in Springfield?",
    answer:
      "No appointment is required. Two Guys Automotive Repair accepts walk-ins during all business hours. For larger jobs like timing belt replacement or transmission service, calling ahead at (541) 744-3626 helps us schedule your vehicle and minimize wait time, but it is not required.",
  },
  {
    question: "What auto repair services are available in Springfield at your shop?",
    answer:
      "We offer brake repair, oil changes (conventional and synthetic), transmission service (fluid change, filter, and flush), auto diagnostics and check engine light diagnosis, timing belt and chain replacement, coolant system service, fuel injection service, and power steering service — all at 191 N 39th St, Springfield, OR.",
  },
]

export const metadata: Metadata = {
  title: "Auto Repair Shop in Springfield, OR | Two Guys Automotive Repair",
  description:
    "Two Guys Automotive Repair — Springfield, OR auto repair shop at 191 N 39th St. Brakes, oil changes, transmission, diagnostics & more. Walk-ins welcome. (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Auto Repair Shop in Springfield, OR | Two Guys Automotive",
    description:
      "Springfield, OR auto repair shop. Complete vehicle services at 191 N 39th St. Walk-ins welcome. 4.6★ Google. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function SpringfieldLocationPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Locations", url: `${SITE_URL}/locations` },
            { name: "Springfield, OR", url: PAGE_URL },
          ]),
          buildLocationPageSchema("Springfield"),
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Springfield, OR</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Repair Shop Serving{" "}
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Your neighborhood auto repair shop — 191 N 39th St, Springfield, OR 97478. Walk-ins
            welcome. Rated 4.6★ Google, 4.8★ SureCritic.
          </p>
        </div>
      </section>

      {/* Intro + NAP */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Two Guys Automotive Repair is Springfield&apos;s home-base auto repair shop, located on
                N 39th St right in the heart of the city. If you live or work in Springfield and
                need a reliable mechanic, you do not have to travel far — this is your neighborhood
                shop.
              </p>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Springfield residents have trusted Two Guys for honest pricing, straight answers, and
                work done right the first time. Our 4.6-star rating on Google and 4.8-star rating on
                SureCritic across 136 verified reviews comes from repeat customers, not from
                advertising campaigns. We inspect your vehicle, tell you what it needs, and let you
                decide — no pressure, no upsells.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Walk-ins are always welcome during business hours. No appointment necessary for
                most services including oil changes, diagnostics, and brake inspections.
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
            Services Available in Springfield, OR
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
            Find Us in Springfield
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
            Springfield Auto Repair FAQ
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
        heading="Your Springfield Auto Repair Shop"
        subtext="Walk in or call — 191 N 39th St, Springfield, OR. Mon–Fri 8 AM–5:30 PM, Sat 8 AM–2 PM."
      />
    </>
  )
}
