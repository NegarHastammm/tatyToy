// app/page.tsx
import { products } from "./data/products"
import { ProductCard } from "./components/ui/ProductCard"

export default function HomePage() {
  return (
    <div className="container max-w-screen-2xl py-10">
      <div className="mb-6 space-y-2">
        <h1 className="text-2xl font-semibold text-neutral-900">
          محصولات
        </h1>
        <p className="text-sm text-neutral-600">
          مجموعه‌ی کامل محصولات قابل نمایش در ویترین.
        </p>
      </div>

      {/* این سکشن ۸ ساب‌تایتل است، فعلاً استاتیک */}
      <section className="mb-8 grid gap-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-xs text-neutral-700 md:grid-cols-4">
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۱</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۲</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۳</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۴</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۵</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۶</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۷</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
        <div className="space-y-1">
          <p className="font-semibold text-neutral-900">ساب‌تایتل ۸</p>
          <p>توضیح کوتاه در مورد این دسته یا ویژگی.</p>
        </div>
      </section>

      <div className="grid gap-6 pb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
