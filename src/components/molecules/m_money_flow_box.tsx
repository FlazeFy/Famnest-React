import React from 'react'
import AtomButton from '../atoms/a_button'
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
                <div className='text-center'>
                    <div className={`${flow_category === 'spending' ? 'bg-danger' : 'bg-success'} px-2 py-1 rounded-xl w-[110px]`}>
                        <AtomText type="content" text={flow_category} extraClass='font-bold'/>
                    </div>
                    <AtomText type="content" text={`At ${day} ${hour}`}/>
                </div>
                <div>
                    <AtomText type="content-title" text={flow_context}/>
                    <AtomText type="content" text={flow_desc}/>
                </div>
            </div>           
            <div className="flex items-center gap-2 mt-2 md:mt-0">
                {
                    tags ? <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faHashtag} height={12} width={12}/>{tags?.length}</span>}/> : <></>
                }
                <AtomText type="content-title" text={`Rp. ${flow_amount.toLocaleString()}`}/>
            </div>
        </div>
    )
}

export default MoleculesMoneyFlowBox
