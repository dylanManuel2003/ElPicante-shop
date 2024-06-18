import Image from "next/image"

const CardProduct = ({ imageUrl, name, description, price }: { imageUrl: string, name: string, description: string, price: string }) => {
  return (
    <div className="mx-auto lg:mx-0 min-w-80 lg:transform overflow-hidden rounded-lg bg-white dark:bg-black shadow-md duration-300 lg:hover:scale-105 hover:shadow-lg">
      <img
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
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            ${price}
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
      </div>
    </div>
  )
}

const Products = () => {

  const data = [{
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product 1",
    price: "20.00",
    description: "product descriptioon efnowenfed",
  },{
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product 2",
    price: "51.50",
    description: "product descriptioon efnowenfed",
  },{
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product 3",
    price: "36.20",
    description: "product descriptioon efnowenfed",
  },{
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "Product 4",
    price: "84.00",
    description: "product descriptioon efnowenfed",
  },]
 


  return (
    <section className="h-[80vh] w-[90%] mx-auto flex flex-col items-start justify-center overflow-hidden">
      <h3 className="text-[24px] font-bold mb-12 text-left ">Productos destacados</h3>
      <div className="overflow-x-auto lg:overflow-hidden w-full flex items-center justify-between gap-8">
        {data.map((product) => (
          <CardProduct
            key={product.id}
            imageUrl={product.imageUrl}
            name={product.name} 
            description={product.description}
            price={product.price} />
        ))}
      </div>
    </section>
  )
}

export default Products
