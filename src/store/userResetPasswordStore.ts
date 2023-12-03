import { create } from "zustand";

interface UserResetPasswordStoreState {
  userEmail: string[];
  userToken: string[];
  selectUserEmail: (userEmail: string) => void;
  selectUserToken: (userToken: string) => void;
  clearEmailStore: () => void;
  clearTokenStore: () => void;
}

export const UserResetPasswordStore = create<UserResetPasswordStoreState>(
  (set) => ({
    userEmail: [],
    userToken: [],
    selectUserEmail: (userEmail: string) =>
      set(() => ({ userEmail: [userEmail] })),
    selectUserToken: (userToken: string) =>
      set(() => ({ userToken: [userToken] })),

    clearEmailStore: () => set(() => ({ userEmail: [] })),
    clearTokenStore: () => set(() => ({ userToken: [] })),
  })
);
