import { Button } from "@/components/ui/button"
import { Dialog, DialogContent,  DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import * as React from 'react'
import { MealItem } from "@/repositories/r_meal"
import MoleculesMealFeedbackBox from "../molecules/m_meal_feedback_box"

const OrganismsMealFeedbackDialog: React.FunctionComponent<MealItem> = ({ id, meal_name }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-primary h-full"><FontAwesomeIcon icon={faThumbsUp}/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
                <DialogHeader>
                    <DialogTitle>{meal_name}'s Feedbacks</DialogTitle>
                </DialogHeader>
                <div className="grid gap-2">
                    <MoleculesMealFeedbackBox feedback_body={'asdasd'} feedback_rate={2} username={'Jhon Doe'}/>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default OrganismsMealFeedbackDialog;
