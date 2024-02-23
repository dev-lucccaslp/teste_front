
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { AuthController } from "../api/AuthController";

import { toast } from 'sonner';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { signIn } = AuthController();
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("token") ? true : false
  );

  const onSignIn = useCallback(
    async (data) => {
      try {
        console.log('auth context:',data)
        const response = await signIn(data);

        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true);
      } catch (error) {
        toast.error("Email e/ou senha incorretos.");

        console.log(error);
        return;
      }
    },
    []
  );

  const onSignOut = useCallback(() => {
    localStorage.removeItem("data");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        onSignIn,
        onSignOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};