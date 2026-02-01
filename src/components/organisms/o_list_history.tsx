'use client'
import { consumeErrorAPI, loadingDialog } from '@/helpers/message'
import { getAllHistory, hardDeleteHistoryRepo, HistoryItem } from '@/repositories/r_history'
import { PaginationMeta } from '@/repositories/template'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import AtomText from '../atoms/a_text'
import MoleculesHistoryBox from '../molecules/m_history_box'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import Swal from "sweetalert2"
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog'
import AtomButton from '../atoms/a_button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

interface IOrganismsHistoryProps {}

export const OrganismsHistory: React.FunctionComponent<IOrganismsHistoryProps> = () => {
    // For fetching repo
    const [historyItem, setHistoryItem] = useState<HistoryItem[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    const [meta, setMeta] = useState<PaginationMeta>()

    useEffect(() => {
        fetchHistory()
    }, [])

    const fetchHistory = async () => {
        try {
            const page = 1
            const { data, meta } = await getAllHistory(page)
            setHistoryItem(data)
            setMeta(meta)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteHistory = async (id: string) => {
        loadingDialog("Deleting history")

        try {
            const message = await hardDeleteHistoryRepo(id)
    
            const result = await Swal.fire({
                title: "Success",
                text: message,
                icon: "success",
                allowOutsideClick: false,
                allowEscapeKey: false,
            })
    
            if (result.isConfirmed) fetchHistory()
        } catch (err: any) {
            await consumeErrorAPI(err)
        } finally {
            Swal.close()
        }
    }

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

    return (
        <div className='shadow-lg rounded-2xl p-10'>
            <AtomText type='sub-title' text='History'/>
            <hr className='my-5'/>
            {
                historyItem.map((dt, idx) => 
                    <MoleculesHistoryBox key={idx} id={dt.id} history_context={dt.history_context} history_type={dt.history_type} created_at={dt.created_at} deleteButton={
                        <OrganismsConfirmationDeleteDialog context='History' buttonTrigger={
                            <AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash} height={15}/>}/>
                        } action={() => handleDeleteHistory(dt.id)}/>
                    }/>
                )
            }
        </div>
    )
}
