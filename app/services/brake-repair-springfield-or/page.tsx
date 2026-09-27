import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/brake-repair-springfield-or`

const FAQS = [
  {
    question: "How do I know if I need brake repair?",
    answer:
      "Common warning signs include squealing or grinding noise when braking, a pulsating or spongy brake pedal, the vehicle pulling to one side when stopping, a brake warning light on the dashboard, or a noticeable increase in stopping distance. Any of these symptoms warrants an inspection — don't wait until the noise becomes a grind.",
  },
  {
    question: "How much does brake repair cost in Springfield, OR?",
    answer:
      "Brake repair cost depends on what needs replacing. A standard pad replacement is significantly less expensive than replacing worn rotors or a seized caliper. At Two Guys Automotive Repair, we inspect the complete brake system and only recommend replacing parts that are actually worn — we won't upsell you on components that still have life left. Call (541) 744-3626 for a current estimate.",
  },
  {
    question: "Is it safe to drive with worn brakes?",
    answer:
      "No. Worn brake pads can score rotors, turning a simple pad replacement into a more expensive rotor replacement. More importantly, degraded brakes extend your stopping distance and increase the risk of an accident. If you're hearing grinding or noticing a change in braking feel, come in as soon as possible — walk-ins are welcome at 191 N 39th St, Springfield.",
  },
]

export const metadata: Metadata = {
  title: "Brake Repair in Springfield, OR | Two Guys Automotive Repair",
  description:
    "Brake repair in Springfield, OR — pads, rotors, calipers, and fluid. Honest inspection, no unnecessary upsells. Walk-ins welcome. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Brake Repair in Springfield, OR | Two Guys Automotive Repair",
    description:
      "Complete brake service — pads, rotors, calipers, fluid. Springfield, OR mechanic shop. Walk-ins welcome. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function BrakeRepairPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Brake Repair", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Brake Repair",
            PAGE_URL,
            "Complete brake repair service in Springfield, OR — pads, rotors, calipers, and fluid. Honest inspection with no unnecessary upsells."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Brake Repair</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Brake Repair in{" "}
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Pads, rotors, calipers, and fluid — complete brake system service at 191 N 39th St,
            Springfield, OR 97478.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Brake repair is the most safety-critical service your vehicle requires. At Two Guys
              Automotive Repair in Springfield, OR, our mechanics inspect and service complete brake
              systems — not just the pads. Before recommending any repair, we assess every component:
              brake pads, rotors, calipers, brake lines, and brake fluid condition.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Warning Signs Your Brakes Need Attention
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Squealing or grinding noise when you apply the brakes",
                "Brake pedal feels spongy, low, or pulsates underfoot",
                "Vehicle pulls to one side when stopping",
                "Brake warning light illuminated on the dashboard",
                "Increased stopping distance compared to normal",
              ].map((s) => (
                <li key={s} className="flex gap-3 text-sm" style={{ color: "var(--color-secondary)" }}>
                  <span style={{ color: "var(--color-accent)" }}>—</span>
                  {s}
                </li>
              ))}
            </ul>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Any of these symptoms warrants an immediate inspection. Modern brake systems have tight
              tolerances — worn pads can score rotors and turn a straightforward pad replacement into
              a full rotor replacement. Catching issues early almost always costs less.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              What Our Brake Service Includes
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Our technicians measure brake pad thickness and rotor depth against manufacturer
              specifications. If pads are worn below the minimum safe thickness, we replace them.
              Rotors are inspected for warping, grooving, and minimum thickness — a warped rotor is
              the most common cause of pedal pulsation. When rotors fall below spec, they are
              replaced. We also inspect caliper slides and pistons for seizing, and check brake
              fluid for moisture content.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Why Brake Fluid Matters
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Brake fluid is hygroscopic — it absorbs moisture over time, which lowers its boiling
              point. Under heavy use, such as long descents or repeated hard stops, degraded fluid
              can boil and cause a spongy pedal with temporarily reduced stopping power. We check
              fluid condition at every brake inspection and recommend a flush when moisture content
              is high.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Honest Brake Repair in Springfield
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Two Guys Automotive Repair is a locally owned shop serving Springfield, Eugene, and
              Junction City, OR. Our mechanics tell you what is worn and what is not — we do not
              recommend replacing parts that still have useful life. If your pads have 40% life
              remaining, we will tell you that. This approach has earned us a 4.6-star rating on
              Google and a 4.8-star rating on SureCritic across more than 136 verified reviews.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Bring your vehicle to 191 N 39th St, Springfield. Walk-ins are welcome during
              business hours, or call <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a> to let us know you are coming.
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
            Brake Repair FAQ
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
        heading="Schedule Brake Repair in Springfield"
        subtext="Walk in or call — 191 N 39th St, Springfield, OR. Mon–Fri 8 AM–5:30 PM, Sat 8 AM–2 PM."
      />
    </>
  )
}
