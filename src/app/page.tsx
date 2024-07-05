import { Navbar, Hero, Offer, Products, FAQSection, CTA, Footer } from "@/components/templates";
import { getAllProducts } from "@/data/products";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="bg-light dark:bg-dark flex flex-col w-full lg:px-16">
      <Navbar isFixed x={products} />
      <Hero />
      <Offer />
      <Products />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
