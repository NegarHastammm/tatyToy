// app/layout.tsx - نسخه خوشگل و کامل
import type { Metadata } from "next"
import "./globals.css"
import { Header } from "./components/ui/Header"

export const metadata: Metadata = {
  title: {
    default: "ویترین فروشگاه",
    template: "%s | ویترین فروشگاه"
  },
  description: "نمایش محصولات با کیفیت بالا و طراحی مینیمال",
  keywords: "ویترین, محصولات, فروشگاه, آنلاین",
  authors: [{ name: "نام برند" }],
  creator: "نام برند",
  themeColor: "#ffffff",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "https://yourdomain.com",
    siteName: "ویترین فروشگاه",
    images: [
      {
        url: "https://yourdomain.com/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yourhandle",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="fa" 
      dir="rtl" 
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      
      <body className="antialiased bg-neutral-50 text-neutral-900">
        {/* Loading Skeleton */}
        <div 
          className="fixed inset-0 z-50 hidden bg-neutral-900/20 backdrop-blur-sm transition-all duration-300"
          id="loader"
        >
          <div className="flex h-screen items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-neutral-200 border-t-neutral-900" />
          </div>
        </div>

        <Header />
        
        <main className="min-h-[calc(100vh-80px-72px)] flex-1 pb-20 pt-4">
          {children}
        </main>

        {/* نوار تماس ثابت - طراحی بهتر */}
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 backdrop-blur-xl">
          <div className="mx-auto max-w-screen-2xl px-4 pb-4 pt-3">
            <div className="flex items-center justify-between rounded-3xl border border-neutral-200/50 bg-gradient-to-r from-white/80 to-neutral-50/80 px-6 py-3 shadow-2xl shadow-neutral-200/50">
              <div className="flex items-center space-x-3 space-x-reverse">
                <div className="h-8 w-8 rounded-full bg-emerald-500 p-1.5 text-white">
                  💬
                </div>
                <p className="text-xs font-semibold leading-tight text-neutral-800">
                  برای سفارش یا مشاوره، همین حالا تماس بگیرید
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <a
                  href="https://wa.me/09XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-1.5 rounded-xl bg-gradient-to-l from-emerald-500 to-emerald-600 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-emerald-300/60 hover:scale-[1.02]"
                >
                  <span>واتساپ</span>
                  <svg 
                    className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm3.36-1.5a.5.5 0 0 1 .11.746l-2.47 3.66a.5.5 0 0 1-.757-.105L7.19 3.5a.5.5 0 1 1 .14-.7l2.47-3.66a.5.5 0 0 1 .646-.11z"/>
                  </svg>
                </a>
                <a
                  href="tel:09XXXXXXXXX"
                  className="group flex items-center gap-1.5 rounded-xl border-2 border-neutral-200 bg-white px-4 py-2.5 text-xs font-semibold text-neutral-800 shadow-lg shadow-neutral-200/50 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-neutral-300/60 hover:scale-[1.02]"
                >
                  <span>تماس</span>
                  <svg 
                    className="h-3.5 w-3.5 transition-transform group-hover:rotate-12" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 0 1 1-1h2.153a1 1 0 0 1 .986.836l.74 4.435a1 1 0 0 1-.523 1.023l-4.18 2.323a.5.5 0 0 0-.288.288l-2.323 4.18A1 1 0 0 0 2 17a1 1 0 0 0 1-1V3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Toaster Container - بعداً برای notification */}
        <div 
          id="toaster"
          className="fixed top-20 right-4 z-50 hidden w-80 rounded-2xl bg-white shadow-2xl"
        />
      </body>
    </html>
  )
}
