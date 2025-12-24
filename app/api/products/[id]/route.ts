import { pool } from "../../lib/db";
import { NextResponse } from "next/server";

type Ctx = { params: Promise<{ id: string }> };

function parseId(raw: string) {
    const id = Number(raw);
    if (!Number.isInteger(id) || id <= 0) return null;
    return id;
}

export async function GET(_: Request, ctx: Ctx) {
    const { id: rawId } = await ctx.params;
    const id = parseId(rawId);

    if (!id) {
        return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
    }

    try {
        const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [id]);
        const product = rows[0];

        if (!product) {
            return NextResponse.json({ ok: false, error: "Product not found", id }, { status: 404 });
        }

        return NextResponse.json({ ok: true, data: product });
    } catch (error) {
        console.error("GET /api/products/[id]", error);
        return NextResponse.json({ ok: false, error: "Failed to fetch product" }, { status: 500 });
    }
}

export async function PUT(request: Request, ctx: Ctx) {
    const { id: rawId } = await ctx.params;
    const id = parseId(rawId);

    if (!id) {
        return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
    }

    try {
        const body = await request.json();

        const {
            name,
            description,
            price,
            category,
            tag,
            image_url,
        }: {
            name?: string;
            description?: string | null;
            price?: number;
            category?: string | null;
            tag?: string[] | null;
            image_url?: string | null;
        } = body;

        if (
            name === undefined &&
            description === undefined &&
            price === undefined &&
            category === undefined &&
            tag === undefined &&
            image_url === undefined
        ) {
            return NextResponse.json(
                { ok: false, error: "No fields provided to update" },
                { status: 400 }
            );
        }

        const { rows } = await pool.query(
            `
      UPDATE products
      SET
        name = COALESCE($2, name),
        description = COALESCE($3, description),
        price = COALESCE($4, price),
        image_url = COALESCE($5, image_url),
        category = COALESCE($6, category),
        tag = COALESCE($7, tag),
        updated_at = NOW()
      WHERE id = $1
      RETURNING *
      `,
            [
                id,
                name ?? null,
                description ?? null,
                price ?? null,
                image_url ?? null,
                category ?? null,
                tag ?? null,
            ]
        );

        const updated = rows[0];
        if (!updated) {
            return NextResponse.json({ ok: false, error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({
            ok: true,
            message: `محصول «${updated.name}» با موفقیت ویرایش شد`,
            data: updated,
        });
    } catch (error) {
        console.error("PUT /api/products/[id]", error);
        return NextResponse.json({ ok: false, error: "Failed to update product" }, { status: 500 });
    }
}

export async function DELETE(_: Request, ctx: Ctx) {
    const { id: rawId } = await ctx.params;
    const id = parseId(rawId);

    if (!id) {
        return NextResponse.json({ ok: false, error: "Invalid id" }, { status: 400 });
    }

    try {
        const { rows } = await pool.query(
            "DELETE FROM products WHERE id = $1 RETURNING id, name",
            [id]
        );

        const deleted = rows[0];
        if (!deleted) {
            return NextResponse.json({ ok: false, error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json({
            ok: true,
            message: `محصول «${deleted.name}» حذف شد`,
            data: deleted,
        });
    } catch (error) {
        console.error("DELETE /api/products/[id]", error);
        return NextResponse.json({ ok: false, error: "Failed to delete product" }, { status: 500 });
    }
}
