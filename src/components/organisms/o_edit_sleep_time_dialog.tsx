'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { convertUTCToLocal } from "@/helpers/converter"
import { FamilySleepTimeItem, getFamilySleepTimeRepo, hardDeleteSleepTimeRepo } from "@/repositories/r_family_sleep_time"
import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton"
import { AtomBreakline } from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import Swal from "sweetalert2"
import { consumeErrorAPI, loadingDialog } from "@/helpers/message"

interface IOrganismsEditSleepTimeDialogProps {}

const OrganismsEditSleepTimeDialog: React.FunctionComponent<IOrganismsEditSleepTimeDialogProps> = (props) => {
    const [open, setOpen] = useState(false)
    const [familySleepTimeItem, setFamilyMemberItem] = useState<FamilySleepTimeItem>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!open) return

        const fetchFamilySleepTime = async () => {
            try {
                setLoading(true)
                const data = await getFamilySleepTimeRepo()
                setFamilyMemberItem(data)
            } catch (err: any) {
                if (err.response?.status === 404 && err.response?.data?.message) {
                    return null
                }
                setError(err?.response?.data?.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchFamilySleepTime()
    }, [open])

    const removeSleepTime = async () => {
        const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "Do you want to remove your family sleep time?",
            icon: "question",
            showCancelButton: true,
            confirmButtonText: "Yes, remove it",
            cancelButtonText: "Cancel",
        })
      
        if (!confirm.isConfirmed) return
        loadingDialog('Removing sleep time')
      
        try {
            const message = await hardDeleteSleepTimeRepo()
        
            await Swal.fire("Success", message, "success")
            setOpen(false)
            setFamilyMemberItem(undefined)
        } catch (err: any) {
            await consumeErrorAPI(err)
        } finally {
            Swal.close()
        }
    }      
    
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <form>
                <DialogTrigger asChild>
                    <div className='dashbox cursor-pointer'>
                        <AtomText type='content' text='Sleep Time'/>
                        <AtomText type='content-title' text='11:00 PM - 04:00 AM'/>
                    </div>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit Sleep Time</DialogTitle>
                        <DialogDescription>If you set this sleep time, all your family members will receive a notification when it's time to sleep. <AtomBreakline length={2}/><b>Note:</b> They can also disable the notification.</DialogDescription>
                    </DialogHeader>
                    {
                        loading ? (
                            <Skeleton className="h-[200px] w-full rounded-xl" />
                        ) : (
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label>Set Active</Label>
                                    <RadioGroup defaultValue="on" className="flex gap-2">
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value={familySleepTimeItem ? 'on' : 'off'} id="on" />
                                            <Label htmlFor="on">On</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value={familySleepTimeItem ? 'off' : 'on'} id="off" />
                                            <Label htmlFor="off">Off</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="start-time">Start Time</Label>
                                        <Input id="start-time" type="time" name="start_time" defaultValue={familySleepTimeItem?.hour_start ?? ''} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor="end-time">End Time</Label>
                                        <Input id="end-time" type="time" name="end_time" defaultValue={familySleepTimeItem?.hour_end ?? ''}/>
                                    </div>
                                </div>
                                {
                                    familySleepTimeItem && <AtomText type="content" text={`<span class="font-semibold">Set on</span> : ${familySleepTimeItem?.updated_at ? convertUTCToLocal(familySleepTimeItem?.updated_at) : convertUTCToLocal(familySleepTimeItem?.created_at ?? '')}`}/>
                                }
                            </div>
                        )
                    }
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="bg-danger" onClick={removeSleepTime}>Remove</Button>
                        </DialogClose>
                            <Button type="submit" className="bg-success">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default OrganismsEditSleepTimeDialog