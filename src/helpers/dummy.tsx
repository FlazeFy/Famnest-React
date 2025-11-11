import { MealItem } from "./variable"

export const taskItem = [
    {
        title: 'Grocery Shopping',
        description: 'Buy fruits, vegetables, milk, and snacks for the week.',
        startDate: '2025-11-05T08:00:00',
        dueDate: '2025-11-05T10:00:00',
        isFinished: true,
        participant: [
            { nickname: 'Linda', role: 'Mom' },
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Richard', role: 'Son' },
        ],
    },
    {
        title: 'Family Cleaning Day',
        description: 'Everyone helps clean the house — rooms, kitchen, and yard.',
        startDate: '2025-11-05T08:00:00',
        dueDate: '2025-11-05T09:30:00',
        participant: [
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Linda', role: 'Mom' },
            { nickname: 'Clarisa', role: 'Daughter' },
            { nickname: 'Richard', role: 'Son' },
        ],
        isFinished: false
    },
    {
        title: "Grandma's Birthday Celebration",
        description: 'Prepare the cake, decorations, and birthday dinner for Grandma.',
        startDate: '2025-11-08T15:00:00',
        dueDate: '2025-11-08T18:00:00',
        participant: [
            { nickname: 'Linda', role: 'Mom' },
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Clarisa', role: 'Daughter' },
            { nickname: 'Richard', role: 'Son' },
            { nickname: 'Robert', role: 'Uncle' },
        ],
        isFinished: false,
    },
    {
        title: 'Weekend Picnic at the Park',
        description: 'Pack food, bring the frisbee, and enjoy family time outdoors.',
        startDate: '2025-11-09T06:00:00',
        dueDate: '2025-11-09T10:00:00',
        participant: [
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Linda', role: 'Mom' },
            { nickname: 'Clarisa', role: 'Daughter' },
            { nickname: 'Richard', role: 'Son' },
        ],
        isFinished: true,
    },
    {
        title: 'Monthly Family Budget Review',
        description: "Discuss expenses and plan next month's savings goals.",
        startDate: '2025-11-10T19:00:00',
        dueDate: '2025-11-10T20:00:00',
        participant: [
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Linda', role: 'Mom' },
        ],
        isFinished: true,
    },
]

export const memberItem = [
    {
        fullname: "Alice Johnson",
        gender: "Female",
        nickname: "Ali",
        profilePic: null,
        bornAt: "1990-05-12"
    },
    {
        fullname: "Robert Smith",
        gender: "Male",
        nickname: "Rob",
        profilePic: "/mock/profile_pic.png",
        bornAt: "1985-09-23"
    },
    {
        fullname: "Emily Davis",
        gender: "Female",
        nickname: "Em",
        profilePic: null,
        bornAt: "1998-03-15"
    },
    {
        fullname: "John Carter",
        gender: "Male",
        nickname: "Johnny",
        profilePic: "/mock/profile_pic.png",
        bornAt: "2000-07-30"
    },
    {
        fullname: "Sophia Brown",
        gender: "Female",
        nickname: "Sophie",
        profilePic: null,
        bornAt: "1995-11-08"
    }
]

export const memberNeedAttentionItem = [
    {
        fullname: "Alice Johnson",
        gender: "Female",
        nickname: "Ali",
        profilePic: null,
        bornAt: "1990-05-12",
        reason_category: "Sick",
        reason_description: "Treatment in hospital",
        priority: "High"
    },
    {
        fullname: "Robert Smith",
        gender: "Male",
        nickname: "Rob",
        profilePic: "/mock/profile_pic.png",
        bornAt: "1985-09-23",
        reason_category: "Elderly",
        reason_description: null,
        priority: "Medium"
    },
]

export const mealItem: MealItem[] = [
    { mealName: "Omelette", mealTime: "Breakfast", mealDesc: "Light and fluffy", mealPrepareBy: ["You"], mealDay: "Monday" },
    { mealName: "Orange Juice", mealTime: "Breakfast", mealDesc: "Sweet", mealPrepareBy: ["Dad"], mealDay: "Monday" },
    { mealName: "Nasi Goreng", mealTime: "Lunch", mealDesc: "Fried rice with egg", mealPrepareBy: ["Mom"], mealDay: "Monday" },
    { mealName: "Soup Ayam", mealTime: "Dinner", mealDesc: "Chicken soup", mealPrepareBy: ["Dad"], mealDay: "Monday" },
    { mealName: "Pancakes", mealTime: "Breakfast", mealDesc: "Served with honey", mealPrepareBy: ["You"], mealDay: "Tuesday" },
    { mealName: "Steak", mealTime: "Dinner", mealDesc: "Medium rare", mealPrepareBy: ["Dad"], mealDay: "Tuesday" },
    { mealName: "Bread Toast", mealTime: "Breakfast", mealPrepareBy: ["You"], mealDay: "Wednesday" },
    { mealName: "Grilled Fish", mealTime: "Dinner", mealDesc: "Served with lemon", mealPrepareBy: ["Dad"], mealDay: "Wednesday" },
    { mealName: "Cereal", mealTime: "Breakfast", mealPrepareBy: ["You"], mealDay: "Thursday" },
    { mealName: "Orange Juice", mealDesc: "Sweet", mealTime: "Breakfast", mealPrepareBy: ["Dad"], mealDay: "Thursday" },
    { mealName: "Fried Chicken", mealTime: "Lunch", mealDesc: "Crispy and juicy", mealPrepareBy: ["Mom"], mealDay: "Thursday" },
    { mealName: "Salad", mealTime: "Dinner", mealPrepareBy: ["You"], mealDay: "Thursday" },
    { mealName: "Smoothie Bowl", mealTime: "Breakfast", mealDesc: "Mixed fruits", mealPrepareBy: ["You"], mealDay: "Friday" },
    { mealName: "Burger", mealTime: "Lunch", mealPrepareBy: ["Dad"], mealDay: "Friday" },
    { mealName: "Fried Egg", mealTime: "Breakfast", mealPrepareBy: ["You"], mealDay: "Saturday" },
    { mealName: "Ramen", mealTime: "Lunch", mealPrepareBy: ["Mom"], mealDay: "Saturday" },
    { mealName: "Sushi", mealTime: "Dinner", mealDesc: "Fresh salmon", mealPrepareBy: ["Dad"], mealDay: "Saturday" },
    { mealName: "Salad", mealTime: "Dinner", mealDesc: "Fresh salad", mealPrepareBy: ["Mom"], mealDay: "Saturday" },
]

// Money Flow
export const lastMoneyItem = [
    {
        title: 'Grocery Shopping',
        description: 'Buy fruits and milk.',
        createdAt: '2025-11-05T10:00:00',
        amount: 20000,
        category: 'Spending',
        tags: ['Home Supplies'],
        createdBy: 'You',
    },
    {
        title: 'Salary',
        description: 'Monthly salary credited.',
        createdAt: '2025-11-01T09:00:00',
        amount: 5000000,
        category: 'Income',
        tags: null,
        createdBy: 'Richard',
    },
    {
        title: 'Coffee',
        description: 'Morning coffee.',
        createdAt: '2025-11-06T08:30:00',
        amount: 30000,
        category: 'Spending',
        tags: ['Food', 'Cafe'],
        createdBy: 'Jhon',
    },
    {
        title: 'Freelance Project',
        description: 'Payment for design work.',
        createdAt: '2025-11-07T14:00:00',
        amount: 1500000,
        category: 'Income',
        tags: ['Work'],
        createdBy: 'You',
    },
    {
        title: 'Electric Bill',
        description: 'Monthly electricity bill.',
        createdAt: '2025-11-08T12:00:00',
        amount: 500000,
        category: 'Spending',
        tags: null,
        createdBy: 'Richard',
    }
]