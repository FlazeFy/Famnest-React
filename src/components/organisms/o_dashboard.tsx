import { memberNeedAttentionItem, taskItem } from '@/helpers/dummy'
import Link from 'next/link'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import OrganismsEditSleepTimeDialog from './o_edit_sleep_time_dialog'
import OrganismsNeedAttentionDialog from './o_need_attention_dialog'
import OrganismsNextActivityDialog from './o_next_activity_dialog'

interface IOrganismsDashboardProps {
}

const OrganismsDashboard: React.FunctionComponent<IOrganismsDashboardProps> = (props) => {
    return (
        <div className='flex flex-wrap'>  
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox'>
                    <AtomText type='content' text='Task Progress'/>
                    <ul>
                        <li><b>2/4</b> Robert</li>
                        <li><b>3/5</b> Leo</li>
                        <li><b>2/4</b> Budi</li>
                    </ul>
                </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 p-1">
                <div className='dashbox'>
                    <AtomText type='content' text='Reminder'/>
                    <ul>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                        <li>Lorem ipsum</li>
                    </ul>
                </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                <OrganismsEditSleepTimeDialog/>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                <div className='dashbox'>
                    <AtomText type='content' text='Family Budget'/>
                    <AtomText type='content-title' text='Rp. 1.000K'/>
                </div>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                <Link href='/family/member'>
                    <div className='dashbox'>
                        <AtomText type='content' text='Family Member'/>
                        <AtomText type='content-title' text='3'/>
                    </div>
                </Link>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                <OrganismsNextActivityDialog title={taskItem[0].title} description={taskItem[0].description} dueDate={taskItem[0].dueDate} participant={taskItem[0].participant} isFinished={taskItem[0].isFinished} startDate={taskItem[0].startDate}/>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                <OrganismsNeedAttentionDialog familyNeededAttentionList={memberNeedAttentionItem}/>
            </div>
            <div className="w-full sm:w-full md:w-1/2 lg:w-1/3 p-1">
                <Link href='/family/meal'>
                    <div className='dashbox'>
                        <AtomText type='content' text='Next Meal'/>
                        <AtomText type='content-title' text='Meatball'/>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default OrganismsDashboard;
