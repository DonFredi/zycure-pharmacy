"use client";
import Hero from "./home/components/section/Hero";
import FeaturesSection from "./home/components/section/FeaturesSection";
import CTASection from "./home/components/section/CTASection";
import CategorySection from "./home/components/section/CategorySection";
import ProductSection from "./home/components/section/ProductSection";
import ContactSection from "./contacts/components/section/ContactSection";
import { useProducts } from "@/hooks/useProducts";
import PageContainer from "@/components/pages/PageContainer";
import Loader from "@/components/ui/Loader";

const HomeClient = () => {
  const { products, loading } = useProducts();
  const discountedProducts = products.filter((p) => p.isDiscounted && p.originalPrice);
  const newProducts = products.filter((p) => p.isNew);
  console.log(products);

  if (loading) {
    return <Loader message="Loading Products..." />;
  }
  return (
    <PageContainer>
      <Hero />
      <FeaturesSection />
      <CTASection />
      <CategorySection />
      <ProductSection title="Our Products" products={products} limit={4} viewMoreHref="/products" />
      <ProductSection title="New Arrivals" products={newProducts} limit={4} viewMoreHref="/products" />
      <ProductSection title="Special Offers" products={discountedProducts} limit={4} viewMoreHref="/products" />
      {/* <ProductSection
        title="Special Offers"
        products={discountedProducts}
        limit={5}
        viewMoreHref="/products?filter=offers"
      />

      <ProductSection title="New Arrivals" products={newProducts} limit={4} viewMoreHref="/products?filter=new" /> */}
      <ContactSection />
    </PageContainer>
  );
};
export default HomeClient;
