
// app/products/[slug]/page.tsx
import { notFound } from "next/navigation"
import { products } from "../data/products"

type ProductPageProps = {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return notFound()
  }

  return (
    <div className="container max-w-screen-lg py-10">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        {/* تصویر */}
        <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* اطلاعات محصول */}
        <div className="flex flex-col gap-6">
          <div>
            <p className="text-xs font-medium text-neutral-500">
              {product.category}
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-neutral-900">
              {product.name}
            </h1>
          </div>

          <p className="text-sm leading-relaxed text-neutral-700">
            {product.description}
          </p>

          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-neutral-900">
              {product.price.toLocaleString("fa-IR")} تومان
            </span>
          </div>

          <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4 text-sm text-neutral-700">
            <p className="font-medium text-neutral-900">
              نحوه ثبت سفارش
            </p>
            <p className="mt-1">
              برای سفارش این محصول، از طریق واتساپ یا تماس تلفنی با ما در ارتباط
              باشید. کد محصول: <span className="font-semibold">{product.id}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
