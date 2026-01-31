import * as React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '../ui/button'

interface IOrganismsConfirmationDeleteDialogProps {
    context: string
    url: string
    action?: any 
    buttonTrigger: any
}

const OrganismsConfirmationDeleteDialog: React.FunctionComponent<IOrganismsConfirmationDeleteDialogProps> = ({context, url, action, buttonTrigger}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{buttonTrigger}</DialogTrigger>
            <DialogContent className="sm:max-w-[420px]">
                <DialogHeader>
                    <DialogTitle>Are you sure?</DialogTitle>
                    <DialogDescription>Want to delete this "<b>{context}</b>"?</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-danger">Cancel</Button>
                    </DialogClose>
                    <Button variant="outline" className="bg-success">Yes, Proceed</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default OrganismsConfirmationDeleteDialog;
