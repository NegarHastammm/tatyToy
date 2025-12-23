// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container py-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 pt-8">
          <h1 className="text-3xl font-bold text-[var(--brand-dark)]">
            تماس با ما
          </h1>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-[var(--brand-red)] via-[var(--brand-yellow)] to-[var(--brand-green)]" />
          <p className="text-lg text-neutral-600 max-w-lg mx-auto">
            برای سفارش، مشاوره یا سوالات خود با ما تماس بگیرید
          </p>
        </div>

        {/* اطلاعات تماس - طراحی کارت‌های سفید */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* کارت تلفن */}
          <div className="group rounded-3xl bg-white/80 backdrop-blur-xl p-8 border border-neutral-200/50 shadow-xl hover:shadow-2xl hover:shadow-[var(--brand-blue)]/20 transition-all duration-500 hover:-translate-y-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-blue)] mb-6 mx-auto text-white text-xl font-bold">
              📞
            </div>
            <h3 className="text-center text-xl font-bold text-[var(--brand-dark)] mb-4">تماس تلفنی</h3>
            <div className="text-center space-y-2">
              <a 
                href="tel:09XXXXXXXXX" 
                className="block text-2xl font-bold text-[var(--brand-dark)] hover:text-[var(--brand-blue)] transition-colors"
              >
                ۰۹xx xxx xxxx
              </a>
              <p className="text-sm text-neutral-600">هر روز ۸ صبح تا ۱۰ شب</p>
            </div>
          </div>

          {/* کارت واتساپ */}
          <div className="group rounded-3xl bg-white/80 backdrop-blur-xl p-8 border border-neutral-200/50 shadow-xl hover:shadow-2xl hover:shadow-[var(--brand-green)]/20 transition-all duration-500 hover:-translate-y-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-green)] mb-6 mx-auto text-white text-xl font-bold">
              💬
            </div>
            <h3 className="text-center text-xl font-bold text-[var(--brand-dark)] mb-4">واتساپ</h3>
            <div className="text-center space-y-2">
              <a 
                href="https://wa.me/09XXXXXXXXX" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-2xl font-bold text-[var(--brand-dark)] hover:text-[var(--brand-green)] transition-colors"
              >
                پیام مستقیم
              </a>
              <p className="text-sm text-neutral-600">پاسخگویی فوری</p>
            </div>
          </div>

          {/* کارت ایمیل */}
          <div className="group rounded-3xl bg-white/80 backdrop-blur-xl p-8 border border-neutral-200/50 shadow-xl hover:shadow-2xl hover:shadow-[var(--brand-red)]/20 transition-all duration-500 hover:-translate-y-2">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--brand-red)] mb-6 mx-auto text-white text-xl font-bold">
              ✉️
            </div>
            <h3 className="text-center text-xl font-bold text-[var(--brand-dark)] mb-4">ایمیل</h3>
            <div className="text-center space-y-2">
              <a 
                href="mailto:info@brand.com" 
                className="block text-lg font-semibold text-[var(--brand-dark)] hover:text-[var(--brand-red)] transition-colors break-all"
              >
                info@brand.com
              </a>
              <p className="text-sm text-neutral-600">پاسخ در ۲۴ ساعت</p>
            </div>
          </div>
        </div>

        {/* آدرس */}
        <div className="rounded-3xl bg-gradient-to-r from-[var(--brand-blue)]/5 to-[var(--brand-yellow)]/5 p-10 border border-[var(--brand-blue)]/20 shadow-xl text-center">
          <h3 className="text-2xl font-bold text-[var(--brand-dark)] mb-4">دفتر مرکزی</h3>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-2xl mx-auto">
            تهران، خیابان ولیعصر، بالاتر از پارک ساعی، پلاک ۱۲۳
          </p>
        </div>
      </div>
    </div>
  )
}
