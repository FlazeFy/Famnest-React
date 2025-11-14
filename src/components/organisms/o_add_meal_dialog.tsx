import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from 'react';
import AtomBreakline from "../atoms/a_breakline";
import MoleculesMultipleComboxBox from "../molecules/m_multiple_combobox"
import { Textarea } from "../ui/textarea"

interface IOrganismsAddMealDialogProps {
    time: string
    dayName: string
}

const OrganismsAddMealDialog: React.FunctionComponent<IOrganismsAddMealDialogProps> = ({ time, dayName }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-primary"><FontAwesomeIcon icon={faPlus}/> Add Meal</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add A Meal</DialogTitle>
                    <DialogDescription>You can also choose which family member is assigned to prepare the meal. <AtomBreakline length={2}/><b>Note:</b> Multiple people can be assigned to serve a meal.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                    <div className="flex flex-wrap gap-2">
                        <div>
                            <Label htmlFor="day" className="mb-2">Day</Label>
                            <Input id="day" type="text" name="day" value={dayName} readOnly={true}/>
                        </div>
                        <div>
                            <Label htmlFor="time" className="mb-2">Time</Label>
                            <Input id="time" type="text" name="time" value={time} readOnly={true}/>
                        </div>
                    </div>
                    <Label htmlFor="meal_name">Meal Name</Label>
                    <Input id="meal_name" type="text" name="meal_name" />
                    <Label htmlFor="meal_desc">Description</Label>
                    <Textarea id="meal_desc" name="meal_desc"></Textarea>
                    <Label htmlFor="meal_prepare_by">Prepare By</Label>
                    <MoleculesMultipleComboxBox context="Family Member" options={[
                        { title: "Jhon <b>(Dad)</b>", value:"1" },
                        { title: "You", value:"2" },
                        { title: "Clarisa <b>(Mom)</b>", value:"3" },
                        { title: "Bob <b>(Brother)</b>", value:"4" },
                    ]}/>
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

export default OrganismsAddMealDialog;
