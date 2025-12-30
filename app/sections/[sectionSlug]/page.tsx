// app/sections/[sectionSlug]/page.tsx - Next.js 16 FIX
import { notFound } from "next/navigation"
import sectionsData from "@/app/data/sections"

export function generateStaticParams() {
  return sectionsData.sections.map((section) => ({
    sectionSlug: section.slug
  }))
}

export default async function SectionPage({ 
  params 
}: { 
  params: Promise<{ sectionSlug: string }>  // ← Promise!
}) {
  const { sectionSlug } = await params  // ← await کن!
  
  const section = sectionsData.sections.find(
    (s) => s.slug === sectionSlug
  )
  
  if (!section) {
    notFound()
  }

  return (
    <div style={{ 
      padding: '50px', 
      background: 'lightcoral',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        color: 'darkred', 
        fontSize: '3rem',
        marginBottom: '20px'
      }}>
        ✅ {section.title} کار کرد!
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#333' }}>
        slug: {sectionSlug} | محصولات: {section.products.length}
      </p>
    </div>
  )
}
