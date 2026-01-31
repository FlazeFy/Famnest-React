import { Button } from "@/components/ui/button"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from 'react'
import AtomText from "../atoms/a_text"
import MoleculesMultipleComboxBox from "../molecules/m_multiple_combobox"
import { Textarea } from "../ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { listMoneyFlowTag, sampleTags } from "@/helpers/dummy"
import OrganismsMoneyFlowTagTable from "./o_money_flow_tag_table"

interface IOrganismsAddMoneyFlowDialogProps {}

const OrganismsAddMoneyFlowDialog: React.FunctionComponent<IOrganismsAddMoneyFlowDialogProps> = (props) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='flex flex-col justify-center text-center bg-cover rounded-b-4xl md:rounded-r-4xl md:rounded-none p-10 lg:p-15 cursor-pointer btn-image' style={{backgroundImage:"linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/background/background-5.jpg')"}}>
                    <AtomText type='sub-title' text='Add Money Flow' />
                    <hr className='my-5'/>
                    <AtomText type='content-title' text='Set your daily spending and income' />
                </div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[1080px]">
                <DialogHeader>
                    <DialogTitle>Add A Money Flow</DialogTitle>
                    <DialogDescription>This feature can also guide you when it comes to defining your spending priorities.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="money_flow_title" className="mb-2">Title</Label>
                        <Input id="money_flow_title" type="text" name="money_flow_title" className="mb-4"/>
                        <Label htmlFor="money_flow_desc" className="mb-2">Description</Label>
                        <Textarea id="money_flow_desc" name="money_flow_desc" className="mb-4"></Textarea>
                        <div className="grid-cols-1 sm:grid-cols-1 md:grid-cols-2 flex flex-wrap gap-x-2">
                            <div>
                                <Label htmlFor="money_flow_category" className="mb-2">Category</Label>
                                <Select>
                                    <SelectTrigger className="w-full text-dark">
                                        <SelectValue placeholder="Select flow category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectLabel>Category</SelectLabel>
                                            <SelectItem value="Spending">Spending</SelectItem>
                                            <SelectItem value="Income">Income</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <Label htmlFor="money_flow_amount" className="mb-2">Amount</Label>
                                <Input id="money_flow_amount" type="number" name="money_flow_amount" className="mb-4" min={1} defaultValue={1}/>
                            </div>
                        </div>
                        <Label htmlFor="money_flow_tags" className="mb-2">Tags</Label>
                        <MoleculesMultipleComboxBox context="Tags" extraClass="mb-4" options={sampleTags}/>
                    </div>
                    <div>
                        <OrganismsMoneyFlowTagTable listMoneyFlowTag={listMoneyFlowTag}/>
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

export default OrganismsAddMoneyFlowDialog;
