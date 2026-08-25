import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCjWDaEHmOvJDr78eVFSbIMYdQzSKcNKhU",
  authDomain: "portfolio-df0a2.firebaseapp.com",
  projectId: "portfolio-df0a2",
  storageBucket: "portfolio-df0a2.firebasestorage.app",
  messagingSenderId: "141790702890",
  appId: "1:141790702890:web:091f2820044a6ce3534253",
  measurementId: "G-Z9XMB0QXWD"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);