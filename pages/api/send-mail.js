import nodemailer from 'nodemailer';

const requiredEnvVars = [
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'MAIL_FROM',
  'MAIL_TO',
];

function getMissingEnvVars() {
  return requiredEnvVars.filter((name) => !process.env[name]);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const missing = getMissingEnvVars();
  if (missing.length > 0) {
    return res.status(500).json({
      error: `Missing required environment variables: ${missing.join(', ')}`,
    });
  }

  const port = Number(process.env.SMTP_PORT);
  const secure = process.env.SMTP_SECURE === 'true' || port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: process.env.MAIL_SUBJECT || 'I Love You',
      html:
        process.env.MAIL_HTML ||
        'Happy Valentine\'s Day my love. I love you so much. You are the best thing that has ever happened to me ❤',
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to send mail',
      details: error instanceof Error ? error.message : String(error),
    });
  }
}
