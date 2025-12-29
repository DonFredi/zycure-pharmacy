import HomeClient from "./HomeClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medicines & Healthcare Products in Kenya",
  description:
    "Shop prescription medicines, supplements, and healthcare products online from a trusted Kenyan pharmacy.",
};

const Home = () => {
  return <HomeClient />;
};

export default Home;
