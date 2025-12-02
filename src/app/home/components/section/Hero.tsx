import { Button } from "@/components/ui/Button";
import Title from "@/components/ui/Title";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-neutral gap-4 p-12 grid md:grid-cols-2 grid-cols-1">
      <div className="flex flex-col max-w-[652px] justify-center gap-6">
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
        <div className="w-full flex justify-start gap-8">
          <Button>
            <a href="/products" target="_blank" rel="noopener noreferrer">
              Shop Now
            </a>
          </Button>
          <Button variant={"outline"} asChild>
            <a
              href="https://wa.me/254710567066?text=Hello%20I%20would%20like%20to%20upload%20a%20prescription"
              target="_blank"
              rel="noopener noreferrer"
            >
              Upload Prescription
            </a>
          </Button>
        </div>
      </div>
      <div className="relative h-[300px]">
        <Image src="/images/hero-image.png" alt="hero-section-image" fill className="object-cover " />
      </div>
    </section>
  );
};
export default Hero;
