// components/ui/Header.tsx
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* لوگو ۴ رنگ */}
          <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[var(--brand-bg)] p-0.5 shadow-sm">
            <div className="grid h-full w-full grid-cols-2 gap-0.5 rounded-2xl overflow-hidden">
              <div className="rounded-tl-2xl bg-[var(--brand-blue)]" />
              <div className="rounded-tr-2xl bg-[var(--brand-yellow)]" />
              <div className="rounded-bl-2xl bg-[var(--brand-green)]" />
              <div className="rounded-br-2xl bg-[var(--brand-red)]" />
            </div>
          </div>
          <span className="text-sm font-semibold tracking-tight text-[var(--brand-dark)]">
            نام برند
          </span>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium text-neutral-700">
          <Link href="/" className="hover:text-[var(--brand-dark)] transition-colors">
            محصولات
          </Link>
          <Link href="/about" className="hover:text-[var(--brand-dark)] transition-colors">
            درباره ما
          </Link>
          <Link href="/contact" className="hover:text-[var(--brand-dark)] transition-colors">
            تماس
          </Link>
        </nav>
      </div>
    </header>
  )
}
