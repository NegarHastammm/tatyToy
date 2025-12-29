// app/sections/[sectionSlug]/page.tsx
import { notFound } from "next/navigation"
import { sections } from "@/app/data/sections"

type SectionPageProps = {
  params: { sectionSlug: string }
}

export function generateStaticParams() {
  return sections.map((section) => ({ sectionSlug: section.slug }))
}

export default function SectionPage({ params }: SectionPageProps) {
  const section = sections.find((s) => s.slug === params.sectionSlug)

  if (!section) return notFound()

  return (
    <div className="container py-10">
      {/* هدر سکشن */}
      <div className="mb-8 flex flex-col items-center text-center gap-3">
        <h1 className="text-2xl font-bold text-[var(--brand-dark)]">
          {section.title}
        </h1>
        {section.description && (
          <p className="text-sm text-neutral-600 max-w-md">
            {section.description}
          </p>
        )}
      </div>

      {/* گرید محصولات این سکشن */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {section.products.map((product) => (
          <a
            key={product.id}
            href={`/sections/${section.slug}/${product.slug}`}
            className="group rounded-2xl bg-[var(--brand-cream)] border border-[var(--neutral-light)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all p-3"
          >
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-sm font-semibold text-[var(--brand-dark)] line-clamp-1">
              {product.name}
            </h3>
          </a>
        ))}
      </div>
    </div>
  )
}
