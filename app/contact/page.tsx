
// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="container max-w-screen-md py-10">
      <h1 className="text-2xl font-semibold text-neutral-900">
        تماس با ما
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-neutral-700">
        برای ثبت سفارش، مشاوره یا دریافت اطلاعات بیشتر، از یکی از روش‌های زیر
        با ما در ارتباط باشید.
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800">
          <p className="font-medium text-neutral-900">
            اطلاعات تماس
          </p>
          <p>تلفن: ۰۹xx xxx xxxx</p>
          <p>ایمیل: example@email.com</p>
          <p>آدرس: شهر، منطقه، توضیح کوتاه آدرس</p>
        </div>

        <div className="space-y-3 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-800">
          <p className="font-medium text-neutral-900">
            شبکه‌های اجتماعی
          </p>
          <p>اینستاگرام: @your_instagram</p>
          <p>واتساپ: لینک مستقیم یا شماره</p>
          <p>تلگرام: @your_telegram</p>
        </div>
      </div>

      {/* فرم ساده (فعلاً بدون بک‌اند) */}
      <div className="mt-8 rounded-2xl border border-neutral-200 bg-white p-5">
        <p className="mb-4 text-sm font-medium text-neutral-900">
          فرم ارسال پیام
        </p>
        <form className="grid gap-4 text-sm">
          <div className="grid gap-1">
            <label className="text-neutral-700">نام و نام خانوادگی</label>
            <input
              type="text"
              className="h-10 rounded-lg border border-neutral-300 px-3 text-sm outline-none ring-0 transition focus:border-neutral-500"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-neutral-700">شماره تماس</label>
            <input
              type="tel"
              className="h-10 rounded-lg border border-neutral-300 px-3 text-sm outline-none ring-0 transition focus:border-neutral-500"
            />
          </div>
          <div className="grid gap-1">
            <label className="text-neutral-700">پیام شما</label>
            <textarea
              rows={4}
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-neutral-500"
            />
          </div>
          <button
            type="button"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-neutral-900 px-4 text-sm font-medium text-white transition hover:bg-neutral-800"
          >
            ارسال پیام (نمونه)
          </button>
        </form>
      </div>
    </div>
  )
}
