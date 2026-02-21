import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Link from "next/link"
import * as React from 'react'
import AtomText from "../atoms/a_text"
import { ScheduleItem } from "@/repositories/r_stats"
import MoleculesNotFoundBox from "../molecules/m_not_found_box"
import MoleculesScheduleBox from "../molecules/m_schedule_box"

interface OrganismsNextActivityDialogProps {
    items: ScheduleItem[]
}

const OrganismsNextActivityDialog: React.FunctionComponent<OrganismsNextActivityDialogProps> = ({ items }) => {
    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <div className='dashbox cursor-pointer'>
                        <AtomText type='content' text='Next Activity'/>
                        <AtomText type='content-title' text={items.length > 0 ? items.map(dt => dt.schedule_title).join(', ') : '-'}/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[720px]">
                    <DialogHeader>
                        <DialogTitle>Next Activity</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4">
                        {
                            items.length > 0 ?
                                items.map((dt,idx) => <MoleculesScheduleBox key={idx} schedule_title={dt.schedule_title} schedule_category={dt.schedule_category} day={dt.day} time_start={dt.time_start} time_end={dt.time_end} status={dt.status}/>)
                            : 
                                <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>
                        }
                        
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
}

export default OrganismsNextActivityDialog;
