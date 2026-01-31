import { MealItem } from '@/repositories/r_meal'
import * as React from 'react'
import AtomText from '../atoms/a_text'

interface IMoleculesMealBoxProps {
    isReadOnly?: boolean
    deleteItemComponent: any
    updateItemComponent: any
}

const MoleculesMealBox: React.FunctionComponent<MealItem & IMoleculesMealBoxProps> = ({meal_desc, meal_name, prepare_by, isReadOnly = true, deleteItemComponent, updateItemComponent}) => {
    return (
        <div className={`mealbox ${isReadOnly && 'readonly'}`}>
            <div>
                <AtomText type='content' text={`<b>${meal_name}</b>`} />
                    {meal_desc && <p className='italic text-gray-500'>{meal_desc}</p>}
                <AtomText type='content' text={`Prepared by: ${prepare_by}`} extraClass="text-gray-400"/>
            </div>
            {
                !isReadOnly ? (
                    <div className='flex gap-2'>
                        {updateItemComponent(meal_name, meal_desc, prepare_by)}
                        {deleteItemComponent(meal_name)}
                    </div>
                ) : <></>
            }
        </div>
    )
}

export default MoleculesMealBox;

