import OrganismsDashboard from "@/components/organisms/o_dashboard"
import OrganismsDashboardListCarousel from "@/components/organisms/o_dashboard_list_carousel"
import OrganismsPinnedChartBox from "@/components/organisms/o_pinned_chart_box"
import { lastMoneyItem, taskItem } from "@/helpers/dummy"

export default function FamilyPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col md:p-7 relative'>
                <OrganismsPinnedChartBox/>
                <OrganismsDashboard/>
            </div>
            <div className='w-full lg:w-1/2 mb-2 flex flex-col justify-between px-0 py-10 lg:px-10 lg:py-0'>
                <OrganismsDashboardListCarousel taskItem={taskItem} lastMoneyItem={lastMoneyItem}/>
            </div>
        </div>
    )
}
