import { Navbar, Hero, Offer, Products, FAQSection, CTA, Footer } from "@/components/templates";
import { getAllProducts } from "@/data/getAllProducts";

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="bg-light dark:bg-dark flex flex-col w-full lg:px-16">
      <Navbar isFixed />
      <Hero />
      <Offer />
      <Products products={products.data} />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
