import { getAllProducts } from "@/data/getAllProducts";
import CardProductLanding from "@/components/molecules/CardProductLanding"

interface ProductProps {
    node: {
        id: string,
        name: string,
        description: { json: { content: [{ content: { text: string } }] } },
        slug: string,
        price: string,
        media: [{ src: string }],
    }
}

export default async function Products() {
    const products = await getAllProducts();

    if (!products) return null
    return (
        <div className="overflow-x-auto xl:overflow-hidden w-full lg:h-auto flex items-center justify-between gap-8">
            {products.data.map((product: ProductProps) => (
                <CardProductLanding
                    key={product.node.id}
                    imageUrl={product.node.media[0].src}
                    name={product.node.name}
                    description={product.node.description.json.content[0].content.text}
                    price={product.node.price}
                    slug={product.node.slug}
                />
            ))
            }
        </div>
    )
}
