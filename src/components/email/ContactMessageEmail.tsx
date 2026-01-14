// ContactMessageEmail.tsx
import { Section, Text, Hr } from "@react-email/components";
import * as React from "react";
import { EmailTemplate } from "./EmailTemplate";

export type ContactMessageEmailProps = {
  name: string;
  email: string;
  message: string;
};

export default function ContactMessageEmail({ name, email, message }: ContactMessageEmailProps): React.JSX.Element {
  return (
    <EmailTemplate>
      <Section style={{ padding: "24px" }}>
        <Text style={{ fontSize: "18px", fontWeight: 600, marginBottom: 16 }}>
          Message from zycure pharmacy website
        </Text>
        <Text style={{ fontSize: 12, fontWeight: 600, color: "#6b7280" }}>Name</Text>
        <Text style={{ fontSize: 14 }}>{name}</Text>
        <Text style={{ fontSize: 12, fontWeight: 600, color: "#6b7280" }}>Email</Text>
        <Text style={{ fontSize: 14 }}>{email}</Text>
        <Hr style={{ margin: "16px 0", borderColor: "#e5e7eb" }} />
        <Text style={{ fontSize: 12, fontWeight: 600, color: "#6b7280" }}>Message</Text>
        <Text style={{ fontSize: 14, lineHeight: "22px", whiteSpace: "pre-wrap" }}>{message}</Text>
      </Section>
    </EmailTemplate>
  );
}
