import apiCall from "@/configs/axios"
import { StatsContextTotalProps } from "./template"

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