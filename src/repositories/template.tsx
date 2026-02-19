export interface PaginationMeta {
    page: number
    limit: number
    total: number
    total_page: number
}

export interface StatsContextTotalProps {
    context: string
    total: number
}

export interface UserSelectProps {
    id: string
    username: string 
    fullname: string
    email?: string | null
}

export interface SeriesData {
    name: string
    data: number[]
}

export interface FamilyMemberProps {
    id: string
    family_relation: string 
    user_id: string 
    user: UserSelectProps
}
export interface FamilyEntity {
    id: string
    family_name: string
    family_desc: string
    created_by: string
    created_at: string
    updated_at: string
    familyMember: {
        data: FamilyMemberProps[]
        total: number
    }
}