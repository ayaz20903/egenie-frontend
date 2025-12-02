import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { name, email, phone, shop, address, message } = data;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and Email are required!" },
        { status: 400 }
      );
    }

    // Create JWT token with user details (expires in 1 hour)
    const token = jwt.sign(data, process.env.JWT_SECRET!, { expiresIn: "1h" });

    const confirmUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/api/confirm?token=${token}`;

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or your SMTP
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send confirmation email to user
    await transporter.sendMail({
      from: `"iPayon+" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Please confirm your email",
      html: `
        <h2>Hello ${name},</h2>
        <p>Click below to confirm your email:</p>
        <a href="${confirmUrl}" style="padding:10px 15px;background:#4f46e5;color:#fff;text-decoration:none;border-radius:6px;">
          Confirm Email
        </a>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SubmitForm Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
