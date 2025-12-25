// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "./components/ui/Header"

export const metadata: Metadata = {
  title: "ویترین فروشگاه",
  description: "نمایش محصولات با کیفیت بالا",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        <main className="min-h-[calc(100vh-80px-72px)] flex-1 pt-4 pb-20">
          {children}
        </main>

        {/* نوار تماس پاستلی */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200/70 bg-white/90 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 pb-4 pt-3">
            <div className="flex items-center justify-between rounded-3xl bg-gradient-to-r from-[var(--brand-blue)]/20 via-[var(--brand-yellow)]/20 to-[var(--brand-green)]/20 px-5 py-3 shadow-lg shadow-neutral-200/80 border border-neutral-200/50">
              <p className="text-xs font-medium text-[var(--brand-dark)]">
                برای سفارش یا مشاوره، همین حالا تماس بگیرید
              </p>
              <div className="flex items-center gap-2 text-xs">
                <a href="https://wa.me/09XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="rounded-2xl bg-[var(--brand-green)] px-4 py-1.5 font-semibold text-white shadow-sm hover:opacity-90 transition-all">
                  واتساپ
                </a>
              
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
