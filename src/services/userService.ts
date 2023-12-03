import axios from "axios";
import { API_URL } from "../config/constants";
import { User } from "../models/User";

interface IGetRefreshToken {
  token: string;
  user: User;
}

export async function getRefreshToken(): Promise<IGetRefreshToken> {
  const {
    data: {
      data: { token, user },
      message,
    },
  } = await axios.post(`${API_URL}/refresh-token`);

  if (message !== "Sucesso!") throw new Error(message);

  return {
    token,
    user,
  };
}

export async function sendResetPasswordEmail(email: string) {
  const {
    data: { message },
  } = await axios.post(`${API_URL}/forgot-password`, { email });

  if (message !== "Sucesso!") throw new Error(message);
}

interface sendResetPasswordConfirmationTokenData {
  email: string;
  token: string;
}

export async function sendResetPasswordConfirmationToken(
  data: sendResetPasswordConfirmationTokenData
) {
  const {
    data: { message },
  } = await axios.post(`${API_URL}/reset-password/token/validate`, data);

  if (message !== "Sucesso!") throw new Error(message);
}

interface resetPasswordData {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}

export async function resetPassword(data: resetPasswordData) {
  const {
    data: { message },
  } = await axios.post(`${API_URL}/reset-password`, data);

  if (message !== "Sucesso!") throw new Error(message);
}
