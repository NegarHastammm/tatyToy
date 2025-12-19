
// components/ui/Footer.tsx
export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 lg:flex-row">
        <p className="text-center text-sm text-neutral-600 lg:text-left">
          © ۲۰۲۵. تمامی حقوق محفوظ است.
        </p>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-neutral-600 hover:text-neutral-900">
            واتساپ
          </a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900">
            تلگرام
          </a>
          <a href="#" className="text-neutral-600 hover:text-neutral-900">
            اینستاگرام
          </a>
        </div>
      </div>
    </footer>
  )
}
