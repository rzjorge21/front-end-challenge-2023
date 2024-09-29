import { create } from "zustand";
import { PlanModel } from "../../models/planModel";
import { createJSONStorage, persist } from "zustand/middleware";

interface PlanState {
  plansData: PlanModel[];
  selectedPlan: PlanModel | null;
  setSelectedPlan: (payload: PlanModel) => void;
  setPlansData: (payload: PlanModel[]) => void;
}

export const usePlanStore = create<PlanState>()(
  persist(
    (set) => ({
      plansData: [],
      selectedPlan: null,
      setSelectedPlan: (payload: PlanModel) => set({ selectedPlan: payload }),
      setPlansData: (payload: PlanModel[]) => set({ plansData: payload }),
    }),
    {
      name: "auth-storage", // Nombre para la clave en AsyncStorage, debe ser único
      storage: createJSONStorage(() => localStorage), // Persistencia de datos
    }
  )
);
