import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { familyRecommendedMealPrepared } from "@/helpers/dummy"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from 'react'
import { AtomBreakline } from "../atoms/a_breakline"
import { Textarea } from "../ui/textarea"
import OrganismsRecommendedFamilyMemberMealPrepList from "./o_recommended_family_member_meal_prep_list"
import MoleculesSelectFamilyMember from "../molecules/m_select_family_member"

interface IOrganismsAddMealDialogProps {
    time: string
    dayName: string
}

const OrganismsAddMealDialog: React.FunctionComponent<IOrganismsAddMealDialogProps> = ({ time, dayName }) => {
    const [selectedFamilyIds, setSelectedFamilyIds] = useState<string[]>([])

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-primary"><FontAwesomeIcon icon={faPlus}/> Add Meal</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1080px]">
                <DialogHeader>
                    <DialogTitle>Add A Meal</DialogTitle>
                    <DialogDescription>You can also choose which family member is assigned to prepare the meal. <AtomBreakline length={2}/><b>Note:</b> Multiple people can be assigned to serve a meal.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <div className="flex flex-wrap gap-2">
                            <div className="flex flex-wrap gap-2 w-full">
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
                            <MoleculesSelectFamilyMember selectedId={selectedFamilyIds} onChange={setSelectedFamilyIds} title={"Prepare By"}/>
                        </div>
                    </div>
                    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                        <OrganismsRecommendedFamilyMemberMealPrepList familyRecommendedMealPrep={familyRecommendedMealPrepared}/>
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
    )
}

export default OrganismsAddMealDialog;
