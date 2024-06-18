import Link from "next/link";

const CardTopicOffer = () => {
  return (
    <div className="relative flex-shrink-0 max-w-xs mx-2 -mb-6 overflow-hidden bg-purple-500 rounded-lg shadow-lg">
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="#a17cf3"
        ></rect>
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="#a17cf3"
        ></rect>
      </svg>
      <div className="relative flex items-center justify-center px-10 pt-10">
        <div className="absolute bottom-0 left-0 block w-48 h-48 ml-3 -mb-24"></div>
        <img className="relative w-40" src="/images/step3.png" alt="shopping" />
      </div>
      <div className="relative px-6 pb-6 mt-6 text-white">
        <span className="block -mb-1 opacity-75">Outdoor</span>
        <div className="flex justify-between">
          <span className="block text-xl font-semibold">Oak Tree</span>
          <span className="flex items-center px-3 py-2 text-xs font-bold leading-none text-purple-500 bg-white rounded-full">
            $68.50
          </span>
        </div>
      </div>
    </div>
  )
}

const ImageCard = ({ href, src, alt, category, className }) => {
    return (
      <Link href={href} className={`${className} relative block overflow-hidden rounded-xl max-h-[18rem] group `}>
          <img
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={src}
            alt={alt}
          />
          <div className="absolute inset-0 bg-primary/70 text-white flex items-center justify-center transition-all duration-500 transform translate-y-full group-hover:translate-y-0">
            <span className="text-xl font-semibold">{category}</span>
          </div>
      </Link>
    );
  };

const Offer = () => {
  return (
    <section className="h-[80vh] lg:h-screen w-[90%] mx-auto flex flex-col items-start justify-center">
      <h3 className="text-[24px] font-bold mb-12">Descubrir</h3>
      <div className="w-full gap-4 flex">
        <div className="grid grid-cols-6 col-span-2 gap-2 w-full max-h-[600px] ">
        <ImageCard
            href="/categoria/zapatillas"
            src="/images/shoes1.jpg"
            alt="Zapatillas"
            category="Zapatillas"
            className="col-span-3"
          />
          <ImageCard
            href="/categoria/outdoor"
            src="/images/shoes2.jpg"
            alt="Pantalones"
            category="Pantalones"
            className="col-span-3"
          />
          <ImageCard
            href="/categoria/tecnologia"
            src="/images/shoes3.jpg"
            alt="Remeras"
            category="Remeras"
            className="col-span-2"
          />
          <ImageCard
            href="/categoria/naturaleza"
            src="/images/shoes5.jpg"
            alt="Buzos"
            category="Buzos"
            className="col-span-2"
          />
          <ImageCard
            href="/categoria/mas"
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
