"use client"
import React, { useEffect, useState } from 'react'
import AtomText from '../atoms/a_text'
import MoleculesLastMealBox from '../molecules/m_last_meal_box'
import OrganismsMealScoring from './o_meal_scoring_dialog'
import { getLastMealFeedbackRepo, LastMealFeedbackItem } from '@/repositories/r_meal_feedback'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import Skeleton from 'react-loading-skeleton'

interface IOrganismsLastMealBoxProps {}

const OrganismsLastMealBox: React.FunctionComponent<IOrganismsLastMealBoxProps> = () => {
    // For retrive value from repo
    const [mealFeedback, setMealFeedback] = useState<LastMealFeedbackItem[]>([])
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetchLastMealFeedback()
    }, [])

    const fetchLastMealFeedback = async () => {
        try {
            const data = await getLastMealFeedbackRepo()
            setMealFeedback(data)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <AtomText type="content-title" text="How did your last meal taste?" extraClass='mb-1'/>
            <div className="grid grid-cols-12 gap-2">
            {
                loading ? (
                    Array.from({ length: 3 }).map((_, idx) => (
                        <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4">
                            <Skeleton style={{ height: "120px" }} />
                        </div>
                    ))
                ) : error ? (
                    <div className="col-span-12">
                        <MoleculesNotFoundBox title="No enough data to show" style={{ height: "120px" }}/>
                    </div>
                ) : mealFeedback.length > 0 ? (
                        mealFeedback.map((dt, idx) => (
                            <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-6 xl:col-span-4">
                                <MoleculesLastMealBox meal_name={dt.meal_name} prepare_by={dt.prepare_by} mealScoring={<OrganismsMealScoring/>} avg_meal_rate={dt.avg_meal_rate}/>
                            </div>
                        ))
                    ) : (
                        <div className="col-span-12">
                            <MoleculesNotFoundBox title="No data available" />
                        </div>
                )
            }
            </div>
        </div>
    )                        
}

export default OrganismsLastMealBox;
