// app/page.tsx - همه اسامی سه نقطه
'use client';
import Link from 'next/link'
import sectionsData from './data/sections'

export default function HomePage() {
  return (
    <div
      style={{
        height: '100vh',
        background: '#fafafa',
        margin: 0,
        overflow: 'hidden',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Hero */}
      <div
        style={{
          textAlign: 'center',
          padding: '40px 16px 24px',
          flexShrink: 0,
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 700,
            color: '#1d1d1f',
            marginBottom: '8px',
            lineHeight: 1.15,
          }}
        >
          محصولات 
        </h1>
        <p
          style={{
            fontSize: '1rem',
            color: '#86868b',
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          Tatytoy
        </p>
      </div>

      {/* Grid */}
      <div
        style={{
          flex: 1,
          padding: '0 16px 24px',
          display: 'flex',
          alignItems: 'stretch',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            width: '100%',
            maxWidth: '1100px',
            height: '100%',
            gap: '16px',
            justifyItems: 'center',
          }}
        >
          {sectionsData.sections.map((section) => (
            <Link
              key={section.id}
              href={`/sections/${section.slug}`}
              className="apple-card"
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '16px',
                textDecoration: 'none',
                color: '#1d1d1f',
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'center',
                boxShadow: '0 3px 16px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  width: '70px',
                  height: '70px',
                  marginBottom: '8px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  flexShrink: 0,
                  background: '#f5f5f7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#86868b',
                  fontSize: '0.75rem'
                }}
              >
                ...
              </div>

              <div>
                <h3
                  style={{
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    marginBottom: '2px',
                    letterSpacing: '-0.01em'
                  }}
                >
                  ...
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: '#86868b',
                    fontWeight: 500
                  }}
                >
                  ... محصول
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .apple-card {
          transition: all 0.25s ease-out;
          will-change: transform, box-shadow;
        }

        .apple-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 28px rgba(0, 0, 0, 0.12);
          border-color: rgba(0, 0, 0, 0.06);
        }
      `}</style>
    </div>
  )
}
