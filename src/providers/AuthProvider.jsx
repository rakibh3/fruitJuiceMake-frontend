import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
import app from '@/firebase/firebase.init'

export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // Register user with email and password
  const createUserWithCredential = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Sign in user with email and password
  const signInWithCredential = (email, password) => {
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
  }

  // Signout user
  const logout = () => {
    setLoading(true)
    localStorage.removeItem('accessToken')
    return signOut(auth)
  }

  // Update user profile
  const updateUserProfile = (displayName) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName,
    })
  }

  // Listen for user auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

      setLoading(false)
    })

    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    setLoading,

    createUserWithCredential,
    signInWithCredential,
    logout,
    updateUserProfile,
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}
export default AuthProvider
