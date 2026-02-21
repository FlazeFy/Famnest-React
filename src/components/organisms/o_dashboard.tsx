'use client'
import { memberNeedAttentionItem, taskItem } from '@/helpers/dummy'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import AtomText from '../atoms/a_text'
import OrganismsEditSleepTimeDialog from './o_edit_sleep_time_dialog'
import OrganismsNeedAttentionDialog from './o_need_attention_dialog'
import OrganismsNextActivityDialog from './o_next_activity_dialog'
import { FamilyDashboardStats, getFamilyDashboardRepo } from '@/repositories/r_stats'
import Skeleton from 'react-loading-skeleton'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from '../ui/badge'
import { convertUTCToLocal } from '@/helpers/converter'
import { AtomSeparator } from '../atoms/a_separator'

interface IOrganismsDashboardProps {}

const OrganismsDashboard: React.FunctionComponent<IOrganismsDashboardProps> = (props) => {
    const [dashboardItem, setDashboardItem] = useState<FamilyDashboardStats>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchFamilyDashboardRepo = async () => {
            try {
                const data = await getFamilyDashboardRepo()
                setDashboardItem(data)
            } catch (err: any) {
                setError(err?.response?.data?.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchFamilyDashboardRepo()
    }, [])

    if (!dashboardItem) return <MoleculesNotFoundBox title="Something went wrong" style={{height:"400px"}}/>

    return (
        <div className='flex flex-wrap'>  
            <div className="w-full md:w-full lg:w-1/2 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error &&
                        <div className='dashbox'>
                            <AtomText type='content' text='Task Progress'/>
                            <Table className='text-xs text-center'>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Member</TableHead>
                                        <TableHead>Pending</TableHead>
                                        <TableHead>In-Progress</TableHead>
                                        <TableHead>Completed</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    { 
                                        dashboardItem.task_progress.length > 0 ?
                                            dashboardItem.task_progress.map((dt, idx) => (
                                                <TableRow key={idx}>
                                                    <TableCell>{dt.username}</TableCell>
                                                    <TableCell>{dt.pending}</TableCell>
                                                    <TableCell>{dt.in_progress}</TableCell>
                                                    <TableCell>{dt.completed}</TableCell>
                                                </TableRow>
                                            ))
                                        :
                                            <TableRow>
                                                <TableCell colSpan={4} className='italic'>No data to show</TableCell>
                                            </TableRow>
                                    }
                                </TableBody>
                            </Table>
                        </div>
                }
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error &&
                        <div className='dashbox'>
                            <AtomText type='content' text='Next Event' extraClass='mb-2'/>
                            {
                                dashboardItem.next_event.map((dt, idx) => (
                                    <div className='text-sm mb-2'>
                                        <Badge className='capitalize mr-1'>{dt.event_category}</Badge><b>{dt.event_title}</b> from {convertUTCToLocal(dt.event_start_time)} until {convertUTCToLocal(dt.event_end_time)}
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                { !loading && !error && <OrganismsEditSleepTimeDialog hour_end={dashboardItem.family_sleep_time?.hour_end ?? null} hour_start={dashboardItem.family_sleep_time?.hour_start ?? null}/> }
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error &&
                        <div className='dashbox'>
                            <AtomText type='content' text='Family Budget'/>
                            <AtomText type='content-title' text={`Rp. ${dashboardItem?.family_assets.total_assets ? (dashboardItem?.family_assets.total_assets / 1000 ).toLocaleString() : 0}K`}/>
                        </div>
                }
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error &&
                        <Link href='/family/member'>
                            <div className='dashbox'>
                                <AtomText type='content' text='Family Member'/>
                                <AtomText type='content-title' text={dashboardItem?.total_family_member}/>
                            </div>
                        </Link>
                }
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error && <OrganismsNextActivityDialog items={dashboardItem?.next_schedule}/>
                }
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error && <OrganismsNeedAttentionDialog familyNeededAttentionList={memberNeedAttentionItem}/>
                }
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                { loading && <Skeleton style={{ height: "140px" }}/> }
                {
                    !loading && !error &&
                        <Link href='/family/meal'>
                            <div className='dashbox'>
                                <AtomText type='content' text='Next Meal'/>
                                <AtomText type='content-title' text={dashboardItem?.next_meal ? dashboardItem?.next_meal?.map(dt => dt.meal_name).join(', ') : '-'}/>
                            </div>
                        </Link>
                }
            </div>
        </div>
    )
}

export default OrganismsDashboard;
