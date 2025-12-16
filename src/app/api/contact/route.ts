import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Missing env variables");
      return Response.json({ error: "Server email configuration error" }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "ZyCure Website <onboarding@resend.dev>", // IMPORTANT
      to: contactEmail,
      subject: "New Message from ZyCure Pharmacy Website",
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
