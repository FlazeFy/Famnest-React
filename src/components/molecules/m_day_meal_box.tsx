import { MealItem } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import MoleculesMealBox from './m_meal_box';
import MoleculesNotFoundBox from './m_not_found_box';

interface IMoleculesDayMealBoxProps {
    dayName: string
    mealItem: MealItem[]
    dayLabelAndManageButton: (dayName: string, time: string) => React.ReactNode
}

const MoleculesDayMealBox: React.FunctionComponent<IMoleculesDayMealBoxProps> = ({dayName, mealItem, dayLabelAndManageButton}) => {
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
                            {dayLabelAndManageButton(dayName, time)}
                            <hr/>
                            {
                                meals.length > 0 ? (
                                    <div className='mt-2 space-y-3'>
                                        {
                                            meals.map((dt, idx) => <MoleculesMealBox key={idx} mealDay={dt.mealDay} mealName={dt.mealName} mealPrepareBy={dt.mealPrepareBy} mealTime={dt.mealTime} mealDesc={dt.mealDesc} deleteItemComponent={false}/>)
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
