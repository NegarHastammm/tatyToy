// data/sections.ts

export interface Product {
  id: string
  name: string
  image: string
  price: number
  color: string
  size: string
  quantity: number
}

export interface Section {
  id: string
  slug: string
  title: string
  products: Product[]
}

const sectionsData: { sections: Section[] } = {
  sections: [
    {
      id: "1",
      slug: "posters",
      title: "پوسترها",
      products: [
        {
          id: "p1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "p2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "p3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "2",
      slug: "frames",
      title: "قاب‌ها",
      products: [
        {
          id: "f1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "f2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "f3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "3",
      slug: "canvases",
      title: "کانواس",
      products: [
        {
          id: "c1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "c2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "c3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "4",
      slug: "stickers",
      title: "استیکر",
      products: [
        {
          id: "s1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "s2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "s3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "5",
      slug: "mugs",
      title: "ماگ",
      products: [
        {
          id: "m1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "m2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "m3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "6",
      slug: "tshirts",
      title: "تیشرت",
      products: [
        {
          id: "t1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "t2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "t3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "7",
      slug: "phone-cases",
      title: "قاب گوشی",
      products: [
        {
          id: "pc1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "pc2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "pc3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "8",
      slug: "wallets",
      title: "کیف پول",
      products: [
        {
          id: "w1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "w2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "w3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    },
    {
      id: "9",
      slug: "notebooks",
      title: "دفترچه",
      products: [
        {
          id: "n1",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "n2",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        },
        {
          id: "n3",
          name: "...",
          image: "...",
          price: 0,
          color: "...",
          size: "...",
          quantity: 0
        }
      ]
    }
  ]
}

export default sectionsData
