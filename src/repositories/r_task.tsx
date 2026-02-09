import apiCall from "@/configs/axios"
import { PaginationMeta, StatsContextTotalProps } from "./template"

const MODULE_URL = "/api/v1/tasks"

export interface TaskAssign {
    assign_desc: string | null 
    assignee: {
        username: string
        role: string
    }
}
export interface TaskItem {
    id: string
    task_title: string
    task_desc: string | null
    status: string 
    start_date: string | null
    due_date: string | null
    created_at: string | null
    updated_at: string | null
    tags: string[]
    task_assigns: TaskAssign[]
}
export interface TaskItemWithMeta {
    data: TaskItem[]
    meta: PaginationMeta
}

export const getAllTaskRepo = async (page: number, search: string | null, status: string | null): Promise<TaskItemWithMeta> => {
    const searchArgs = search ? `&search=${search}` : ''
    const statusArgs = status ? `&status=${status}` : ''
    const res = await apiCall.get(`${MODULE_URL}?page=${page}${searchArgs}${statusArgs}`)
    const { data, meta } = res.data

    return { data, meta }
}

export const getIncomingTaskRepo = async (page: number): Promise<TaskItemWithMeta> => {
    const res = await apiCall.get(`${MODULE_URL}/incoming?page=${page}`)
    const { data, meta } = res.data

    return { data, meta }
}

export interface TotalDailyTask {
    total: number
    average: number
    data: StatsContextTotalProps[]
}
export const getTotalDailyTask = async (date: string): Promise<TotalDailyTask> => {
    const res = await apiCall.get(`${MODULE_URL}/total?current_date=${date}`)
    const { data, total, average } = res.data

    return { data, total, average }
}

export const hardDeleteTaskRepo = async (id: string): Promise<string> => {
    const res = await apiCall.delete(`${MODULE_URL}/${id}`)

    return res.data.message
}