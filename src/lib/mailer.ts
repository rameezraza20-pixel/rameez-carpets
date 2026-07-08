import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  // ADDED: This will log the handshake process to Vercel Logs
  debug: true,
  logger: true,
});

export async function sendEmail({ subject, text }: { subject: string; text: string }) {
  try {
    const info = await transporter.sendMail({
      from: `"Rameez Carpets" <${process.env.EMAIL_USER}>`,
      to: 'info@rameezcarpets.com',
      subject: subject,
      text: text,
    });
    console.log("Email sent successfully:", info.messageId);
    return info;
  } catch (error) {
    console.error("Nodemailer Error details:", error);
    throw error;
  }
}