
// components/ui/ProductCard.tsx
"use client"

import Link from "next/link"
import type { Product } from "@/app/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="line-clamp-1 text-sm font-semibold text-neutral-900">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-xs text-neutral-600">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-sm font-bold text-neutral-900">
            {product.price.toLocaleString("fa-IR")} تومان
          </span>
          <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600">
            {product.category}
          </span>
        </div>
      </div>
    </Link>
  )
}
