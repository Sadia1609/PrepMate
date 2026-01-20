"use client";

import { createContext, useContext, useState, useEffect, useCallback } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    // Initialize with localStorage first (faster), then cookie
    if (typeof window !== 'undefined') {
      const localAuth = localStorage.getItem('auth') === 'true';
      if (localAuth) return true;
      
      const authCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth='));
      return authCookie?.split('=')[1] === 'true';
    }
    return false;
  });
  const [isLoading, setIsLoading] = useState(false); // Start with false since we initialize with actual value

  const checkAuthStatus = useCallback(() => {
    if (typeof window !== 'undefined') {
      // Check localStorage first (faster)
      const localAuth = localStorage.getItem('auth') === 'true';
      
      // Then check cookie
      const authCookie = document.cookie
        .split('; ')
        .find(row => row.startsWith('auth='));
      const cookieAuth = authCookie?.split('=')[1] === 'true';
      
      // Use localStorage if available, otherwise cookie
      const loggedIn = localAuth || cookieAuth;
      
      setIsLoggedIn(loggedIn);
      setIsLoading(false);
      return loggedIn;
    }
    return false;
  }, []);

  useEffect(() => {
    // Set up periodic checking (less frequent)
    const interval = setInterval(() => {
      checkAuthStatus();
    }, 2000); // Increased to 2 seconds

    // Listen for custom auth events (immediate updates)
    const handleAuthChange = () => {
      checkAuthStatus();
    };
    
    window.addEventListener('authchange', handleAuthChange);

    // Listen for focus events
    const handleFocus = () => {
      checkAuthStatus();
    };
    window.addEventListener('focus', handleFocus);

    return () => {
      clearInterval(interval);
      window.removeEventListener('authchange', handleAuthChange);
      window.removeEventListener('focus', handleFocus);
    };
  }, [checkAuthStatus]);

  const login = useCallback(() => {
    setIsLoggedIn(true);
    setIsLoading(false);
    // Dispatch auth change event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('authchange'));
    }
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
    setIsLoading(false);
    // Dispatch auth change event
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('authchange'));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      isLoggedIn, 
      isLoading, 
      login, 
      logout, 
      checkAuth: checkAuthStatus 
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}