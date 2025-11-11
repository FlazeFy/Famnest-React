import OrganismsListTaskTable from "@/components/organisms/o_list_task_table";
import { taskItem } from "@/helpers/dummy";

export default function TaskPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <OrganismsListTaskTable listTask={taskItem}/>
        </div>
    );
}
