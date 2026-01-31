import { FamilyRecommendedTaskParticipant } from '@/helpers/variable'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import MoleculesRecommendedFamilyMemberBox from '../molecules/m_recommended_family_member_box'

interface IOrganismsRecommendedFamilyMemberListProps {
    familyRecommendedTaskParticipant: FamilyRecommendedTaskParticipant[]
}

const OrganismsRecommendedFamilyMemberList: React.FunctionComponent<IOrganismsRecommendedFamilyMemberListProps> = ({familyRecommendedTaskParticipant}) => {
    return (
        <div className='flex flex-wrap'>
            <AtomText type='content-title' text="Recommended Participant" extraClass='mb-2'/>
            {
                familyRecommendedTaskParticipant.map((dt,idx) => (
                    <MoleculesRecommendedFamilyMemberBox key={idx} fullname={dt.fullname} gender={dt.gender} role={dt.role} bornAt={dt.bornAt} taskTagHistory={dt.taskTagHistory} matchedScore={dt.matchedScore} averageEventPerWeek={dt.averageEventPerWeek} averageSleepTimePerWeek={dt.averageSleepTimePerWeek} averageTaskPerWeek={dt.averageTaskPerWeek}/>
                ))
            }
        </div>
    )
}

export default OrganismsRecommendedFamilyMemberList;
