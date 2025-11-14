import OrganismsAddTaskDialog from "@/components/organisms/o_add_task_dialog";
import OrganismsListTaskTable from "@/components/organisms/o_list_task_table";
import { taskItem } from "@/helpers/dummy";

export default function TaskPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                <OrganismsAddTaskDialog/>
            </div>
            <OrganismsListTaskTable listTask={taskItem}/>
        </div>
    );
}
