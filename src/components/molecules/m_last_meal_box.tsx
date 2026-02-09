import { MealItem } from '@/repositories/r_meal'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import { LastMealFeedbackItem } from '@/repositories/r_meal_feedback'

interface IMoleculesLastMealBoxProps {
    mealScoring: React.ReactNode
}

const MoleculesLastMealBox: React.FunctionComponent<LastMealFeedbackItem & IMoleculesLastMealBoxProps> = ({meal_name, prepare_by, avg_meal_rate, mealScoring}) => {
    return (
        <div className='bg-white rounded-2xl shadow text-dark p-3 flex flex-wrap gap-2'>
            <div className='text-start'>
                <AtomText type='content' text={`<b>${meal_name}</b>`} />
                <AtomText type='content' text={`Prepared by: ${prepare_by}`} extraClass="text-gray-400"/>
                <AtomText type='content' text={`<b>Avg Score ${avg_meal_rate}/5</b>`}/>
                {mealScoring}
            </div>
        </div>
    )
}

export default MoleculesLastMealBox;
