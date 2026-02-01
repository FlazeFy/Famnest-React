'use client'
import React, { useState } from "react"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '../ui/button'

interface IOrganismsConfirmationDeleteDialogProps {
    context: string
    action: () => Promise<void>
    buttonTrigger: any
}

const OrganismsConfirmationDeleteDialog: React.FunctionComponent<IOrganismsConfirmationDeleteDialogProps> = ({context, action, buttonTrigger}) => {
    const [open, setOpen] = useState(false)

    const handleConfirm = async () => {
        await action()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
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
                    <Button variant="outline" className="bg-success" onClick={handleConfirm}>Yes, Proceed</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default OrganismsConfirmationDeleteDialog;
