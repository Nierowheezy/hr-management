import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  User,
} from "firebase/auth";

/**
 * Create a new user with email and password
 */
export const doCreateUserWithEmailAndPassword = async (
  email: string,
  password: string
) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in user with email and password
 */
export const doSignInWithEmailAndPassword = (
  email: string,
  password: string
) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Sign in user with Google authentication
 */
export const doSignInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

/**
 * Sign in user with Google authentication
 */
export const doSignInWithFacebook = async (): Promise<User | null> => {
  const provider = new FacebookAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result.user;
};

/**
 * Sign out the currently authenticated user
 */
export const doSignOut = (): Promise<void> => {
  return auth.signOut();
};

/**
 * Send a password reset email
 */
export const doPasswordReset = (email: string): Promise<void> => {
  return sendPasswordResetEmail(auth, email);
};

/**
 * Change the password of the currently authenticated user
 */
export const doPasswordChange = (password: string): Promise<void> => {
  if (!auth.currentUser) {
    return Promise.reject(new Error("No authenticated user found."));
  }
  return updatePassword(auth.currentUser, password);
};

/**
 * Send an email verification to the currently authenticated user
 */
export const doSendEmailVerification = (): Promise<void> => {
  if (!auth.currentUser) {
    return Promise.reject(new Error("No authenticated user found."));
  }
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
