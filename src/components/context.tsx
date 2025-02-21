import axios from "axios";
import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextType = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || "",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);

  const contextValue: AuthContextType = {
    open,
    setOpen,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const apiClient = api;
