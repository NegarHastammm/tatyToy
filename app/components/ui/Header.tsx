
// components/ui/Header.tsx
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl tracking-tight">لوگو</span>
        </Link>
        
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link 
            href="/" 
            className="transition-colors hover:text-neutral-900"
          >
            خانه
          </Link>
          <Link 
            href="/products" 
            className="transition-colors hover:text-neutral-900"
          >
            محصولات
          </Link>
          <Link 
            href="/about" 
            className="transition-colors hover:text-neutral-900"
          >
            درباره ما
          </Link>
          <Link 
            href="/contact" 
            className="transition-colors hover:text-neutral-900"
          >
            تماس
          </Link>
        </nav>
      </div>
    </header>
  )
}
