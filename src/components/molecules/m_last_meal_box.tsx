import { MealItem } from '@/helpers/variable';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import AtomButton from '../atoms/a_button';
import AtomText from '../atoms/a_text';
import { Button } from '../ui/button';

const MoleculesLastMealBox: React.FunctionComponent<MealItem> = ({mealName, mealPrepareBy}) => {
    return (
        <div className='bg-white rounded-2xl shadow text-dark p-3 flex flex-wrap gap-2'>
            <div className='text-start'>
                <AtomText type='content' text={`<b>${mealName}</b>`} />
                <AtomText type='content' text={`Prepared by: ${mealPrepareBy.join(', ')}`} extraClass="text-gray-400"/>
                <AtomText type='content' text={`<b>Avg Score 4.5/5</b>`}/>
                <Button className='mt-2 bg-success'><FontAwesomeIcon icon={faThumbsUp}/> Give Score</Button>
            </div>
        </div>
    );
};

export default MoleculesLastMealBox;
