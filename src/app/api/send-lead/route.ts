// src/app/api/send-lead/route.ts
import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  const body = await req.json();
  
  // Format the data dynamically based on the form fields
  const text = Object.entries(body)
    .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
    .join('\n');

  try {
    await sendEmail({
      subject: `New Lead: ${body.formName || 'Website Inquiry'}`,
      text,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}