// AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

// Create the AuthContext
export const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
  // Manage authentication state (default is not signed in)
  const [isSignedIn, setIsSignedIn] = useState(false);

  // Function to handle user sign-in
  const signIn = () => {
    setIsSignedIn(true);
  };

  // Function to handle user sign-out
  const signOut = () => {
    setIsSignedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// Create a custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
