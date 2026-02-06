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
}

export interface SeriesData {
    name: string
    data: number[]
}