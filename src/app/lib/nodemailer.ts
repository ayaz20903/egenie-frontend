import nodemailer from "nodemailer";

// Create reusable transporter object using Gmail (or another service)
export const transporter = nodemailer.createTransport({
  service: "gmail", // You can use other services like SendGrid, Mailgun, etc.
  auth: {
    user: process.env.EMAIL_USER, // your Gmail email (use environment variable)
    pass: process.env.EMAIL_PASS, // your Gmail password or app-specific password
  },
});
