import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/feedbacks"

export interface CreateFeedbackPayload {
    feedback_body: string
    feedback_rate: number
}
export const createFeedbackRepo = async (payload: CreateFeedbackPayload): Promise<string> => {
    const { data } = await apiCall.post(MODULE_URL, payload)
    
    return data.message
}

export interface FeedbackItem extends CreateFeedbackPayload {
    user: {
        username: string
    }
}
export const getFeedbackRandomRepo = async (): Promise<FeedbackItem[]> => {
    const res = await apiCall.get(`${MODULE_URL}/random`)

    return res.data.data
}

