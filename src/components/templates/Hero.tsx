import Image from "next/image"
import Link from "next/link"

const Hero = () => {
    return (
        <section className="h-screen w-full flex items-center justify-center">
            <div className="relative w-full sm:w-[90%] h-full lg:h-[60%] bg-secondary rounded-lg overflow-hidden">
                <Image src="/images/imageHero1.jpg" alt="" width={800} height={500} className="z-4 w-full h-full object-fill lg:object-cover" />
                <div className="absolute inset-0 z-10 w-full lg:w-[80%] flex flex-col items-center justify-center mx-auto ">
                    <h2 className="text-shadow-sm text-[#ededed] text-[60px] mb-4 text-center lg:text-left font-bold drop-shadow-black drop-shadow-2xl">Que bueno verte,<br /> buscas algo en especifico?</h2>
                    <div className="flex flex-col gap-4 md:flex-row">
                        <Link href="#offers" className="w-72 py-4 rounded-lg flex items-center justify-center font-semibold shadow-lg bg-primary text-white hover:bg-secondary duration-150 ease-in-out hover:shadow-xl">Ver promos</Link>
                        <Link href="/products" className="mt-4 md:mt-0 w-72 py-4 rounded-lg flex items-center justify-center font-semibold shadow-lg bg-black text-white hover:bg-[#111] duration-150 ease-in-out hover:shadow-xl ">Productos nuevos</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
