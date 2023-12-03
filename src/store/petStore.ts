import { create } from "zustand";

interface PetStoreState {
  petId: string[];
  selectPet: (petId: string) => void;
  clearStore: () => void;
}

export const usePetStore = create<PetStoreState>((set) => ({
  petId: [],
  selectPet: (petId: string) => set(() => ({ petId: [petId] })),
  clearStore: () => set(() => ({ petId: [] })),
}));
