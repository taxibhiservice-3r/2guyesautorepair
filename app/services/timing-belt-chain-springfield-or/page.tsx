import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/timing-belt-chain-springfield-or`

const FAQS = [
  {
    question: "How do I know if my car has a timing belt or timing chain?",
    answer:
      "Your owner's manual lists this in the maintenance schedule — timing belts have a required replacement interval (typically 60,000–105,000 miles) while timing chains are considered lifetime components. As a general rule, most European and Japanese vehicles from the 1990s through 2010s use timing belts; many domestic vehicles and most modern engines use timing chains. When you come in, we can confirm which your vehicle has.",
  },
  {
    question: "What happens if my timing belt breaks?",
    answer:
      "In an interference engine — which describes most modern vehicles — a broken timing belt causes the pistons and valves to collide. This destroys the engine instantly, typically requiring a rebuild or replacement costing several thousand dollars. In a non-interference engine, the car simply stops. Either way, a broken belt is catastrophic. Replace it on schedule — do not wait for symptoms.",
  },
  {
    question: "When should I replace my timing belt?",
    answer:
      "Follow the manufacturer's replacement interval in your owner's manual — this is typically 60,000 to 105,000 miles depending on the vehicle. Time matters as well as mileage: even on a low-mileage vehicle, a belt that is 7–10 years old can crack and fail. If you are unsure of your belt's history or age, have it inspected.",
  },
]

export const metadata: Metadata = {
  title: "Timing Belt & Chain Replacement — Springfield, OR | Two Guys Automotive",
  description:
    "Timing belt and chain replacement in Springfield, OR. We replace the complete package — belt, tensioner, water pump — before failure destroys your engine. (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Timing Belt & Chain Replacement — Springfield, OR | Two Guys Automotive",
    description:
      "Timing belt and chain service in Springfield, OR. Complete replacement package — belt, tensioners, water pump. Serving Eugene & Junction City. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function TimingBeltChainPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Timing Belt & Chain", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Timing Belt & Chain Replacement",
            PAGE_URL,
            "Timing belt and chain replacement in Springfield, OR. Complete package including tensioners and water pump — before failure causes engine damage."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Timing Belt &amp; Chain</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Timing Belt &amp; Chain
            <br />
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Complete timing belt and chain service — before failure causes engine damage. Serving
            Springfield, Eugene, and Junction City, OR.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              The timing belt or timing chain controls the precise relationship between your engine&apos;s
              crankshaft and camshaft — ensuring valves open and close at exactly the right moment
              in the combustion cycle. When this component fails in an interference engine, pistons
              strike open valves and destroy the engine in milliseconds. At Two Guys Automotive
              Repair in Springfield, OR, timing belt and chain service is one of the most important
              preventive repairs we perform.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Timing Belt vs. Timing Chain
            </h2>
            <p className="mb-3 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              <strong style={{ color: "var(--color-primary)" }}>Timing belts</strong> are made of
              reinforced rubber and are common in many European, Japanese, and Korean vehicles from
              the 1990s through early 2010s. Unlike chains, they do not give audible warning before
              breaking — they simply fail. Manufacturers specify a replacement interval (commonly
              60,000–105,000 miles) that must be followed regardless of how the belt looks.
            </p>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              <strong style={{ color: "var(--color-primary)" }}>Timing chains</strong> are steel
              and are designed to last the life of the engine in most cases — but they stretch over
              time and can wear the tensioners and guides that keep them in position. A stretched
              chain produces a rattling or ticking noise on cold start and, in severe cases, causes
              misfires and timing-related fault codes.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Why We Replace the Complete Package
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Replacing only the timing belt is not sufficient. The water pump, belt tensioner, and
              idler pulleys all share the same replacement interval — they run off the same belt and
              experience the same wear. If a tensioner or water pump fails after a new belt is
              installed, the belt goes with it. We replace the complete package: belt, tensioner,
              idler pulleys, and water pump. This is the correct service, not the minimum viable
              one.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Warning Signs of Timing Chain Wear
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Rattling or ticking from the front of the engine on cold startup",
                "Check engine light with timing-related codes (P0016, P0017, P0008)",
                "Rough idle or misfires at idle",
                "Engine that takes noticeably longer to start",
                "Dirty oil history — oil starvation accelerates chain and guide wear",
              ].map((s) => (
                <li key={s} className="flex gap-3 text-sm" style={{ color: "var(--color-secondary)" }}>
                  <span style={{ color: "var(--color-accent)" }}>—</span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              If you are approaching your timing belt interval or noticing any of the chain
              symptoms above, contact our Springfield shop at{" "}
              <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a>{" "}
              or walk in at 191 N 39th St.
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
            Timing Belt &amp; Chain FAQ
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
        heading="Don&apos;t Wait on Timing Belt Service"
        subtext="A broken timing belt can destroy an engine. Schedule service at 191 N 39th St, Springfield, OR."
      />
    </>
  )
}
