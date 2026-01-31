import { MealItem } from '@/repositories/r_meal'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import MoleculesMealBox from './m_meal_box'
import MoleculesNotFoundBox from './m_not_found_box'

interface IMoleculesDayMealBoxProps {
    dayName: string
    mealItem: MealItem[]
    dayLabelAndManageButton: (dayName: string, time: string) => React.ReactNode
}

const MoleculesDayMealBox: React.FunctionComponent<IMoleculesDayMealBoxProps> = ({dayName, mealItem, dayLabelAndManageButton}) => {
    const filteredMeals = mealItem.filter(item => item.meal_day === dayName)
    const mealTimes = ["breakfast", "lunch", "dinner"]

    return (
        <div className='text-center bg-white rounded-2xl text-dark py-5 h-full w-full'>
            <AtomText type='content-title' text={dayName}/>
            <hr className='my-3 h-full'></hr>
            {
                mealTimes.map(time => {
                    const meals = filteredMeals.filter(m => m.meal_time === time)
                    return (
                        <div key={time} className="mb-5 px-5">
                            {dayLabelAndManageButton(dayName, time)}
                            <hr/>
                            {
                                meals.length > 0 ? (
                                    <div className='mt-2 space-y-3'>
                                        {
                                            meals.map((dt, idx) => <MoleculesMealBox key={idx} id={dt.id} meal_day={dt.meal_day} meal_name={dt.meal_name} prepare_by={dt.prepare_by} meal_time={dt.meal_time} meal_desc={dt.meal_desc} deleteItemComponent={false} updateItemComponent={undefined}/>)
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
    )
}

export default MoleculesDayMealBox;
