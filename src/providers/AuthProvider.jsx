import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.init";
import usePublicAxios from "../hooks/useAxiosPublic";
export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Get public axios instance
  const publicAxios = usePublicAxios();

  // Register user with email and password
  const createUserWithCredential = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Sign in user with email and password
  const signInWithCredential = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Signout user
  const logout = () => {
    setLoading(true);
    localStorage.removeItem("accessToken");
    return signOut(auth);
  };

  // Update user profile
  const updateUserProfile = (displayName) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName,
    });
  };

  // Listen for user auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      // Get user data from firebase
      // if (currentUser) {
      //   const userData = {
      //     email: currentUser?.email,
      //     displayName: currentUser?.displayName,
      //     photoURL: currentUser?.photoURL,
      //   };

      //   console.log(userData);
      //   // Update user data in the database
      //   publicAxios
      //     .post("/user", userData)
      //     .then((response) => {
      //       const token = response?.data?.data.token;
      //       localStorage.setItem("accessToken", token);
      //     })
      //     .catch((error) => {
      //       if (error.response) {
      //         // Server responded with a status other than 200
      //         console.error("Server Error:", error.response.data);
      //         console.error("Status Code:", error.response.status);
      //       } else if (error.request) {
      //         // Request was made but no response received
      //         console.error("No Response:", error.request);
      //       } else {
      //         // Something else happened
      //         console.error("Error", error.message);
      //       }
      //     });
      // } else {
      //   localStorage.removeItem("accessToken");
      // }

      setLoading(false);
    });

    return () => {
      return unsubscribe();
    };
  }, [publicAxios]);

  const authInfo = {
    user,
    loading,
    setLoading,
    createUserWithCredential,
    signInWithCredential,
    logout,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
