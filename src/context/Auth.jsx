import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = ({ userName, password }) => {
    if (userName === 'usuario@email.com' && password === '123senha')
      setIsAuthenticated(true);
    else setIsAuthenticated(false);
  };

  const authContextValue = useMemo(
    () => ({
      isAuthenticated,
      signIn,
    }),
    [signIn, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
