import { calculateAgeYearsMonths } from '@/helpers/math'
import * as React from 'react'
import AtomText from '../atoms/a_text'
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FamilyMemberItem } from '@/repositories/r_family_member'
import { convertUTCToLocalDateInput } from '@/helpers/converter'

const MoleculesFamilyMemberBox: React.FunctionComponent<FamilyMemberItem> = ({ id, family_relation, user }) => {
    return (
        <div className='familymemberbox'>
            <img src={user.profile_image ?? '/mock/no_pic.png'} alt={user.profile_image ?? '/mock/no_pic.png'} className='w-20 h-20 rounded-full object-cover -mt-15 border-4 border-white shadow-md mx-auto bg-white'/>
            <AtomText type='content-title' text={user.fullname}/>
            <AtomText type='content' text={family_relation}/>
            <div className='flex flex-wrap mx-auto gap-2 mt-3'>
                <div className='chip bg-primary'>
                    <AtomText type='content' text={`Born at ${convertUTCToLocalDateInput(user.born_at)}`}/>
                </div>
                <div className='chip bg-primary'>
                    <AtomText type='content' text={calculateAgeYearsMonths(user.born_at)}/>
                </div>
                <div className={`chip ${user.gender === 'Female' ? 'bg-pink-400' : 'bg-blue-400'}`}>
                    <FontAwesomeIcon icon={user.gender === 'Female' ? faVenus : faMars} height={20} width={20}/>
                </div>
            </div>
        </div>
    )
}

export default MoleculesFamilyMemberBox;
