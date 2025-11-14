import { FamilyRecommendedTaskParticipant } from '@/helpers/variable';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { Badge } from '../ui/badge';
import { getAgeFromBornDate } from '@/helpers/math';

const MoleculesRecommendedFamilyMemberBox: React.FunctionComponent<FamilyRecommendedTaskParticipant> = ({fullname, gender, role, bornAt, taskTagHistory, matchedScore, averageTaskPerWeek, averageSleepTimePerWeek, averageEventPerWeek}) => {
    const age = getAgeFromBornDate(bornAt)

    return (
        <div className='border-2 rounded-xl p-3 w-full mb-2'>
            <div className='flex justify-between mb-2'>
                <div className='flex gap-2'>
                    <Badge className={gender === 'Female' ? 'bg-pink-400' : 'bg-blue-400'} style={{width:"40px", height:"40px"}}>
                        <FontAwesomeIcon icon={gender === 'Female' ? faVenus : faMars}/>
                    </Badge>   
                    <div>
                        <AtomText type='content' text={`<b>${fullname}</b>`}/>
                        <AtomText type='content' text={role} extraClass='text-secondary italic'/>
                    </div>
                </div>
                <div className='text-end'>
                    <AtomText type='content' text={`<b>Matched Score</b>`}/>
                    <Badge variant='outline' className={matchedScore > 75 ? 'bg-success' : matchedScore > 50 ? 'bg-warning' : 'bg-danger'}>{`${matchedScore} / 100`}</Badge>  
                </div>
            </div>
            <div className='flex flex-wrap gap-x-1'>
                <Badge variant='outline' className='bg-primary'>{age} y.o</Badge>  
                <Badge variant='outline' className='bg-primary'><b>{averageTaskPerWeek}</b> Task / Week</Badge>  
                <Badge variant='outline' className='bg-primary'><b>{averageEventPerWeek}</b> Event / Week</Badge>  
                <Badge variant='outline' className='bg-primary'><b>{averageSleepTimePerWeek}</b> Hrs of Sleep / Week</Badge>  
            </div>
            <hr className='my-2'/>
            {
                taskTagHistory ?
                    <>
                        <AtomText type='content' text={`<b>Tag History</b>`}/>
                        <div className='flex flex-wrap gap-x-1 mt-1'>
                            {
                                taskTagHistory.map((dt,idx) => <Badge variant='outline' key={idx}>#{dt.tagName} <b>({dt.total})</b></Badge>)
                            }
                        </div>
                    </>
                :
                    <AtomText type='content' text='Please select a tag first' extraClass='text-secondary italic'/>
            }
        </div>
    );
};

export default MoleculesRecommendedFamilyMemberBox;
