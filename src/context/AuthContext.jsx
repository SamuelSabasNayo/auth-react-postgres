import React, { useState, createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/AuthReducer';

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false, error: null });
  const { currentUser, setCurrentUser } = useState([]);
  const [token, setToken] = useState([]);
  
  useEffect(() => {
      localStorage.setItem('currentUser', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(token))
  }, [token])
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
