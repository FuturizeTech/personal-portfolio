import admin from "firebase-admin";

let adminDb = null;

const initializeFirebaseAdmin = () => {
  if (adminDb) return adminDb;

  const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;
  if (!privateKeyRaw) {
    throw new Error('FIREBASE_PRIVATE_KEY is not set');
  }

  let privateKey;
  try {
    // Try parsing as JSON first (in case it's stored as JSON string)
    privateKey = JSON.parse(privateKeyRaw);
  } catch (e) {
    // Fallback to string processing
    privateKey = privateKeyRaw.replace(/^["']|["']$/g, '').replace(/\\n/g, "\n").replace(/\r\n/g, "\n").trim();
  }

  // Validate that it's a proper PEM key
  if (!privateKey || !privateKey.includes('-----BEGIN PRIVATE KEY-----')) {
    throw new Error('Invalid private key format');
  }

  const serviceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey,
  };

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  adminDb = admin.firestore();
  return adminDb;
};

export { initializeFirebaseAdmin };
