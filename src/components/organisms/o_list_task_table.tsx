"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import AtomText from '../atoms/a_text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog'
import AtomButton from '../atoms/a_button'
import OrganismsEditTaskDialog from './o_edit_task_dialog'
import { getAllTaskRepo, hardDeleteTaskRepo, TaskItem } from '@/repositories/r_task'
import { PaginationMeta } from '@/repositories/template'
import Skeleton from 'react-loading-skeleton'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import { consumeErrorAPI, loadingDialog } from '@/helpers/message'
import Swal from "sweetalert2"
import { convertUTCToLocal } from '@/helpers/converter'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface IOrganismsListTaskTableProps {}

const OrganismsListTaskTable: React.FunctionComponent<IOrganismsListTaskTableProps> = () => {
    // For retrive value from repo
    const [taskItem, setTaskItem] = useState<TaskItem[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [meta, setMeta] = useState<PaginationMeta>()
    // For state management
    const [search, setSearch] = useState<string>("")
    const [status, setStatus] = useState<string>("all")
    const page = 1

    useEffect(() => {
        fetchTask(page, null, 'all')
    }, [])

    const fetchTask = async (page: number, search: string | null, status: string | null) => {
        try {
            setError(null)
            const { data, meta } = await getAllTaskRepo(page, search, status)
            setTaskItem(data)
            setMeta(meta)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

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
    
            if (result.isConfirmed) fetchTask(page, null, 'all')
        } catch (err: any) {
            await consumeErrorAPI(err)
        } finally {
            Swal.close()
        }
    }    

    // Filter, search action
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => fetchTask(page, search.length > 0 ? search : null, status)
    const handleStatusChange = (value: string) => {
        setStatus(value)
        fetchTask(page, search.length > 0 ? search : null, value)
    }

    return (
        <div className='w-full'>
            <div className='flex mb-5 justify-end gap-2'>
                <div>
                    <AtomText type='content' text='Task Status'/>
                    <Select value={status} onValueChange={handleStatusChange}>
                        <SelectTrigger className="w-[200px] text-foreground">
                            <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="pending">Pending</SelectItem>
                            <SelectItem value="in_progress">In Progress</SelectItem>
                            <SelectItem value="completed">Completed</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <AtomText type='content' text='Search task'/>
                    <Input type="text" placeholder="Search task by title or description" value={search} onChange={(e) => setSearch(e.target.value)} onBlur={handleSearch} style={{minWidth:"340px"}}/>
                </div>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title & Description</TableHead>
                        <TableHead>Properties</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Participants</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='text-start'>
                    { 
                        loading && (
                            <TableRow>
                                <TableCell colSpan={6}>
                                    <Skeleton style={{ height: "400px" }} />
                                </TableCell>
                            </TableRow>
                        )
                    }
                    {
                        !loading && error && (
                            <TableRow>
                                <TableCell colSpan={6}>
                                    <MoleculesNotFoundBox title="No enough data to show" style={{ height: "400px" }}/>
                                </TableCell>
                            </TableRow>
                        )
                    }
                    {
                        !loading && !error && taskItem.map((dt, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <AtomText text={`<b>${dt.task_title}</b>`} type='content'/>
                                    <AtomText text={dt.task_desc} type='content'/>
                                </TableCell>
                                <TableCell>
                                    <AtomText text={`<b>Start Date</b>`} type='content'/>
                                    {
                                        dt.start_date ? convertUTCToLocal(dt.start_date) : <AtomText text='<i>- Start date has not been set yet -</i>' type='content'/>
                                    }
                                    <AtomText text={`<b>Due Date</b>`} type='content'/>
                                    {
                                        dt.due_date ? convertUTCToLocal(dt.due_date) : <AtomText text='<i>- Due date has not been set yet -</i>' type='content'/>
                                    }
                                </TableCell>
                                <TableCell>
                                    <Badge className={dt.status === 'in_progress' ? 'bg-warning' : dt.status === 'completed' ? 'bg-success' :'bg-danger'}>{dt.status}</Badge>
                                </TableCell>
                                <TableCell>
                                    <AtomText text='<b>Participant</b>' type='content'/>
                                    <div className="flex flex-wrap gap-2 my-1">
                                        {
                                            dt.task_assigns.map((ta, i) => (
                                                <Badge key={i} variant="outline">{ta.assignee.username} ({ta.assignee.role})</Badge>
                                            ))
                                        }
                                    </div>
                                    <AtomText text='<b>Tags</b>' type='content'/>
                                    <div className="flex flex-wrap gap-2 mt-1">
                                        {
                                            dt.tags ? dt.tags?.map((tag, i) => (
                                                <Badge key={i} variant="outline">#{tag}</Badge>
                                            )) 
                                            :
                                            <AtomText text='<i>- No Tags Attached -</i>' type='content'/>
                                        }
                                    </div>
                                </TableCell>
                                <TableCell className='flex gap-2'>
                                    <OrganismsEditTaskDialog task_title={dt.task_title} task_desc={dt.task_desc} start_date={dt.start_date} due_date={dt.due_date} status={dt.status} task_assigns={dt.task_assigns} tags={dt.tags} id={dt.id} created_at={dt.created_at} updated_at={dt.updated_at}/>
                                    <OrganismsConfirmationDeleteDialog context={`${dt.task_title} Task`} buttonTrigger={<AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15}/>}/>} action={() => handleDeleteTask(dt.id)}/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default OrganismsListTaskTable;


