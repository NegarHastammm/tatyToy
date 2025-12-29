// app/sections/[sectionSlug]/[productSlug]/page.tsx
import { notFound } from "next/navigation"
import { sections } from "@/app/data/sections";

type ProductPageProps = {
  params: {
    sectionSlug: string
    productSlug: string
  }
}

export function generateStaticParams() {
  const params: { sectionSlug: string; productSlug: string }[] = []

  sections.forEach((section) => {
    section.products.forEach((product) => {
      params.push({
        sectionSlug: section.slug,
        productSlug: product.slug,
      })
    })
  })

  return params
}

export default function SectionProductPage({ params }: ProductPageProps) {
  const section = sections.find((s) => s.slug === params.sectionSlug)
  if (!section) return notFound()

  const product = section.products.find((p) => p.slug === params.productSlug)
  if (!product) return notFound()

  const { attributes } = product

  return (
    <div className="container py-10 max-w-4xl">
      <div className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]">
        {/* تصویر */}
        <div className="rounded-3xl bg-[var(--brand-cream)] border border-[var(--neutral-light)] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        {/* اطلاعات زیر عکس: سایز، رنگ، تعداد، ابعاد */}
        <div className="space-y-6">
          <div>
            <p className="text-xs font-medium text-neutral-500">
              {section.title}
            </p>
            <h1 className="mt-1 text-2xl font-bold text-[var(--brand-dark)]">
              {product.name}
            </h1>
          </div>

          <div className="grid gap-3 text-sm">
            {attributes.size && (
              <div className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] p-3 border border-[var(--neutral-light)]">
                <span className="text-neutral-500">سایز</span>
                <span className="font-semibold text-[var(--brand-dark)]">
                  {attributes.size}
                </span>
              </div>
            )}
            {attributes.color && (
              <div className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] p-3 border border-[var(--neutral-light)]">
                <span className="text-neutral-500">رنگ</span>
                <span className="font-semibold text-[var(--brand-dark)]">
                  {attributes.color}
                </span>
              </div>
            )}
            {typeof attributes.quantity === "number" && (
              <div className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] p-3 border border-[var(--neutral-light)]">
                <span className="text-neutral-500">تعداد</span>
                <span className="font-semibold text-[var(--brand-dark)]">
                  {attributes.quantity}
                </span>
              </div>
            )}
            {attributes.dimensions && (
              <div className="flex items-center justify-between rounded-2xl bg-[var(--brand-cream)] p-3 border border-[var(--neutral-light)]">
                <span className="text-neutral-500">ابعاد</span>
                <span className="font-semibold text-[var(--brand-dark)]">
                  {attributes.dimensions}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
