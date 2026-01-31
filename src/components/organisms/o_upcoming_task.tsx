"use client"
import AtomButton from "../atoms/a_button"
import AtomText from "../atoms/a_text"
import { faUsers, faCloud, faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Input } from "@/components/ui/input"
import Link from "next/link";
import MoleculesTaskBox from "../molecules/m_task_box";
import { getIncomingTaskRepo, TaskItem } from "@/repositories/r_task";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import MoleculesNotFoundBox from "../molecules/m_not_found_box";
import AtomSeparator from "../atoms/a_separator";

interface OrganismsUpcomingTaskProps {
    totalMember: number
    isSignedIn: boolean
}

const OrganismsUpcomingTask: React.FC<OrganismsUpcomingTaskProps> = ({ totalMember, isSignedIn }) => {
    if (isSignedIn) {
        const [taskItem, setTaskItem] = useState<TaskItem[]>([])
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState<string | null>(null)
        const [page, setPage] = useState(1)

        useEffect(() => {
            const fetchTask = async (page: number) => {
                try {
                    const data = await getIncomingTaskRepo(page)
                    setTaskItem(data.data)
                } catch (err: any) {
                    setError(err?.response?.data?.message || "Something went wrong")
                } finally {
                    setLoading(false)
                }
            }

            fetchTask(page)
        }, [page])

        if (loading) return <Skeleton style={{height:"400px"}}/>
        if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

        return (
            <>
                <div className="min-h-[90vh] flex-wrap text-center lg:text-start w-full rounded-2xl text-white bg-cover items-start p-5 pt-10 lg:p-10 lg:pt-20" style={{backgroundImage:"url('/background/background-2.jpg')"}}>
                    <div className="flex mb-5 gap-2">
                        <Link href={'/family/task'}>
                            <AtomButton type='btn-success' text={<span className="flex gap-2"><FontAwesomeIcon icon={faArrowRight} height={20} width={20}/> See More</span>}/>
                        </Link>
                        <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faUsers} height={20} width={20}/> {totalMember} Member</span>}/>
                        <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faCloud} height={20} width={20}/> Sunny</span>}/>
                        <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faCalendar} height={20} width={20}/> Wednesday</span>}/>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-center lg:text-left mb-6 md:mb-0">
                            <AtomText type="sub-title" text="Here's some task your family need to do" />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col justify-center text-center lg:text-left">
                            <AtomText type="content" text="Lorem ipsum..." />
                        </div>
                    </div>
                    <div className="rounded-2xl p-5 mt-10 text-dark" style={{backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
                        <div className="flex flex-wrap w-full">
                            <div className="w-full md:w-1/2 flex flex-col">
                                <AtomText type='content-title' text="Here's some task your family need to do"/>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col">
                                <Input type="text" placeholder="Search task..." />
                            </div>
                        </div>
                        <div className='mt-20 items-end text-start'>
                            {
                                taskItem.length > 0 ? taskItem.map((dt, idx) => (
                                    <MoleculesTaskBox key={idx} task_title={dt.task_title} task_desc={dt.task_desc} due_date={dt.due_date} task_assigns={dt.task_assigns} status={dt.status} start_date={""} id={dt.id} tags={[]} created_at={null} updated_at={null}/>
                                ))
                                :
                                    <></>
                            }
                        </div>
                    </div>
                </div>
                <AtomSeparator/>
            </>
        )
    } else {
        return <></>
    }
}

export default OrganismsUpcomingTask
