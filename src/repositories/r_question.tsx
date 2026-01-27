import apiCall from "@/configs/axios"

const MODULE_URL = "/api/v1/questions"

export interface CreateQuestionPayload {
    email: string
    question: string
}

export const createQuestionRepo = async (payload: CreateQuestionPayload): Promise<string> => {
    const { data } = await apiCall.post(MODULE_URL, payload)
    return data.message
}
