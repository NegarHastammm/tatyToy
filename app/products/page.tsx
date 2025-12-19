
// app/products/page.tsx
import { products } from "../data/products"
import { ProductCard } from "../components/ui/ProductCard"

export default function ProductsPage() {
  return (
    <div className="container max-w-screen-2xl py-10">
      <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">
            همه محصولات
          </h1>
          <p className="mt-1 text-sm text-neutral-600">
            لیست کامل محصولات موجود در ویترین.
          </p>
        </div>
        {/* جا برای فیلتر/سرچ بعداً */}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
