import { MealItem } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import MoleculesNotFoundBox from './m_not_found_box';

interface IMoleculesDayMealBoxProps {
    dayName: string
    mealItem: MealItem[]
}

const MoleculesDayMealBox: React.FunctionComponent<IMoleculesDayMealBoxProps> = ({dayName, mealItem}) => {
    const filteredMeals = mealItem.filter(item => item.mealDay === dayName)
    const mealTimes = ["Breakfast", "Lunch", "Dinner"]

    return (
        <div className='text-center bg-white rounded-2xl text-dark py-5 h-full w-full'>
            <AtomText type='content-title' text={dayName}/>
            <hr className='my-3 h-full'></hr>
            {
                mealTimes.map(time => {
                    const meals = filteredMeals.filter(m => m.mealTime === time)
                    return (
                        <div key={time} className="mb-5 px-5">
                            <div className='chip bg-success' style={{ padding: "var(--spaceMini)", fontSize: "var(--textSM)", fontWeight: "bold" }}>{time}</div>
                            <hr/>
                            {
                                meals.length > 0 ? (
                                    <div className='mt-2 space-y-3'>
                                        {
                                            meals.map((meal, index) => (
                                                <div key={index}>
                                                    <AtomText type='content' text={`<b>${meal.mealName}</b>`} />
                                                        {meal.mealDesc && <p className='italic text-gray-500'>{meal.mealDesc}</p>}
                                                    <AtomText type='content' text={`Prepared by: ${meal.mealPrepareBy.join(', ')}`} extraClass="text-gray-400"/>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <MoleculesNotFoundBox title="No meal found" />
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    );
};

export default MoleculesDayMealBox;
