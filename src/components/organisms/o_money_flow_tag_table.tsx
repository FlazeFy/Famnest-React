import * as React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import AtomText from '../atoms/a_text';
import { MoneyFlowTag } from '@/helpers/variable';
import { numberFormat } from '@/helpers/math';

interface IOrganismsMoneyFlowTagTableProps {
    listMoneyFlowTag: MoneyFlowTag[]
}

const OrganismsMoneyFlowTagTable: React.FunctionComponent<IOrganismsMoneyFlowTagTableProps> = ({listMoneyFlowTag}) => {
    return (
        <div className='flex flex-wrap'>
            <AtomText type='content-title' text="Tag History" extraClass='mb-2'/>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tag Name</TableHead>
                        <TableHead>Total Used</TableHead>
                        <TableHead>Spending</TableHead>
                        <TableHead>Income</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className='text-start'>
                    {
                        listMoneyFlowTag.map((dt, index) => (
                            <TableRow key={index}>
                                <TableCell>#{dt.tagName}</TableCell>
                                <TableCell>{dt.totalUsed}</TableCell>
                                <TableCell>
                                    <AtomText type='content' text='<b>Total</b>'/>
                                    <AtomText type='content' text={`Rp. ${numberFormat(dt.totalSpending,0,'.',',')}`}/>
                                    <AtomText type='content' text='<b>Average</b>'/>
                                    <AtomText type='content' text={`Rp. ${numberFormat(dt.averageSpending,0,'.',',')}`}/>
                                </TableCell>
                                <TableCell>
                                    <AtomText type='content' text='<b>Total</b>'/>
                                    <AtomText type='content' text={`Rp. ${numberFormat(dt.totalIncome,0,'.',',')}`}/>
                                    <AtomText type='content' text='<b>Average</b>'/>
                                    <AtomText type='content' text={`Rp. ${numberFormat(dt.averageIncome,0,'.',',')}`}/>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
};

export default OrganismsMoneyFlowTagTable;
