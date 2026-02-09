import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/meals"

export interface MealItem {
    id: string
    meal_name: string
    meal_desc?: string
    meal_day: string 
    meal_time: string 
    prepare_by: string
    meal_scoring?: number
}
export const getAllMeal = async (): Promise<MealItem[]> => {
    const res = await apiCall.get(`${MODULE_URL}/`)

    return res.data.data
}

export const hardDeleteMealRepo = async (id: string): Promise<string> => {
    const res = await apiCall.delete(`${MODULE_URL}/${id}`)

    return res.data.message
}

export interface CreateMealRequestPayload {
    meal_name: string
    meal_desc?: string | null
    meal_day: string
    meal_time: string
    meal_prepare_by: string[]
}
export const createMealRepo = async (payload: CreateMealRequestPayload): Promise<string> => {
    const res = await apiCall.post(`${MODULE_URL}/`, payload)

    return res.data.message
}