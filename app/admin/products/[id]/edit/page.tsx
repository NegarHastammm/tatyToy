"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";

type Product = {
    id: number;
    name: string;
    description: string | null;
    price: number;
    category: string | null;
    tag: string | null;       // ✅ تک‌مقداری
    image_url: string | null;
};

type ApiOk<T> = { ok: true; data: T; message?: string };
type ApiErr = { ok: false; error: string };

type UploadOk = { ok: true; url: string };
type UploadErr = { ok: false; error: string };

export default function EditProductPage() {
    const params = useParams<{ id: string }>();
    const router = useRouter();
    const id = useMemo(() => Number(params?.id), [params?.id]);

    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [msg, setMsg] = useState<string | null>(null);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState<string>("");
    const [category, setCategory] = useState("");
    const [tag, setTag] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const [newImageFile, setNewImageFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string>("");

    useEffect(() => {
        if (!newImageFile) {
            setPreviewUrl("");
            return;
        }
        const url = URL.createObjectURL(newImageFile);
        setPreviewUrl(url);
        return () => URL.revokeObjectURL(url);
    }, [newImageFile]);

    useEffect(() => {
        let cancelled = false;

        async function load() {
            setLoading(true);
            setMsg(null);

            if (!Number.isInteger(id) || id <= 0) {
                setLoading(false);
                setMsg("شناسه نامعتبر است");
                return;
            }

            try {
                const res = await fetch(`/api/products/${id}`, { method: "GET" });
                const json: ApiOk<Product> | ApiErr = await res.json();

                if (!res.ok || !json.ok) {
                    if (!cancelled) setMsg(!json.ok ? json.error : "خطا در دریافت محصول");
                    return;
                }

                if (cancelled) return;

                const p = json.data;
                setName(p.name ?? "");
                setDescription(p.description ?? "");
                setPrice(String(p.price ?? ""));
                setCategory(p.category ?? "");
                setTag(p.tag ?? "");
                setImageUrl(p.image_url ?? "");
            } catch (e) {
                console.error(e);
                if (!cancelled) setMsg("خطای غیرمنتظره در دریافت محصول");
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        load();
        return () => {
            cancelled = true;
        };
    }, [id]);

    async function uploadIfNeeded(): Promise<string | null> {
        // اگر فایل جدید انتخاب نشده، همان قبلی را نگه دار
        if (!newImageFile) return imageUrl.trim() ? imageUrl.trim() : null;

        const fd = new FormData();
        fd.append("image", newImageFile);

        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const json: UploadOk | UploadErr = await res.json();

        if (!res.ok || !json.ok) {
            throw new Error(!json.ok ? json.error : "Upload failed");
        }

        return json.url;
    }

    async function onSave() {
        setMsg(null);

        const priceNum = Number(price);
        if (!name.trim()) return setMsg("نام محصول الزامی است");
        if (!Number.isFinite(priceNum)) return setMsg("قیمت نامعتبر است");

        setSaving(true);
        try {
            const finalImageUrl = await uploadIfNeeded();

            const payload = {
                name: name.trim(),
                description: description.trim() ? description.trim() : null,
                price: priceNum,
                category: category.trim() ? category.trim() : null,
                tag: tag.trim() ? tag.trim() : null,
                image_url: finalImageUrl,
            };

            const res = await fetch(`/api/products/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const json: ApiOk<Product> | ApiErr = await res.json();
            if (!res.ok || !json.ok) {
                setMsg(!json.ok ? json.error : "خطا در ذخیره تغییرات");
                return;
            }

            // تصویر جدید را “فعلی” کن و فایل انتخابی را پاک کن
            setImageUrl(payload.image_url ?? "");
            setNewImageFile(null);

            setMsg(json.message ?? "با موفقیت ذخیره شد");
            router.refresh();
        } catch (e: any) {
            console.error(e);
            setMsg(e?.message ? `خطا: ${e.message}` : "خطای غیرمنتظره در ذخیره");
        } finally {
            setSaving(false);
        }
    }

    async function onDelete() {
        setMsg(null);
        if (!confirm("حذف شود؟ این عملیات قابل بازگشت نیست.")) return;

        setDeleting(true);
        try {
            const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
            const json: ApiOk<{ id: number; name: string }> | ApiErr = await res.json();

            if (!res.ok || !json.ok) {
                setMsg(!json.ok ? json.error : "خطا در حذف محصول");
                return;
            }

            router.push("/admin/products");
            router.refresh();
        } catch (e) {
            console.error(e);
            setMsg("خطای غیرمنتظره در حذف");
        } finally {
            setDeleting(false);
        }
    }

    if (loading) {
        return (
            <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
                در حال دریافت اطلاعات...
            </div>
        );
    }

    const shownImage = previewUrl || imageUrl;

    return (
        <div style={{ maxWidth: 720, margin: "40px auto", padding: 16 }}>
            <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 16 }}>
                ویرایش محصول #{id}
            </h1>

            <div style={{ display: "grid", gap: 12 }}>
                <label>
                    نام
                    <input value={name} onChange={(e) => setName(e.target.value)} required />
                </label>

                <label>
                    توضیحات
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={4} />
                </label>

                <label>
                    قیمت
                    <input
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        inputMode="numeric"
                        placeholder="مثلا 120000"
                        required
                    />
                </label>

                <label>
                    دسته‌بندی
                    <input value={category} onChange={(e) => setCategory(e.target.value)} />
                </label>

                <label>
                    تگ (فقط یکی)
                    <input value={tag} onChange={(e) => setTag(e.target.value)} placeholder="مثلا: new" />
                </label>

                <label>
                    عکس جدید (اختیاری)
                    <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        onChange={(e) => setNewImageFile(e.target.files?.[0] ?? null)}
                    />
                </label>

                {shownImage?.trim() ? (
                    <div style={{ display: "grid", gap: 8 }}>
                        <div style={{ opacity: 0.8 }}>پیش‌نمایش:</div>
                        <img
                            src={shownImage}
                            alt={name || "product"}
                            style={{ width: 180, height: 180, objectFit: "cover", borderRadius: 12 }}
                        />
                        {previewUrl ? (
                            <div style={{ opacity: 0.7, fontSize: 12 }}>
                                عکس جدید انتخاب شده؛ با ذخیره، جایگزین می‌شود.
                            </div>
                        ) : null}
                    </div>
                ) : null}

                <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                    <button onClick={onSave} disabled={saving || deleting}>
                        {saving ? "در حال ذخیره..." : "ذخیره تغییرات"}
                    </button>

                    <button onClick={onDelete} disabled={saving || deleting}>
                        {deleting ? "در حال حذف..." : "حذف محصول"}
                    </button>

                    <button
                        type="button"
                        onClick={() => router.push("/admin/products")}
                        disabled={saving || deleting}
                    >
                        برگشت
                    </button>
                </div>

                {msg && <p style={{ marginTop: 8 }}>{msg}</p>}
            </div>
        </div>
    );
}
