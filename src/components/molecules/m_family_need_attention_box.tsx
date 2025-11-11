import { getAgeFromBornDate } from '@/helpers/math';
import { FamilyNeededAttention } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { faVenus, faMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoleculesFamilyNeedAttentionBox: React.FunctionComponent<FamilyNeededAttention> = ({ fullname, gender, nickname, profilePic, bornAt, reason_category, reason_description, priority }) => {
    return (
        <div className='familyattentionbox'>
            <div className='tag-holder'>
                <div className={`chip ${reason_category === 'Sick' ? 'bg-danger' : 'bg-warning'}`}>{reason_category}</div>
                <div className={`chip ${priority === 'High' ? 'bg-danger' : priority === 'Medium' ? 'bg-warning' : 'bg-success'}`}>{priority}</div>
            </div>
            <div>
                <img src={profilePic ?? '/mock/no_pic.png'} alt={profilePic ?? '/mock/no_pic.png'} className='w-20 h-20 rounded-full object-cover border-4 border-white shadow-md mx-5 bg-white'/>
            </div>
            <div>
                <AtomText type='content-title' text={fullname}/>
                <AtomText type='content' text={nickname}/>
                <div className='flex flex-wrap mx-auto gap-2 my-2'>
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
                {
                    reason_description && <>
                        <AtomText type='content' text={'<b>Notes :</b>'}/>
                        <AtomText type='content' text={reason_description}/>
                    </>
                }
            </div>
        </div>
    );
};

export default MoleculesFamilyNeedAttentionBox;
