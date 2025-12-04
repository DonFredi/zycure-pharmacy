import SectionContainer from "@/components/section/SectionContainer";
import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import { Upload } from "lucide-react";

const CTASection = () => {
  return (
    <SectionContainer>
      <div className="bg-primary md:rounded-full rounded-none p-2  w-full md:mx-auto min-h-[135px] flex flex-col md:flex-row justify-between items-center text-center gap-4">
        <Title
          text="Upload Prescription"
          as="h3"
          size="xxl"
          align="center"
          color="text-white"
          className="text-xl font-bold"
        />
        <p className="text-white text-wrap">
          Do you have a prescription and need advice? Please upload your prescription here.
        </p>

        <Button variant={"outline"} className="bg-white hover:bg-neutral" asChild>
          <a
            href="https://wa.me/254710567066?text=Hello%20I%20would%20like%20to%20upload%20a%20prescription"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Upload />
            Upload Prescription
          </a>
        </Button>
      </div>
    </SectionContainer>
  );
};
export default CTASection;
