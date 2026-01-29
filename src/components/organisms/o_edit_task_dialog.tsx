import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { isInclude } from "@/helpers/converter";
import { familyRecommendedTaskParticipant, sampleTags } from "@/helpers/dummy";
import { TaskItem } from "@/repositories/r_task";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from 'react';
import MoleculesMultipleComboxBox from "../molecules/m_multiple_combobox"
import { Textarea } from "../ui/textarea"
import OrganismsRecommendedFamilyMemberList from "./o_recommended_family_member_list";

const OrganismsEditTaskDialog: React.FunctionComponent<TaskItem> = ({task_title, task_desc, start_date, due_date, status, task_assigns, tags}) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-warning h-full"><FontAwesomeIcon icon={faPenToSquare}/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1080px]">
                <DialogHeader>
                    <DialogTitle>Edit A Task / Event</DialogTitle>
                    <DialogDescription>We can analyze who is the best person to contribute or help with a task based on their personal tasks and personal information.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="task_title" className="mb-2">Task Title</Label>
                        <Input id="task_title" type="text" name="task_title" className="mb-4" defaultValue={task_title}/>
                        <Label htmlFor="task_desc" className="mb-2">Description</Label>
                        <Textarea id="task_desc" name="task_desc" className="mb-4" defaultValue={task_desc ?? ''}></Textarea>
                        <Label htmlFor="task_participants" className="mb-2">Participant</Label>
                        <MoleculesMultipleComboxBox context="Family Member" extraClass="mb-4" options={[
                            { title: "Jhon <b>(Dad)</b>", value:"1", checked: isInclude(task_assigns, "Jhon", 'nickname')},
                        ]}/>
                        <Label htmlFor="task_tags" className="mb-2">Tags</Label>
                        <MoleculesMultipleComboxBox context="Task Tags" extraClass="mb-4" options={
                            tags ? sampleTags.map(tag => ({
                                ...tag, checked: isInclude(tags, tag.value, 'value')
                            })) : sampleTags
                        }/>
                        <div className="grid grid-cols-2 gap-2">
                            <div>
                                <Label htmlFor="task_start_date" className="mb-2">Start Date</Label>
                                <Input type="datetime-local" id="task_start_date" name="task_start_date" defaultValue={start_date ?? ''}/>
                            </div>
                            <div>
                                <Label htmlFor="task_end_date" className="mb-2">End Date</Label>
                                <Input type="datetime-local" id="task_end_date" name="task_end_date" defaultValue={due_date ?? ''}/>
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
                        <Button type="submit" className="bg-success">Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default OrganismsEditTaskDialog;
