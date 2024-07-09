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

const Products = ({ products }: { products: any }) => {
  return (
    <section id="offers" className="h-[70vh] w-[90%] mx-auto flex flex-col items-center justify-center overflow-hidden">
      <h3 className="text-[30px] font-bold mt-12 mb-8 text-left font-nosifer text-gold">Productos destacados</h3>
      <div className="overflow-x-auto xl:overflow-hidden w-full lg:h-auto flex items-center justify-between gap-8">
        {products.map((product: ProductProps) => (
          <CardProductLanding
            key={product.node.id}
            imageUrl={product.node.media[0].src}
            name={product.node.name}
            description={product.node.description.json.content[0].content.text}
            price={product.node.price}
            slug={product.node.slug}
          />
        ))}
      </div>
    </section>
  )
}

export default Products
