import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/oil-change-springfield-or`

const FAQS = [
  {
    question: "How often should I change my oil?",
    answer:
      "Conventional oil typically needs changing every 3,000–5,000 miles. Full synthetic oil can often go 5,000–7,500 miles or longer depending on your vehicle and driving conditions. Your owner's manual and your car's oil-life monitor are the most reliable guides — we can help you find the right interval for your specific engine when you come in.",
  },
  {
    question: "Does Two Guys Automotive offer walk-in oil changes?",
    answer:
      "Yes. No appointment is needed for an oil change at our Springfield, OR shop. Walk in during business hours — Monday through Friday 8:00 AM to 5:30 PM, Saturday 8:00 AM to 2:00 PM — and we will get you in and out efficiently. We are located at 191 N 39th St, Springfield.",
  },
  {
    question: "What type of oil does my car need?",
    answer:
      "Oil grade and type depend on your vehicle's engine specification. We use the grade listed in your owner's manual — whether that is conventional 5W-30, full synthetic 0W-20, or a high-mileage blend. If you are unsure what your car takes, we look it up when you arrive. We stock conventional and full synthetic oils for most domestic, Japanese, Korean, and European vehicles.",
  },
]

export const metadata: Metadata = {
  title: "Oil Change in Springfield, OR | Two Guys Automotive Repair",
  description:
    "Fast oil change service in Springfield, OR — conventional and synthetic, walk-ins welcome. No appointment needed. 191 N 39th St. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Oil Change in Springfield, OR | Two Guys Automotive Repair",
    description:
      "Walk-in oil change service in Springfield, OR. Conventional or synthetic. Multi-point inspection included. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function OilChangePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Oil Change", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Oil Change",
            PAGE_URL,
            "Fast, affordable oil change service in Springfield, OR — conventional or synthetic, multi-point inspection included. Walk-ins welcome."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Oil Change</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Oil Change in{" "}
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Conventional and synthetic oil changes — no appointment needed. Walk in at 191 N 39th St,
            Springfield, OR 97478.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Regular oil changes are the single most cost-effective maintenance item for engine
              longevity. Engine oil lubricates hundreds of moving metal parts — when it breaks down,
              microscopic metal-on-metal contact causes cumulative wear that shortens engine life.
              At Two Guys Automotive Repair, we provide fast, affordable oil change service in
              Springfield, OR with no appointment required.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              What Is Included in Our Oil Change
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Drain old oil and inspect the drain plug threads and washer",
                "Install a new oil filter",
                "Refill with the correct oil grade and capacity for your specific engine",
                "Multi-point inspection of brakes, tire condition, fluid levels, and lights",
                "Reset oil life monitor (on equipped vehicles)",
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
              Conventional vs. Synthetic Oil
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Both are available at our Springfield shop. Full synthetic oil offers better thermal
              stability, superior protection during cold startups (when most engine wear occurs), and
              longer drain intervals. It costs more per change but is cost-effective over the life
              of the engine due to fewer service visits. Conventional oil is entirely appropriate
              for older engines with simpler designs and for vehicles within their factory-specified
              drain intervals.
            </p>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              High-mileage oil blends, which contain seal conditioners and additional detergents,
              are a good choice for vehicles over 75,000 miles that show minor leaks or consumption.
              We will recommend the right oil type for your specific vehicle and driving conditions.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Walk-In Oil Changes Near Springfield &amp; Eugene
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              No appointment is needed. Our Springfield shop at 191 N 39th St is open Monday through
              Friday 8:00 AM to 5:30 PM and Saturday 8:00 AM to 2:00 PM. Many customers from Eugene
              and Junction City combine an oil change visit with other errands in Springfield. Come
              in, or call <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a> ahead of time.
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
            Oil Change FAQ
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
        heading="Get an Oil Change in Springfield Today"
        subtext="Walk in — no appointment needed. 191 N 39th St, Springfield, OR. Mon–Fri 8 AM–5:30 PM, Sat 8 AM–2 PM."
      />
    </>
  )
}
