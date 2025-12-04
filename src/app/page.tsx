import Hero from "./home/components/section/Hero";
import FeaturesSection from "./home/components/section/FeaturesSection";
import CTASection from "./home/components/section/CTASection";
import CategorySection from "./home/components/section/CategorySection";
import ProductSection from "./home/components/section/ProductSection";
import TrendingProducts from "./home/components/section/TrendingProducts";
import SpecialOffersSection from "./home/components/section/SpecialOffersSection";
import ContactSection from "./contacts/components/section/ContactSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturesSection />
      <CTASection />
      <CategorySection />
      <ProductSection />
      <TrendingProducts />
      <SpecialOffersSection />
      <ContactSection />
    </div>
  );
};

export default Home;
