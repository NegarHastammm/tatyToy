"use client";

import { useState } from "react";

export default function NewProductPage() {
    const [pending, setPending] = useState(false);
    const [msg, setMsg] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setMsg(null);
        setPending(true);

        try {
            const formEl = e.currentTarget;
            const fd = new FormData(formEl);

            // نکته: اسم فیلد فایل باید دقیقا "image" باشد (طبق Route)
            const res = await fetch("/api/products", {
                method: "POST",
                body: fd,
            });

            const json = await res.json();

            if (!res.ok || !json.ok) {
                setMsg(json?.error ?? "خطا در ثبت محصول");
                return;
            }

            setMsg(json.message ?? "ثبت شد");
            formEl.reset();
        } catch (err) {
            console.error(err);
            setMsg("خطای غیرمنتظره");
        } finally {
            setPending(false);
        }
    }

    return (
        <div style={{ maxWidth: 640, margin: "40px auto", padding: 16 }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
                افزودن محصول جدید
            </h1>

            <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
                <input name="name" placeholder="نام محصول" required />

                <textarea name="description" placeholder="توضیحات" required />

                <input
                    name="price"
                    placeholder="قیمت"
                    inputMode="numeric"
                    required
                />

                <input name="category" placeholder="دسته‌بندی" required />

                <input name="tag" placeholder="تگ (اختیاری)" />

                <input
                    type="file"
                    name="image"
                    accept="image/png,image/jpeg,image/webp"
                />

                <button type="submit" disabled={pending}>
                    {pending ? "در حال ثبت..." : "ثبت محصول"}
                </button>

                {msg && <p>{msg}</p>}
            </form>

            <p style={{ marginTop: 12, opacity: 0.7 }}>
                اگر عکس آپلود شود، مسیر آن در دیتابیس ذخیره می‌شود.
            </p>
        </div>
    );
}
