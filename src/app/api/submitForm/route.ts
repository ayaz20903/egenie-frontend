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
    // await transporter.sendMail({
    //   from: `"iPayon+" <${process.env.SMTP_USER}>`,
    //   to: email,
    //   subject: "Please confirm your email",
    //   html: `
    //     <h2>Hello ${name},</h2>
    //     <p>Click below to confirm your email:</p>
    //     <a href="${confirmUrl}" style="padding:10px 15px;background:#4f46e5;color:#fff;text-decoration:none;border-radius:6px;">
    //       Confirm Email
    //     </a>
    //   `,
    // });

    const APP_URL = process.env.NEXT_PUBLIC_APP_URL!;
    const logoUrl = `${APP_URL}/logo.png`;

    await transporter.sendMail({
      from: `"eGeniePlus" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Verify your email",
      html: `
        <div style="font-family:system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#0b1020;padding:32px 16px;">
          <div style="max-width:520px;margin:0 auto;background:#0f172a;border-radius:16px;padding:32px 28px;border:1px solid rgba(148,163,184,0.3);">
            <div style="text-align:center;margin-bottom:24px;">
    
              <!-- Logo on top center -->
              <div style="margin-bottom:18px;">
                <img
                  src="${logoUrl}"
                  alt="eGeniePlus"
                  style="height:60px;max-width:160px;display:inline-block;"
                />
              </div>
    
              <h1 style="margin:18px 0 8px;font-size:24px;line-height:1.3;color:#f9fafb;">
                Hi ${name},
              </h1>
               <h5 style="margin:18px 0 8px;font-size:24px;line-height:1.3;color:#f9fafb;">
                Please confirm your email address
              </h5>
            
            </div>
    
            <div style="text-align:center;margin:28px 0 24px;">
              <a
                href="${confirmUrl}"
                style="
                  display:inline-block;
                  padding:12px 26px;
                  background:linear-gradient(135deg,#654dfc,#f70090);
                  color:#ffffff;
                  text-decoration:none;
                  border-radius:999px;
                  font-weight:600;
                  font-size:14px;
                  box-shadow:0 14px 30px rgba(15,23,42,0.55);
                "
              >
                Confirm my email
              </a>
            </div>
    
            <p style="margin:0 0 18px;font-size:13px;line-height:1.7;color:#9ca3af;">
              If the button does not work, copy and paste this link into your browser:
            </p>
            <p style="word-break:break-all;font-size:12px;color:#6b7280;margin:0 0 24px;">
              ${confirmUrl}
            </p>
          </div>
    
          <p style="max-width:520px;margin:12px auto 0;text-align:center;font-size:11px;color:#6b7280;">
            © ${new Date().getFullYear()} eGeniePlus. All rights reserved.
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("SubmitForm Error:", error);
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
