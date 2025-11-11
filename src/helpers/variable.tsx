// Task
export interface TaskParticipant {
    nickname: string
    role: string
}

export interface TaskItem {
    title: string
    description: string
    dueDate: string
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

// Family Member
export interface FamilyMemberShortInfo {
    fullname: string
    gender: string
    nickname: string
    profilePic?: string
    bornAt: string
}

export interface FamilyNeededAttention {
    fullname: string
    gender: string
    nickname: string
    profilePic?: string
    bornAt: string
    reason_category: string
    priority: string
    reason_description?: string 
}