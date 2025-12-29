// app/page.tsx - نسخه کامل با ۸ سکشن clickable
import { sections } from "./data/sections"
// ۳ محصول برتر از همه سکشن‌ها

export default function HomePage() {
  return (
    <div className="container py-10">
      {/* تیتر اصلی */}
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold text-[var(--brand-dark)]">
          محصولات
        </h1>
        <p className="text-sm text-neutral-600">
          مجموعه‌ی کامل محصولات قابل نمایش در ویترین.
        </p>
      </div>

      {/* ۸ سکشن clickable - ظاهر دقیقاً همون قبلی */}
      <section className="mb-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-3">چرا ما؟</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            ویژگی‌های منحصر به فرد محصولات و خدمات ما
          </p>
        </div>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3">
          {sections.map((section, index) => {
            const colors = ['blue', 'yellow', 'green', 'red', 'blue', 'yellow', 'green', 'blue']
            return (
              <a
                key={section.id}
                href={`/sections/${section.slug}`}
                className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-blue)]/20 transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-blue)]/10 to-white group-hover:scale-105 transition-all duration-300">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="h-full w-full object-cover rounded-[1.75rem]" 
                  />
                </div>
                <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">
                  {section.title}
                </h3>
                <p className="text-xs text-neutral-600 leading-tight">
                  {section.description || "توضیح کوتاه"}
                </p>
              </a>
            )
          })}
        </div>
      </section>


    </div>
  )
}
