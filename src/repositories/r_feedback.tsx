import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/feedbacks"

export interface FeedbackItem {
    feedback_body: string
    feedback_rate: number
    user: {
        username: string
    }
}

export const getFeedbackRandomRepo = async (): Promise<FeedbackItem[]> => {
    const { data } = await apiCall.get(`${MODULE_URL}/random`)

    return data.data
}
