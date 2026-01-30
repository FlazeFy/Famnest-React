export interface PaginationMeta {
    page: number
    limit: number
    total: number
    total_page: number
}

interface FamilyMember {
    family_relation: string 
    user_id: string
    user: UserSelectProps
}
export interface FamilyProps {
    family_name: string
    family_member: FamilyMember | null
}

export interface UserSelectProps {
    username: string 
    fullname: string
}