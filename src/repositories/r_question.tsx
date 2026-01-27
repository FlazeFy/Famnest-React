import apiCall from "@/configs/axios"

export interface CreateQuestionPayload {
    email: string
    question: string
}

const MODULE_URL = "/api/v1/questions"

export const createQuestionRepo = async (payload: CreateQuestionPayload): Promise<string> => {
    const { data } = await apiCall.post(MODULE_URL, payload)
    return data.message
}
