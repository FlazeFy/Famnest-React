"use client"
import * as React from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { Input } from '../ui/input'
import { faCheck, faHourglassStart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoleculesTaskBox from '../molecules/m_task_box'
import { useEffect, useState } from "react"
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog'
import Skeleton from 'react-loading-skeleton'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import { getIncomingTaskRepo, hardDeleteTaskRepo, TaskItem } from '@/repositories/r_task'
import { consumeErrorAPI, loadingDialog } from '@/helpers/message'
import Swal from "sweetalert2"

interface IOrganismsTaskListProps {}

const OrganismsTaskList: React.FunctionComponent<IOrganismsTaskListProps> = () => {
    const inProgress = 0
    const finished = 0

    const [taskItem, setTaskItem] = useState<TaskItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [page, setPage] = useState(1)

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
    useEffect(() => {
        fetchTask(page)
    }, [page])

    const handleDeleteTask = async (id: string) => {
        loadingDialog("Deleting task")

        try {
            const message = await hardDeleteTaskRepo(id)
    
            const result = await Swal.fire({
                title: "Success",
                text: message,
                icon: "success",
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
    
            if (result.isConfirmed) fetchTask(page)
        } catch (err: any) {
            await consumeErrorAPI(err)
        } finally {
            Swal.close()
        }
    } 

    return (
        <>
            <AtomText type="sub-title" text="Here's some task your family need to do" />
            <div className="flex flex-wrap w-full mt-5 gap-2">
                <AtomButton type='btn-primary' extraClass='border-2 border-white' text={<span className="flex gap-2"><FontAwesomeIcon icon={faCheck} height={20} width={20}/> {inProgress}</span>}/>
                <AtomButton type='btn-primary' extraClass='border-2 border-white' text={<span className="flex gap-2"><FontAwesomeIcon icon={faHourglassStart} height={20} width={20}/> {finished}</span>}/>
            </div>
            <div className='mt-5 items-end text-start'>
                { loading && <Skeleton style={{ height: "200px" }}/> }
                { (!loading && error) || (!loading && taskItem?.length === 0) && <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/> }
                {
                    !loading && !error && taskItem.map((dt, idx) => (
                        <MoleculesTaskBox key={idx} task_title={dt.task_title} task_desc={dt.task_desc} due_date={dt.due_date} status={dt.status} id={dt.id} start_date={dt.start_date} created_at={dt.created_at} updated_at={null} tags={dt.tags} task_assigns={dt.task_assigns}
                            deleteItemComponent={(title: string) => <OrganismsConfirmationDeleteDialog context={`${dt.task_title} Task`} buttonTrigger={<AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15} />} />} action={() => handleDeleteTask(dt.id)} />}/>
                    ))
                }
            </div>
        </>
    )
}

export default OrganismsTaskList;
