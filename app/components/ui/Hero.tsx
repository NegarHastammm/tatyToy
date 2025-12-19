
// components/ui/Hero.tsx
import Link from "next/link"

export function Hero() {
  return (
    <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container flex max-w-screen-2xl flex-col gap-8 py-16 md:flex-row md:items-center">
        <div className="flex-1 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-neutral-500">
            ویترین آنلاین شما
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 md:text-4xl">
            نمایش حرفه‌ای محصولات، بدون پیچیدگی سفارش آنلاین.
          </h1>
          <p className="max-w-xl text-sm text-neutral-600">
            محصولات خود را با یک طراحی مینیمال و تمیز معرفی کنید و مشتریان را
            به تماس یا شبکه‌های اجتماعی هدایت کنید.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/products"
              className="rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800"
            >
              مشاهده محصولات
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
            >
              ارتباط با ما
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="h-56 rounded-3xl border border-dashed border-neutral-300 bg-neutral-50" />
        </div>
      </div>
    </section>
  )
}
