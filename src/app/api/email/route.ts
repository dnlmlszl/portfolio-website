import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { z } from 'zod';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

if (!RECAPTCHA_SECRET_KEY) {
  console.error('Missing RECAPTCHA_SECRET_KEY in environment variables!');
}

// --------------------------------------------------------
// 1. ZOD VALIDATION
// --------------------------------------------------------
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
  reCaptchaToken: z.string(),
});

// --------------------------------------------------------
// 2. RECAPTCHA VALIDATION FUNCTION (Server Only)
// --------------------------------------------------------
async function validateRecaptcha(
  token: string
): Promise<{ success: boolean; score: number }> {
  if (!RECAPTCHA_SECRET_KEY) return { success: false, score: 0 };

  const verificationUrl = 'https://www.google.com/recaptcha/api/siteverify';

  const response = await fetch(verificationUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
  });

  const data = await response.json();

  return {
    success: data.success,
    score: data.score,
  };
}

// --------------------------------------------------------
// 3. API ROUTE
// --------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate user inputs
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, message, reCaptchaToken } = parsed.data;

    // Validate recaptcha token
    const recaptcha = await validateRecaptcha(reCaptchaToken);

    if (!recaptcha.success || recaptcha.score < RECAPTCHA_SCORE_THRESHOLD) {
      return NextResponse.json(
        { error: 'Failed reCAPTCHA validation', recaptcha },
        { status: 400 }
      );
    }

    // Configure email
    const transport = nodemailer.createTransport({
      service: 'yahoo',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: process.env.MY_EMAIL,
      to: process.env.MY_EMAIL,
      cc: email,
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    await transport.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
