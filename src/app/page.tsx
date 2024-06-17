import { Navbar, Hero, Offer, Products, CTA, Footer } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark flex flex-col w-full lg:px-16">
      <Navbar />
      <Hero />
      <Offer />
      <Products />
      <CTA />
      <Footer />
    </main>
  );
}
