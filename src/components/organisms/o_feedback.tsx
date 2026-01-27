"use client"
import { FeedbackItem, getFeedbackRandomRepo} from "@/repositories/r_feedback"
import { useEffect, useState } from "react"
import AtomBreakline from "../atoms/a_breakline"
import AtomText from "../atoms/a_text"
import MoleculesFeedbackBox from "../molecules/m_feedback_box"
import Skeleton from "react-loading-skeleton"
import MoleculesNotFoundBox from "../molecules/m_not_found_box"

interface OrganismsFeedbackProps {}

const OrganismsFeedback: React.FC<OrganismsFeedbackProps> = () => {
    const [feedbackItem, setFeedbackItem] = useState<FeedbackItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchFeedback = async () => {
            try {
                const data = await getFeedbackRandomRepo()
                setFeedbackItem(data)
            } catch (err: any) {
                setError(err?.response?.data?.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchFeedback()
    }, [])

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

    return (
        <div className='py-30 -mx-4 my-3 p-8 lg:p-20 bg-primary text-center rounded-2xl' id="feedbackSection">
            <AtomText type='title' text='What they thinks?' />
            <AtomBreakline length={1}/>
            <AtomText type='content' text="Here's some feedback from our beloved users"/>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-20 min-h-[400px] items-end'>
                {
                    feedbackItem.map((dt, idx) => (
                        <MoleculesFeedbackBox key={idx} idx={idx} name={dt.user.username} rate={dt.feedback_rate} image={'/mock/profile_pic.png'} feedback={dt.feedback_body}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsFeedback
