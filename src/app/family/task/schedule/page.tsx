import OrganismsTaskScheduleCarousel from "@/components/organisms/o_task_schedule_carousel";
import { familyTaskSchedule, taskItem } from "@/helpers/dummy";

export default function TaskSchedulePage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <OrganismsTaskScheduleCarousel taskItem={familyTaskSchedule}/>
        </div>
    );
}
