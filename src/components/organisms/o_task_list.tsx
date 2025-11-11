import * as React from 'react';
import AtomButton from '../atoms/a_button';
import AtomText from '../atoms/a_text';
import { Input } from '../ui/input';
import { faCheck, faHourglassStart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoleculesTaskBox from '../molecules/m_task_box';
import { TaskItem } from '@/helpers/variable';


interface IOrganismsTaskListProps {
    taskItem: TaskItem[]
}

const OrganismsTaskList: React.FunctionComponent<IOrganismsTaskListProps> = ({ taskItem }) => {
    const inProgress = 0
    const finished = 0

    return (
        <>
            <AtomText type="sub-title" text="Here's some task your family need to do" />
            <div className="flex flex-wrap w-full mt-5">
                <div className="w-full md:w-1/2 flex mb-5 gap-2">
                    <AtomButton type='btn-primary' extraClass='border-2 border-white' text={<span className="flex gap-2"><FontAwesomeIcon icon={faCheck} height={20} width={20}/> {inProgress}</span>}/>
                    <AtomButton type='btn-primary' extraClass='border-2 border-white' text={<span className="flex gap-2"><FontAwesomeIcon icon={faHourglassStart} height={20} width={20}/> {finished}</span>}/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <Input type="text" placeholder="Search task..." />
                </div>
            </div>
            <div className='mt-5 items-end text-start'>
                {
                    taskItem.map((dt, idx) => (
                        <MoleculesTaskBox key={idx} title={dt.title} description={dt.description} dueDate={dt.dueDate} participant={dt.participant} isFinished={dt.isFinished}/>
                    ))
                }
            </div>
        </>
    )
};

export default OrganismsTaskList;
