
// data/products.ts
export interface Product {
  id: string
  slug: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: "1",
    slug: "product-1",
    name: "محصول نمونه ۱",
    description: "توضیح کوتاه و جذاب محصول اول شما",
    price: 250000,
    image: "/products/product-1.jpg",
    category: "دسته اول"
  },
  {
    id: "2",
    slug: "product-2", 
    name: "محصول نمونه ۲",
    description: "ویژگی‌های خاص و منحصر به فرد",
    price: 450000,
    image: "/products/product-2.jpg",
    category: "دسته اول"
  },
  {
    id: "3",
    slug: "product-3",
    name: "محصول نمونه ۳", 
    description: "بهترین کیفیت با قیمت مناسب",
    price: 180000,
    image: "/products/product-3.jpg",
    category: "دسته دوم"
  }
]
