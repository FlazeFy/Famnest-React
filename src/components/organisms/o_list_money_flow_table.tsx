'use client'
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import AtomText from '../atoms/a_text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog'
import AtomButton from '../atoms/a_button'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import Skeleton from 'react-loading-skeleton'
import { CashFlowItem, getAllCashFlowRepo, hardDeleteCashFlowRepo } from '@/repositories/r_cash_flow'
import { PaginationMeta } from '@/repositories/template'
import { convertUTCToLocal } from '@/helpers/converter'
import { consumeErrorAPI, loadingDialog } from '@/helpers/message'
import Swal from "sweetalert2"
import useAuthStore from '@/store/s_auth'
import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface IOrganismsListMoneyFlowTableProps {}

const OrganismsListMoneyFlowTable: React.FunctionComponent<IOrganismsListMoneyFlowTableProps> = () => {
    // For retrive value from repo
    const [cashFlowItem, setCashFlowItem] = useState<CashFlowItem[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [meta, setMeta] = useState<PaginationMeta>()
    // For checking the owner
    const { name } = useAuthStore()
    // For state management
    const [search, setSearch] = useState<string>("")
    const [category, setCategory] = useState<string>("all")
    const [type, setType] = useState<string>("all")
    const page = 1

    useEffect(() => {
        fetchCashFlow(page, null, 'all', 'all')
    }, [])

    const fetchCashFlow = async (page: number, search: string | null, category: string | null, type: string | null) => {
        try {
            setError(null)
            const { data, meta } = await getAllCashFlowRepo(page, search, category, type)
            setCashFlowItem(data)
            setMeta(meta)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteCashFlow = async (id: string) => {
        loadingDialog("Deleting cash flow")

        try {
            const message = await hardDeleteCashFlowRepo(id)
    
            const result = await Swal.fire({
                title: "Success",
                text: message,
                icon: "success",
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
    
            if (result.isConfirmed) fetchCashFlow(page, null, 'all', 'all')
        } catch (err: any) {
            await consumeErrorAPI(err)
        } finally {
            Swal.close()
        }
    }    

    // Filter, search action
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => fetchCashFlow(page, search.length > 0 ? search : null, category, type)
    const handleCategoryChange = (value: string) => {
        setCategory(value)
        fetchCashFlow(page, search.length > 0 ? search : null, value, type)
    }
    const handleTypeChange = (value: string) => {
        setType(value)
        fetchCashFlow(page, search.length > 0 ? search : null, category, value)
    }

    return (
        <div className='w-full'>
            <div className='flex mb-5 justify-end gap-2'>
                <div>
                    <AtomText type='content' text='Cash Flow Type'/>
                    <Select value={category} onValueChange={handleCategoryChange}>
                        <SelectTrigger className="w-[200px] text-foreground">
                            <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="income">Income</SelectItem>
                            <SelectItem value="spending">Spending</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <AtomText type='content' text='Cash Flow Category'/>
                    <Select value={type} onValueChange={handleTypeChange}>
                        <SelectTrigger className="w-[200px] text-foreground">
                            <SelectValue placeholder="Select type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All</SelectItem>
                            <SelectItem value="personal">Personal</SelectItem>
                            <SelectItem value="shared">Shared (Family)</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <AtomText type='content' text='Search cash flow'/>
                    <Input type="text" placeholder="Search cash flow by title or description" value={search} onChange={(e) => setSearch(e.target.value)} onBlur={handleSearch} style={{minWidth:"340px"}}/>
                </div>
            </div>
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
                        !loading && !error && cashFlowItem.map((dt, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <div className='flex gap-2'>
                                        { dt.flow_type === 'shared' ? <Badge variant='default'>Family</Badge> : <></> }
                                        <AtomText text={`<b>${dt.flow_context}</b>`} type='content'/>
                                    </div>
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
                                                dt.tags.map((tg, i) => <Badge key={i} variant="outline">#{tg}</Badge> )
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
                                    {
                                        dt.user.username === name && <OrganismsConfirmationDeleteDialog context={`${dt.flow_context} Cash Flow`} buttonTrigger={
                                            <AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15}/>}/>
                                        } action={() => handleDeleteCashFlow(dt.id)}/>
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default OrganismsListMoneyFlowTable;


