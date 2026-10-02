import Link from "next/link"
import Image from "next/image"
import { NAP, HOURS, RATINGS, SITE_URL } from "@/lib/constants"

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/locations", label: "Locations" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--color-border)",
        backgroundColor: "var(--color-panel)",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* NAP */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-3 transition-opacity hover:opacity-85">
              <Image
                src="/logo.png"
                alt="Two Guys Automotive Repair logo"
                width={44}
                height={48}
                className="h-11 w-auto"
              />
              <span
                className="text-base font-bold leading-tight"
                style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
              >
                Two Guys<br />
                <span style={{ color: "var(--color-secondary)", fontWeight: 500 }}>
                  Automotive Repair
                </span>
              </span>
            </Link>
            <address
              className="not-italic text-sm leading-relaxed"
              style={{ color: "var(--color-secondary)" }}
            >
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
              <br />
              <a
                href={NAP.phone.href}
                className="mt-1 block hover:text-white transition-colors"
                style={{ color: "var(--color-accent)" }}
              >
                {NAP.phone.display}
              </a>
            </address>

            {/* Ratings */}
            <div className="mt-4 flex flex-wrap gap-3">
              {RATINGS.map((r) => (
                <span
                  key={r.platform}
                  className="text-xs"
                  style={{ color: "var(--color-secondary)" }}
                >
                  <span style={{ color: "var(--color-accent)" }}>★</span>{" "}
                  {r.score} {r.platform}
                </span>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-secondary)" }}
            >
              Hours
            </p>
            <table className="text-sm w-full" style={{ color: "var(--color-secondary)" }}>
              <tbody>
                {HOURS.map((h) => (
                  <tr key={h.day}>
                    <td className="pr-4 py-0.5" style={{ color: "var(--color-primary)" }}>
                      {h.day.slice(0, 3)}
                    </td>
                    <td className="py-0.5">{h.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-widest"
              style={{ color: "var(--color-secondary)" }}
            >
              Navigate
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2" role="list">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm hover:text-white transition-colors"
                      style={{ color: "var(--color-secondary)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 border-t pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs"
          style={{ borderColor: "var(--color-border)", color: "var(--color-secondary)" }}
        >
          <p>
            © {new Date().getFullYear()} Two Guys Automotive Repair · {NAP.address.city},{" "}
            {NAP.address.state}
          </p>
          <p>
            191 N 39th St, Springfield, OR 97478 ·{" "}
            <a
              href={NAP.phone.href}
              className="hover:text-white transition-colors"
              style={{ color: "var(--color-accent)" }}
            >
              (541) 744-3626
            </a>
          </p>
          <p>
            Managed by{" "}
            <a
              href="https://smallbusinessmarketingprofessional.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              style={{ color: "var(--color-secondary)" }}
            >
              Small Business Marketing Professional
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
