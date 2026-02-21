import apiCall from "@/configs/axios"

const STATS_URL = "/api/v1/stats"

export interface ScheduleItem {
    schedule_title: string
    schedule_category: string
    day: string
    time_start: string
    time_end: string
    status: string
}  
export interface NextMealItem {
    meal_name: string
    meal_day: string
    meal_time: string
    prepare_by: string[]
}
export interface FamilySleepTime {
    hour_start: string
    hour_end: string
    created_at: string
    updated_at: string
    user: {
        username: string
    }
}
export interface FamilyAssets {
    income: number
    spending: number
    total_assets: number
}
export interface NextEventItem {
    event_title: string
    event_category: string
    event_start_time: string
    event_end_time: string
    status: string
}
export interface TaskProgressItem {
    username: string
    pending: number
    in_progress: number
    completed: number
}
export interface FamilyDashboardStats {
    next_schedule: ScheduleItem[]
    total_family_member: number
    next_meal: NextMealItem[]
    family_sleep_time: FamilySleepTime | null
    family_assets: FamilyAssets
    next_event: NextEventItem[]
    task_progress: TaskProgressItem[]
}

export const getFamilyDashboardRepo = async (): Promise<FamilyDashboardStats> => {
    const res = await apiCall.get(`${STATS_URL}/family/dashboard`)
    const { data } = res.data

    return data
}