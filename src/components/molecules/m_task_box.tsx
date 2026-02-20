'use client'
import React, { useEffect, useState } from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { faCheck, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { TaskItem } from '@/repositories/r_task'

interface IMoleculesTaskBoxProps {
    deleteItemComponent?: any
}

const MoleculesTaskBox: React.FC<TaskItem & IMoleculesTaskBoxProps> = ({ task_title, task_desc, due_date, status, deleteItemComponent, start_date, task_assigns }) => {
    const [dueDay, setDueDay] = useState<string | null>(null)
    const [dueHour, setDueHour] = useState<string | null>(null)
    const [startDay, setStartDay] = useState<string | null>(null)
    const [startHour, setStartHour] = useState<string | null>(null)
    
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

    useEffect(() => {
        if (due_date && start_date) {
            setDueDay(formatDate(due_date, 'day'))
            setDueHour(formatDate(due_date, 'hour'))
            setStartDay(formatDate(start_date, 'day'))
            setStartHour(formatDate(start_date, 'hour'))
        }
    }, [due_date, start_date])
    
    return (
        <div className="taskbox">
            <div className="flex flex-wrap items-center gap-2">
                <div className="flex flex-wrap items-center gap-x-4 text-center bg-primary px-3 py-2 rounded-xl min-w-[90px]">
                    <div>
                        <AtomText type="content" text={startDay} extraClass='font-semibold'/>
                        <AtomText type="content" text={startHour}/>
                    </div>
                    <div>
                        <AtomText type="content" text={dueDay} extraClass='font-semibold'/>
                        <AtomText type="content" text={dueHour}/>
                    </div>
                </div>
                <div>
                    <AtomText type="content" text={task_title} extraClass='font-semibold'/>
                    <AtomText type="content" text={task_desc}/>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-2 md:mt-0">
                { task_assigns && task_assigns.length > 0 && <AtomButton type="btn-primary" text={<FontAwesomeIcon icon={faUsers} height={15} width={15} />}/> }
                { deleteItemComponent && deleteItemComponent(task_title) }
                { status !== 'completed' && <AtomButton type="btn-success" text={<FontAwesomeIcon icon={faCheck} height={15} width={15} />}/> }
            </div>
        </div>
    )
}

export default MoleculesTaskBox
