import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/fuel-injection-service-springfield-or`

const FAQS = [
  {
    question: "How do I know if my fuel injectors need cleaning?",
    answer:
      "Common signs include a noticeable drop in fuel economy, rough idle or engine vibration at a stop, hesitation or stumbling when you accelerate, hard starts especially when the engine is warm, or a failed or borderline emissions test. These symptoms can have other causes as well — a proper diagnosis will confirm whether dirty injectors are the issue.",
  },
  {
    question: "Will fuel injection service improve my fuel economy?",
    answer:
      "For vehicles with deposit buildup on injectors and the throttle body, yes — cleaning restores the correct spray pattern and airflow, allowing the engine to burn fuel more efficiently. The improvement is most noticeable on vehicles with symptoms like rough idle or declining MPG. On a vehicle with clean injectors and no symptoms, the service is less likely to produce a measurable change.",
  },
  {
    question: "How often should I get a fuel injection service?",
    answer:
      "There is no universal interval. Most vehicles benefit from a fuel injection service when symptoms are present — typically after 45,000–75,000 miles of accumulation. Using quality fuel from major branded stations and periodically adding a fuel system cleaner can slow deposit buildup. If you are experiencing idle quality or fuel economy issues, have the system inspected before committing to a service.",
  },
]

export const metadata: Metadata = {
  title: "Fuel Injection Service — Springfield, OR | Two Guys Automotive Repair",
  description:
    "Fuel injection service in Springfield, OR — clean injectors and throttle body to restore fuel economy and smooth idle. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Fuel Injection Service — Springfield, OR | Two Guys Automotive",
    description:
      "Injector and throttle body cleaning in Springfield, OR. Restore fuel economy and idle quality. Serving Eugene & Junction City. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function FuelInjectionServicePage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Fuel Injection Service", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Fuel Injection Service",
            PAGE_URL,
            "Fuel injection service in Springfield, OR — professional injector and throttle body cleaning to restore fuel economy, smooth idle, and engine performance."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Fuel Injection Service</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Fuel Injection Service{" "}
            <br />
            <span style={{ color: "var(--color-accent)" }}>Springfield, OR</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Injector and throttle body cleaning to restore fuel economy, smooth idle, and clean
            acceleration in Springfield, Eugene, and Junction City area vehicles.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Fuel injectors are precision components that spray a measured mist of fuel into the
              combustion chamber at exactly the right moment. When deposits accumulate on injector
              tips — from fuel varnish and combustion byproducts — the spray pattern degrades.
              Instead of a fine mist, you get an uneven stream. The result is incomplete combustion:
              reduced fuel economy, rough idle, hesitation, and increased emissions.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Symptoms of Dirty Fuel Injectors
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Noticeable decline in fuel economy over time",
                "Rough idle or engine vibration at a stop",
                "Hesitation or stumbling when accelerating from low speed",
                "Hard starts, particularly when the engine is warm",
                "Failed or borderline emissions test",
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
              What Our Fuel Injection Service Addresses
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Our fuel injection service cleans the complete delivery system. Injector tips are
              cleaned to restore the correct spray pattern. The throttle body and throttle plate
              are cleaned of carbon buildup — carbon accumulation on the throttle plate causes a
              lean condition that the engine&apos;s computer must constantly compensate for, directly
              affecting idle quality and low-speed response. Intake manifold passages are also
              addressed where accessible.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Is Fuel Injection Service Worth It?
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              For vehicles that have accumulated deposits — typically after 45,000–75,000 miles
              when symptoms are present — a professional cleaning restores injector spray patterns
              and throttle body airflow to near-original condition. The improvement in idle quality
              and fuel economy is often immediately noticeable. It is not a service every vehicle
              needs at a fixed interval; but when symptoms point to fuel delivery issues, it is
              far more cost-effective than injector replacement. Call{" "}
              <a href="tel:+15417443626" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>(541) 744-3626</a>{" "}
              or walk in to our Springfield shop at 191 N 39th St.
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
            Fuel Injection Service FAQ
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
        heading="Restore Your Engine&apos;s Performance"
        subtext="Fuel injection service in Springfield, OR. Walk in at 191 N 39th St or call (541) 744-3626."
      />
    </>
  )
}
