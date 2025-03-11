import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCS--Wwfhg_MaflUczC94yw1sq90ObPiJc",
  authDomain: "beginners-24e5a.firebaseapp.com",
  projectId: "beginners-24e5a",
  storageBucket: "beginners-24e5a.firebasestorage.app",
  messagingSenderId: "38859431911",
  appId: "1:38859431911:web:040546d5310efde92fa742",
  measurementId: "G-CNTSP3W3E3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

export const db = getFirestore(app);