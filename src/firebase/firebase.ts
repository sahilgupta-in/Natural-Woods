import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj29yrSHuLsTo4obASUlv4XqcG2r5YDL4",
  authDomain: "natural-woods.firebaseapp.com",
  projectId: "natural-woods",
  storageBucket: "natural-woods.firebasestorage.app",
  messagingSenderId: "362947423120",
  appId: "1:362947423120:web:444be955f15b824b50e115",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
console.log("Firebase Connected");