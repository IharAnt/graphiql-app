import { initializeApp } from 'firebase/app';

export const firebaseConfig = {
  apiKey: process.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_APP_FIREBASE_MESSAGING_SENDER_iD,
  appId: process.env.VITE_APP_FIREBASE_API_ID,
  measurementId: process.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};
export const app = initializeApp(firebaseConfig);
