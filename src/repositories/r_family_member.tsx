import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/family_members"

interface UserFamilyMemberProps {
    id: string 
    username: string 
    fullname: string 
    born_at: string 
    gender: string
    profile_image: string | null
}
export interface FamilyMemberItem {
    id: string
    family_relation: string
    user: UserFamilyMemberProps
}
export const getAllFamilyMember = async (): Promise<FamilyMemberItem[]> => {
    const res = await apiCall.get(`${MODULE_URL}/`)

    return res.data.data
}