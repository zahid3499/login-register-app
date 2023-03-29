import React, { createContext, useState, useEffect } from "react";

// Create a new context
export const AuthContext = createContext();

// Create a custom hook to use the context
export const useAuth = () => {
  return React.useContext(AuthContext);
};

// Create a provider component to wrap your app with
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  // Function to log the user in
  const login = (user) => {
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
  };

  // Function to log the user out
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  // Value of the context
  const value = {
    user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
