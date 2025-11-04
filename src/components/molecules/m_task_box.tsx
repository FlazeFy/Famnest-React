import React from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Participant {
    nickname: string
    role: string
}

interface MoleculesTaskBoxProps {
    title: string
    description?: string
    planAt: string
    participant: Participant[]
}

const MoleculesTaskBox: React.FC<MoleculesTaskBoxProps> = ({ title, description, planAt, participant }) => {
    const formatDate = (dateString: string, typeReturn: "day" | "hour"): string => {
        const date = new Date(dateString);
    
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
            });
        }
    
        throw new Error("Invalid typeReturn. Use 'day' or 'hour'")
    }

    const day = formatDate(planAt, "day")
    const hour = formatDate(planAt, "hour")
    
    return (
        <div className="relative bg-white w-full rounded-2xl mb-2.5 p-3 md:p-3.5 text-dark flex flex-wrap items-center justify-between">
            <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap items-center gap-x-2 text-center bg-primary px-2 py-1 rounded-xl min-w-[90px]">
                    <AtomText type="content" text={day} extraClass='font-bold'/>
                    <AtomText type="content" text={hour} />
                </div>
                <div>
                    <AtomText type="content-title" text={title} />
                    <AtomText type="content" text={description} />
                </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
                <AtomButton type="btn-danger" text={<FontAwesomeIcon icon={faTrash} height={15} width={15}/>}/>
                <AtomButton type="btn-success" text={<FontAwesomeIcon icon={faCheck} height={15} width={15} />}/>
            </div>
        </div>
    )
}

export default MoleculesTaskBox
