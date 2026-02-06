import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/family_members"

interface UserFamilyMemberProps {
    id: string 
    username: string 
    email: string
    fullname: string 
    born_at: string 
    gender: string
    profile_image: string | null
    bio: string | null
    created_at: string 
    updated_at: string | null
}
export interface FamilyMemberItem {
    id: string
    family_relation: string
    user: UserFamilyMemberProps
}
export const getAllFamilyMember = async (search: string | null): Promise<FamilyMemberItem[]> => {
    const searchArgs = search ? `&search=${search}` : ''
    const res = await apiCall.get(`${MODULE_URL}?page=1${searchArgs}`)

    return res.data.data
}