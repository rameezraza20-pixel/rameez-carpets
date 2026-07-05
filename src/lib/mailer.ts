// src/lib/mailer.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendEmail({ subject, text }: { subject: string; text: string }) {
  return await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: 'info@rameezcarpets.com',
    subject,
    text,
  });
}