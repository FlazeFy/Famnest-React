import * as React from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Textarea } from '../ui/textarea'
import MoleculesStarRatingInput from '../molecules/m_star_rating_input'

interface IOrganismsMealScoringProps {
}

const OrganismsMealScoring: React.FunctionComponent<IOrganismsMealScoringProps> = (props) => {
    const [score, setScore] = React.useState(0)

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className='mt-2 bg-success'><FontAwesomeIcon icon={faThumbsUp}/> Give Score</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Meal Scoring</DialogTitle>
                        <DialogDescription>Scoring your meal can help improve your meal recommendations, and also encourage improvement for the person who prepared it</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label>From scale 1-5, How good it was?</Label>
                            <MoleculesStarRatingInput value={score} onChange={setScore} />
                            <Label>Feedback Notes <b>(Optional)</b></Label>
                            <Textarea id="meal_score_feedback" name="meal_score_feedback"></Textarea>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="bg-danger">Cancel</Button>
                        </DialogClose>
                            <Button type="submit" className="bg-success">Save</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default OrganismsMealScoring;
