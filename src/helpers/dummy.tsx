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
    { mealName: "Orange Juice", mealTime: "Breakfast", mealDesc: "Sweet", mealPrepareBy: ["Jhon"], mealDay: "Monday" },
    { mealName: "Nasi Goreng", mealTime: "Lunch", mealDesc: "Fried rice with egg", mealPrepareBy: ["Clarisa"], mealDay: "Monday" },
    { mealName: "Soup Ayam", mealTime: "Dinner", mealDesc: "Chicken soup", mealPrepareBy: ["Jhon"], mealDay: "Monday" },
    { mealName: "Pancakes", mealTime: "Breakfast", mealDesc: "Served with honey", mealPrepareBy: ["You"], mealDay: "Tuesday" },
    { mealName: "Steak", mealTime: "Dinner", mealDesc: "Medium rare", mealPrepareBy: ["Jhon"], mealDay: "Tuesday" },
    { mealName: "Bread Toast", mealTime: "Breakfast", mealPrepareBy: ["You"], mealDay: "Wednesday" },
    { mealName: "Grilled Fish", mealTime: "Dinner", mealDesc: "Served with lemon", mealPrepareBy: ["Jhon"], mealDay: "Wednesday" },
    { mealName: "Cereal", mealTime: "Breakfast", mealPrepareBy: ["You"], mealDay: "Thursday" },
    { mealName: "Orange Juice", mealDesc: "Sweet", mealTime: "Breakfast", mealPrepareBy: ["Jhon"], mealDay: "Thursday" },
    { mealName: "Fried Chicken", mealTime: "Lunch", mealDesc: "Crispy and juicy", mealPrepareBy: ["Clarisa"], mealDay: "Thursday" },
    { mealName: "Salad", mealTime: "Dinner", mealPrepareBy: ["You"], mealDay: "Thursday" },
    { mealName: "Smoothie Bowl", mealTime: "Breakfast", mealDesc: "Mixed fruits", mealPrepareBy: ["You"], mealDay: "Friday" },
    { mealName: "Burger", mealTime: "Lunch", mealPrepareBy: ["Jhon","Bob"], mealDay: "Friday" },
    { mealName: "Fried Egg", mealTime: "Breakfast", mealPrepareBy: ["You"], mealDay: "Saturday" },
    { mealName: "Ramen", mealTime: "Lunch", mealPrepareBy: ["Clarisa","Bob"], mealDay: "Saturday" },
    { mealName: "Sushi", mealTime: "Dinner", mealDesc: "Fresh salmon", mealPrepareBy: ["Jhon"], mealDay: "Saturday" },
    { mealName: "Salad", mealTime: "Dinner", mealDesc: "Fresh salad", mealPrepareBy: ["Clarisa"], mealDay: "Saturday" },
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

export const familyRecommendedTaskParticipant = [
    {
        fullname: "Johnathan Doe",
        gender: "Male",
        role: "Dad",
        bornAt: "1978-04-15",
        taskTagHistory: [
            { tagName: "Cleaning", total: 12 },
            { tagName: "Cooking", total: 5 },
            { tagName: "Gardening", total: 8 }
        ],
        matchedScore: 87,
        averageTaskPerWeek: 4.2,
        averageEventPerWeek: 1.1,
        averageSleepTimePerWeek: 49
    },
    {
        fullname: "Clarisa Doe",
        gender: "Female",
        role: "Mom",
        bornAt: "1981-09-22",
        taskTagHistory: [
            { tagName: "Cooking", total: 20 },
            { tagName: "Laundry", total: 14 },
            { tagName: "Shopping", total: 9 }
        ],
        matchedScore: 92,
        averageTaskPerWeek: 5.7,
        averageEventPerWeek: 2.3,
        averageSleepTimePerWeek: 52
    },
    {
        fullname: "Bob Doe",
        gender: "Male",
        role: "Brother",
        bornAt: "2010-06-03",
        taskTagHistory: [
            { tagName: "Pet Care", total: 6 },
            { tagName: "Dishwashing", total: 10 },
            { tagName: "Trash Disposal", total: 15 }
        ],
        matchedScore: 74,
        averageTaskPerWeek: 3.1,
        averageEventPerWeek: 0.5,
        averageSleepTimePerWeek: 58
    }
]

export const sampleTags = [
    { title: "#Cleaning", value:"cleaning" },
    { title: "#Repairing", value:"repairing" },
    { title: "#Shopping", value:"shopping" },
    { title: "#Learning", value:"learning" },
]

export const listMoneyFlowTag = [
    { tagName: "Food & Groceries", totalUsed: 12, totalSpending: 1500000, totalIncome: 0, averageSpending: 125000, averageIncome: 0 },
    { tagName: "Salary", totalUsed: 1, totalSpending: 0, totalIncome: 5000000, averageSpending: 0, averageIncome: 5000000 },
    { tagName: "Entertainment", totalUsed: 5, totalSpending: 600000, totalIncome: 0, averageSpending: 120000, averageIncome: 0 }
]

export const familyTaskSchedule = [
    {
        title: "Family Breakfast",
        description: "Prepare and enjoy breakfast together.",
        participant: [
            { nickname: "John (Dad)", role: "Cook" },
            { nickname: "Maria (Mom)", role: "Assistant" },
            { nickname: "You", role: "Table Setter" }
        ],
        taskDay: "Monday",
        startHour: "07:00",
        endHour: "07:45"
    },
    {
        title: "Family Lunch",
        description: "Prepare and enjoy lunch together.",
        participant: [
            { nickname: "Maria (Mom)", role: "Assistant" },
            { nickname: "You", role: "Table Setter" }
        ],
        taskDay: "Monday",
        startHour: "12:00",
        endHour: "13:30"
    },
    {
        title: "Homework Assistance",
        description: "Helping with school homework in the evening.",
        participant: [
            { nickname: "Maria (Mom)", role: "Tutor" },
            { nickname: "You", role: "Support" }
        ],
        taskDay: "Tuesday",
        startHour: "18:00",
        endHour: "19:00"
    },
    {
        title: "Grocery Shopping",
        description: "Weekly grocery shopping trip.",
        participant: [
            { nickname: "John (Dad)", role: "Driver" },
            { nickname: "Maria (Mom)", role: "Planner" }
        ],
        taskDay: "Wednesday",
        startHour: "17:00",
        endHour: "18:30"
    },
    {
        title: "Family Movie Night",
        description: "Watching a movie together at home.",
        participant: [
            { nickname: "You", role: "Movie Selector" },
            { nickname: "Maria (Mom)", role: "Snack Maker" },
            { nickname: "John (Dad)", role: "Setup" }
        ],
        taskDay: "Thursday",
        startHour: "20:00",
        endHour: "22:00"
    },
    {
        title: "House Cleaning",
        description: "Cleaning the house as a family.",
        participant: [
            { nickname: "Maria (Mom)", role: "Coordinator" },
            { nickname: "John (Dad)", role: "Floor Cleaning" },
            { nickname: "You", role: "Dusting" }
        ],
        taskDay: "Saturday",
        startHour: "09:00",
        endHour: "11:00"
    },
    {
        title: "Family Lunch Out",
        description: "Eating lunch at a restaurant together.",
        participant: [
            { nickname: "John (Dad)", role: "Driver" },
            { nickname: "Maria (Mom)", role: "Restaurant Picker" },
            { nickname: "You", role: "Companion" }
        ],
        taskDay: "Sunday",
        startHour: "12:00",
        endHour: "13:30"
    }
];
