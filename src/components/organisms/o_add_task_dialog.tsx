import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from 'react';
import AtomBreakline from "../atoms/a_breakline";
import AtomText from "../atoms/a_text"
import MoleculesMultipleComboxBox from "../molecules/m_multiple_combobox"
import { Textarea } from "../ui/textarea"

interface IOrganismsAddTaskDialogProps {
}

const OrganismsAddTaskDialog: React.FunctionComponent<IOrganismsAddTaskDialogProps> = (props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex flex-col justify-center text-center bg-cover rounded-b-4xl md:rounded-r-4xl md:rounded-none p-10 lg:p-15 cursor-pointer' style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background/background-4.jpg')"}}>
                    <AtomText type='sub-title' text='Add Task / Event' />
                    <hr className='my-5'/>
                    <AtomText type='content-title' text='Set your daily task, deadline, and who will participate' />
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1080px]">
                <DialogHeader>
                    <DialogTitle>Add A Task / Event</DialogTitle>
                    <DialogDescription>We can analyze who is the best person to contribute or help with a task based on their personal tasks and personal information.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-wrap gap-y-3">
                        <Label htmlFor="task_title">Task Title</Label>
                        <Input id="task_title" type="text" name="task_title" />
                        <Label htmlFor="task_desc">Description</Label>
                        <Textarea id="task_desc" name="task_desc"></Textarea>
                        <Label htmlFor="task_participants">Participant</Label>
                        <MoleculesMultipleComboxBox context="Family Member" options={[
                            { title: "Jhon <b>(Dad)</b>", value:"1" },
                            { title: "You", value:"2" },
                            { title: "Clarisa <b>(Mom)</b>", value:"3" },
                            { title: "Bob <b>(Brother)</b>", value:"4" },
                        ]}/>
                    </div>
                    <div>

                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" className="bg-danger">Cancel</Button>
                    </DialogClose>
                        <Button type="submit" className="bg-success">Save</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default OrganismsAddTaskDialog;
