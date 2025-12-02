import { Button } from "@/src/components/ui/Button";
import Title from "@/src/components/ui/Title";
import Upload from "@/src/components/ui/Upload";

const CTASection = () => {
  return (
    <div className="bg-primary md:rounded-full sm:rounded-none p-4 md:w-[80%] sm:w-full md:mx-auto min-h-[130px] flex flex-col justify-between items-center text-center gap-4">
      <Title
        text="UPLOAD PRESCRIPTION"
        as="h3"
        size="xxl"
        align="center"
        color="text-white"
        className="text-xl font-bold"
      />
      <p className="text-white">Do you have a prescription and need advice? Please upload your prescription here.</p>

      <Button variant={"outline"} icon={<Upload />} className="bg-white hover:bg-neutral" asChild>
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
  );
};
export default CTASection;
