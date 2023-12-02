import { createContext, useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { User } from "../models/User";
import { router } from "expo-router";

export type signUpCredentials = {
  email: string;
  password: string;
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
const API_URL = "https://api.bitzen-pet.homologacao.bitzenwebsites.net/api";

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

  const signUp = async ({ email, password }: signUpCredentials) => {
    try {
      const response = await axios.post(`${API_URL}/auth/register`, {
        email,
        password,
      });

      const { token } = response.data;

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      await SecureStore.setItemAsync(AUTH_TOKEN, token);
    } catch (error) {
      console.log(error);
    }
  };

  const signIn = async ({ email, password }: signInCredentials) => {
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });

      const {
        data: { token, user },
      } = response.data;

      console.log(user);

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
    } catch (error) {
      console.log(error);
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
