import OrganismsDashboard from "@/components/organisms/o_dashboard";
import OrganismsPinnedChartBox from "@/components/organisms/o_pinned_chart_box";

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

    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col p-5 md:p-7 lg:p-10 relative'>
                <OrganismsPinnedChartBox pinnedChartData={pinnedChartData}/>
                <OrganismsDashboard/>
            </div>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between px-0 py-10 lg:px-10 lg:py-0'>
            
            </div>
        </div>
    );
}
