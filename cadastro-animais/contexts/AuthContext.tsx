import React, { createContext, useState, useContext } from "react";

type AuthContextType = {
  isAuthenticated: boolean;
  login: (user: string, pass: string) => boolean;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (user: string, pass: string) => {
    if (user === "admin" && pass === "123") {
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
