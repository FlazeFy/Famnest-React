import { MealItem } from '@/helpers/variable'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import MoleculesLastMealBox from '../molecules/m_last_meal_box'
import OrganismsMealScoring from './o_meal_scoring_dialog'

interface IOrganismsLastMealBoxProps {
    mealItem: MealItem[]
}

const OrganismsLastMealBox: React.FunctionComponent<IOrganismsLastMealBoxProps> = ({mealItem}) => {
    return (
        <div>
            <AtomText type="content-title" text="How did your last meal taste?" extraClass='mb-1'/>
            <div className="grid grid-cols-12 gap-2">
            {
                mealItem.map((dt,idx) => (
                    <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4">
                        <MoleculesLastMealBox key={idx} mealName={dt.mealName} mealPrepareBy={dt.mealPrepareBy} mealTime={''} mealDay={''} mealScoring={<OrganismsMealScoring/>}/>
                    </div>
                ))
            }
            </div>
        </div>
    )                        

}

export default OrganismsLastMealBox;
