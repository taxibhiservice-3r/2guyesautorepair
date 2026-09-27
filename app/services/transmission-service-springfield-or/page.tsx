import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/transmission-service-springfield-or`

const FAQS = [
  {
    question: "What is the difference between a transmission service and a flush?",
    answer:
      "A transmission service (drain and fill) drops the pan, drains the fluid that flows out by gravity, replaces the filter and gasket, and refills with fresh fluid. A flush uses a machine connected to the cooler lines to push out virtually all of the old fluid — not just the gravity-drain portion. A flush is appropriate when fluid is heavily degraded or the vehicle has been neglected beyond normal service intervals.",
  },
  {
    question: "How often should I service my transmission?",
    answer:
      "Most manufacturers recommend transmission service every 30,000–60,000 miles under normal driving conditions. Towing, stop-and-go driving, and extreme temperatures accelerate fluid degradation and call for more frequent service. If you have never serviced a high-mileage transmission with severely degraded fluid, we will advise the safest approach — sometimes a conservative drain and fill before a flush is the right call.",
  },
  {
    question: "How do I know if my transmission needs service?",
    answer:
      "Warning signs include rough, jerky, or delayed gear shifts; slipping (engine revs without corresponding acceleration); unusual whining, humming, or clunking during shifts; transmission fluid that is dark, burned-smelling, or gritty in texture; and a check engine light accompanied by any of the above. If your fluid is overdue by mileage alone, service it before symptoms appear.",
  },
]

export const metadata: Metadata = {
  title: "Transmission Service in Springfield, OR | Two Guys Automotive Repair",
  description:
    "Transmission service in Springfield, OR — fluid change, filter replacement, and flush. Prevent a costly rebuild with regular service. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Transmission Service in Springfield, OR | Two Guys Automotive Repair",
    description:
      "Transmission fluid change, filter service, and flush in Springfield, OR. Protect your drivetrain. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function TransmissionServicePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Transmission Service", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Transmission Service",
            PAGE_URL,
            "Transmission service in Springfield, OR — fluid change, filter replacement, and flush to extend drivetrain life and prevent costly repairs."
          ),
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
              <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Transmission Service</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Transmission Service in{" "}
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Fluid change, filter replacement, and complete flush — protecting your transmission at
            191 N 39th St, Springfield, OR 97478.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Your transmission is one of the most complex and expensive components in your vehicle.
              A transmission rebuild or replacement can cost $2,000–$5,000 or more depending on the
              vehicle. Regular transmission service for a fraction of that cost is the most
              effective protection you can provide. At Two Guys Automotive Repair in Springfield,
              OR, we perform complete transmission service — fluid changes, filter replacement, and
              full fluid exchanges.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Understanding the Types of Transmission Service
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              <strong style={{ color: "var(--color-primary)" }}>Transmission drain and fill:</strong>{" "}
              The pan is dropped, old fluid drains by gravity, and the pan and filter are inspected.
              A new filter and gasket are installed and the pan is reattached with fresh fluid. This
              is the standard service for most vehicles on a normal interval.
            </p>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              <strong style={{ color: "var(--color-primary)" }}>Transmission filter service:</strong>{" "}
              For vehicles with a serviceable in-pan filter, filter and gasket replacement is
              combined with the drain and fill as standard practice. Not all automatic transmissions
              have a serviceable internal filter — we identify what your vehicle requires.
            </p>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              <strong style={{ color: "var(--color-primary)" }}>Transmission flush:</strong>{" "}
              A flush machine connects to the transmission cooler lines and exchanges virtually all
              of the old fluid — not just the portion that drains by gravity. Flushes are
              appropriate when fluid is heavily degraded or the vehicle has gone significantly past
              its service interval.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Signs Your Transmission May Need Service
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Rough, jerky, or delayed gear shifts",
                "Slipping — engine revs without corresponding vehicle acceleration",
                "Unusual whining, humming, or clunking sounds during shifts",
                "Dark, burned-smelling, or gritty transmission fluid",
                "Check engine light with transmission-related fault codes",
              ].map((s) => (
                <li key={s} className="flex gap-3 text-sm" style={{ color: "var(--color-secondary)" }}>
                  <span style={{ color: "var(--color-accent)" }}>—</span>
                  {s}
                </li>
              ))}
            </ul>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Serving Springfield, Eugene &amp; Junction City Drivers
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Two Guys Automotive Repair services both automatic and manual transmissions for all
              makes and models. Whether you are driving in from Eugene or Junction City, or you are
              a Springfield local, our shop at 191 N 39th St handles transmission service
              efficiently. Walk-ins are welcome, or call{" "}
              <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a>.
            </p>
          </div>
        </div>
      </section>

      <ServiceAreaLinks />

      {/* FAQ */}
      <section
        className="border-t px-4 py-12 sm:px-6"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            className="mb-8 text-3xl font-extrabold"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Transmission Service FAQ
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
        heading="Transmission Service in Springfield"
        subtext="Protect your drivetrain before problems start. 191 N 39th St, Springfield, OR. Walk-ins welcome."
      />
    </>
  )
}
