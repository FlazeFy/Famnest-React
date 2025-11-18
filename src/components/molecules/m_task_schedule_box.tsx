import * as React from 'react';
import AtomText from '../atoms/a_text';
import { TaskScheduleItem } from '@/helpers/variable';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../ui/button';
import OrganismsConfirmationDeleteDialog from '../organisms/o_confirmation_delete_dialog';

interface IMoleculesTaskScheduleBoxProps {
    editTaskScheduleDialog: React.ReactNode
}

const MoleculesTaskScheduleBox: React.FunctionComponent<TaskScheduleItem & IMoleculesTaskScheduleBoxProps> = ({description, title, participant, startHour, endHour}) => {
    return (
        <div className='mealbox cursor-pointer hover:bg-gray-50 transform hover:scale-[1.05] hover:shadow-xl group flex-wrap' style={{marginBottom:"15px", padding:"5px"}}>
            <div>
                <AtomText type='content' text={`<b>${title}</b>`} />
                    {description && <p className='italic text-gray-500'>{description}</p>}
                <AtomText type='content' text={`Participatet: ${participant.map(p => p.nickname).join(', ')}`} extraClass="text-gray-400"/>
            </div>
            <div className='gap-2 m-2 hidden opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300'>
                <OrganismsConfirmationDeleteDialog context={`task schedule ${title}`} url='/' buttonTrigger={<Button className='bg-danger px-0'><FontAwesomeIcon icon={faTrash}/></Button>}/>
            </div>
        </div>
    );
};

export default MoleculesTaskScheduleBox;

