
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container max-w-screen-md py-10">
      <h1 className="text-2xl font-semibold text-neutral-900">
        درباره ما
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">
        اینجا می‌توانید داستان برند خود، ارزش‌ها، و مسیری که طی کرده‌اید را به
        شکل کوتاه و صمیمی تعریف کنید. هدف این صفحه ایجاد اعتماد در ذهن
        بازدیدکننده است.
      </p>
      <p className="mt-2 text-sm leading-relaxed text-neutral-700">
        می‌توانید توضیح دهید چرا محصولات شما خاص هستند، چه استانداردهایی
        را رعایت می‌کنید، و چه مزیتی نسبت به رقبا دارید. اگر تصاویر پشت‌صحنه
        یا تیم دارید، بعداً می‌توانیم برای این بخش گالری ساده اضافه کنیم.
      </p>
    </div>
  )
}
