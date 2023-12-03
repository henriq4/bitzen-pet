import axios from "axios";
import { API_URL } from "../config/constants";
import { CreatePet, PetRaw } from "../models/Pet";

export async function fetchPet(): Promise<PetRaw[]> {
  const {
    data: { data, message },
  } = await axios.get(`${API_URL}/pets`);

  if (message !== "Sucesso!") throw new Error(message);

  const pets: PetRaw[] = data.data;

  return pets;
}

export async function createPet(data: FormData): Promise<void> {
  await axios.post(`${API_URL}/pets`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
