// components/ui/Header.tsx
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-neutral-200 bg-neutral-50 text-xs font-semibold text-neutral-900">
            LOGO
          </div>
          <span className="text-sm font-semibold tracking-tight">
            نام برند
          </span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-neutral-900">
            محصولات
          </Link>
          <Link href="/about" className="transition-colors hover:text-neutral-900">
            درباره ما
          </Link>
          <Link href="/contact" className="transition-colors hover:text-neutral-900">
            تماس
          </Link>
        </nav>
      </div>
    </header>
  )
}
