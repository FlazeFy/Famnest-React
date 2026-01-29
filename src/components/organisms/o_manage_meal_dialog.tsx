import * as React from 'react';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import AtomBreakline from '../atoms/a_breakline';
import MoleculesNotFoundBox from '../molecules/m_not_found_box';
import MoleculesMealBox from '../molecules/m_meal_box';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import OrganismsConfirmationDeleteDialog from './o_confirmation_delete_dialog';
import AtomButton from '../atoms/a_button';
import OrganismsAddMealDialog from './o_add_meal_dialog';
import OrganismsEditMealDialog from './o_edit_meal_dialog';
import { MealItem } from '@/repositories/r_meal';

interface IOrganismsManageMealByTimeDayDialogProps {
    time: string
    dayName: string
    mealItem: MealItem[]
}

const OrganismsManageMealByTimeDayDialog: React.FunctionComponent<IOrganismsManageMealByTimeDayDialogProps> = ({time, dayName, mealItem}) => {
    const filteredMeals = mealItem.filter(item => item.meal_day === dayName)
    const meals = filteredMeals.filter(m => m.meal_time === time)

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
                                    meals.map((dt, idx) => <MoleculesMealBox id={dt.id} key={idx} meal_day={dt.meal_day} meal_name={dt.meal_name} prepare_by={dt.prepare_by} meal_time={dt.meal_time} meal_desc={dt.meal_desc ?? '- No description -'} isReadOnly={false} deleteItemComponent={
                                        (mealName: string) => <OrganismsConfirmationDeleteDialog context={`${mealName} Meal`} url='/' buttonTrigger={
                                            <AtomButton type='btn-danger' text={<FontAwesomeIcon icon={faTrash}/>}/>
                                        }/>
                                    } updateItemComponent={
                                        (mealName: string, mealDesc: string, mealPrepareBy: string[], mealTime: string, mealDay: string) => <OrganismsEditMealDialog mealName={mealName} mealDesc={mealDesc} mealPrepareBy={mealPrepareBy} mealTime={time} mealDay={dayName}/> 
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
