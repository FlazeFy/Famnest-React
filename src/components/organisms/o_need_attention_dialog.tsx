import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { FamilyNeededAttention } from "@/helpers/variable";
import * as React from 'react';
import AtomText from "../atoms/a_text";
import MoleculesFamilyNeedAttentionBox from "../molecules/m_family_need_attention_box";

interface IOrganismsNeedAttentionDialogProps {
    familyNeededAttentionList: FamilyNeededAttention[]
}

const OrganismsNeedAttentionDialog: React.FunctionComponent<IOrganismsNeedAttentionDialogProps> = ({familyNeededAttentionList}) => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className='dashbox cursor-pointer'>
                        <AtomText type='content' text='Need Attention'/>
                        <AtomText type='content-title' text='Robert (Son)'/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[720px]">
                    <DialogHeader>
                        <DialogTitle>Need Attention</DialogTitle>
                        <DialogDescription>Here's a list of your family members who need priority attention. They may be <b>sick</b>, have a <b>lot of tasks</b>, have a <b>tight schedule</b>, or still be a <b>child</b>.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        {
                            familyNeededAttentionList.map((dt,idx) => (
                                <MoleculesFamilyNeedAttentionBox key={idx} fullname={dt.fullname} gender={dt.gender} nickname={dt.nickname} profilePic={dt.profilePic} bornAt={dt.bornAt} reason_category={dt.reason_category} priority={dt.priority} reason_description={dt.reason_description}/>
                            ))
                        }
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="bg-danger">Cancel</Button>
                        </DialogClose>
                            <Button type="submit" className="bg-success">Manage Member</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
};

export default OrganismsNeedAttentionDialog;
