import { FamilyEntity } from "@/repositories/template"
import { create } from "zustand"

interface IFamilyStore {
    family: FamilyEntity | null
    onFamilyStore: (family: FamilyEntity) => void
    onFamilyClear: () => void
}

const useFamilyStore = create<IFamilyStore>((set) => ({
    family: null,
    onFamilyStore: (family) => set({ family }),
    onFamilyClear: () => set({ family: null }),
}))

export default useFamilyStore