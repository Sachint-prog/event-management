import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

// Configure axios defaults for credentials
axios.defaults.withCredentials = true;
const API_URL = 'http://localhost:5000/api';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Refresh token on app load
  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await axios.post(`${API_URL}/auth/refresh-token`);
        setToken(res.data.accessToken);
        // Also fetch profile if needed
        const profileRes = await axios.get(`${API_URL}/auth/profile`, {
          headers: { 'x-auth-token': res.data.accessToken }
        });
        setUser(profileRes.data.user);
      } catch (err) {
        console.log('No active session found');
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  const login = async (email, password) => {
    const res = await axios.post(`${API_URL}/auth/login`, { email, password });
    setUser(res.data.user);
    setToken(res.data.accessToken);
    return res.data;
  };

  const signup = async (userData) => {
    const res = await axios.post(`${API_URL}/auth/register`, userData);
    setUser(res.data.user);
    setToken(res.data.accessToken);
    return res.data;
  };

  const logout = async () => {
    await axios.post(`${API_URL}/auth/logout`);
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, signup, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
