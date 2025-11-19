export interface MyProfile {
    username: string
    bio: string
    email: string
    phone: string
    telegram: string
    createdAt: string
    updatedAt: string
}

// Task
export interface TaskParticipant {
    nickname: string
    role: string
}

export interface TaskItem {
    title: string
    description: string
    startDate: string
    dueDate: string
    isFinished: boolean
    tags?: string[]
    participant: TaskParticipant[]
}

export interface TaskScheduleItem {
    title: string
    description: string
    participant: TaskParticipant[]
    taskDay: string
    startHour: string
    endHour: string
    tags?: string[]
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

export interface MoneyFlowTag {
    tagName: string
    totalUsed: number
    totalSpending: number
    totalIncome: number
    averageSpending: number
    averageIncome: number
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

export interface FamilyMemberTaskTagHistory {
    tagName: string 
    total: number
}

export interface FamilyRecommendedTaskParticipant {
    fullname: string
    gender: string
    role: string
    bornAt: string
    taskTagHistory: FamilyMemberTaskTagHistory[]
    matchedScore: number
    averageTaskPerWeek: number 
    averageEventPerWeek: number 
    averageSleepTimePerWeek: number 
}

export interface DayTimeMealAssigned {
    day: string
    time: string
}

export interface FamilyRecommendedMealPrepared {
    fullname: string
    gender: string
    role: string
    bornAt: string
    listAssignedMeal: string[]
    listAssignedDayTime: DayTimeMealAssigned[]
    totalMealPrep: number
    averageScore: number 
}

// Meal
export interface MealItem {
    mealName: string
    mealTime: string
    mealDesc?: string
    mealPrepareBy: string[],
    mealDay: string
}