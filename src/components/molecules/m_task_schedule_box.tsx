import * as React from 'react';
import AtomText from '../atoms/a_text';
import { TaskScheduleItem } from '@/helpers/variable';
import AtomButton from '../atoms/a_button';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IMoleculesTaskScheduleBoxProps {
    isReadOnly?: boolean
}

const MoleculesTaskScheduleBox: React.FunctionComponent<TaskScheduleItem & IMoleculesTaskScheduleBoxProps> = ({description, title, participant, isReadOnly = true, startHour, endHour}) => {
    return (
        <div className={`mealbox ${isReadOnly && 'readonly'}`} style={{marginBottom:"15px", padding:"5px"}}>
            <div>
                <AtomText type='content' text={`<b>${title}</b>`} />
                    {description && <p className='italic text-gray-500'>{description}</p>}
                <AtomText type='content' text={`Participatet: ${participant.map(p => p.nickname).join(', ')}`} extraClass="text-gray-400"/>
            </div>
            {
                !isReadOnly ? (
                    <div className='flex gap-2'>
                        <AtomButton type='btn-warning' text={<FontAwesomeIcon icon={faPenToSquare}/>}/>
                    </div>
                ) : <></>
            }
        </div>
    );
};

export default MoleculesTaskScheduleBox;

