import { pool } from "../lib/db";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const result = await pool.query("SELECT * FROM products ORDER BY id DESC");
        return NextResponse.json({ ok: true, data: result.rows, });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: "Failed to fetch products" },
            { status: 500 });
    }
}



export async function POST(request: Request) {
    try {
        const body = await request.json();

        const {
            name,
            description,
            price,
            category,
            tag,
            image_url = null,
        } = body;

        const result = await pool.query(
            `
      INSERT INTO products
      (name, description, price, image_url, category, tag)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
      `,
            [name, description, price, image_url, category, tag]
        );

        const createdProduct = result.rows[0];

        return NextResponse.json(
            {
                ok: true,
                message: `محصول «${createdProduct.name}» با موفقیت ساخته شد`,
                data: createdProduct,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            { ok: false, error: "Failed to create product" },
            { status: 500 }
        );
    }
}
