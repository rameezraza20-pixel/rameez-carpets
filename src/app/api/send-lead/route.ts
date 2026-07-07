import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/mailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Create a clean, readable text format for the email
    // We filter out any undefined/null values
    const text = Object.entries(body)
      .map(([key, value]) => {
        // Handle potential nested objects if necessary
        const displayValue = typeof value === 'object' ? JSON.stringify(value) : value;
        return `${key.charAt(0).toUpperCase() + key.slice(1)}: ${displayValue}`;
      })
      .join('\n');

    const subject = body.formName || 'New Website Lead';

    await sendEmail({
      subject: subject,
      text: text,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    // Log the error to your terminal for debugging
    console.error("Error sending email:", error);
    
    return NextResponse.json(
      { success: false, message: "Failed to send email" }, 
      { status: 500 }
    );
  }
}