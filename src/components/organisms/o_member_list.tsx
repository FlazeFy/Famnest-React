import { FamilyMemberShortInfo } from '@/helpers/variable';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import MoleculesFamilyMemberBox from '../molecules/m_family_member_box';
import { Input } from '../ui/input';

interface IOrganismsMemberListProps {
    memberItem: FamilyMemberShortInfo[]
}

const OrganismsMemberList: React.FunctionComponent<IOrganismsMemberListProps> = ({ memberItem }) => {
    return (
        <div className="min-h-[90vh] flex-wrap text-center lg:text-start w-full rounded-2xl text-white bg-cover items-start p-5 pt-10 lg:p-10 lg:pt-20" style={{backgroundImage:"url('/background/background-3.jpg')"}}>
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center lg:text-left mb-6 md:mb-0">
                    <AtomText type="sub-title" text="Here's the profile of your family member" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center text-center lg:text-left">
                    <AtomText type="content" text="Lorem ipsum..." />
                </div>
            </div>
            <div className="rounded-2xl p-5 mt-10 text-dark" style={{backgroundColor: "rgba(255, 255, 255, 0.75)"}}>
                <div className="flex flex-wrap w-full">
                    <div className="w-full md:w-1/2 flex flex-col">

                    </div>
                    <div className="w-full md:w-1/2 flex flex-col">
                        <Input type="text" placeholder="Search family member..." />
                    </div>
                </div>
                <div className='mt-20 flex flex-wrap'>
                    {
                        memberItem.map((dt, idx) => (
                            <div className='w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 pb-10' key={idx}>
                                <MoleculesFamilyMemberBox fullname={dt.fullname} gender={dt.gender} nickname={dt.nickname} profilePic={dt.profilePic} bornAt={dt.bornAt}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default OrganismsMemberList;
