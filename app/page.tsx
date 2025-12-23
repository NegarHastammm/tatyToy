// app/page.tsx
import { products } from "./data/products"

const featured = products.slice(0, 3)

export default function HomePage() {
  return (
    <div className="container py-10">
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-3xl font-bold text-[var(--brand-dark)]">
          محصولات
        </h1>
        <p className="text-sm text-neutral-600 max-w-md mx-auto">
          مجموعه‌ی کامل محصولات قابل نمایش در ویترین.
        </p>
      </div>

      {/* ۸ ساب‌تایتل با رنگ‌های پاستلی */}
   
<section className="mb-20">
  <div className="mb-10 text-center">
    <h2 className="text-3xl font-bold text-[var(--brand-dark)] mb-3">چرا ما؟</h2>
    <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
      ویژگی‌های منحصر به فرد محصولات و خدمات ما
    </p>
  </div>

  <div className="grid gap-4 md:gap-6 md:grid-cols-3 lg:grid-cols-3">
    {/* همه ۹ کارت - کوچک‌تر */}
    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-blue)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-blue)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/heads.png" alt="کیفیت بالا" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">کله ها</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-yellow)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-yellow)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/bears.jpeg" alt="تحویل سریع" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">خرس ها</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-green)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-green)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/smallAnimals.jpeg" alt="قیمت مناسب" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">حیوانات کوچک</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-red)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-red)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/cartoons.jpeg" alt="پشتیبانی" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">کارتونی ها</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-blue)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-blue)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/kadoie.jpeg" alt="گارانتی" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">کادویی ها </h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-yellow)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-yellow)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/joorvajoor.jpeg" alt="ارسال" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">جورواجور</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-green)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-green)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/newProduct.jpeg" alt="طراحی" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">محصولات جدید</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-red)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-red)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/allProducts.jpeg" alt="موجودی" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">همه محصولات</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>

    <div className="group rounded-2xl bg-white/80 backdrop-blur-xl p-4 border border-neutral-200/50 shadow-md hover:shadow-xl hover:shadow-[var(--brand-blue)]/20 transition-all duration-300 hover:-translate-y-1 text-center">
      <div className="mx-auto mb-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[var(--brand-blue)]/10 to-white group-hover:scale-105 transition-all duration-300">
        <img src="/Images/aboutUs.jpeg" alt="درباره ما" className="h-full w-full object-cover rounded-[1.75rem]" />
      </div>
      <h3 className="text-base font-bold text-[var(--brand-dark)] mb-1 leading-tight">درباره ما</h3>
      <p className="text-xs text-neutral-600 leading-tight"></p>
    </div>
  </div>
</section>




      {/* گالری ۳ تایی */}
 
<section className="mb-20">
  <div className="mb-10 flex items-end justify-center text-center md:justify-start md:text-left">
    <div>
      <h2 className="text-2xl font-bold text-[var(--brand-dark)] mb-2">محصولات منتخب</h2>
      <p className="text-sm text-neutral-600">بهترین‌های ویترین ما</p>
    </div>
  </div>
  <div className="grid gap-6 md:grid-cols-3">
    {featured.map((product, index) => {
      const colors = ['blue', 'yellow', 'green']
      return (
        <div 
          key={product.id} 
          className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl hover:shadow-[var(--brand-blue)]/25 border border-neutral-200/50 transition-all duration-500 hover:-translate-y-1 h-fit"
        >
          {/* تصویر نسبت 16/9 به جای 4/5 */}
          <div className="aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-50 to-white/50">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" 
            />
            {/* badge رنگی گوشه */}
            <span className={`absolute top-4 right-4 chip bg-[var(--brand-${colors[index]})] text-white shadow-lg`}>
              جدید
            </span>
          </div>
          
          {/* محتوای کم‌ارتفاع */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <span className={`chip bg-[var(--brand-${colors[index]})]/10 text-[var(--brand-${colors[index]})] text-xs`}>
                {product.category}
              </span>
              <span className="text-lg font-bold text-[var(--brand-dark)]">
                {product.price.toLocaleString("fa-IR")}
              </span>
            </div>
            <h3 className="mb-2 text-base font-bold text-[var(--brand-dark)] line-clamp-1 group-hover:text-[var(--brand-${colors[index]})]">
              {product.name}
            </h3>
            <p className="text-xs text-neutral-600 line-clamp-1 mb-3">
              {product.description}
            </p>
          </div>
        </div>
      )
    })}
  </div>
</section>

    </div>
  )
}
