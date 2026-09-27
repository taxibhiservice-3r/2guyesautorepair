import Link from "next/link"
import Image from "next/image"
import { NAP } from "@/lib/constants"

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{
        backgroundColor: "var(--color-panel)",
        borderColor: "var(--color-border)",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Two Guys Automotive Repair — home"
          className="flex items-center gap-3 transition-opacity hover:opacity-85"
        >
          <Image
            src="/logo.webp"
            alt="Two Guys Automotive Repair logo"
            width={48}
            height={52}
            priority
            className="h-12 w-auto"
          />
          <span className="hidden flex-col leading-none sm:flex">
            <span
              className="text-base font-bold tracking-tight"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-primary)" }}
            >
              Two Guys
            </span>
            <span
              className="text-xs font-semibold"
              style={{ fontFamily: "var(--font-heading)", color: "var(--color-secondary)" }}
            >
              Automotive Repair
            </span>
          </span>
        </Link>

        {/* Nav + phone */}
        <div className="flex items-center gap-6">
          <nav aria-label="Main navigation">
            <ul className="hidden items-center gap-6 sm:flex" role="list">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium transition-colors hover:text-white"
                    style={{ color: "var(--color-secondary)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={NAP.phone.href}
            className="flex items-center gap-1.5 rounded-sm px-3 py-1.5 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{
              backgroundColor: "var(--color-accent)",
              color: "var(--color-on-accent)",
            }}
          >
            <PhoneIcon />
            <span className="hidden sm:inline">{NAP.phone.display}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      </div>
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    </svg>
  )
}
