import { GoogleSignin } from "@react-native-google-signin/google-signin";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";
import { asyncHandler } from "../../utils/asyncHandler";
import { auth } from "../config/firebaseConfig";

export const signup = (email: string, password: string) => {
  return asyncHandler<UserCredential>(
    createUserWithEmailAndPassword(auth, email, password)
  );
};

export const login = (email: string, password: string) => {
  return asyncHandler<UserCredential>(
    signInWithEmailAndPassword(auth, email, password)
  );
};

export const loginWithGoogle = async () => {
  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });

    const result = await GoogleSignin.signIn();

    const idToken = (result as any).idToken;
    if (!idToken) {
      throw new Error("Google sign-in failed: No ID token received");
    }

    const credential = GoogleAuthProvider.credential(idToken);

    return asyncHandler(signInWithCredential(auth, credential));
  } catch (error: any) {
    return [error, null] as [Error, null];
  }
};

export const logout = () => asyncHandler<void>(signOut(auth));
