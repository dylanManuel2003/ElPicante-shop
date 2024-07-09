import Image from "next/image"
import Link from "next/link"

const CardProductLanding = ({ imageUrl, name, description, price, slug }: { imageUrl: string, name: string, description: string, price: string, slug: string }) => {
    return (
        <div className="mx-auto lg:mx-0 min-w-80 lg:transform overflow-hidden rounded-lg bg-light-secondary dark:bg-dark-secondary shadow-md duration-300 hover:shadow-lg">
            <Image
                src={imageUrl}
                className="h-48 w-full object-cover object-center"
                width={320}
                height={190}
                alt="Product Image"
            />
            <div className="p-4">
                <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                    {name}
                </h2>
                <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                    {description}
                </p>
                <div className="flex items-center justify-between">
                    <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                        ${price}
                    </p>
                    <Link href={`/products/${slug}`} className="px-2 py-1 font-semibold bg-green-clear rounded-md ">Ver</Link>
                </div>
            </div>
        </div>
    )
}
export default CardProductLanding
