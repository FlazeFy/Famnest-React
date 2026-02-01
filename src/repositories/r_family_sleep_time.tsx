import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/family_sleep_time"

export interface FamilySleepTimeItem {
    hour_start: string
    hour_end: string
    created_at: string
    updated_at: string
    user: {
        username: string
    }
}

export const getFamilySleepTimeRepo = async (): Promise<FamilySleepTimeItem> => {
    const res = await apiCall.get(`${MODULE_URL}/`)

    return res.data.data
}

export const hardDeleteSleepTimeRepo = async (): Promise<string> => {
    const res = await apiCall.delete(`${MODULE_URL}/`)

    return res.data.message
}
