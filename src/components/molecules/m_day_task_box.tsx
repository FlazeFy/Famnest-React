import { TaskScheduleItem } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { Badge } from '../ui/badge';
import MoleculesNotFoundBox from './m_not_found_box';
import MoleculesTaskScheduleBox from './m_task_schedule_box';

interface IMoleculesDayTaskBoxProps {
    dayName: string
    taskItem: TaskScheduleItem[]
    addTaskScheduleDialog: React.ReactNode
}

const MoleculesDayTaskBox: React.FunctionComponent<IMoleculesDayTaskBoxProps> = ({dayName, taskItem, addTaskScheduleDialog}) => {
    const filteredTasks = taskItem.filter(item => item.taskDay === dayName)

    return (
        <div className='text-center bg-white rounded-2xl text-dark py-5 h-full w-full'>
            <AtomText type='content-title' text={dayName}/>
            <hr className='my-3 h-full'></hr>
            {
                filteredTasks.length > 0 ? (
                    <div className='mt-2 space-y-5'>
                        {
                            Object.entries(
                                filteredTasks.reduce((groups, task) => {
                                    if (!groups[task.startHour]) {
                                        groups[task.startHour] = []
                                    }
                                    groups[task.startHour].push(task)
                                    return groups
                                }, {} as Record<string, typeof filteredTasks>)
                            ).map(([time, tasks], idx) => (
                                <div key={idx}>
                                    <Badge variant='outline' className='bg-success px-3 py-1 font-bold'>{time}</Badge>

                                    <div className="space-y-3">
                                        {
                                            tasks.map((dt, i) => (
                                                <MoleculesTaskScheduleBox key={i} title={dt.title} description={dt.description} participant={dt.participant} taskDay={dt.taskDay} startHour={dt.startHour} endHour={dt.endHour}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <MoleculesNotFoundBox title="No schedule found" />
                )
            }
            <div className='mt-3'>{addTaskScheduleDialog}</div>
        </div>
    );
};

export default MoleculesDayTaskBox;
