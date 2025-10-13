import axios, { AxiosInstance } from "axios";
import React, { createContext, ReactNode, useContext } from "react";

const AxiosContext = createContext<AxiosInstance | null>(null);

export const AxiosProvider = ({ children }: { children: ReactNode }) => {
  const axiosInstance = axios.create({
    baseURL: "https://fakestoreapi.com",
    headers: {
      "Content-Type": "application/json",
    },
    timeout: 8000,
  });

  return (
    <AxiosContext.Provider value={axiosInstance}>
      {children}
    </AxiosContext.Provider>
  );
};

export const useAxios = () => {
  const context = useContext(AxiosContext);
  if (!context) {
    throw new Error("useAxios must be used within an AxiosProvider");
  }
  return context;
};
