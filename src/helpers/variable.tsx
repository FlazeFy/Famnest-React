// Task
export interface TaskParticipant {
    nickname: string
    role: string
}

export interface TaskItem {
    title: string
    description: string
    planAt: string
    isFinished: boolean
    participant: TaskParticipant[]
}

// Money
export interface MoneyFlowItem {
    title: string
    description?: string
    category: string
    amount: number
    tags?: string[]
    createdAt: string
    createdBy: string
}