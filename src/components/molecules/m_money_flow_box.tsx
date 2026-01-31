import React from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { numberFormat } from '@/helpers/math'

interface MoleculesMoneyFlowBoxProps {
    title: string
    description?: string
    category: string
    amount: number
    tags?: string[]
    createdAt: string
    createdBy: string
}

const MoleculesMoneyFlowBox: React.FC<MoleculesMoneyFlowBoxProps> = ({ title, description, category, amount, tags, createdAt, createdBy }) => {
    const formatDate = (dateString: string, typeReturn: "day" | "hour"): string => {
        const date = new Date(dateString)
    
        if (isNaN(date.getTime())) {
            throw new Error("Invalid date string")
        }
    
        if (typeReturn === "day") {
            return date.toLocaleDateString("en-US", { weekday: "short" })
        }
    
        if (typeReturn === "hour") {
            return date.toLocaleTimeString("en-US", {
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            })
        }
    
        throw new Error("Invalid typeReturn. Use 'day' or 'hour'")
    }

    const day = formatDate(createdAt, "day")
    const hour = formatDate(createdAt, "hour")
    
    return (
        <div className="moneybox">
            <div className="flex flex-wrap items-center gap-2">
                <div className='text-center'>
                    <div className={`${category === 'Spending' ? 'bg-danger' : 'bg-success'} px-2 py-1 rounded-xl w-[110px]`}>
                        <AtomText type="content" text={category} extraClass='font-bold'/>
                    </div>
                    <AtomText type="content" text={`At ${day} ${hour}`}/>
                </div>
                <div>
                    <AtomText type="content-title" text={title} />
                    <AtomText type="content" text={description} />
                </div>
            </div>           
            <div className="flex items-center gap-2 mt-2 md:mt-0">
                {
                    tags ? <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faHashtag} height={12} width={12}/>{tags?.length}</span>}/> : <></>
                }
                <AtomText type="content-title" text={`Rp. ${numberFormat(amount,0,',','.')}`}/>
            </div>
        </div>
    )
}

export default MoleculesMoneyFlowBox
