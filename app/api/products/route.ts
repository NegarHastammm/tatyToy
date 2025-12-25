import { NextResponse } from "next/server";
import { pool } from "../lib/db";

import path from "path";
import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function toNumber(raw: FormDataEntryValue | null) {
    if (raw === null) return null;
    const n = Number(String(raw));
    return Number.isFinite(n) ? n : null;
}

async function saveImageIfProvided(file: File | null): Promise<string | null> {
    if (!file || file.size === 0) return null;

    const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
    if (!allowed.has(file.type)) {
        throw new Error("Invalid image type. Use jpg/png/webp");
    }

    const MAX = 2 * 1024 * 1024; // 2MB
    if (file.size > MAX) {
        throw new Error("File too large (max 2MB)");
    }

    const ext =
        file.type === "image/png" ? "png" :
            file.type === "image/webp" ? "webp" : "jpg";

    const filename = `${crypto.randomUUID()}.${ext}`;
    const uploadDir = path.join(process.cwd(), "public", "uploads");
    await mkdir(uploadDir, { recursive: true });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    await writeFile(path.join(uploadDir, filename), buffer);
    return `/uploads/${filename}`;
}

export async function GET() {
    try {
        const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
        return NextResponse.json({ ok: true, data: result.rows });
    } catch (error) {
        console.error("GET /api/products", error);
        return NextResponse.json({ ok: false, error: "Failed to fetch products" }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const form = await request.formData();

        const name = String(form.get("name") ?? "").trim();
        const description = String(form.get("description") ?? "").trim();
        const category = String(form.get("category") ?? "").trim();
        const tag = String(form.get("tag") ?? "").trim(); // ✅ تک‌مقداری
        const price = toNumber(form.get("price"));

        if (!name || !description || !category || price === null) {
            return NextResponse.json({ ok: false, error: "Invalid input" }, { status: 400 });
        }

        const file = form.get("image") as File | null;
        let image_url: string | null = null;
        try {
            image_url = await saveImageIfProvided(file);
        } catch (e: any) {
            return NextResponse.json({ ok: false, error: e?.message ?? "Invalid image" }, { status: 400 });
        }

        const result = await pool.query(
            `
      INSERT INTO products (name, description, price, image_url, category, tag)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
            [name, description, price, image_url, category, tag ? tag : null]
        );

        const created = result.rows[0];

        return NextResponse.json(
            { ok: true, message: `محصول «${created.name}» ساخته شد`, data: created },
            { status: 201 }
        );
    } catch (error) {
        console.error("POST /api/products", error);
        return NextResponse.json({ ok: false, error: "Failed to create product" }, { status: 500 });
    }
}
