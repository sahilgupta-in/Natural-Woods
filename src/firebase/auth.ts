import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { auth, googleProvider } from "./firebase";

export async function loginWithEmail(email: string, password: string) {
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function signupWithEmail(email: string, password: string) {
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function resetPassword(email: string) {
  return await sendPasswordResetEmail(auth, email);
}

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);

    return result.user;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function logout() {
  await signOut(auth);
}
