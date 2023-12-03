import { createContext, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import * as SecureStore from "expo-secure-store";
import { User } from "../models/User";
import { API_URL } from "../config/constants";

export type signUpCredentials = {
  name: string;
  email: string;
  document: string;
  phone_number: string;
  password: string;
  password_confirmation: string;
};

export type signInCredentials = {
  email: string;
  password: string;
};

interface AuthContextData {
  isAuthenticated: boolean;
  signUp: (credentials: signUpCredentials) => Promise<any>;
  signIn: (credentials: signInCredentials) => Promise<any>;
  signOut: () => Promise<any>;
  user: User | undefined;
}

const AUTH_TOKEN = "AUTH_TOKEN";

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const fetchToken = async () => {
      const token = await SecureStore.getItemAsync(AUTH_TOKEN);

      if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      }
    };

    fetchToken();
  }, []);

  const signUp = async (data: signUpCredentials) => {
    try {
      const response = await axios.post(`${API_URL}/register`, data);

      const {
        data: { token, user },
      } = response.data;

      setUser({
        id: user.id,
        email: user.email,
        name: user.name,
        document: user.document,
        phone_number: user.phone_number,
        profile_photo_url: user.profile_photo_url,
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await SecureStore.setItemAsync(AUTH_TOKEN, token);

      return { token };
    } catch (error: any) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message);
      }
    }
  };

  const signIn = async (data: signInCredentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, data);

      const {
        data: { token, user },
      } = response.data;

      setUser({
        id: user.id,
        email: user.email,
        name: user.name,
        document: user.document,
        phone_number: user.phone_number,
        profile_photo_url: user.profile_photo_url,
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await SecureStore.setItemAsync(AUTH_TOKEN, token);

      return { token };
    } catch (error: any) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data?.message);
      }
    }
  };

  const signOut = async () => {
    try {
      await SecureStore.deleteItemAsync(AUTH_TOKEN);

      delete axios.defaults.headers.common["Authorization"];

      setUser(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        signUp,
        signIn,
        signOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
