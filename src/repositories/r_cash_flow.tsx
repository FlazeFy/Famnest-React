import apiCall from "@/configs/axios"
import { PaginationMeta, StatsContextTotalProps, UserSelectProps } from "./template"

const MODULE_URL = "/api/v1/cash_flows"

export interface TotalDailyCashFlow {
    total: number
    average: number
    data: StatsContextTotalProps[]
}
export const getTotalDailyCashFlow = async (date: string): Promise<TotalDailyCashFlow> => {
    const res = await apiCall.get(`${MODULE_URL}/total?current_date=${date}`)
    const { data, total, average } = res.data

    return { data, total, average }
}

export interface CashFlowAssign {
    assign_desc: string | null 
    assignee: {
        username: string
        role: string
    }
}
export interface CashFlowItem {
    id: string
    flow_type: string
    flow_context: string
    flow_desc: string | null
    flow_category: string 
    flow_amount: number
    created_at: string
    updated_at: string | null
    tags: string[]
    user: UserSelectProps
}
export interface CashFlowItemWithMeta {
    data: CashFlowItem[]
    meta: PaginationMeta
}
export const getAllCashFlowRepo = async (page: number): Promise<CashFlowItemWithMeta> => {
    const res = await apiCall.get(`${MODULE_URL}?page=${page}`)
    const { data, meta } = res.data

    return { data, meta }
}