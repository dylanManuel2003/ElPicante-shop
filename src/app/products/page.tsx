import { Navbar } from "@/components/templates"
import CardProductPage from "@/components/molecules/CardProductPage"
import CategoryNavProducts from "@/components/atoms/CategoryNavProducts"
import SortProducts from "@/components/atoms/SortProducts"

export default function Page() {

    const shirtsData = [{
        name: "Printed T-shirt",
        price: "12.55",
        imageUrl: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    },{
        name: "Slub jersey T-shirt",
        price: "18.70",
        imageUrl: "https://images.unsplash.com/photo-1620799139507-2a76f79a2f4d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
    },{
        name: "T-shirt with a motif",
        price: "16.55",
        imageUrl: "https://images.unsplash.com/photo-1603320409990-02d834987237?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },{
        name: "Art T-shirt",
        price: "12.55",
        imageUrl: "https://images.unsplash.com/photo-1603320410149-db26b12d5c2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80"
    },]

    return (
        <section className="min-h-screen w-full bg-white dark:bg-dark">
            <Navbar isFixed={false}/>
            <div className="w-full h-full px-4 sm:px-16">

                    <div className="h-full w-[90%] mx-auto mt-6 pb-8 lg:mt-0 lg:px-2 ">
                        <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                            <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                            <div className="flex gap-4">
                                <CategoryNavProducts />
                                <SortProducts />            
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {shirtsData.map((product, index) => (
                                <CardProductPage
                                    key={index}
                                    name={product.name}
                                    price={product.price}
                                    imageUrl={product.imageUrl}
                                />
                            ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}
