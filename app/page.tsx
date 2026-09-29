import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildFaqSchema } from "@/lib/schemas"
import { NAP, SERVICE_PAGES, REVIEWS, RATINGS, HOURS, SERVICE_AREA, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Auto Repair Springfield Oregon | Two Guys Automotive Repair",
  description:
    "Mechanic near you in Springfield, OR — walk-ins welcome, fair prices, honest work. Brakes, oil changes, transmission, diagnostics & more. Call (541) 744-3626.",
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Auto Repair Springfield Oregon | Two Guys Automotive Repair",
    description:
      "Mechanic near you in Springfield, OR — walk-ins welcome. Brakes, oil changes, transmission, diagnostics & more. (541) 744-3626.",
    url: SITE_URL,
  },
}

const FAQS = [
  {
    question: "Where is the nearest auto repair shop in Springfield, Oregon?",
    answer:
      "Two Guys Automotive Repair is located at 191 N 39th St, Springfield, OR 97478 — a full-service auto repair shop and mechanic garage serving Springfield, Eugene, and the surrounding area. Call (541) 744-3626.",
  },
  {
    question: "What are Two Guys Automotive Repair's hours?",
    answer:
      "We're open Monday through Friday 8:00 AM to 5:30 PM, and Saturday 8:00 AM to 2:00 PM. We're closed on Sundays. Walk-ins are always welcome.",
  },
  {
    question: "What auto repair services do you offer in Springfield, OR?",
    answer:
      "Our Springfield auto shop offers brakes, transmission service (filter service and flush), fuel injection service, coolant system service, auto diagnostics, timing belt and chain replacement, oil changes, and power steering service.",
  },
  {
    question: "How do I find a good mechanic near me in Springfield or Eugene?",
    answer:
      "Two Guys Automotive Repair — 191 N 39th St, Springfield, OR 97478 — is the mechanic near you for Springfield, Eugene, and Junction City. Locally owned with fair prices, honest diagnostics, and no unnecessary upsells. Walk in any time or call (541) 744-3626.",
  },
  {
    question: "Where can I get an oil change near me in Springfield, OR?",
    answer:
      "We offer fast oil change service at 191 N 39th St, Springfield, OR. Conventional and synthetic oil changes available. No appointment needed — walk-ins welcome. Call (541) 744-3626.",
  },
  {
    question: "Do you perform computer diagnostics for check engine lights?",
    answer:
      "Yes. Our mechanics use professional diagnostic equipment to read fault codes and live sensor data to identify the exact cause of any warning light before recommending a repair.",
  },
  {
    question: "Does Two Guys Automotive serve Eugene and Junction City?",
    answer:
      "Yes. While our auto repair shop is located in Springfield, OR, we regularly serve customers from Eugene, Junction City, and the wider Lane County area. Call ahead or walk in at 191 N 39th St.",
  },
  {
    question: "How often should I change my transmission fluid?",
    answer:
      "Most manufacturers recommend transmission service every 30,000 to 60,000 miles. Our mechanics can inspect your fluid and advise based on your vehicle's condition and history.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd schema={buildFaqSchema(FAQS)} />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        aria-label="Hero"
        className="relative flex min-h-[90dvh] flex-col justify-center px-4 sm:px-6 sm:min-h-[80dvh]"
        style={{ backgroundColor: "var(--color-base)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 40px)",
          }}
        />

        <div className="relative mx-auto w-full max-w-6xl">
          <p
            className="mb-3 text-sm font-semibold uppercase tracking-widest"
            style={{ color: "var(--color-accent)" }}
          >
            Auto Repair Shop &middot; Springfield, Oregon
          </p>

          {/* Primary keyword in H1 for local SEO */}
          <h1
            className="mb-3 text-6xl font-extrabold leading-none sm:text-8xl lg:text-9xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Springfield&apos;s
            <br />
            <span style={{ color: "var(--color-accent)" }}>Auto Repair</span>
            <br />
            Shop.
          </h1>

          <p
            className="mb-2 max-w-lg text-xl font-semibold sm:text-2xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Fair Prices. Honest Work.
          </p>

          <p
            className="mb-2 max-w-lg text-base"
            style={{ color: "var(--color-secondary)" }}
          >
            Your mechanic near Springfield &amp; Eugene, OR — brakes, oil changes,
            transmission, diagnostics, timing belts, and more. Walk in any time.
          </p>

          <div className="mb-8 flex flex-wrap gap-x-5 gap-y-1">
            {RATINGS.map((r) => (
              <span key={r.platform} className="text-sm" style={{ color: "var(--color-secondary)" }}>
                <span style={{ color: "var(--color-accent)" }}>&#9733;</span>{" "}
                <strong style={{ color: "var(--color-primary)" }}>{r.score}</strong>{" "}
                {r.platform}
                {r.count != null && ` (${r.count})`}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={NAP.phone.href}
              className="inline-flex items-center gap-2 rounded-sm px-6 py-3 text-base font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Call {NAP.phone.display}
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-sm border px-6 py-3 text-base font-semibold transition-colors hover:border-white hover:text-white"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-secondary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="services-heading"
        className="border-t px-4 py-16 sm:px-6 sm:py-20"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="services-heading"
            className="mb-2 text-4xl font-extrabold sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Repair Services in Springfield, OR
          </h2>
          <p className="mb-10 text-sm" style={{ color: "var(--color-secondary)" }}>
            One mechanic shop, every service your vehicle needs — brakes,{" "}
            <Link href="/services/oil-change-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              oil changes
            </Link>
            , transmission, diagnostics, and more.
          </p>

          <div
            className="grid grid-cols-2 gap-px border sm:grid-cols-3 lg:grid-cols-4"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
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
                <span
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--color-secondary)" }}
                >
                  {s.shortDesc}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-sm border px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-secondary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Full Service Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ───────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="reviews-heading"
        className="border-t px-4 py-16 sm:px-6 sm:py-20"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="reviews-heading"
            className="mb-2 text-4xl font-extrabold sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            What Springfield Drivers Say
          </h2>
          <div className="mb-8 flex flex-wrap gap-x-5 gap-y-1">
            {RATINGS.map((r) => (
              <span key={r.platform} className="text-sm" style={{ color: "var(--color-secondary)" }}>
                <span style={{ color: "var(--color-accent)" }}>&#9733;</span>{" "}
                <strong style={{ color: "var(--color-primary)" }}>{r.score}</strong> on{" "}
                {r.platform}
                {r.count != null && ` · ${r.count} reviews`}
              </span>
            ))}
          </div>

          <div
            className="grid gap-px border sm:grid-cols-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
          >
            {REVIEWS.map((r) => (
              <blockquote
                key={r.author}
                className="flex flex-col justify-between gap-6 p-6"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <p className="text-base leading-relaxed" style={{ color: "var(--color-primary)" }}>
                  &ldquo;{r.text}&rdquo;
                </p>
                <footer className="text-sm" style={{ color: "var(--color-secondary)" }}>
                  <cite
                    className="not-italic font-semibold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {r.author}
                  </cite>
                  {" · "}
                  {r.platform}
                </footer>
              </blockquote>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 rounded-sm border px-6 py-3 text-sm font-semibold transition-colors hover:border-white hover:text-white"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-secondary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* ── Service Area ──────────────────────────────────────────────────── */}
      <section
        aria-labelledby="area-heading"
        className="border-t px-4 py-16 sm:px-6 sm:py-20"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="area-heading"
            className="mb-4 text-4xl font-extrabold sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Serving Springfield, Eugene &amp; Junction City
          </h2>
          <p className="mb-8 max-w-2xl text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
            Our auto repair garage is located at 191 N 39th St in Springfield, OR —
            conveniently accessible from Eugene, Junction City, and throughout Lane County.
            Whether you need a mechanic near you for a quick{" "}
            <Link href="/services/oil-change-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              oil change
            </Link>
            , a{" "}
            <Link href="/services/brake-repair-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              brake inspection
            </Link>
            , or a full{" "}
            <Link href="/services/auto-diagnostics-springfield-or" className="hover:text-white transition-colors" style={{ color: "var(--color-accent)" }}>
              auto diagnostic
            </Link>
            , we&apos;re the auto shop Springfield and Eugene drivers trust.
          </p>

          <div
            className="grid gap-px border sm:grid-cols-3"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
          >
            {SERVICE_AREA.map((a) => (
              <div
                key={a.city}
                className="p-5"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
                <p
                  className="text-2xl font-extrabold"
                  style={{ fontFamily: "var(--font-heading)", color: a.primary ? "var(--color-accent)" : "var(--color-primary)" }}
                >
                  {a.city}, {a.state}
                </p>
                <p className="mt-1 text-xs" style={{ color: "var(--color-secondary)" }}>
                  {a.primary
                    ? "Our shop is here — 191 N 39th St"
                    : "Customers drive to us from here regularly"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section
        aria-labelledby="faq-heading"
        className="border-t px-4 py-16 sm:px-6 sm:py-20"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="faq-heading"
            className="mb-10 text-4xl font-extrabold sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Auto Repair FAQ — Springfield, OR
          </h2>
          <div
            className="grid gap-px border sm:grid-cols-2"
            style={{
              borderColor: "var(--color-border)",
              backgroundColor: "var(--color-border)",
            }}
          >
            {FAQS.map((faq) => (
              <div
                key={faq.question}
                className="p-5"
                style={{ backgroundColor: "var(--color-panel)" }}
              >
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

      {/* ── Hours + Map ───────────────────────────────────────────────────── */}
      <section
        aria-labelledby="hours-heading"
        className="border-t px-4 py-16 sm:px-6 sm:py-20"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 sm:grid-cols-2">
          <div>
            <h2
              id="hours-heading"
              className="mb-6 text-4xl font-extrabold sm:text-5xl"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Hours &amp; Location
            </h2>
            <table className="w-full text-sm">
              <tbody>
                {HOURS.map((h) => (
                  <tr
                    key={h.day}
                    className="border-b"
                    style={{ borderColor: "var(--color-border)" }}
                  >
                    <td className="py-2 pr-6 font-medium" style={{ color: "var(--color-primary)" }}>
                      {h.day}
                    </td>
                    <td style={{ color: "var(--color-secondary)" }}>{h.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <address
              className="mt-6 not-italic text-sm leading-relaxed"
              style={{ color: "var(--color-secondary)" }}
            >
              <a
                href={NAP.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                {NAP.address.full}
              </a>
              <br />
              <a
                href={NAP.phone.href}
                className="mt-1 inline-block font-semibold transition-opacity hover:opacity-80"
                style={{ color: "var(--color-accent)" }}
              >
                {NAP.phone.display}
              </a>
            </address>
          </div>

          <div
            className="overflow-hidden rounded-sm border"
            style={{ borderColor: "var(--color-border)" }}
          >
            <iframe
              src={NAP.mapEmbedSrc}
              width="100%"
              height="360"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Two Guys Automotive Repair — auto repair shop at 191 N 39th St, Springfield, OR 97478"
            />
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section
        className="border-t px-4 py-16 text-center sm:px-6"
        style={{ borderColor: "var(--color-border)" }}
      >
        <div className="mx-auto max-w-xl">
          <h2
            className="mb-3 text-4xl font-extrabold sm:text-5xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Need a Mechanic in Springfield?
          </h2>
          <p className="mb-8 text-sm" style={{ color: "var(--color-secondary)" }}>
            Call us or walk in — our auto shop at 191 N 39th St is ready to help.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <a
              href={NAP.phone.href}
              className="inline-flex items-center gap-2 rounded-sm px-8 py-3 text-base font-semibold transition-opacity hover:opacity-80"
              style={{
                backgroundColor: "var(--color-accent)",
                color: "var(--color-on-accent)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Call {NAP.phone.display}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-sm border px-8 py-3 text-base font-semibold transition-colors hover:border-white hover:text-white"
              style={{
                borderColor: "var(--color-border)",
                color: "var(--color-secondary)",
                fontFamily: "var(--font-heading)",
              }}
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
