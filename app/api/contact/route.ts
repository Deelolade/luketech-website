import { Resend } from "resend";
import { render } from "@react-email/components";
import { RESEND_API_KEY, EMAIL_FROM } from "@/utils/env";
import ContactEmail from "@/emails/contact-email";

const resend = new Resend(RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, service, location, message } = body;

    if (!firstName || !lastName || !email || !message) {
      return Response.json({ error: "Missing required fields." }, { status: 400 });
    }

    const html = await render(
      ContactEmail({ firstName, lastName, email, phone, service, location, message }),
    );

    const { data, error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: EMAIL_FROM,
      replyTo: email,
      subject: `New Enquiry from ${firstName} ${lastName}`,
      html,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to send enquiry." },
      { status: 500 },
    );
  }
}
