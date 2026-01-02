// components/ui/Header.tsx
import Link from "next/link"
import ZigzagLogo from "./ZigzagLogo"
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full h-20 border-b border-neutral-200/70 bg-white/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between">
       <nav className="p-4 flex justify-between items-center">
      
        <ZigzagLogo size="w-15 h-15" speed={1.5} dist={20} step={10} />
          <span className="text-2xl font-semibold tracking-tight text-[var(--brand-dark)]">
            Taty
          </span>
          </nav>
        

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
