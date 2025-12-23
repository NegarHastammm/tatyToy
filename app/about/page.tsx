// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-3 pt-8">
          <h1 className="text-3xl font-bold text-[var(--brand-dark)]">
            درباره ما
          </h1>
          <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-green)]" />
        </div>

        {/* محتوا */}
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6 rounded-3xl bg-white/70 backdrop-blur-xl p-8 border border-neutral-200/50 shadow-xl">
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[var(--brand-dark)]">داستان ما</h2>
              <p className="text-sm leading-relaxed text-neutral-700">
                اینجا داستان برند خود، ارزش‌ها، و مسیری که طی کرده‌اید را به
                شکل کوتاه و صمیمی تعریف کنید. هدف ایجاد اعتماد است.
              </p>
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-[var(--brand-dark)]">چرا ما؟</h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-green)] text-white text-xs font-bold">✓</div>
                  <span className="text-neutral-700">کیفیت تضمینی</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--brand-blue)] text-white text-xs font-bold">✓</div>
                  <span className="text-neutral-700">تحویل سریع</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 rounded-3xl bg-gradient-to-br from-[var(--brand-blue)]/5 to-[var(--brand-yellow)]/5 p-8 border border-[var(--brand-blue)]/20 shadow-xl">
            <h2 className="text-xl font-bold text-[var(--brand-dark)] mb-4">ارتباط با ما</h2>
            <div className="space-y-3 text-sm">
              <p className="text-neutral-700">شماره تماس: <span className="font-semibold text-[var(--brand-dark)]">۰۹xx xxx xxxx</span></p>
              <p className="text-neutral-700">ایمیل: <span className="font-semibold text-[var(--brand-dark)]">info@brand.com</span></p>
              <p className="text-neutral-700">آدرس: تهران، خیابان اصلی، پلاک xx</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
