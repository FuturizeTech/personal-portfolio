export const runtime = 'nodejs';

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const getAllowedOrigins = () => {
  return [
    'https://www.buildwithsarab.me',
    'https://buildwithsarab.me',
    process.env.NEXT_PUBLIC_APP_URL,
    'http://localhost:3000',
    'http://localhost:3001',
  ].filter(Boolean);
};

const getCorsHeaders = (origin) => {
  const allowedOrigins = getAllowedOrigins();
  const isOriginAllowed = allowedOrigins.includes(origin);
  
  return {
    'Access-Control-Allow-Origin': isOriginAllowed ? origin : allowedOrigins[0],
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
});

const generateEmailTemplate = (name, email, userMessage) => `
  <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
    <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);">
      <h2 style="color: #007BFF;">New Message Received</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px; margin-left: 0;">
        ${userMessage}
      </blockquote>                     
      <p style="font-size: 12px; color: #888;">Click reply to respond to the sender.</p>
    </div>
  </div>
`;
// console.log('Email transporter configured:', !!transporter);
// Helper function to send an email via Nodemailer
async function sendEmail(payload, message) {
  const { name, email, message: userMessage } = payload;

  const mailOptions = {
    from: "Portfolio",
    to: process.env.EMAIL_ADDRESS,
    subject: `New Message From ${name}`,
    text: message,
    html: generateEmailTemplate(name, email, userMessage),
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Error while sending email:', error.message);
    return false;
  }
};

export async function OPTIONS(request) {
  const origin = request.headers.get('origin') || '';
  const corsHeaders = getCorsHeaders(origin);
  
  return new NextResponse(null, {
    status: 200,
    headers: corsHeaders,
  });
}

export async function POST(request) {
  const origin = request.headers.get('origin') || '';
  const corsHeaders = getCorsHeaders(origin);
  
  try {
    const payload = await request.json();
    const { name, email, message: userMessage } = payload;
    // console.log("payload is:", payload);
    const message = `New message from ${name}\n\nEmail: ${email}\n\nMessage:\n\n${userMessage}\n\n`;

    // Send email (optional)
    let emailSuccess = false;
    if (process.env.EMAIL_ADDRESS && process.env.GMAIL_PASSKEY) {
      emailSuccess = await sendEmail(payload, message);
    }

    // Store in Firebase
    let firebaseSuccess = false;
    try {
      const { initializeFirebaseAdmin } = await import('@/src/lib/firebase-admin');
      const db = initializeFirebaseAdmin();
      await db.collection('contacts').add({
        name,
        email,
        message: userMessage,
        timestamp: new Date(),
        emailSent: emailSuccess,
      });

      firebaseSuccess = true;
    } catch (error) {
      console.error('Error storing in Firebase:', error);
      // Don't fail the request if Firebase fails
    }

    if (firebaseSuccess) {
      const successMessage = emailSuccess
        ? 'Message sent successfully and stored in database!'
        : 'Message stored in database successfully!';

      return NextResponse.json({
        success: true,
        message: successMessage,
        firebaseStored: firebaseSuccess,
        emailSent: emailSuccess
      }, { 
        status: 200,
        headers: corsHeaders,
      });
    }

    return NextResponse.json({
      success: false,
      message: 'Failed to store message.',
    }, { 
      status: 500,
      headers: corsHeaders,
    });
  } catch (error) {
    console.error('API Error:', error.message);
    return NextResponse.json({
      success: false,
      message: 'Server error occurred.',
    }, { 
      status: 500,
      headers: corsHeaders,
    });
  }
};