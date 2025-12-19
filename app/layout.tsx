// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "./components/ui/Header"
import { Footer } from "./components/ui/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ویترین فروشگاه",
  description: "نمایش محصولات با کیفیت بالا",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={inter.className}>
        <Header />
        <main className="min-h-[80vh] flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
