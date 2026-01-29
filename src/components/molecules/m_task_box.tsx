'use client'
import React, { useState } from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TaskItem } from '@/repositories/r_task';

interface IMoleculesTaskBoxProps {
    deleteItemComponent?: any
}

const MoleculesTaskBox: React.FC<TaskItem & IMoleculesTaskBoxProps> = ({ task_title, task_desc, due_date, status, deleteItemComponent }) => {
    const [day, setDay] = useState<string | null>(null)
    const [hour, setHour] = useState<string | null>(null)
    
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

    if (due_date) {
        setDay(formatDate(due_date, "day"))
        setHour(formatDate(due_date, "hour"))
    }
    
    return (
        <div className="taskbox">
            <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap items-center gap-x-2 text-center bg-primary px-2 py-1 rounded-xl min-w-[90px]">
                    <AtomText type="content" text={day} extraClass='font-bold'/>
                    <AtomText type="content" text={hour} />
                </div>
                <div>
                    <AtomText type="content-title" text={task_title} />
                    <AtomText type="content" text={task_desc} />
                </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
                { deleteItemComponent && deleteItemComponent(task_title) }
                { status !== 'completed' ? <AtomButton type="btn-success" text={<FontAwesomeIcon icon={faCheck} height={15} width={15} />}/> : <></> }
            </div>
        </div>
    )
}

export default MoleculesTaskBox
