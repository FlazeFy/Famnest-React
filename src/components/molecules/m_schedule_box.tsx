
import React from 'react'
import AtomText from '../atoms/a_text'
import { ScheduleItem } from '@/repositories/r_stats'

const MoleculesScheduleBox: React.FC<ScheduleItem> = ({ schedule_title, schedule_category, day, time_start, time_end,status }) => {
    return (
        <div className="schedulebox">
            <div className="text-center bg-primary px-3 py-2 rounded-xl">
                <div>
                    <AtomText type="content" text={`Every ${day}`} extraClass='font-semibold capitalize'/>
                    <AtomText type="content" text={`${time_start} - ${time_end}`}/>
                </div>
            </div>
            <div>
                <AtomText type="content" text={schedule_title} extraClass='font-semibold'/>
                <AtomText type="content" text={schedule_category}/>
            </div>
        </div>
    )
}

export default MoleculesScheduleBox
