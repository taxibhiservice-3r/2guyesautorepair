import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/power-steering-service-springfield-or`

const FAQS = [
  {
    question: "Why is my power steering making a whining noise?",
    answer:
      "A whining or moaning noise when turning — especially at low speed or when the wheel is near full lock — is the most common symptom of degraded power steering fluid or a low fluid level. It can also indicate early wear in the power steering pump itself. Have it inspected promptly: a failing pump that runs low on fluid can damage the steering rack, which is a far more expensive repair.",
  },
  {
    question: "How often should power steering fluid be changed?",
    answer:
      "There is no single universal interval. Some manufacturers specify a power steering fluid flush at 50,000–100,000 miles; others treat it as a lifetime fluid. In practice, fluid that has darkened significantly, become contaminated, or smells burned should be changed regardless of mileage. When you come in, we inspect the fluid condition and recommend service only if it is warranted.",
  },
  {
    question: "My car has electric power steering — does it need service?",
    answer:
      "Electric power steering (EPS) systems have no hydraulic fluid — steering assistance is provided entirely by an electric motor. If your vehicle has EPS and you are experiencing steering issues (heavy steering, pulling, vibration through the wheel), those require electronic diagnosis — not a fluid service. Bring it in and we will identify the cause.",
  },
]

export const metadata: Metadata = {
  title: "Power Steering Service — Springfield, OR | Two Guys Automotive Repair",
  description:
    "Power steering fluid flush in Springfield, OR. Protect your steering pump and rack from wear. Serving Springfield, Eugene & Junction City. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Power Steering Service — Springfield, OR | Two Guys Automotive",
    description:
      "Power steering fluid flush in Springfield, OR. Protect your pump and steering rack. Walk-ins welcome. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function PowerSteeringServicePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Power Steering Service", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Power Steering Service",
            PAGE_URL,
            "Power steering fluid flush in Springfield, OR — removes degraded fluid to protect the steering pump, rack, and seals from premature wear."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Power Steering Service</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Power Steering Service{" "}
            <br />
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Fluid flush to maintain smooth, responsive steering and protect your pump and rack from
            premature wear.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Power steering fluid transfers hydraulic pressure from the pump to the steering rack,
              making low-speed maneuvering effortless. Like all hydraulic fluids, it degrades over
              time — it oxidizes, picks up heat cycles, and accumulates microscopic metal particles
              from the pump and steering gear. Degraded fluid loses its lubricating properties and
              becomes abrasive, accelerating wear on the power steering pump and steering rack —
              two components that are expensive to replace.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Warning Signs Your Power Steering Needs Service
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Whining or moaning noise when turning the steering wheel, especially at low speed",
                "Stiff or heavy steering during slow maneuvers or when parking",
                "Visible fluid leak under the front of the vehicle (clear to amber fluid)",
                "Foamy or dark brown fluid visible in the power steering reservoir",
                "Steering wheel that vibrates or feels less precise than usual",
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
              A Top-Off Is Not a Service
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Simply adding fluid to the reservoir dilutes the old degraded fluid rather than
              removing it. A proper power steering flush exchanges all of the fluid from the pump,
              reservoir, and steering rack, then refills with fresh fluid matched to your vehicle&apos;s
              specification. Fluid type matters: using the wrong power steering fluid, or
              substituting ATF where a specific fluid is required, can damage seals and cause leaks.
              We always use the correct fluid for your vehicle.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Serving Hydraulic Power Steering Vehicles
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              This service applies to vehicles with hydraulic power steering systems. If your
              vehicle has electric power steering (EPS), steering issues require electronic
              diagnosis rather than a fluid service. For hydraulic systems in Springfield,
              Eugene, and Junction City area vehicles, call{" "}
              <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a>{" "}
              or walk in at 191 N 39th St, Springfield.
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
            Power Steering Service FAQ
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
        heading="Power Steering Service in Springfield"
        subtext="Protect your pump and rack before wear becomes a problem. 191 N 39th St, Springfield, OR. Walk-ins welcome."
      />
    </>
  )
}
