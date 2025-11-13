import * as React from 'react';
import AtomText from '../atoms/a_text';
import { MealItem } from '@/helpers/variable';
import AtomButton from '../atoms/a_button';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IMoleculesMealBoxProps {
    isReadOnly?: boolean
    deleteItemComponent: any
}

const MoleculesMealBox: React.FunctionComponent<MealItem & IMoleculesMealBoxProps> = ({mealDesc, mealName, mealPrepareBy, isReadOnly = true, deleteItemComponent}) => {
    return (
        <div className={`mealbox ${isReadOnly && 'readonly'}`}>
            <div>
                <AtomText type='content' text={`<b>${mealName}</b>`} />
                    {mealDesc && <p className='italic text-gray-500'>{mealDesc}</p>}
                <AtomText type='content' text={`Prepared by: ${mealPrepareBy.join(', ')}`} extraClass="text-gray-400"/>
            </div>
            {
                !isReadOnly ? (
                    <div className='flex gap-2'>
                        <AtomButton type='btn-warning' text={<FontAwesomeIcon icon={faPenToSquare}/>}/>
                        {deleteItemComponent(mealName)}
                    </div>
                ) : <></>
            }
        </div>
    );
};

export default MoleculesMealBox;

