import Products from "../server/Products"

const ProductsSection = () => {
  return (
    <section id="offers" className="h-[70vh] lg:h-screen w-[90%] mx-auto flex flex-col items-center justify-center overflow-hidden">
      <h3 className="text-[30px] text-center font-bold mt-12 mb-8 font-nosifer text-gold">Productos destacados</h3>
      <Products />
    </section>
  )
}

export default ProductsSection
