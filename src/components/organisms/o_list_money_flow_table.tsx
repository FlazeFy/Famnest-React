import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { MoneyFlowItem } from '@/helpers/variable';
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { numberFormat } from '@/helpers/math';
import MoleculesNotFoundBox from '../molecules/m_not_found_box';
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog';
import AtomButton from '../atoms/a_button';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface IOrganismsListMoneyFlowTableProps {
    listMoneyFlow: MoneyFlowItem[]
}

const OrganismsListMoneyFlowTable: React.FunctionComponent<IOrganismsListMoneyFlowTableProps> = ({listMoneyFlow}) => {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>Title & Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Tags</TableHead>
                    <TableHead>Properties</TableHead>
                    <TableHead>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className='text-start'>
                {
                    listMoneyFlow.map((dt, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <AtomText text={`<b>${dt.title}</b>`} type='content'/>
                                <AtomText text={dt.description} type='content'/>
                            </TableCell>
                            <TableCell>
                                <Badge className={dt.category === 'Spending' ? 'bg-danger':'bg-success'}>{dt.category}</Badge>
                            </TableCell>
                            <TableCell>Rp. {numberFormat(dt.amount,0,',','.')}</TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        dt.tags ? 
                                            dt.tags.map((tg, i) => (
                                                <Badge key={i} variant="outline">{tg}</Badge>
                                            ))
                                        :
                                            <MoleculesNotFoundBox title='No Tags Found'/>
                                    }
                                </div>
                            </TableCell>
                            <TableCell>
                                <AtomText text={`<b>Created By</b>`} type='content'/>
                                <AtomText text={dt.createdBy} type='content'/>
                                <AtomText text={`<b>Created At</b>`} type='content'/>
                                <AtomText text={dt.createdAt} type='content'/>
                            </TableCell>
                            <TableCell>
                                <OrganismsConfirmationDeleteDialog context={`${dt.title} Money Flow`} buttonTrigger={<AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15}/>}/>} url='/'/>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
};

export default OrganismsListMoneyFlowTable;


