// data/sections.ts
export interface Product {
  id: string
  name: string
  image: string
  price: number
}

export interface Section {
  id: string
  slug: string
  title: string
  products: Product[]
  icon: string // Lucide icon name
}

const sectionsData = {
  sections: [
    { id: "1", slug: "posters", title: "پوسترها", icon: "Image", products: [
      { id: "p1", name: "پوستر ناتیلوس", image: "/images/posters/nautilus.jpg", price: 250000 },
      { id: "p2", name: "پوستر اقیانوس", image: "/images/posters/ocean.jpg", price: 180000 },
      { id: "p3", name: "پوستر موج", image: "/images/posters/wave.jpg", price: 220000 }
    ]},
    { id: "2", slug: "frames", title: "قاب‌ها", icon: "SquareFrame", products: [
      { id: "f1", name: "قاب چوبی 50x70", image: "/images/frames/wood-50x70.jpg", price: 450000 },
      { id: "f2", name: "قاب فلزی مشکی", image: "/images/frames/metal-black.jpg", price: 380000 },
      { id: "f3", name: "قاب طلایی", image: "/images/frames/gold.jpg", price: 520000 }
    ]},
    { id: "3", slug: "canvases", title: "کانواس", icon: "Canvas", products: [
      { id: "c1", name: "کانواس منظره", image: "/images/canvases/landscape.jpg", price: 780000 },
      { id: "c2", name: "کانواس انتزاعی", image: "/images/canvases/abstract.jpg", price: 650000 },
      { id: "c3", name: "کانواس پرتره", image: "/images/canvases/portrait.jpg", price: 890000 }
    ]},
    { id: "4", slug: "stickers", title: "استیکر", icon: "Sticker", products: [
      { id: "s1", name: "استیکر موج", image: "/images/stickers/wave.jpg", price: 45000 },
      { id: "s2", name: "استیکر ماهی", image: "/images/stickers/fish.jpg", price: 38000 },
      { id: "s3", name: "استیکر صدف", image: "/images/stickers/shell.jpg", price: 42000 }
    ]},
    { id: "5", slug: "mugs", title: "ماگ", icon: "Mug", products: [
      { id: "m1", name: "ماگ اقیانوسی", image: "/images/mugs/ocean.jpg", price: 180000 },
      { id: "m2", name: "ماگ غروب", image: "/images/mugs/sunset.jpg", price: 165000 },
      { id: "m3", name: "ماگ مرجانی", image: "/images/mugs/coral.jpg", price: 195000 }
    ]},
    { id: "6", slug: "tshirts", title: "تیشرت", icon: "Tshirt", products: [
      { id: "t1", name: "تیشرت موج", image: "/images/tshirts/wave.jpg", price: 350000 },
      { id: "t2", name: "تیشرت ناتیلوس", image: "/images/tshirts/nautilus.jpg", price: 380000 },
      { id: "t3", name: "تیشرت اقیانوس", image: "/images/tshirts/ocean.jpg", price: 365000 }
    ]},
    { id: "7", slug: "phone-cases", title: "قاب گوشی", icon: "SmartphoneCharging", products: [
      { id: "pc1", name: "قاب آیفون موج", image: "/images/phone-cases/iphone-wave.jpg", price: 280000 },
      { id: "pc2", name: "قاب سامسونگ مرجان", image: "/images/phone-cases/samsung-coral.jpg", price: 265000 },
      { id: "pc3", name: "قاب آیفون ناتیلوس", image: "/images/phone-cases/iphone-nautilus.jpg", price: 295000 }
    ]},
    { id: "8", slug: "wallets", title: "کیف پول", icon: "Wallet", products: [
      { id: "w1", name: "کیف چرمی اقیانوس", image: "/images/wallets/ocean-leather.jpg", price: 620000 },
      { id: "w2", name: "کیف پارچه‌ای موج", image: "/images/wallets/wave-fabric.jpg", price: 480000 },
      { id: "w3", name: "کیف کوچک مرجانی", image: "/images/wallets/small-coral.jpg", price: 410000 }
    ]},
    { id: "9", slug: "notebooks", title: "دفترچه", icon: "BookOpen", products: [
      { id: "n1", name: "دفترچه A5 اقیانوس", image: "/images/notebooks/a5-ocean.jpg", price: 220000 },
      { id: "n2", name: "دفترچه A6 موج", image: "/images/notebooks/a6-wave.jpg", price: 185000 },
      { id: "n3", name: "دفترچه جیبی", image: "/images/notebooks/pocket.jpg", price: 145000 }
    ]}
  ]
}

export default sectionsData
