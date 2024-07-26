// context/AuthContext.js
'use client'
import { createContext, useContext, useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isSignedIn, user } = useUser();
  const [authStatus, setAuthStatus] = useState({ isSignedIn, user });
  const router = useRouter();

  useEffect(() => {
    setAuthStatus({ isSignedIn, user });
    if (!isSignedIn) {
      router.push('/sign-in'); 
    }
  }, [isSignedIn, user, router]);

  return (
    <AuthContext.Provider value={authStatus}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);