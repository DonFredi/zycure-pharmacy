import * as  React from "react";
import { Resend } from "resend";
import ContactMessageEmail, { ContactMessageEmailProps } from "@/components/email/ContactMessageEmail";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Missing env variables");
      return NextResponse.json(
        { error: "Server email configuration error" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { name, email, message }: ContactMessageEmailProps = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "ZyCure Website <onboarding@resend.dev>",
      to: contactEmail,
      subject: "New Message from ZyCure Pharmacy Website",
      replyTo: email,
      react: (
        <ContactMessageEmail
          name={name}
          email={email}
          message={message}
        />
      ),
      
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
