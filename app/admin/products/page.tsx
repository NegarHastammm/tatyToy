"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Product = {
    id: number;
    name: string;
    price: number;
    category: string | null;
    tag: string | null;
    image_url: string | null;
};

type ApiOk<T> = { ok: true; data: T; message?: string };
type ApiErr = { ok: false; error: string };

export default function AdminProductsPage() {
    const router = useRouter();

    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<Product[]>([]);
    const [msg, setMsg] = useState<string | null>(null);

    async function load() {
        setLoading(true);
        setMsg(null);
        try {
            const res = await fetch("/api/products", { method: "GET" });
            const json: ApiOk<Product[]> | ApiErr = await res.json();

            if (!res.ok || !json.ok) {
                setMsg(!json.ok ? json.error : "خطا در دریافت لیست");
                return;
            }

            setItems(json.data);
        } catch (e) {
            console.error(e);
            setMsg("خطای غیرمنتظره");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        load();
    }, []);

    async function deleteItem(id: number) {
        setMsg(null);
        if (!confirm("حذف شود؟")) return;

        try {
            const res = await fetch(`/api/products/${id}`, { method: "DELETE" });
            const json: ApiOk<{ id: number; name: string }> | ApiErr = await res.json();

            if (!res.ok || !json.ok) {
                setMsg(!json.ok ? json.error : "خطا در حذف");
                return;
            }

            // سریع: از state حذف کن
            setItems((prev) => prev.filter((x) => x.id !== id));
            setMsg(json.message ?? "حذف شد");
            router.refresh();
        } catch (e) {
            console.error(e);
            setMsg("خطای غیرمنتظره در حذف");
        }
    }

    return (
        <div style={{ maxWidth: 900, margin: "40px auto", padding: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <h1 style={{ fontSize: 22, fontWeight: 700 }}>مدیریت محصولات</h1>
                <Link href="/admin/products/new">افزودن محصول</Link>
            </div>

            {msg && <p style={{ marginTop: 12 }}>{msg}</p>}

            {loading ? (
                <p style={{ marginTop: 12 }}>در حال بارگذاری...</p>
            ) : (
                <div style={{ marginTop: 16, display: "grid", gap: 10 }}>
                    {items.map((p) => (
                        <div
                            key={p.id}
                            style={{
                                display: "grid",
                                gridTemplateColumns: "80px 1fr auto",
                                gap: 12,
                                alignItems: "center",
                                padding: 12,
                                border: "1px solid #ddd",
                                borderRadius: 12,
                            }}
                        >
                            <div style={{ width: 80, height: 80, borderRadius: 12, overflow: "hidden", background: "#f3f3f3" }}>
                                {p.image_url ? (
                                    <img src={p.image_url} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                                ) : null}
                            </div>

                            <div>
                                <div style={{ fontWeight: 700 }}>{p.name}</div>
                                <div style={{ opacity: 0.75, marginTop: 4, fontSize: 13 }}>
                                    قیمت: {p.price} | دسته: {p.category ?? "-"} | تگ: {p.tag ?? "-"}
                                </div>
                            </div>

                            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                                <Link href={`/admin/products/${p.id}/edit`}>ویرایش</Link>
                                <button type="button" onClick={() => deleteItem(p.id)}>
                                    حذف
                                </button>
                            </div>
                        </div>
                    ))}

                    {!items.length ? <p>محصولی وجود ندارد.</p> : null}
                </div>
            )}
        </div>
    );
}
