import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="flex flex-col items-center">
      <div className="flex md:flex-row flex-col justify-between px-6 py-3">
        <div className="md:w-1/2 w-full gap-4.5 flex flex-col justify-start p-4">
          <div>
            <Logo />
            <p>
              ZyCure Pharmacy is your trusted partner in health, providing quality medicines, wellness products, and
              professional pharmaceutical care. We are committed to delivering safe, affordable, and reliable healthcare
              solutions to help you live a healthier, happier life.
            </p>
          </div>

          <div className="flex flex-row md:justify-around justify-between p-4">
            <div>
              <h4 className="text-primary font-bold text-xl">Quick Links</h4>
              <ul className="flex flex-col">
                <Link href={"/"}>Home</Link>
                <Link href={"/products"}>Products</Link>
                <Link href={"/contacts"}>Contacts</Link>
              </ul>
            </div>
            <div>
              <h4 className="text-primary font-bold text-xl">Social Links</h4>
              <ul className="flex flex-col">
                <Link href={"/"}>Facebook</Link>
                <Link href={"/products"}>Instagram</Link>
                <Link href={"/contacts"}>TikTok</Link>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 w-full gap-4.5 flex flex-col justify-start p-4">
          <h4 className="text-primary font-bold text-xl">Authorized Pharmacy</h4>
          <p>
            ZyCure is a registered pharmacy governed by the Pharmacy and Poisons Board of Kenya; PPB (K) Health Safety
            code P0940
          </p>
          <Image src="/images/licence-image.png" alt="licence-image" width={300} height={300} />
        </div>
      </div>

      <p>{year} ZyCure Pharmacy.All Rights Reserved.</p>
    </footer>
  );
};
export default Footer;
