import { MealItem } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';

interface IMoleculesLastMealBoxProps {
    mealScoring: React.ReactNode
}

const MoleculesLastMealBox: React.FunctionComponent<MealItem & IMoleculesLastMealBoxProps> = ({mealName, mealPrepareBy, mealScoring}) => {
    return (
        <div className='bg-white rounded-2xl shadow text-dark p-3 flex flex-wrap gap-2'>
            <div className='text-start'>
                <AtomText type='content' text={`<b>${mealName}</b>`} />
                <AtomText type='content' text={`Prepared by: ${mealPrepareBy.join(', ')}`} extraClass="text-gray-400"/>
                <AtomText type='content' text={`<b>Avg Score 4.5/5</b>`}/>
                {mealScoring}
            </div>
        </div>
    );
};

export default MoleculesLastMealBox;
