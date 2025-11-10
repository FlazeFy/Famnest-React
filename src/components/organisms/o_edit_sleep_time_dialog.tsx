import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import * as React from 'react';
import AtomBreakline from "../atoms/a_breakline";
import AtomText from "../atoms/a_text";

interface IOrganismsEditSleepTimeDialogProps {
}

const OrganismsEditSleepTimeDialog: React.FunctionComponent<IOrganismsEditSleepTimeDialogProps> = (props) => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className='dashbox cursor-pointer'>
                        <AtomText type='content' text='Sleep Time'/>
                        <AtomText type='content-title' text='11:00 PM - 04:00 AM'/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Sleep Time</DialogTitle>
                        <DialogDescription>If you set this sleep time, all your family members will receive a notification when it's time to sleep. <AtomBreakline length={2}/><b>Note:</b> They can also disable the notification.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label>Set Active</Label>
                            <RadioGroup defaultValue="on" className="flex gap-2">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="on" id="on" />
                                    <Label htmlFor="on">On</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="off" id="off" />
                                    <Label htmlFor="off">Off</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="start-time">Start Time</Label>
                                <Input id="start-time" type="time" name="start_time" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="end-time">End Time</Label>
                                <Input id="end-time" type="time" name="end_time" />
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="bg-danger">Cancel</Button>
                        </DialogClose>
                            <Button type="submit" className="bg-success">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
};

export default OrganismsEditSleepTimeDialog;