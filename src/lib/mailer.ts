import nodemailer from 'nodemailer';

// Configure the transport using your professional Namecheap email settings
const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 465,
  secure: true, // Use SSL
  auth: {
    user: process.env.EMAIL_USER, // e.g., info@rameezcarpets.com
    pass: process.env.EMAIL_PASS, // Your Namecheap password or App Password
  },
});

export async function sendEmail({ subject, text }: { subject: string; text: string }) {
  try {
    const info = await transporter.sendMail({
      from: `"Rameez Carpets Lead" <${process.env.EMAIL_USER}>`,
      to: 'info@rameezcarpets.com', // Where you want to receive the leads
      subject: subject,
      text: text,
    });
    return info;
  } catch (error) {
    console.error("Nodemailer Error:", error);
    throw error;
  }
}