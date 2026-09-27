import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema, buildServicePageSchema, buildFaqSchema } from "@/lib/schemas"
import { SITE_URL } from "@/lib/constants"
import { CtaBlock } from "@/components/CtaBlock"
import { ServiceAreaLinks } from "@/components/ServiceAreaLinks"

const PAGE_URL = `${SITE_URL}/services/auto-diagnostics-springfield-or`

const FAQS = [
  {
    question: "What does a check engine light mean?",
    answer:
      "A check engine light means your vehicle's computer has detected an anomaly in one of its monitored systems — engine, emissions, transmission, or drivetrain — and logged a diagnostic trouble code (DTC). The light itself does not tell you what is wrong; it tells you that something triggered a fault. A professional scan with live data interpretation identifies the actual cause.",
  },
  {
    question: "How much does a diagnostic scan cost in Springfield, OR?",
    answer:
      "Call (541) 744-3626 or come in to 191 N 39th St for current pricing. A diagnostic scan at Two Guys Automotive Repair reads fault codes and reviews live sensor data to identify the root cause — not just read a code and recommend a part swap. Accurate diagnosis saves money by avoiding unnecessary parts replacements.",
  },
  {
    question: "Will you clear my check engine light after the diagnosis?",
    answer:
      "Yes. After we identify the cause and complete the necessary repair, we clear the fault codes and verify the system is operating correctly. If a light returns shortly after clearing, it indicates the underlying issue was not fully resolved — we will investigate further rather than just clearing the code again.",
  },
]

export const metadata: Metadata = {
  title: "Auto Diagnostics & Check Engine Light — Springfield, OR | Two Guys Automotive",
  description:
    "Check engine light on in Springfield, OR? We scan and diagnose the root cause with professional equipment. Honest results, no guesswork. Call (541) 744-3626.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Auto Diagnostics — Check Engine Light Springfield, OR | Two Guys Automotive",
    description:
      "Professional auto diagnostics in Springfield, OR. We read fault codes and live sensor data to find the real cause — not just guess. (541) 744-3626.",
    url: PAGE_URL,
  },
}

export default function AutoDiagnosticsPage() {
  return (
    <>
      <JsonLd
        schema={[
          buildBreadcrumbSchema([
            { name: "Home", url: SITE_URL },
            { name: "Services", url: `${SITE_URL}/services` },
            { name: "Auto Diagnostics", url: PAGE_URL },
          ]),
          buildServicePageSchema(
            "Auto Diagnostics",
            PAGE_URL,
            "Professional auto diagnostics and check engine light diagnosis in Springfield, OR. We read fault codes and live sensor data to identify root causes accurately."
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
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>Auto Diagnostics</li>
            </ol>
          </nav>
          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Diagnostics &amp;{" "}
            <span style={{ color: "var(--color-accent)" }}>Check Engine Light</span>
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Professional diagnostic scanning and root-cause analysis in Springfield, OR. We tell you
            exactly what is wrong before recommending a repair.
          </p>
        </div>
      </section>

      {/* Body content */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-5 text-base leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              When your check engine light comes on, your vehicle&apos;s computer has already logged a
              diagnostic trouble code (DTC) identifying which system triggered the fault. At Two
              Guys Automotive Repair in Springfield, OR, our technicians use professional diagnostic
              equipment to read those codes and — more importantly — to interpret what they actually
              mean before recommending a single repair.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              What Triggers a Check Engine Light?
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Modern vehicles monitor dozens of systems continuously. A check engine light can
              indicate anything from a loose gas cap (EVAP leak code) to a failing oxygen sensor,
              misfiring cylinder, catalytic converter efficiency issue, mass airflow sensor fault,
              or a problem with the variable valve timing system. The fault code alone does not
              always identify the repair — accurate diagnosis requires reading live sensor data
              and understanding system relationships.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Our Diagnostic Process
            </h2>
            <ul className="mb-5 space-y-2">
              {[
                "Read all stored, pending, and permanent fault codes",
                "Review live sensor data streams in real-time",
                "Compare values against manufacturer specifications for your vehicle",
                "Identify root cause, not just the triggered fault",
                "Explain the diagnosis in plain language before recommending any repair",
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
              A Scan Is Not the Same as a Diagnosis
            </h2>
            <p className="mb-5 text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Many auto parts stores offer free fault code reads — but a code is a symptom, not a
              diagnosis. A P0420 code (catalytic converter efficiency) could mean the catalytic
              converter is failing, but it can also be triggered by a faulty downstream oxygen
              sensor, an exhaust leak before the sensor, or coolant entering the combustion chamber.
              Replacing the catalytic converter without investigating the root cause wastes hundreds
              of dollars. We find the actual problem first.
            </p>

            <h2
              className="mb-3 mt-8 text-2xl font-extrabold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Warning Lights We Diagnose
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
              Check engine light (CEL), ABS warning, traction control, TPMS, oil pressure warning,
              battery/charging system, and transmission warning. If a light is on and you are
              unsure what it means, bring your vehicle in — we will tell you exactly what your car
              needs. Our Springfield shop is at 191 N 39th St; call{" "}
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
            Auto Diagnostics FAQ
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
        heading="Check Engine Light On? Come In."
        subtext="We diagnose the root cause before recommending any repair. 191 N 39th St, Springfield, OR. Walk-ins welcome."
      />
    </>
  )
}
