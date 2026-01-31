'use client'
import { FamilyMemberItem, getAllFamilyMember } from '@/repositories/r_family_member';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import AtomText from '../atoms/a_text';
import MoleculesFamilyMemberBox from '../molecules/m_family_member_box';
import MoleculesNotFoundBox from '../molecules/m_not_found_box';
import { Input } from '../ui/input';

interface IOrganismsMemberListProps {}

const OrganismsMemberList: React.FunctionComponent<IOrganismsMemberListProps> = () => {
    const [familyMemberItem, setFamilyMemberItem] = useState<FamilyMemberItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchFamilyMember = async () => {
            try {
                const data = await getAllFamilyMember()
                setFamilyMemberItem(data)
            } catch (err: any) {
                if (err.response?.status === 404 && err.response?.data?.message) {
                    return []
                }
                
                setError(err?.response?.data?.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchFamilyMember()
    }, [])

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

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
                <div className='mt-15 flex flex-wrap'>
                    {
                        familyMemberItem.length === 0 ? (
                            <MoleculesNotFoundBox title="No family member found" />
                        ) : (
                            familyMemberItem.map((dt, idx) => (
                                <div key={idx} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 pb-10">
                                    <MoleculesFamilyMemberBox {...dt}/>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
};

export default OrganismsMemberList;
