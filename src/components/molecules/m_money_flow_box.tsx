import React from 'react'
import AtomText from '../atoms/a_text'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CashFlowItem } from '@/repositories/r_cash_flow'

const MoleculesMoneyFlowBox: React.FC<CashFlowItem> = ({ flow_context, flow_amount, flow_category, flow_type, flow_desc, created_at, tags }) => {
    const formatDate = (dateString: string, typeReturn: "day" | "hour"): string => {
        const date = new Date(dateString)
    
        if (isNaN(date.getTime())) throw new Error("Invalid date string")
        if (typeReturn === "day") return date.toLocaleDateString("en-US", { weekday: "short" })
        if (typeReturn === "hour") {
            return date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            })
        }
    
        throw new Error("Invalid typeReturn. Use 'day' or 'hour'")
    }

    const day = formatDate(created_at, "day")
    const hour = formatDate(created_at, "hour")
    
    return (
        <div className="moneybox">
            <div className="flex flex-wrap items-center gap-2">
                <div className='text-center space-y-1'>
                    <div className={`${flow_category === 'spending' ? 'bg-danger' : 'bg-success'} rounded-xl capitalize`}>
                        <AtomText type="content" text={flow_category} extraClass='font-semibold'/>
                    </div>
                    <AtomText type="content" text={`At ${day} ${hour}`}/>
                </div>
                <div>
                    <AtomText type="content" extraClass='font-semibold' text={flow_context}/>
                    <AtomText type="content" text={flow_desc}/>
                </div>
            </div>           
            <div className="flex items-center gap-2 mt-2 space-x-3 md:mt-0">
                { tags && tags.length > 0 && <AtomText type="content" extraClass='font-bold' text={<><FontAwesomeIcon icon={faHashtag}/>{tags?.length}</>}/> }
                <AtomText type="content" extraClass='font-bold' text={`Rp. ${(flow_amount / 1000).toLocaleString()}K`}/>
            </div>
        </div>
    )
}

export default MoleculesMoneyFlowBox
