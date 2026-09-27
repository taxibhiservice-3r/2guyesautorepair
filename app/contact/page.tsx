import type { Metadata } from "next"
import Link from "next/link"
import { JsonLd } from "@/components/JsonLd"
import { buildBreadcrumbSchema } from "@/lib/schemas"
import { ContactForm } from "@/components/ContactForm"
import { NAP, HOURS, SITE_URL } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Contact Our Auto Shop — Springfield, OR | (541) 744-3626",
  description:
    "Contact Two Guys Automotive Repair — your Springfield, OR mechanic and auto shop. Call (541) 744-3626, walk in at 191 N 39th St, or use our contact form.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Two Guys Automotive Repair — Springfield, OR",
    description:
      "Call (541) 744-3626 or walk in. Auto shop at 191 N 39th St, Springfield, OR 97478. Serving Springfield, Eugene & Junction City.",
    url: `${SITE_URL}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      <JsonLd
        schema={buildBreadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Contact", url: `${SITE_URL}/contact` },
        ])}
      />

      {/* Page header */}
      <section
        className="border-b px-4 py-14 sm:px-6"
        style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
      >
        <div className="mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex gap-2 text-sm" style={{ color: "var(--color-secondary)" }}>
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" style={{ color: "var(--color-primary)" }}>
                Contact
              </li>
            </ol>
          </nav>

          <h1
            className="mb-3 text-5xl font-extrabold sm:text-6xl"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
          >
            Get in Touch
          </h1>
          <p className="max-w-xl text-sm" style={{ color: "var(--color-secondary)" }}>
            Call us directly or send a message below. We&apos;ll get back to you as quickly as
            possible.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="px-4 py-12 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          {/* Info panel */}
          <div className="flex flex-col gap-8">
            {/* Phone */}
            <div
              className="border p-6"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
            >
              <p
                className="mb-1 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-accent)" }}
              >
                Phone
              </p>
              <a
                href={NAP.phone.href}
                className="text-3xl font-extrabold transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--color-primary)",
                }}
              >
                {NAP.phone.display}
              </a>
            </div>

            {/* Address */}
            <div
              className="border p-6"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
            >
              <p
                className="mb-2 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-accent)" }}
              >
                Address
              </p>
              <address className="not-italic text-sm leading-relaxed" style={{ color: "var(--color-secondary)" }}>
                <a
                  href={NAP.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {NAP.address.street}
                  <br />
                  {NAP.address.city}, {NAP.address.state} {NAP.address.zip}
                </a>
              </address>
            </div>

            {/* Hours */}
            <div
              className="border p-6"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
            >
              <p
                className="mb-3 text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--color-accent)" }}
              >
                Hours
              </p>
              <table className="w-full text-sm">
                <tbody>
                  {HOURS.map((h) => (
                    <tr key={h.day} className="border-b last:border-0" style={{ borderColor: "var(--color-border)" }}>
                      <td
                        className="py-1.5 pr-6 font-medium"
                        style={{ color: "var(--color-primary)" }}
                      >
                        {h.day}
                      </td>
                      <td style={{ color: "var(--color-secondary)" }}>{h.label}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Map */}
            <div
              className="overflow-hidden border"
              style={{ borderColor: "var(--color-border)" }}
            >
              <iframe
                src={NAP.mapEmbedSrc}
                width="100%"
                height="280"
                style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)", display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Two Guys Automotive Repair map — 191 N 39th St, Springfield, OR 97478"
              />
            </div>
          </div>

          {/* Contact form */}
          <div>
            <div
              className="border p-6 sm:p-8"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-panel)" }}
            >
              <h2
                className="mb-1 text-3xl font-extrabold"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
              >
                Send a Message
              </h2>
              <p className="mb-6 text-sm" style={{ color: "var(--color-secondary)" }}>
                Fields marked * are required.
              </p>
              <ContactForm />
            </div>

            <p className="mt-4 text-xs" style={{ color: "var(--color-secondary)" }}>
              Prefer to call?{" "}
              <a
                href={NAP.phone.href}
                className="font-medium hover:text-white transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                {NAP.phone.display}
              </a>
              {" "}during business hours.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
