import nodemailer from 'nodemailer';

export async function sendEmail({ subject, text }: { subject: string; text: string }) {
  const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com', // Namecheap SMTP Host
    port: 465,                     // SSL Port
    secure: true,                  // Use SSL
    auth: {
      user: 'info@rameezcarpets.com', // Your full email address
      pass: 'process.env.EMAIL_PASSWORD',    // The password for THIS email account
    },
  });

  await transporter.sendMail({
    from: '"Website Lead" <info@rameezcarpets.com>',
    to: 'info@rameezcarpets.com', // Where you want to receive the leads
    subject: subject,
    text: text,
  });
}