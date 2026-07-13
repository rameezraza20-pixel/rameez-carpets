import nodemailer from 'nodemailer';

export async function sendEmail({ subject, text }: { subject: string; text: string }) {
  // Use port 465 and secure: true for Namecheap Private Email
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true, 
    auth: {
      user: 'info@rameezcarpets.com',
      pass: process.env.EMAIL_PASSWORD, // Ensure this exists in Vercel
    },
  });

  return await transporter.sendMail({
    from: '"Rameez Carpets" <info@rameezcarpets.com>',
    to: 'info@rameezcarpets.com',
    subject: subject,
    text: text,
  });
}