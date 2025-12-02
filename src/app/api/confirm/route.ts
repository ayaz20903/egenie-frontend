import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.json(
      { error: "Invalid or missing token" },
      { status: 400 }
    );
  }

  try {
    // Decode and verify JWT
    const lead = jwt.verify(token, process.env.JWT_SECRET!) as any;

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1️⃣ Send thank-you email to user
    await transporter.sendMail({
      from: `"iPayon+" <${process.env.SMTP_USER}>`,
      to: lead.email,
      subject: "Thank you for confirming!",
      html: `
        <h2>Hi ${lead.name},</h2>
        <p>Thank you for confirming your email. Our team will get in touch with you soon!</p>
      `,
    });

    // 2️⃣ Send lead details to your email
    await transporter.sendMail({
      from: `"iPayon+ Lead" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      subject: "New Lead Confirmed",
      html: `
        <h3>New Lead Details:</h3>
        <p><strong>Name:</strong> ${lead.name}</p>
        <p><strong>Email:</strong> ${lead.email}</p>
        <p><strong>Phone:</strong> ${lead.phone || "-"}</p>
        <p><strong>Shop:</strong> ${lead.shop || "-"}</p>
        <p><strong>Address:</strong> ${lead.address || "-"}</p>
        <p><strong>Message:</strong> ${lead.message || "-"}</p>
      `,
    });

    // Redirect user to a thank-you page
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_SITE_URL}`);
  } catch (error) {
    console.error("Confirm Error:", error);
    return NextResponse.json(
      { error: "Invalid or expired token" },
      { status: 400 }
    );
  }
}
