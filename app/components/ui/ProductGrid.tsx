
// components/ui/ProductGrid.tsx
import { products } from "@/app/data/products"
import { ProductCard } from "./ProductCard"

export function ProductGrid() {
  return (
    <section className="container max-w-screen-2xl py-10">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-xl font-semibold text-neutral-900">
            محصولات منتخب
          </h2>
          <p className="mt-1 text-sm text-neutral-600">
            مجموعه‌ای از بهترین محصولات ما را ببینید.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
