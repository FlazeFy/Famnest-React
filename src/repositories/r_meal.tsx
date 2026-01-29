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

    return res.data
}