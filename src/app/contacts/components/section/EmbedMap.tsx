import SectionContainer from "@/components/section/SectionContainer";
import Title from "@/components/ui/Title";

export default function EmbedMap() {
  return (
    <SectionContainer>
      <div className="w-full h-90 aspect-video">
        <Title
          text="Our Location"
          as="h2"
          size="xxl"
          align="center"
          color="text-foreground"
          className="text-xl font-bold mb-6"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8167138168583!2d36.89141947397413!3d-1.2838631356214005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f13e4407597bf%3A0xe57de0d9b7f34aad!2sZycure%20Pharm%20LTD!5e0!3m2!1sen!2ske!4v1765961337842!5m2!1sen!2ske"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>
    </SectionContainer>
  );
}
