export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px;">
      <h2>New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote>${userMessage}</blockquote>
    </div>
  </div>
`;

async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.GMAIL_PASSKEY,
    },
  });

  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_ADDRESS}>`,
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  await transporter.sendMail(mailOptions);
  return true;
}

export async function POST(request) {
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;

    const message = `New message from ${name}\n\nEmail: ${email}\n\n${userMessage}`;

    let emailSuccess = false;
    if (process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY) {
      emailSuccess = await sendEmail(payload, message);
    }

    let firebaseSuccess = false;
    if (
      process.env.FIREBASE_PRIVATE_KEY &&
      process.env.FIREBASE_PROJECT_ID
    ) {
      const { storeContactMessage } = await import('./firebase-handler.js');
      firebaseSuccess = await storeContactMessage(
        name,
        email,
        userMessage,
        emailSuccess
      );
    }

    return NextResponse.json({
      success: true,
      emailSent: emailSuccess,
      firebaseStored: firebaseSuccess,
    });
  } catch (error) {
    console.error('CONTACT API ERROR:', error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}git sf