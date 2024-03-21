export async function GET(request: Request) {
    const product = { name: "Product" };

    return Response.json({ product });
}
