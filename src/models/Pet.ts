export interface Pet {
  id: number;
  name: string;
  user_id: number;
  image_url: string;
  color: string;
  birthdate: string;
  observation: null;
  age: string;
}

export interface PetRaw {
  id: number;
  name: string;
  user_id: number;
  image_url: string;
}

export interface CreatePet {
  name: string;
  color: string;
  birthdate?: string;
  description: string;
  image?: File;
}
