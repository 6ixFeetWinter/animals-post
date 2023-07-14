import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAaw4BQ5GdpOHnj9eOsnIQ07Ce7ib9cipc",
  authDomain: "animals-post-database.firebaseapp.com",
  projectId: "animals-post-database",
  storageBucket: "animals-post-database.appspot.com",
  messagingSenderId: "799875622152",
  appId: "1:799875622152:web:318c318a1e3003f69538bd",
  measurementId: "G-Y5JR6ENJLZ",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const db: any = getFirestore(app);
export const analytics = getAnalytics(app);
