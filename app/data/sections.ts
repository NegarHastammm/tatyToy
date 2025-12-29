// data/sections.ts

export type ProductAttribute = {
  size?: string        // سایز
  color?: string       // رنگ
  quantity?: number    // تعداد
  dimensions?: string  // ابعاد (مثلاً ۲۰x۳۰ سانت یا "ضخامت ۲ میلی‌متر")
}

export type SectionProduct = {
  id: string
  slug: string
  name: string
  image: string
  attributes: ProductAttribute
}

export type Section = {
  id: string
  slug: string
  title: string
  description?: string
  image: string
  products: SectionProduct[]
}

export const sections: Section[] = [
  {
    id: "1",
    slug: "posters",
    title: "پوسترها",
    description: "مجموعه پوسترهای چاپی",
    image: "/sections/posters.jpg",
    products: [
      {
        id: "p1",
        slug: "poster-1",
        name: "پوستر شماره ۱",
        image: "/products/poster-1.jpg",
        attributes: {
          size: "۳۰x۴۰ سانت",
          color: "آبی",
          quantity: 5,
          dimensions: "ضخامت ۲ میلی‌متر",
        },
      },
      {
        id: "p2",
        slug: "poster-2",
        name: "پوستر شماره ۲",
        image: "/products/poster-2.jpg",
        attributes: {
          size: "۵۰x۷۰ سانت",
          color: "مشکی / سفید",
          quantity: 3,
          dimensions: "ضخامت ۳ میلی‌متر",
        },
      },
    ],
  },
  {
    id: "2",
    slug: "frames",
    title: "قاب‌ها",
    description: "انواع قاب عکس و تابلو",
    image: "/sections/frames.jpg",
    products: [
      {
        id: "f1",
        slug: "frame-1",
        name: "قاب ساده مشکی",
        image: "/products/frame-1.jpg",
        attributes: {
          size: "۲۱x۳۰ سانت",
          color: "مشکی",
          quantity: 10,
          dimensions: "عمق ۳ سانت",
        },
      },
    ],
  },
  // بقیه سکشن‌ها را به همین فرم اضافه کن:
  // {
  //   id: "3",
  //   slug: "section-3",
  //   title: "نام سکشن ۳",
  //   description: "توضیح...",
  //   image: "/sections/section-3.jpg",
  //   products: [ ... ],
  // },
]
