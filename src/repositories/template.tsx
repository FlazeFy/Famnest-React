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
    username: string 
    fullname: string
}