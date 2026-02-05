export const myProfile = {
    username: 'flazefy',
    bio: 'Lorem ipsum',
    email: 'flazen.edu@gmail.com',
    phone: '08123456789',
    telegram: '123456789',
    createdAt: '2025-11-05T08:00:00',
    updatedAt: '2025-12-05T12:00:00',
}

export const taskItem = [
    {
        title: 'Grocery Shopping',
        description: 'Buy fruits, vegetables, milk, and snacks for the week.',
        startDate: '2025-11-05T08:00:00',
        dueDate: '2025-11-05T10:00:00',
        isFinished: true,
        participant: [
            { nickname: 'Clarisa', role: 'Mom' },
            { nickname: 'John', role: 'Dad' },
            { nickname: 'You', role: 'Son' },
        ],
        tags: ['Shopping','Home Essentials']
    },
    {
        title: 'Family Cleaning Day',
        description: 'Everyone helps clean the house — rooms, kitchen, and yard.',
        startDate: '2025-11-05T08:00:00',
        dueDate: '2025-11-05T09:30:00',
        participant: [
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Bob', role: 'Brother' },
            { nickname: 'Clarisa', role: 'Mom' },
            { nickname: 'You', role: 'Son' },
        ],
        isFinished: false
    },
    {
        title: "Grandma's Birthday Celebration",
        description: 'Prepare the cake, decorations, and birthday dinner for Grandma.',
        startDate: '2025-11-08T15:00:00',
        dueDate: '2025-11-08T18:00:00',
        participant: [
            { nickname: 'Clarisa', role: 'Mom' },
            { nickname: 'You', role: 'Son' }
        ],
        isFinished: false,
        tags: ['Party']
    },
    {
        title: 'Weekend Picnic at the Park',
        description: 'Pack food, bring the frisbee, and enjoy family time outdoors.',
        startDate: '2025-11-09T06:00:00',
        dueDate: '2025-11-09T10:00:00',
        participant: [
            { nickname: 'John', role: 'Dad' },
            { nickname: 'Bob', role: 'Brother' },
            { nickname: 'Clarisa', role: 'Mom' },
            { nickname: 'You', role: 'Son' },
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
            { nickname: 'Clarisa', role: 'Mom' },
        ],
        isFinished: true,
        tags:['Meeting']
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

// Cash Flow
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


export const familyTaskSchedule = [
    {
        title: "Family Breakfast",
        description: "Prepare and enjoy breakfast together.",
        participant: [
            { nickname: "John", role: "Cook" },
            { nickname: "Clarisa", role: "Assistant" },
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
            { nickname: "Clarisa", role: "Assistant" },
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
            { nickname: "Clarisa", role: "Tutor" },
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
            { nickname: "John", role: "Driver" },
            { nickname: "Clarisa", role: "Planner" }
        ],
        taskDay: "Wednesday",
        startHour: "17:00",
        endHour: "18:30",
        tags: ['Shopping','Home Essentials']
    },
    {
        title: "Family Movie Night",
        description: "Watching a movie together at home.",
        participant: [
            { nickname: "You", role: "Movie Selector" },
            { nickname: "Clarisa", role: "Snack Maker" },
            { nickname: "John", role: "Setup" }
        ],
        taskDay: "Thursday",
        startHour: "20:00",
        endHour: "22:00"
    },
    {
        title: "House Cleaning",
        description: "Cleaning the house as a family.",
        participant: [
            { nickname: "Clarisa", role: "Coordinator" },
            { nickname: "John", role: "Floor Cleaning" },
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
            { nickname: "John", role: "Driver" },
            { nickname: "Clarisa", role: "Restaurant Picker" },
            { nickname: "You", role: "Companion" }
        ],
        taskDay: "Sunday",
        startHour: "12:00",
        endHour: "13:30",
        tags: ['Party']
    }
];

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

export const familyRecommendedMealPrepared = [
    {
        fullname: 'You',
        gender: 'Male',
        role: 'Son',
        bornAt: "2010-06-03",
        listAssignedMeal: ['Nasi Goreng','Omelette'],
        listAssignedDayTime: [
            { day: 'Sunday', time: 'Lunch'},
            { day: 'Monday', time: 'Dinner'}
        ],
        totalMealPrep: 10,
        averageScore: 4.75 
    },
    {
        fullname: 'Clarisa',
        gender: 'Female',
        role: 'Mom',
        bornAt: "1979-02-19",
        listAssignedMeal: ['Nasi Goreng','Omelette','Orange Juice'],
        listAssignedDayTime: [
            { day: 'Tuesday', time: 'Breakfast'},
            { day: 'Wednesday', time: 'Breakfast'},
            { day: 'Thursday', time: 'Breakfast'}
        ],
        totalMealPrep: 20,
        averageScore: 4.95 
    },
    {
        fullname: 'Jhon',
        gender: 'Male',
        role: 'Dad',
        bornAt: "1978-04-15",
        listAssignedMeal: ['Bread Toast'],
        listAssignedDayTime: [
            { day: 'Saturday', time: 'Lunch'},
        ],
        totalMealPrep: 3,
        averageScore: 4.5 
    }
]

export const sampleTags = [
    { title: "#Shopping", value:"Shopping" },
    { title: "#Home Essentials", value:"Home Essentials" },
    { title: "#Meeting", value:"Meeting" },
    { title: "#Party", value:"Party" },
]

// Money
export const listMoneyFlowTag = [
    { tagName: "Food & Groceries", totalUsed: 12, totalSpending: 1500000, totalIncome: 0, averageSpending: 125000, averageIncome: 0 },
    { tagName: "Salary", totalUsed: 1, totalSpending: 0, totalIncome: 5000000, averageSpending: 0, averageIncome: 5000000 },
    { tagName: "Entertainment", totalUsed: 5, totalSpending: 600000, totalIncome: 0, averageSpending: 120000, averageIncome: 0 }
]

export const listSpendingWeekly = [
    {
      name: "You",
      data: [45000, 38000, 52000, 60000, 55000, 48000, 50000],
    },
    {
      name: "Jhon (Dad)",
      data: [80000, 75000, 90000, 85000, 88000, 92000, 87000],
    },
    {
      name: "Clarisa (Mom)",
      data: [60000, 58000, 63000, 65000, 67000, 62000, 64000],
    },
]

export const listIncomeMonthly = [
    {
        name: "You",
        data: [5500000, 5600000, 5800000, 5900000, 6000000, 6200000, 6300000, 6400000, 6500000, 6600000, 6700000, 7000000],
    },
    {
        name: "Jhon (Dad)",
        data: [9000000, 9000000, 9100000, 9200000, 9300000, 9400000, 9500000, 9600000, 9600000, 9700000, 9800000, 10000000],
    },
    {
        name: "Clarisa (Mom)",
        data: [4500000, 4550000, 4600000, 4700000, 4800000, 4900000, 4950000, 5000000, 5050000, 5100000, 5200000, 5300000],
    },
]

export const moneyFlowComparison = [
    { context: 'Income', total: 24000000 },
    { context: 'Spending', total: 15000000 }
]

// Day Name
export const dayName = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
// Month Name
export const monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]