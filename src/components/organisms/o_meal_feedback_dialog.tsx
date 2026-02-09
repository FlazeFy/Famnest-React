import { Button } from "@/components/ui/button"
import { Dialog, DialogContent,  DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useEffect, useState } from 'react'
import { MealItem } from "@/repositories/r_meal"
import MoleculesMealFeedbackBox from "../molecules/m_meal_feedback_box"
import { getAllMealFeedbackByMealIdRepo, MealFeedbackItem } from "@/repositories/r_meal_feedback"
import { PaginationMeta } from "@/repositories/template"
import MoleculesNotFoundBox from "../molecules/m_not_found_box"
import Skeleton from "react-loading-skeleton"
import { convertUTCToLocal } from "@/helpers/converter"
import { Badge } from "../ui/badge"

const OrganismsMealFeedbackDialog: React.FunctionComponent<MealItem> = ({ id, meal_name }) => {
    // For retrive value from repo
    const [mealFeedbackItem, setMealFeedbackItem] = useState<MealFeedbackItem[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)
    // For state management
    const [meta, setMeta] = useState<PaginationMeta>()
    const [open, setOpen] = useState(false)

    const fetchMealFeedback = async (id: string) => {
        try {
            setLoading(true)
            setError(null)
            const page = 1
            const { data, meta } = await getAllMealFeedbackByMealIdRepo(page, id)
            setMealFeedbackItem(data)
            setMeta(meta)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    const handleOpenChange = (isOpen: boolean) => {
        setOpen(isOpen)
        if (isOpen && mealFeedbackItem.length === 0) fetchMealFeedback(id)
    }

    const groupByDate = (items: MealFeedbackItem[]) => {
        return items.reduce((acc: Record<string, MealFeedbackItem[]>, item) => {
            const dateKey = convertUTCToLocal(item.created_at, false)
            if (!acc[dateKey]) acc[dateKey] = []
            acc[dateKey].push(item)
            return acc
        }, {})
    }

    const groupedFeedbacks = groupByDate(mealFeedbackItem)

    return (
        <Dialog open={open} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
                <Button variant="outline" className="bg-primary h-full"><FontAwesomeIcon icon={faThumbsUp}/></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[725px]">
                <DialogHeader>
                    <DialogTitle>{meal_name}'s Feedbacks</DialogTitle>
                </DialogHeader>
                <div className="grid gap-2">
                    {
                        loading ? ( 
                            <Skeleton style={{height:"400px"}}/>
                        ) : error ? (
                            <MoleculesNotFoundBox title={error} />
                        ) : mealFeedbackItem && mealFeedbackItem.length > 0 ? (
                            Object.entries(groupedFeedbacks).map(([date, items]) => (
                                <div key={date} className="mb-1">
                                    {/* Date Chip */}
                                    <Badge>{date}</Badge>

                                    {/* Item */}
                                    {
                                        items.map((dt, idx) => (
                                            <MoleculesMealFeedbackBox key={idx} meal_feedback={dt.meal_feedback} meal_rate={dt.meal_rate} username={dt.user.fullname} created_at={dt.created_at}/>
                                        ))
                                    }
                                </div>
                            ))
                        ) : (
                            <MoleculesNotFoundBox title="No feedback found"/>
                        )
                    }
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default OrganismsMealFeedbackDialog;
