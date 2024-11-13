import { NextResponse } from 'next/server';
import { sendEmail } from '../../../lib/sendgrid';

export async function POST(req: Request) {
  try {
    const { to, subject, text, html } = await req.json();

    if (!to || !subject || !text || !html) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await sendEmail({
      to,
      from: 'arvedson94@gmail.com', // Cambia esto a tu email verificado en SendGrid
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Error sending email' }, { status: 500 });
  }
}
