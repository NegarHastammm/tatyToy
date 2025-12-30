// app/page.tsx - بدون آیکون + تگ img
'use client';
import Link from 'next/link'
import sectionsData from './data/sections'

export default function HomePage() {
  // تصاویر هر سکشن (اولین محصول هر دسته)
  const sectionImages = {
    posters: '/images/posters/nautilus.jpg',
    frames: '/images/frames/wood-50x70.jpg',
    canvases: '/images/canvases/landscape.jpg',
    stickers: '/images/stickers/wave.jpg',
    mugs: '/images/mugs/ocean.jpg',
    tshirts: '/images/tshirts/wave.jpg',
    'phone-cases': '/images/phone-cases/iphone-wave.jpg',
    wallets: '/images/wallets/ocean-leather.jpg',
    notebooks: '/images/notebooks/a5-ocean.jpg'
  }

  return (
    <div style={{
      height: '100vh',
      background: '#fafafa',
      padding: '0',
      margin: '0',
      overflow: 'hidden',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Hero */}
      <div style={{ 
        textAlign: 'center', 
        padding: '60px 24px 40px',
        flexShrink: 0
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2rem, 6vw, 3.5rem)',
          fontWeight: 700,
          color: '#1d1d1f',
          marginBottom: '12px',
          lineHeight: 1.1
        }}>
          محصولات اقیانوسی
        </h1>
        <p style={{ 
          fontSize: '1.125rem',
          color: '#86868b',
          fontWeight: 400,
          lineHeight: 1.3
        }}>
          ۹ دسته‌بندی مینیمال
        </p>
      </div>

      {/* Grid با تصاویر */}
      <div style={{
        flex: 1,
        padding: '0 24px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(3, 1fr)',
          width: '100%',
          maxWidth: '1200px',
          height: '100%',
          maxHeight: '600px',
          gap: '20px',
          justifyItems: 'center'
        }}>
          {sectionsData.sections.map((section) => (
            <Link 
              key={section.id}
              href={`/sections/${section.slug}`}
              className="apple-card"
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '24px',     // padding کمتر برای جا دادن img
                textDecoration: 'none',
                color: '#1d1d1f',
                width: '100%',
                height: '100%',
                maxHeight: '180px',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',  // برای توزیع فضا
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                border: '1px solid rgba(0, 0, 0, 0.04)',
                overflow: 'hidden'
              }}
            >
              {/* تصویر به جای آیکون */}
              <div style={{
                width: '80px',
                height: '80px',
                marginBottom: '12px',
                borderRadius: '16px',
                overflow: 'hidden',
                flexShrink: 0
              }}>
                <img 
                  src={sectionImages[section.slug as keyof typeof sectionImages] || '/placeholder.jpg'}
                  alt={section.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </div>
              
              {/* متن */}
              <div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  marginBottom: '4px',
                  letterSpacing: '-0.01em'
                }}>
                  {section.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#86868b',
                  fontWeight: 500
                }}>
                  {section.products.length} محصول
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Hover effects */}
      <style jsx>{`
        .apple-card {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          will-change: transform;
        }
        
        .apple-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
          border-color: rgba(0, 0, 0, 0.08);
        }
        
        .apple-card:hover img {
          transform: scale(1.05);
        }
        
        .apple-card img {
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  )
}
