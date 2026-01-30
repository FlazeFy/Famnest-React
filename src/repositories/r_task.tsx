import apiCall from "@/configs/axios"
import { PaginationMeta } from "./template"

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

export const getAllTaskRepo = async (page: number): Promise<TaskItemWithMeta> => {
    const res = await apiCall.get(`${MODULE_URL}?page=${page}`)
    const { data, meta } = res.data

    return { data, meta }
}

export const getIncomingTaskRepo = async (page: number): Promise<TaskItemWithMeta> => {
    const res = await apiCall.get(`${MODULE_URL}/incoming?page=${page}`)
    const { data, meta } = res.data

    return { data, meta }
}
