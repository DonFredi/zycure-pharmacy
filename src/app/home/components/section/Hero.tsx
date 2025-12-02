import { Button } from "@/src/components/ui/Button";
import Title from "@/src/components/ui/Title";
import Upload from "@/src/components/ui/Upload";

const Hero = () => {
  return (
    <section className="bg-neutral flex md:flex-row sm:flex-col items-center justify-between gap-4 md:p-12 sm:p-8">
      <div className="md:w-[50%] sm:w-full flex flex-col justify-center gap-2.5 bg-red-200 ">
        <Title
          text="Fast. Reliable. Online Pharmacy You Can Trust."
          as="h1"
          size="xxl"
          align="left"
          color="text-foreground"
        />
        <p>
          Get quality medicines and wellness products delivered right to your door — safely, quickly, and with care.
        </p>
        <div className="w-full flex justify-between">
          <Button>
            <a href="/products" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
          <Button variant={"outline"} icon={<Upload />} asChild>
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
      </div>
      <div className="md:w-[50%] sm:w-full flex flex-col justify-center bg-pink-300">
        <img src="/images/hero-image.png" alt="hero-section-image" className=" h-[350px]" />
      </div>
    </section>
  );
};
export default Hero;
