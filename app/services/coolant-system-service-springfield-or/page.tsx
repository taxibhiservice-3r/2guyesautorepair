import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/coolant-system-service-springfield-or`

const FAQS = [
  {
    question: "How often should I flush my coolant?",
    answer:
      "Most manufacturers recommend a coolant flush every 30,000–50,000 miles or every 2–5 years, depending on the coolant type. Some modern extended-life coolants are rated for up to 100,000 miles or 5 years. If you do not know when your coolant was last changed, we can inspect the fluid and test the corrosion inhibitor level to determine whether service is needed.",
  },
  {
    question: "What causes an engine to overheat?",
    answer:
      "Common causes include low coolant level (from a leak or consumption), a failed thermostat, a clogged radiator, a failed water pump, a blown head gasket, or degraded coolant that has lost its ability to transfer heat effectively. Overheating can cause severe and expensive engine damage quickly — if your temperature gauge rises toward red, pull over safely and call us.",
  },
  {
    question: "Can I mix different types of coolant?",
    answer:
      "No. Mixing coolant types — for example, green conventional coolant with OAT (orange/red) or HOAT formula — can cause chemical reactions that degrade the inhibitors and create sludge. Each vehicle has a manufacturer-specified coolant type. We always use the correct coolant for your vehicle and never mix types during a flush.",
  },
]

export const metadata: Metadata = {
  title: "Coolant System Service — Springfield, OR | Two Guys Automotive Repair",
  description:
    "Coolant system flush and refill in Springfield, OR. Prevents overheating and internal corrosion. Correct coolant spec for your vehicle. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Coolant System Service — Springfield, OR | Two Guys Automotive",
    description:
      "Coolant flush and refill in Springfield, OR. Prevent overheating and radiator damage. Serving Eugene & Junction City. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function CoolantSystemServicePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Coolant System Service", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Coolant System Service",
            PAGE_URL,
            "Coolant system flush and refill in Springfield, OR. Prevents overheating and internal corrosion by removing degraded fluid and refilling with the correct coolant specification."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Coolant System Service</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Coolant System Service{" "}
            <br />
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Flush and refill to prevent overheating and protect your radiator, water pump, and
            engine internals from corrosion.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Engine coolant does two jobs: it transfers heat away from the engine to prevent
              overheating, and it contains corrosion inhibitors that protect metal components —
              the radiator, water pump, heater core, and the coolant passages in your engine block
              and cylinder head. Over time, those inhibitors deplete. Once they are gone, the
              coolant becomes acidic and begins attacking metal from the inside. Regular coolant
              system service at Two Guys Automotive Repair in Springfield, OR protects these
              components before damage occurs.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Signs Your Cooling System Needs Attention
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Engine temperature gauge running higher than normal",
                "Overheating warning or steam visible from under the hood",
                "Sweet smell inside the cabin (heater core beginning to fail or leaking)",
                "Coolant that is brown, rusty, or contains visible debris",
                "White smoke from the exhaust (coolant entering the combustion chamber)",
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
              What Our Coolant Service Includes
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              We flush the cooling system completely, removing all of the old degraded coolant along
              with rust particles and deposits it carries. The system is then refilled with the
              correct coolant specification for your vehicle — and that specification matters.
              Using the wrong coolant type (for example, a universal green coolant in a vehicle
              that requires OAT or HOAT formula) can cause premature seal failure and accelerated
              corrosion. We always match coolant to your vehicle&apos;s requirements.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Coolant Service Intervals
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Most manufacturers recommend a coolant flush every 30,000–50,000 miles or every 2–5
              years. Some modern extended-life coolants are rated longer. If you do not know when
              your coolant was last serviced, a visual inspection and a chemical test strip can
              tell us whether the corrosion inhibitors are still active. Do not wait for an
              overheating event to find out. Bring your vehicle to 191 N 39th St, Springfield, or
              call <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a>.
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
            Coolant System FAQ
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
        heading="Coolant Service in Springfield, OR"
        subtext="Protect your radiator and water pump before corrosion sets in. Walk in or call (541) 744-3626."
      />
    </>
  )
}
