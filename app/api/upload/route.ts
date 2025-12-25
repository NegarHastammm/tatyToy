import { NextResponse } from "next/server";
import path from "path";
import crypto from "crypto";
import { mkdir, writeFile } from "fs/promises";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {
    try {
        const form = await req.formData();
        const file = form.get("image") as File | null;

        if (!file || file.size === 0) {
            return NextResponse.json({ ok: false, error: "No file uploaded" }, { status: 400 });
        }

        const allowed = new Set(["image/jpeg", "image/png", "image/webp"]);
        if (!allowed.has(file.type)) {
            return NextResponse.json({ ok: false, error: "Invalid image type. Use jpg/png/webp" }, { status: 400 });
        }

        const MAX = 2 * 1024 * 1024;
        if (file.size > MAX) {
            return NextResponse.json({ ok: false, error: "File too large (max 2MB)" }, { status: 400 });
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

        return NextResponse.json({ ok: true, url: `/uploads/${filename}` }, { status: 201 });
    } catch (e) {
        console.error("POST /api/upload", e);
        return NextResponse.json({ ok: false, error: "Upload failed" }, { status: 500 });
    }
}
