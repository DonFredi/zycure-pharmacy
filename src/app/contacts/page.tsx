import PageContainer from "@/components/pages/PageContainer";
import Social from "./components/card/Social";
import ContactSection from "./components/section/ContactSection";
import EmbedMap from "./components/section/EmbedMap";

const page = () => {
  return (
    <PageContainer>
      <ContactSection />
      <EmbedMap />
      <Social />
    </PageContainer>
  );
};

export default page;
