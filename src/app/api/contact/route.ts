import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { name, email, phone, product } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail', // or your provider (e.g., outlook, smtp)
    auth: {
      user: 'YOUR_EMAIL@gmail.com', // Your email address
      pass: 'YOUR_APP_PASSWORD',    // Note: Use an App Password, not your normal password
    },
  });

  try {
    await transporter.sendMail({
      from: 'YOUR_EMAIL@gmail.com',
      to: 'info@rameezcarpets.com',
      subject: `New Catalogue Request: ${product}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProduct: ${product}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}