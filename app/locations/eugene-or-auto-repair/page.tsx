import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildLocationPageSchema, buildFaqSchema } from "@/lib/schemas"
import { NAP, HOURS, SERVICE_PAGES, SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"

const PAGE_URL = `${SITE_URL}/locations/eugene-or-auto-repair`

const FAQS = [
  {
    question: "Does Two Guys Automotive Repair serve Eugene, OR?",
    answer:
      "Yes. While our shop is located in Springfield, OR, we regularly serve customers from Eugene. The drive from Eugene to our shop at 191 N 39th St, Springfield is approximately 15–20 minutes via I-105 East or OR-126 East. Eugene drivers come to us for honest service and fair pricing that they may not always find closer to home.",
  },
  {
    question: "How far is Two Guys Automotive from Eugene?",
    answer:
      "The shop is approximately 10–12 miles from downtown Eugene. Taking I-105 East toward Springfield, the drive typically takes 15–20 minutes under normal traffic conditions. Exit toward 42nd Street and continue to 191 N 39th St, Springfield.",
  },
  {
    question: "Why do Eugene drivers choose a shop in Springfield?",
    answer:
      "Eugene customers choose Two Guys Automotive Repair for consistent, honest service. Our 4.8-star SureCritic rating (136 verified reviews) and 4.6-star Google rating reflect the experience that keeps customers returning regardless of where they live. Many Eugene residents have been let down by shops that recommend unnecessary repairs — we tell you what your vehicle actually needs.",
  },
]

export const metadata: Metadata = {
  title: "Auto Repair Shop Serving Eugene, OR | Two Guys Automotive Repair",
  description:
    "Auto repair shop serving Eugene, OR — just 15 min east in Springfield. Brakes, oil changes, transmission, diagnostics & more. 4.8★ SureCritic. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Auto Repair Shop Serving Eugene, OR | Two Guys Automotive",
    description:
      "Serving Eugene, OR drivers from Springfield — 15 min via I-105. Honest auto repair, fair prices. 4.6★ Google, 4.8★ SureCritic. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function EugeneLocationPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Locations", url: `${SITE_URL}/locations` },
            { name: "Eugene, OR", url: PAGE_URL },
          ]),
          buildLocationPageSchema("Eugene"),
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Eugene, OR</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Repair Shop Serving{" "}
            <span style={{ color: "var(--color-accent)" }}>Eugene, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Located in Springfield — approximately 15 minutes east of Eugene via I-105. Serving
            Eugene drivers with honest auto repair and fair pricing since day one.
          </p>
        </div>
      </section>

      {/* Intro + NAP */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Eugene drivers looking for a trusted mechanic shop just 10 miles east regularly
                choose Two Guys Automotive Repair in Springfield. The drive from downtown Eugene
                to our shop at 191 N 39th St takes approximately 15–20 minutes via I-105 East —
                and for many Eugene residents, the combination of straightforward service and
                fair pricing makes it well worth the short trip.
              </p>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                Two Guys Automotive Repair has earned a reputation across Lane County for not
                upselling parts that are not needed and for giving customers a clear explanation
                of what their vehicle requires before doing any work. Our 4.8-star rating on
                SureCritic with 136 verified reviews reflects consistent quality whether you are
                driving in for an oil change or a transmission service.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                <strong style={{ color: "var(--color-primary)" }}>Directions from Eugene:</strong>{" "}
                Take I-105 East or OR-126 East from Eugene toward Springfield. Follow signs toward
                Springfield city center. Our shop is at 191 N 39th St, Springfield, OR 97478.
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
            Services Available to Eugene Drivers
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
            From Eugene to Springfield — Easy Drive
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
            Eugene Auto Repair FAQ
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
        heading="Serving Eugene, OR Drivers"
        subtext="15 minutes east in Springfield. 191 N 39th St, Springfield, OR. Call (541) 744-3626 or walk in."
      />
    </>
  )
}
