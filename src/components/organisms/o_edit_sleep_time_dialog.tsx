'use client'
import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { convertUTCToLocal } from "@/helpers/converter"
import { FamilySleepTimeItem, getFamilySleepTimeRepo, hardDeleteSleepTimeRepo, postFamilySleepTimeRepo } from "@/repositories/r_family_sleep_time"
import React, { useEffect, useState } from 'react'
import Skeleton from "react-loading-skeleton"
import { AtomBreakline } from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import Swal from "sweetalert2"
import { consumeErrorAPI, loadingDialog } from "@/helpers/message"

interface IOrganismsEditSleepTimeDialogProps {}

const OrganismsEditSleepTimeDialog: React.FunctionComponent<IOrganismsEditSleepTimeDialogProps> = (props) => {
    // For retrive value from repo
    const [open, setOpen] = useState(false)
    const [familySleepTimeItem, setFamilyMemberItem] = useState<FamilySleepTimeItem>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    // For state UI
    const [isActive, setIsActive] = useState<'on' | 'off'>('off')
    const [isShowHourInput, setShowHourInput] = useState(false)
    // For request repo
    const [hourStart, setHourStart] = useState('')
    const [hourEnd, setHourEnd] = useState('')

    // Call repository
    useEffect(() => {
        if (!open) return

        const fetchFamilySleepTime = async () => {
            try {
                setLoading(true)
                const data = await getFamilySleepTimeRepo()
                setFamilyMemberItem(data)
                setIsActive('on')
                setShowHourInput(true)
                setHourStart(data.hour_start)
                setHourEnd(data.hour_end)
            } catch (err: any) {
                if (err.response?.status === 404 && err.response?.data?.message) {
                    setIsActive('off')
                    setShowHourInput(false)
                    return
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
    
    const addSleepTime = async (e: React.FormEvent) => {
        e.preventDefault()

        if (isActive === 'off') return removeSleepTime()
        if (!hourStart || !hourEnd) return Swal.fire('Invalid', 'Please set start and end time', 'warning')

        const payload = { hour_start: hourStart, hour_end: hourEnd }
        setOpen(false)
        const confirm = await Swal.fire({
            title: 'Are you sure?',
            text: 'Do you want to add sleep time?',
            icon: 'question',
            showCancelButton: true
        })

        if (!confirm.isConfirmed) return

        loadingDialog('Saving sleep time')
        try {
            const message = await postFamilySleepTimeRepo(payload)

            await Swal.fire('Success', message, 'success')
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
                        loading ? 
                            <Skeleton className="h-[200px] w-full rounded-xl" />
                        : 
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label>Set Active</Label>
                                    <RadioGroup value={isActive} className="flex gap-2" onValueChange={(value: 'on' | 'off') => {
                                            setIsActive(value)
                                            setShowHourInput(value === 'on')
                                        }}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="on" id="on"/>
                                            <Label htmlFor="on">On</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="off" id="off"/>
                                            <Label htmlFor="off">Off</Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                                {
                                    isShowHourInput && 
                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="start-time">Start Time</Label>
                                                <Input id="start-time" type="time" name="start_time" defaultValue={familySleepTimeItem?.hour_start ?? ''} onChange={e => setHourStart(e.target.value)}/>
                                            </div>
                                            <div className="flex flex-col gap-2">
                                                <Label htmlFor="end-time">End Time</Label>
                                                <Input id="end-time" type="time" name="end_time" defaultValue={familySleepTimeItem?.hour_end ?? ''} onChange={e => setHourEnd(e.target.value)}/>
                                            </div>
                                        </div>
                                }
                                {
                                    familySleepTimeItem && <AtomText type="content" text={`<span class="font-semibold">Set on</span> : ${familySleepTimeItem?.updated_at ? convertUTCToLocal(familySleepTimeItem?.updated_at) : convertUTCToLocal(familySleepTimeItem?.created_at ?? '')}`}/>
                                }
                            </div>
                    }
                    <DialogFooter>
                        {
                            familySleepTimeItem &&
                                <DialogClose asChild>
                                    <Button variant="outline" className="bg-danger" onClick={removeSleepTime}>Remove</Button>
                                </DialogClose>
                        }
                        { isShowHourInput && <Button type="submit" className="bg-success" onClick={addSleepTime}>Save changes</Button> }
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}

export default OrganismsEditSleepTimeDialog