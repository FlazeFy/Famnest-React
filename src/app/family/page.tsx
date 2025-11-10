import OrganismsDashboard from "@/components/organisms/o_dashboard";
import OrganismsDashboardListCarousel from "@/components/organisms/o_dashboard_list_carousel";
import OrganismsPinnedChartBox from "@/components/organisms/o_pinned_chart_box";
import { taskItem } from "@/helpers/dummy";

export default function FamilyPage() {
    const pinnedChartData = [
        {
            title : 'Total Daily Task For Last Week',
            type : 'line',
            data : [
                { context: 'Monday', total: 12 },
                { context: 'Tuesday', total: 18 },
                { context: 'Wednesday', total: 11 },
                { context: 'Thursday', total: 22 },
                { context: 'Friday', total: 16 },
                { context: 'Saturday', total: 25 },
                { context: 'Sunday', total: 20 },
            ] 
        },
        {
            title : 'Total Daily Spend For Last Week',
            type : 'line',
            data : [
                { context: 'Monday', total: 12 },
                { context: 'Tuesday', total: 18 },
                { context: 'Wednesday', total: 11 },
                { context: 'Thursday', total: 22 },
                { context: 'Friday', total: 16 },
                { context: 'Saturday', total: 25 },
                { context: 'Sunday', total: 20 },
            ] 
        },
        {
            title : 'Task Contribution',
            type : 'pie',
            data : [
                { context: 'Robert', total: 12 },
                { context: 'Leo', total: 18 },
                { context: 'Budi', total: 11 },
            ] 
        }
    ]

    const lastMoneyItem = [
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

    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col md:p-7 relative'>
                <OrganismsPinnedChartBox pinnedChartData={pinnedChartData}/>
                <OrganismsDashboard/>
            </div>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between px-0 py-10 lg:px-10 lg:py-0'>
                <OrganismsDashboardListCarousel taskItem={taskItem} lastMoneyItem={lastMoneyItem}/>
            </div>
        </div>
    );
}
