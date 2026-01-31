import { FamilyRecommendedMealPrepared } from '@/helpers/variable'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import MoleculesRecommendedFamilyMemberMealPrepBox from '../molecules/m_recommended_family_member_meal_prep_box'

interface IOrganismsRecommendedFamilyMemberMealPrepListProps {
    familyRecommendedMealPrep: FamilyRecommendedMealPrepared[]
}

const OrganismsRecommendedFamilyMemberMealPrepList: React.FunctionComponent<IOrganismsRecommendedFamilyMemberMealPrepListProps> = ({familyRecommendedMealPrep}) => {
    return (
        <div className='flex flex-wrap'>
            <AtomText type='content-title' text="Recommended Meal Prepared" extraClass='mb-2'/>
            <div className='overflow-y-auto max-h-[60vh]'>
                {
                    familyRecommendedMealPrep.map((dt,idx) => (
                        <MoleculesRecommendedFamilyMemberMealPrepBox key={idx} fullname={dt.fullname} gender={dt.gender} role={dt.role} listAssignedMeal={dt.listAssignedMeal} listAssignedDayTime={dt.listAssignedDayTime} averageScore={dt.averageScore} bornAt={dt.bornAt} totalMealPrep={dt.totalMealPrep}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsRecommendedFamilyMemberMealPrepList;
