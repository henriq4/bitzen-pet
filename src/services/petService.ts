import axios from "axios";
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

  console.log(pet);

  return pet;
}

export async function createPet(data: FormData): Promise<void> {
  await axios.post(`${API_URL}/pets`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
