import apiCall from "@/configs/axios"
import { PaginationMeta, UserSelectProps } from "./template"

const MODULE_URL = "/api/v1/meal_feedbacks"

export interface MealFeedbackItem {
    id: string
    meal_feedback?: string | null
    meal_rate: number
    created_at: string 
    user: UserSelectProps
}
export interface MealFeedbackItemWithMeta {
    data: MealFeedbackItem[]
    meta: PaginationMeta
}
export const getAllMealFeedbackByMealIdRepo = async (page: number, id: string): Promise<MealFeedbackItemWithMeta> => {
    const res = await apiCall.get(`${MODULE_URL}/${id}?page=${page}`)
    const { data, meta } = res.data

    return { data, meta }
}