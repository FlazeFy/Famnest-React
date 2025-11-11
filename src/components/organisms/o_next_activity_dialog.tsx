import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { TaskItem } from "@/helpers/variable";
import Link from "next/link";
import * as React from 'react';
import AtomText from "../atoms/a_text";
import MoleculesTaskBox from "../molecules/m_task_box"

const OrganismsNextActivityDialog: React.FunctionComponent<TaskItem> = ({title, description, dueDate, participant,isFinished}) => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className='dashbox cursor-pointer'>
                        <AtomText type='content' text='Next Activity'/>
                        <AtomText type='content-title' text='Cleaning House'/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[720px]">
                    <DialogHeader>
                        <DialogTitle>Next Activity</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        <Link href={'/family/task?next=true'}>
                            <MoleculesTaskBox title={title} description={description} dueDate={dueDate} participant={participant} isFinished={isFinished}/>
                        </Link>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="bg-danger">Cancel</Button>
                        </DialogClose>
                            <Button type="submit" className="bg-success">Finish</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
};

export default OrganismsNextActivityDialog;
