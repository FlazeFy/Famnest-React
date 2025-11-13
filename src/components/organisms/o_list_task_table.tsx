import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { TaskItem } from '@/helpers/variable';
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog';
import AtomButton from '../atoms/a_button';

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
                                <div className="flex flex-wrap gap-2">
                                    {
                                        dt.participant.map((p, i) => (
                                            <Badge key={i} variant="outline">{p.nickname} ({p.role})</Badge>
                                        ))
                                    }
                                </div>
                            </TableCell>
                            <TableCell>
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


