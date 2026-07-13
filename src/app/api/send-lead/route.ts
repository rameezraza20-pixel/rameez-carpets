import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = Object.entries(body)
      .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
      .join('\n');

    // Fire and forget (don't wait for the mail server if it's slow)
    // We move the actual sendEmail to a non-blocking execution if possible, 
    // but for now, we ensure the response is returned immediately.
    sendEmail({
      subject: body.formName || 'New Website Lead',
      text: text,
    }).catch(err => console.error("Async Mail Error:", err));

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}