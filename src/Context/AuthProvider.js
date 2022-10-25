import React, { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState("");
  // registration
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // email Login

  // gmail Login
  const gmailLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // github Login
  // logout
  // user Management
  const authInfo = { registerWithEmail, gmailLogin };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
