import SectionContainer from "@/components/section/SectionContainer";
import ContactCard from "../card/ContactCard";
import GetInTouch from "../card/GetInTouch";

const ContactSection = () => {
  return (
    <SectionContainer>
      <div className="flex flex-col md:flex-row md:justify-around">
        <GetInTouch />
        <ContactCard />
      </div>
    </SectionContainer>
  );
};
export default ContactSection;
