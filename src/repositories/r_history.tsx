import apiCall from "@/configs/axios"
import { PaginationMeta } from "./template"

const MODULE_URL = "/api/v1/histories"

export interface HistoryItem {
    id: string
    history_context: string
    history_type: string
    created_at: string
}
export interface HistoryItemWithMeta {
    data: HistoryItem[]
    meta: PaginationMeta
}
export const getAllHistory = async (page: number): Promise<HistoryItemWithMeta> => {
    const res = await apiCall.get(`${MODULE_URL}?page=${page}`)
    const { data, meta } = res.data

    return { data, meta }
}

export const hardDeleteHistoryRepo = async (id: string): Promise<string> => {
    const res = await apiCall.delete(`${MODULE_URL}/${id}`)

    return res.data.message
}