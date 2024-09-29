import { create } from "zustand";
import { UserModel } from "../../models/userModel";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  user: UserModel | null;
  dni: string;
  cellphone: string;
  setUser: (payload: UserModel, dni: string, cellphone: string) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      dni: '',
      cellphone: '',
      setUser: (payload: UserModel, dni: string, cellphone: string) => set({ user: payload, dni: dni, cellphone: cellphone }),
    }),
    {
      name: "user-storage", 
      storage: createJSONStorage(() => localStorage), // Persistencia de datos
    }
  )
);
