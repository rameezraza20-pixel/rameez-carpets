import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = Object.entries(body)
      .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
      .join('\n');

    // WE WAIT HERE: We must 'await' the sendEmail so the server 
    // doesn't cut off the connection before the mail is sent.
    await sendEmail({
      subject: body.formName || 'New Website Lead',
      text: text,
    });

    // Only return success after the email has been confirmed as sent
    return NextResponse.json({ success: true }, { status: 200 });
    
  } catch (error) {
    console.error("API Error - Email failed to send:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" }, 
      { status: 500 }
    );
  }
}