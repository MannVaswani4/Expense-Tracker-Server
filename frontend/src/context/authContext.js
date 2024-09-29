import React, { useState, useContext, createContext } from "react";
import axios from "axios";

const AuthContext = createContext();

const BASE_URL = "http://localhost:3002/api/v1/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Login functionality
  // context/globalContext.js
const login = async (credentials) => {
    try {
      const response = await axios.post(`${BASE_URL}/login`, credentials);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token); // Store token
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };
  
  const signup = async (userData) => {
    try {
      const response = await axios.post(`${BASE_URL}/signup`, userData);
      setUser(response.data.user);
      localStorage.setItem('token', response.data.token); // Store token
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };
  

  // Logout functionality
  // context/globalContext.js
    const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    // Optionally, redirect to login
  };
  

  return (
    <AuthContext.Provider value={{ user, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};
