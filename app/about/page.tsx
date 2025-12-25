// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl bg-[#72c1b5dc] font-bold bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-green)] to-[var(--brand-yellow)] bg-clip-text text-transparent">
            درباره ما
          </h1>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-[var(--brand-blue)] via-[var(--brand-green)] to-[var(--brand-yellow)] shadow-md" />
        </div>

        {/* داستان ما - کاملاً وسط با استایل رنگی */}
        <div className="card-clean rounded-3xl p-12 md:p-16 shadow-xl border-[var(--neutral-light)] relative overflow-hidden">
          {/* پس‌زمینه گرادیان ملایم */}
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand-blue)]/3 via-[var(--brand-green)]/2 to-[var(--brand-yellow)]/3 rounded-3xl" />
          
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--brand-dark)]">
              داستان ما
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl leading-relaxed text-neutral-700 max-w-2xl mx-auto">
              <p>
                
                
              </p>
              <p>

                
              </p>
            </div>

            {/* دکمه تماس رنگی */}
            <div className="pt-4">
            
            </div>
          </div>
        </div>

        {/* اطلاعات تماس کوچک پایین */}
        <div className="card-clean rounded-2xl p-6 max-w-md mx-auto">
          <div className="space-y-2 text-sm text-neutral-600">
          
          </div>
        </div>
      </div>
    </div>
  )
}
