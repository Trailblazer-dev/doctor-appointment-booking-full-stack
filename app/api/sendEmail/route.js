import { Resend } from "resend";
import { Email } from "@/emails/email";

import { NextResponse } from "next/server";
import EmailTemplate from "@/emails/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    const response = await req.json()
  try {
    const data = await resend.emails.send({
      from: "Doctor-Appointment-Bookindelivered@resend.dev",//use a domain to send emails to multiple users this one only works for my email
      to: [response.data.Email],
      subject: "Appointment Booking Confirmation",
      react: EmailTemplate({response}),
    });
    return NextResponse.json({ data});
  } catch (error) {
    return NextResponse.json({ error });
  }
}
