import * as React from 'react';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '../ui/button';
import AtomBreakline from '../atoms/a_breakline';
import { MealItem } from '@/helpers/variable';
import MoleculesNotFoundBox from '../molecules/m_not_found_box';
import MoleculesMealBox from '../molecules/m_meal_box';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog';
import AtomButton from '../atoms/a_button';
import OrganismsAddMealDialog from './o_add_meal_dialog';

interface IOrganismsManageMealByTimeDayDialogProps {
    time: string
    dayName: string
    mealItem: MealItem[]
}

const OrganismsManageMealByTimeDayDialog: React.FunctionComponent<IOrganismsManageMealByTimeDayDialogProps> = ({time, dayName, mealItem}) => {
    const filteredMeals = mealItem.filter(item => item.mealDay === dayName)
    const meals = filteredMeals.filter(m => m.mealTime === time)

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='chip bg-success cursor-pointer' style={{ padding: "var(--spaceMini)", fontSize: "var(--textSM)", fontWeight: "bold" }}>{time}</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[720px]">
                <DialogHeader>
                    <DialogTitle>Manage Meal Schedule</DialogTitle>
                    <DialogDescription>Your meal schedule will be visible to all your family members, and they will also be notified when it's time to have a meal.<AtomBreakline length={2}/><b>Note:</b> Showing meals for <b>{dayName}'s {time}</b>.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                    {
                        meals.length > 0 ? (
                            <div className='mt-2 space-y-3'>
                                {
                                    meals.map((dt, idx) => <MoleculesMealBox key={idx} mealDay={dt.mealDay} mealName={dt.mealName} mealPrepareBy={dt.mealPrepareBy} mealTime={dt.mealTime} mealDesc={dt.mealDesc} isReadOnly={false} deleteItemComponent={
                                        (mealName: string) => <OrganismsConfirmationDeleteDialog context={`${mealName} Meal`} url='/' buttonTrigger={
                                            <AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash}/>}/>
                                        }/>
                                    }/>)
                                }
                            </div>
                        ) : (
                            <MoleculesNotFoundBox title="No meal found" />
                        )
                    }
                </div>
                <DialogFooter>
                    <OrganismsAddMealDialog dayName={dayName} time={time}/>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default OrganismsManageMealByTimeDayDialog;
