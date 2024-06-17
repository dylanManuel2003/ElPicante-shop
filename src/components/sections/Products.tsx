import React from 'react'

const Products = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
                <div className="prod-title">
                    <p className="text-2xl font-bold text-gray-900 uppercase">
                        Puma Shoes
                    </p>
                    <p className="text-sm text-gray-400 uppercase">
                        The best shoes in the marketplace
                    </p>
                </div>
                <div className="prod-img">
                    <img src="/images/step3.png" className="object-cover object-center w-full" />
                </div>
                <div className="grid gap-10 prod-info">
                    <div className="flex flex-col items-center justify-between text-gray-900 md:flex-row">
                        <p className="text-xl font-bold">
                            65 $
                        </p>
                        <button className="px-6 py-2 uppercase transition duration-200 ease-in border-2 border-gray-900 rounded-full hover:bg-gray-800 hover:text-white focus:outline-none">
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Products
