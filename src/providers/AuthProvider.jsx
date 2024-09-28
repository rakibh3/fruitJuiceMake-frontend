import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Register user with email and password
  const createUserWithCredential = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user with email and password
  const signInWithCredential = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signout user
  const logout = () => {
    return signOut(auth);
  };

  // Listen for user auth state changes
  useEffect(() => {
    console.log("Hello");
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return setUser(null);
      setUser(currentUser);
    });

    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUserWithCredential,
    signInWithCredential,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
