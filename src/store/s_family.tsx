import { FamilyProps } from "@/repositories/template"
import { create } from "zustand"

interface IFamilyStore extends FamilyProps {
    onFamilyStore: (data: Partial<IFamilyStore>) => void 
    onLogOutStore: () => void
}

const useFamilyStore = create<IFamilyStore>((set) => ({
    family_name: "", family_member: null,
    onFamilyStore: (data) => {
        set(() => ({
            ...data,
        }))
    },
    onLogOutStore: () => {
        set(() => ({
            family_name: "", family_member: null,
        }))
    },
}))

export default useFamilyStore
