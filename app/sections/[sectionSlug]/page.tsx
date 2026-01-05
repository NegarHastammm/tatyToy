// app/sections/[sectionSlug]/page.tsx
import { notFound } from "next/navigation"
import sectionsData from "@/app/data/sections"

export function generateStaticParams() {
  return sectionsData.sections.map((section) => ({
    sectionSlug: section.slug,
  }))
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ sectionSlug: string }>
}) {
  const { sectionSlug } = await params

  const section = sectionsData.sections.find(
    (s) => s.slug === sectionSlug
  )

  if (!section) {
    notFound()
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#fafafa",
        padding: "40px 24px 60px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* هدر سکشن */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto 32px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            color: "#1d1d1f",
            marginBottom: "8px",
          }}
        >
          {section.title}
        </h1>
        <p
          style={{
            fontSize: "0.95rem",
            color: "#86868b",
          }}
        >
          {section.products.length} محصول در این دسته
        </p>
      </div>

      {/* گرید محصولات */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "20px",
        }}
      >
        {section.products.map((product) => (
          <div
            key={product.id}
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "16px",
              boxShadow: "0 4px 18px rgba(0,0,0,0.06)",
              border: "1px solid rgba(0,0,0,0.04)",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            {/* تصویر محصول */}
            <div
              style={{
                width: "100%",
                aspectRatio: "4 / 3",
                borderRadius: "12px",
                overflow: "hidden",
                background: "#f5f5f7",
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* مشخصات متن */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "4px",
                marginTop: "4px",
              }}
            >
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#1d1d1f",
                }}
              >
                {product.name}
              </div>

              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#4b5563",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>رنگ:</span>
                <span>{product.color}</span>
              </div>

              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#4b5563",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>ابعاد:</span>
                <span>{product.size}</span>
              </div>

              <div
                style={{
                  fontSize: "0.9rem",
                  color: "#4b5563",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>تعداد موجود:</span>
                <span>{product.quantity} عدد</span>
              </div>

              <div
                style={{
                  marginTop: "6px",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#16a34a",
                  textAlign: "left",
                }}
              >
                {product.price.toLocaleString("fa-IR")} تومان
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
