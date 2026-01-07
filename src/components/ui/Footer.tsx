"use client";
import Link from "next/link";
import Logo from "./Logo";
import Image from "next/image";
import Copyright from "../icons/Copyright";
import SectionContainer from "../section/SectionContainer";
import Facebook from "../icons/Facebook";
import TikTok from "../icons/TikTok";
import X from "../icons/X";
import Instagram from "../icons/Instagram";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className=" bg-neutral">
      <SectionContainer className="flex flex-col items-center bg-neutral">
        <div className="flex md:flex-row flex-col justify-between px-6 py-3">
          <div className="md:w-1/2 w-full gap-5 flex flex-col justify-start p-4 ">
            <div>
              <Logo />
              <p>
                ZyCure Pharmacy is your trusted partner in health, providing quality medicines, wellness products, and
                professional pharmaceutical care. We are committed to delivering safe, affordable, and reliable
                healthcare solutions to help you live a healthier, happier life.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-around gap-2 ">
              <div>
                <ul className="flex flex-row gap-4  text-primary justify-center">
                  <Link href={"/"}>Home</Link>
                  <Link href={"/products"}>Products</Link>
                  <Link href={"/contacts"}>Contacts</Link>
                </ul>
              </div>
              <div>
                <ul className="flex flex-row gap-4 text-primary justify-center items-center">
                  <Link href={"/"}>
                    <Facebook />
                  </Link>
                  <Link href={"/products"}>
                    <TikTok />
                  </Link>
                  <Link href={"/contacts"}>
                    <Instagram />
                  </Link>
                </ul>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full gap-4.5 flex flex-col justify-start p-4">
            <h4 className="font-bold text-xl">Authorized Pharmacy</h4>
            <p>
              ZyCure is a registered pharmacy governed by the Pharmacy and Poisons Board of Kenya; PPB (K) Health Safety
              code P0940
            </p>
            <Image src="/images/licence-image.png" alt="licence-image" width={300} height={300} />
          </div>
        </div>

        <p className="text-foreground flex flex-row text-wrap items-center">
          <Copyright />
          {year} ZyCure Pharmacy.All Rights Reserved.
        </p>
      </SectionContainer>
    </footer>
  );
};
export default Footer;
