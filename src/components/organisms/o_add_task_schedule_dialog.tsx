import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { familyRecommendedTaskParticipant, sampleTags } from "@/helpers/dummy";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';
import AtomBreakline from "../atoms/a_breakline";
import MoleculesMultipleComboxBox from "../molecules/m_multiple_combobox"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea"
import OrganismsRecommendedFamilyMemberList from "./o_recommended_family_member_list";

interface IOrganismsAddTaskScheduleDialogProps {
}

const OrganismsAddTaskScheduleDialog: React.FunctionComponent<IOrganismsAddTaskScheduleDialogProps> = (props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-success"><FontAwesomeIcon icon={faPlus}/> Add Schedule</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1080px]">
                <DialogHeader>
                    <DialogTitle>Add A Scheduled Task / Event</DialogTitle>
                    <DialogDescription>We can analyze who is the best person to contribute or help with a task based on their personal tasks and personal information. <AtomBreakline length={1}/><b>Notes:</b> This is the Task Schedule Form, so any task you create will be automatically added to the task list</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="task_schedule_title" className="mb-2">Task Title</Label>
                        <Input id="task_schedule_title" type="text" name="task_schedule_title" className="mb-4"/>
                        <Label htmlFor="task_schedule_desc" className="mb-2">Description</Label>
                        <Textarea id="task_schedule_desc" name="task_schedule_desc" className="mb-4"></Textarea>
                        <Label htmlFor="task_schedule_participants" className="mb-2">Participant (Optional)</Label>
                        <MoleculesMultipleComboxBox context="Family Member" extraClass="mb-4" options={[
                            { title: "Jhon <b>(Dad)</b>", value:"1" },
                            { title: "You", value:"2" },
                            { title: "Clarisa <b>(Mom)</b>", value:"3" },
                            { title: "Bob <b>(Brother)</b>", value:"4" },
                        ]}/>
                        <Label htmlFor="task_schedule_tags" className="mb-2">Tags (Optional)</Label>
                        <MoleculesMultipleComboxBox context="Task Tags" extraClass="mb-4" options={sampleTags}/>
                        <hr className="mt-1 mb-4"></hr>
                        <div className="flex flex-wrap gap-2">
                            <div style={{minWidth:"200px"}}>
                                <Label htmlFor="task_schedule_day" className="mb-2">Day Name</Label>
                                <Select>
                                    <SelectTrigger className="w-full text-dark">
                                        <SelectValue placeholder="Select day name" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Weekday</SelectLabel>
                                            <SelectItem value="Monday">Monday</SelectItem>
                                            <SelectItem value="Tuesday">Tuesday</SelectItem>
                                            <SelectItem value="Wednesday">Wednesday</SelectItem>
                                            <SelectItem value="Thursday">Thursday</SelectItem>
                                            <SelectItem value="Friday">Friday</SelectItem>
                                            <SelectLabel>Weekend</SelectLabel>
                                            <SelectItem value="Saturday">Saturday</SelectItem>
                                            <SelectItem value="Sunday">Sunday</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="task_schedule_hour_start" className="mb-2">Hour Start</Label>
                                <Input id="task_schedule_hour_start" type="time" name="task_schedule_hour_start" className="mb-4"/>
                            </div>
                            <div>
                                <Label htmlFor="task_schedule_hour_end" className="mb-2">Hour End</Label>
                                <Input id="task_schedule_hour_end" type="time" name="task_schedule_hour_end" className="mb-4"/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <OrganismsRecommendedFamilyMemberList familyRecommendedTaskParticipant={familyRecommendedTaskParticipant}/>
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

export default OrganismsAddTaskScheduleDialog;
