import axios, { AxiosError } from "axios";
import { API_URL } from "../config/constants";
import { CreatePet, Pet, PetRaw } from "../models/Pet";

export async function fetchPets(): Promise<PetRaw[]> {
  const {
    data: { data, message },
  } = await axios.get(`${API_URL}/pets`);

  if (message !== "Sucesso!") throw new Error(message);

  const pets: PetRaw[] = data.data;

  return pets;
}

export async function fetchPet(petId: string): Promise<Pet> {
  const {
    data: { data: pet, message },
  } = await axios.get(`${API_URL}/pets/${petId}`);

  if (message !== "Sucesso!") throw new Error(message);

  return pet;
}

export async function createPet(data: FormData): Promise<void> {
  await axios.post(`${API_URL}/pets`, data, {
    transformRequest: () => {
      console.log(data);
      return data;
    },
    headers: {
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
}

export async function deletePet(petId: string): Promise<void> {
  const {
    data: { message },
  } = await axios.delete(`${API_URL}/pets/${petId}`);

  if (message !== "Sucesso!") throw new Error(message);
}
