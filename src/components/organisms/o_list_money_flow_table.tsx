'use client'
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import AtomText from '../atoms/a_text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { numberFormat } from '@/helpers/math'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog'
import AtomButton from '../atoms/a_button'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
import { CashFlowItem, getAllCashFlowRepo } from '@/repositories/r_cash_flow'
import { PaginationMeta } from '@/repositories/template'
import { convertUTCToLocal } from '@/helpers/converter'

interface IOrganismsListMoneyFlowTableProps {}

const OrganismsListMoneyFlowTable: React.FunctionComponent<IOrganismsListMoneyFlowTableProps> = () => {
    // For fetching repo
    const [cashFlowItem, setCashFlowItem] = useState<CashFlowItem[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [meta, setMeta] = useState<PaginationMeta>()

    useEffect(() => {
        fetchCashFlow()
    }, [])

    const fetchCashFlow = async () => {
        try {
            const page = 1
            const { data, meta } = await getAllCashFlowRepo(page)
            setCashFlowItem(data)
            setMeta(meta)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

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
                    cashFlowItem.map((dt, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <AtomText text={`<b>${dt.flow_context}</b>`} type='content'/>
                                <AtomText text={dt.flow_desc} type='content'/>
                            </TableCell>
                            <TableCell>
                                <Badge className={dt.flow_category === 'spending' ? 'bg-danger':'bg-success'}>{dt.flow_category}</Badge>
                            </TableCell>
                            <TableCell>Rp. {dt.flow_amount.toLocaleString()}</TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    {
                                        dt.tags && dt.tags.length > 0 ? 
                                            dt.tags.map((tg, i) => (
                                                <Badge key={i} variant="outline">{tg}</Badge>
                                            ))
                                        :
                                            <AtomText text='- No tags attached -' type='no-content'/>
                                    }
                                </div>
                            </TableCell>
                            <TableCell>
                                <AtomText text={`<b>Created By</b>`} type='content'/>
                                <AtomText text={dt.user.fullname} type='content'/>
                                <AtomText text={`<b>Created At</b>`} type='content'/>
                                <AtomText text={convertUTCToLocal(dt.created_at)} type='content'/>
                            </TableCell>
                            <TableCell>
                                <OrganismsConfirmationDeleteDialog context={`${dt.flow_context} Cash Flow`} buttonTrigger={<AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15}/>}/>}/>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default OrganismsListMoneyFlowTable;


