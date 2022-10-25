import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({
    displayName: "",
    photoURL: "",
  });

  // registration
  const registerWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user display name and photoURL

  const modifyProfile = (user) => {
    return updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    });
  };

  // email Login
  const emailLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // gmail Login
  const gmailLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // github Login

  const githubLogin = () => {
    return signInWithPopup(auth, githubProvider);
  };

  // logout
  const logout = () => {
    return signOut(auth);
  };

  // user Management
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const newUser = currentUser;
      setUser(newUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    registerWithEmail,
    emailLogin,
    gmailLogin,
    githubLogin,
    loading,
    modifyProfile,
    logout,
    user,
    setUser,
  };
  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
