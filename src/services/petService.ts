import axios from "axios";
import { API_URL } from "../config/constants";
import { Pet } from "../models/Pet";

export async function fetchAll() {
  const {
    data: { data, message },
  } = await axios.get(`${API_URL}/pets`);

  if (message !== "Sucesso!") throw new Error(message);

  const pets: Pet[] = data.data;

  return pets;
}
