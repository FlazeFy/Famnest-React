import AtomText from "@/components/atoms/a_text"
import OrganismsAddTaskDialog from "@/components/organisms/o_add_task_dialog"
import OrganismsListTaskTable from "@/components/organisms/o_list_task_table"
import Link from "next/link"

export default function TaskPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                <OrganismsAddTaskDialog/>
                <Link href={'/family/task/schedule'}>
                    <div className='flex flex-col justify-center text-center bg-cover rounded-b-4xl md:rounded-r-4xl md:rounded-none p-10 lg:p-15 cursor-pointer btn-image' style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background/background-6.jpg')"}}>
                        <AtomText type='sub-title' text='Set Schedule' />
                        <hr className='my-5'/>
                        <AtomText type='content-title' text='Set your repeatly daily task, and who will participate' />
                    </div>
                </Link>
            </div>
            <OrganismsListTaskTable/>
        </div>
    )
}
