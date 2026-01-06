import { Hr, Section, Text } from "@react-email/components";
import React from "react";

export default function EmailFooter() {
  return (
    <Section>
      <Text style={paragraph}>
        Best,
        <br />
        The Zycure Pharmacy team
      </Text>
      <Hr style={hr} />
      <Text style={footer}>Umoja | Moi Drive, Nairobi</Text>
    </Section>
  );
}

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};
