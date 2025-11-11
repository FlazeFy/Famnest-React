export const taskItem = [
    {
        title: 'Grocery Shopping',
        description: 'Buy fruits, vegetables, milk, and snacks for the week.',
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
        dueDate: '2025-11-06T09:30:00',
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
        dueDate: '2025-11-09T11:00:00',
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
        description: 'Discuss expenses and plan next month’s savings goals.',
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