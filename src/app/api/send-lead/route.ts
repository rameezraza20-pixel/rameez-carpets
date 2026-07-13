import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer'; // This points to the file we just created

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const text = Object.entries(body)
      .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
      .join('\n');

    await sendEmail({
      subject: body.formName || 'New Website Lead',
      text: text,
    });

    // Explicitly return success status
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Mail Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}