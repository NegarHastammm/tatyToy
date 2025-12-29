// app/products/page.tsx - تست بدون data
export default function ProductsPage() {
  return (
    <div style={{ 
      padding: '50px', 
      background: 'lightcoral',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <h1 style={{ color: 'darkred', fontSize: '3rem' }}>
        ✅ محصولات لود شد! ({new Date().toLocaleTimeString()})
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#333' }}>
        اگر قرمز دیدی → مشکل حل شد!
      </p>
    </div>
  )
}
