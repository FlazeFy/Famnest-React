import { getAgeFromBornDate } from '@/helpers/math';
import { FamilyMemberShortInfo } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoleculesFamilyMemberBox: React.FunctionComponent<FamilyMemberShortInfo> = ({ fullname, gender, nickname, profilePic, bornAt }) => {
    return (
        <div className='familymemberbox'>
            <img src={profilePic ?? '/mock/no_pic.png'} alt={profilePic ?? '/mock/no_pic.png'} className='w-20 h-20 rounded-full object-cover -mt-15 border-4 border-white shadow-md mx-auto bg-white'/>
            <AtomText type='content-title' text={fullname}/>
            <AtomText type='content' text={nickname}/>
            <div className='flex flex-wrap mx-auto gap-2 mt-3'>
                <div className='chip bg-primary'>
                    <AtomText type='content' text={`Born at ${bornAt}`}/>
                </div>
                <div className='chip bg-primary'>
                    <AtomText type='content' text={`${getAgeFromBornDate(bornAt)} y.o`}/>
                </div>
                <div className={`chip ${gender === 'Female' ? 'bg-pink-400' : 'bg-blue-400'}`}>
                    <FontAwesomeIcon icon={gender === 'Female' ? faVenus : faMars} height={20} width={20}/>
                </div>
            </div>
        </div>
    );
};

export default MoleculesFamilyMemberBox;
