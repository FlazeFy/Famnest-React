import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FamilyMemberItem } from "@/repositories/r_family_member"
import React from 'react'
import MoleculesFamilyMemberBox from "../molecules/m_family_member_box"
import AtomText from "../atoms/a_text"
import { convertUTCToLocal } from "@/helpers/converter"
import AtomButton from "../atoms/a_button"
import OrganismsFamilyMemberDashboard from "./o_family_member_dashboard"

interface IOrganismsFamilyMemberDetailDialogProps {
    member: FamilyMemberItem
}

const OrganismsFamilyMemberDetaillDialog: React.FunctionComponent<IOrganismsFamilyMemberDetailDialogProps> = ({ member }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <MoleculesFamilyMemberBox {...member}/>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1080px]">
                <DialogHeader>
                    <DialogTitle>{member.user.fullname}'s Profile</DialogTitle>
                    <div className="flex flex-wrap gap-2">
                        <AtomButton text={member.family_relation} type="btn-primary"/>
                        <AtomButton text={member.user.gender} type={member.user.gender === 'female' ? "btn-danger" : "btn-primary"}/>
                    </div>
                    { member.user.bio && <DialogDescription>{member.user.bio}</DialogDescription> }
                </DialogHeader>
                <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                    <div className="col-span-12 md:col-span-4 lg:col-span-3 flex justify-center items-center">
                        <img src={member.user.profile_image ?? '/mock/no_pic.png'} alt={member.user.fullname} className="w-50 h-50 rounded-full object-cover -mt-15 border-4 border-white shadow-md mx-auto bg-white"/>
                    </div>
                    <div className="col-span-12 md:col-span-3 lg:col-span-3">
                        <AtomText text="Fullname" type="content-title"/>
                        <AtomText text={member.user.fullname} type="content" extraClass="mb-2"/>
                        <AtomText text="Email" type="content-title"/>
                        <AtomText text={member.user.email} type="content" extraClass="mb-2"/>
                        <AtomText text="Username" type="content-title"/>
                        <AtomText text={member.user.username} type="content" extraClass="mb-2"/>
                        <AtomText text="Born At" type="content-title"/>
                        <AtomText text={convertUTCToLocal(member.user.born_at)} type="content" extraClass="mb-2"/>
                        <AtomText text="Joined At" type="content-title"/>
                        <AtomText text={convertUTCToLocal(member.user.created_at)} type="content" extraClass="mb-2"/>
                        <AtomText text="Updated At" type="content-title"/>
                        { member.user.updated_at && <AtomText text={convertUTCToLocal(member.user.updated_at)} type="content" extraClass="mb-2"/>}
                    </div>
                    <div className="col-span-12 md:col-span-5 lg:col-span-6">
                        <OrganismsFamilyMemberDashboard/>
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" className="bg-primary">Assign a Task</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default OrganismsFamilyMemberDetaillDialog;
