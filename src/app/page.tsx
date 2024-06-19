import { Navbar, Hero, Offer, Products, FAQSection, CTA, Footer } from "@/components/templates";

export default function Home() {
  return (
    <main className="bg-light dark:bg-dark flex flex-col w-full lg:px-16">
      <Navbar isFixed />
      <Hero />
      <Offer />
      <Products />
      <FAQSection />
      <CTA />
      <Footer />
    </main>
  );
}
