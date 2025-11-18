import { getAgeFromBornDate } from '@/helpers/math';
import { FamilyRecommendedMealPrepared } from '@/helpers/variable';
import { faMars, faVenus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { Badge } from '../ui/badge';


const MoleculesRecommendedFamilyMemberMealPrepBox: React.FunctionComponent<FamilyRecommendedMealPrepared> = ({fullname, gender, role, listAssignedMeal, listAssignedDayTime, averageScore, bornAt, totalMealPrep}) => {
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
                    <AtomText type='content' text={`<b>Average Score</b>`}/>
                    <Badge variant='outline' className={averageScore > 4 ? 'bg-success' : averageScore > 3 ? 'bg-warning' : 'bg-danger'}>{`${averageScore} / 5`}</Badge>  
                </div>
            </div>
            <div className='flex flex-wrap gap-x-1'>
                <Badge variant='outline' className='bg-primary'>{age} y.o</Badge>  
                <Badge variant='outline' className='bg-primary'><b>{totalMealPrep}</b> Meal Served</Badge>
            </div>
            <hr className='my-2'/>
            <AtomText type='content' text='<b>Meal History</b>'/>
            {
                listAssignedMeal ?
                    <>
                        <div className='flex flex-wrap gap-x-1 mt-1'>
                            {
                                listAssignedMeal.map((dt,idx) => <Badge variant='outline' key={idx}>{dt}</Badge>)
                            }
                        </div>
                    </>
                :
                    <AtomText type='content' text='This person never serve a meal' extraClass='text-secondary italic'/>
            }
            <hr className='my-2'/>
            <AtomText type='content' text='<b>Active Meal Schedule</b>'/>
            {
                listAssignedDayTime ?
                    <>
                        <div className='flex flex-wrap gap-x-1 mt-1'>
                            {
                                listAssignedDayTime.map((dt,idx) => <Badge variant='outline' key={idx}>{dt.day} - {dt.time}</Badge>)
                            }
                        </div>
                    </>
                :
                    <AtomText type='content' text='This person never serve a meal' extraClass='text-secondary italic'/>
            }
        </div>
    );
};

export default MoleculesRecommendedFamilyMemberMealPrepBox;
