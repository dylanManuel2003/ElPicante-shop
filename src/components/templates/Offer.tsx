
const ImageCard = ({ src, alt, category, className }: { src: string, alt: string, category: string, className: string }) => {
  return (
    <div className={`${className} relative block overflow-hidden rounded-xl max-h-[18rem] group `}>
      <img
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={src}
        alt={alt}
      />
      <div className="absolute inset-0 bg-secondary/70 text-white flex items-center justify-center transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
        <span className="text-xl font-semibold">{category}</span>
      </div>
    </div>
  );
};

const Offer = () => {
  return (
    <section className="h-[80vh] lg:h-screen w-[90%] mx-auto flex flex-col items-center justify-center">
      <h3 className="text-[30px] font-bold mt-12 mb-8 font-nosifer text-gold">Descubrir</h3>
      <div className="w-full gap-4 flex">
        <div className="grid grid-cols-6 col-span-2 gap-2 w-full max-h-[600px] ">
          <ImageCard
            src="/images/shoes1.jpg"
            alt="Zapatillas"
            category="Zapatillas"
            className="col-span-3"
          />
          <ImageCard
            src="/images/shoes2.jpg"
            alt="Pantalones"
            category="Pantalones"
            className="col-span-3"
          />
          <ImageCard
            src="/images/shoes3.jpg"
            alt="Remeras"
            category="Remeras"
            className="col-span-2"
          />
          <ImageCard
            src="/images/shoes5.jpg"
            alt="Buzos"
            category="Buzos"
            className="col-span-2"
          />
          <ImageCard
            src="/images/shoes4.jpg"
            alt="Accesorios"
            category="Accesorios"
            className="col-span-2"
          />
        </div>
      </div>
    </section>
  )
}

export default Offer
