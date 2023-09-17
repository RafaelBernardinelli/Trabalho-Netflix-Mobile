import React, { createContext, useMemo, useState } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authContextValue = useMemo(
    () => ({
      isAuthenticated,
      setIsAuthenticated,
    }),
    [isAuthenticated, setIsAuthenticated]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
