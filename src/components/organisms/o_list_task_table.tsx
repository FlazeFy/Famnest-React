import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TaskItem } from '@/helpers/variable';
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog';
import AtomButton from '../atoms/a_button';
import OrganismsEditTaskDialog from './o_edit_task_dialog';

interface IOrganismsListTaskTableProps {
    listTask: TaskItem[]
}

const OrganismsListTaskTable: React.FunctionComponent<IOrganismsListTaskTableProps> = ({listTask}) => {
    return (
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
                    listTask.map((dt, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <AtomText text={`<b>${dt.title}</b>`} type='content'/>
                                <AtomText text={dt.description} type='content'/>
                            </TableCell>
                            <TableCell>
                                <AtomText text={`<b>Start Date</b>`} type='content'/>
                                {
                                    new Date(dt.startDate).toLocaleString("en-US", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }
                                <AtomText text={`<b>Due Date</b>`} type='content'/>
                                {
                                    new Date(dt.dueDate).toLocaleString("en-US", {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric",
                                        hour: "2-digit",
                                        minute: "2-digit",
                                    })
                                }
                            </TableCell>
                            <TableCell>
                                <Badge className={dt.isFinished ? 'bg-success':'bg-danger'}>
                                    {dt.isFinished ? "Finished" : "Pending"}
                                </Badge>
                            </TableCell>
                            <TableCell>
                                <AtomText text='<b>Participant</b>' type='content'/>
                                <div className="flex flex-wrap gap-2 my-1">
                                    {
                                        dt.participant.map((p, i) => (
                                            <Badge key={i} variant="outline">{p.nickname} ({p.role})</Badge>
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
                                <OrganismsEditTaskDialog title={dt.title} description={dt.description} startDate={dt.startDate} dueDate={dt.dueDate} isFinished={dt.isFinished} participant={dt.participant} tags={dt.tags}/>
                                <OrganismsConfirmationDeleteDialog context={`${dt.title} Task`} buttonTrigger={<AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15}/>}/>} url='/'/>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
};

export default OrganismsListTaskTable;


