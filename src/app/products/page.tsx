import { Navbar } from "@/components/templates"
import CardProductPage from "@/components/molecules/CardProductPage"
import CategoryNavProducts from "@/components/atoms/CategoryNavProducts"
import SortProducts from "@/components/atoms/SortProducts"
import { getAllProducts } from "@/data/getAllProducts"
import { log } from "console"

interface ProductProps {
    node: {
        id: string,
        name: string,
        description: string,
        slug: string,
        price: string,
        media: [{ src: string }],
    }
}

export default async function Page() {
    const products: any = await getAllProducts()

    if (!products) return null
    return (
        <section className="min-h-screen w-full bg-white dark:bg-dark">
            <Navbar isFixed={false} />
            <div className="w-full h-full px-4 sm:px-16">

                <div className="h-full w-[90%] mx-auto mt-6 pb-8 lg:mt-0 lg:px-2 ">
                    <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                        <p className="text-gray-500 dark:text-gray-300">{products.data.length} Items</p>
                        {/* <div className="flex gap-4">
                            <CategoryNavProducts />
                            <SortProducts />
                        </div> */}
                    </div>

                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {products.data.map((product: ProductProps, index: number) => (
                            <CardProductPage
                                key={index}
                                name={product.node.name}
                                price={product.node.price}
                                imageUrl={product.node.media[0].src}
                                slug={product.node.slug}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

