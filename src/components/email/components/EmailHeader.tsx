import { Img, Link } from "@react-email/components";

export const baseUrl = process.env.NEXT_PUBLIC_URL;

export default function EmailHeader() {
  return (
    <Link style={logo} target="_blank" href={baseUrl}>
      <Img
        style={{ margin: "0 auto 2.5rem" }}
        src={`${baseUrl}/images/zycure-logos.png`}
        width="172"
        height="48"
        alt="Zycure logo"
      />
    </Link>
  );
}

const logo = {
  margin: "0 auto",
  fontSize: "24px",
  fontWeight: "800",
  width: "fit-content",
};
