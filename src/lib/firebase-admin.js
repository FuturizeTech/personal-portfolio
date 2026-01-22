import admin from "firebase-admin";

const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;
let privateKey;
try {
  privateKey = JSON.parse(privateKeyRaw);
} catch (e) {
  privateKey = privateKeyRaw?.replace(/^["']|["']$/g, '').replace(/\\n/g, "\n").replace(/\r\n/g, "\n").trim();
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

export const adminDb = admin.firestore();
