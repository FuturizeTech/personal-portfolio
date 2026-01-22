// Firebase handler - only loaded when needed
let firebaseInitialized = false;
let adminDb = null;

async function initializeFirebase() {
  if (firebaseInitialized && adminDb) return adminDb;

  try {
    const admin = (await import('firebase-admin')).default;

    const privateKeyRaw = process.env.FIREBASE_PRIVATE_KEY;
    if (!privateKeyRaw) {
      throw new Error('FIREBASE_PRIVATE_KEY is not set');
    }

    let privateKey;
    try {
      privateKey = JSON.parse(privateKeyRaw);
    } catch (e) {
      privateKey = privateKeyRaw.replace(/^["']|["']$/g, '').replace(/\\n/g, "\n").replace(/\r\n/g, "\n").trim();
    }

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
    firebaseInitialized = true;
    return adminDb;
  } catch (error) {
    console.error('Firebase initialization error:', error);
    throw error;
  }
}

export async function storeContactMessage(name, email, message, emailSent) {
  try {
    const db = await initializeFirebase();
    await db.collection('contacts').add({
      name,
      email,
      message,
      timestamp: new Date(),
      emailSent,
    });
    return true;
  } catch (error) {
    console.error('Error storing contact message:', error);
    return false;
  }
}
