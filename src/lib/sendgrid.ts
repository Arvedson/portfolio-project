import sgMail from '@sendgrid/mail';

// Asegúrate de tener la clave de API configurada en el archivo .env
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

interface EmailOptions {
  to: string;
  from: string;
  subject: string;
  text: string;
  html: string;
}

export async function sendEmail({ to, from, subject, text, html }: EmailOptions): Promise<void> {
  const msg = {
    to,
    from,
    subject,
    text,
    html,
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
}
