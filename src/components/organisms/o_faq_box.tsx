"use client"
import { FAQBoxItem, getQuestionRandomRepo } from '@/repositories/r_question'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { AtomBreakline } from "../atoms/a_breakline"
import AtomText from '../atoms/a_text'
import MoleculesCollapseButton from '../molecules/m_collapse_button'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'

interface OrganismsFAQBoxProps {}

const OrganismsFAQBox: React.FC<OrganismsFAQBoxProps> = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [faqItem, setQuestionItem] = useState<FAQBoxItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchQuestion = async () => {
            try {
                const data = await getQuestionRandomRepo()
                setQuestionItem(data)
            } catch (err: any) {
                setError(err?.response?.data?.message || "Something went wrong")
            } finally {
                setLoading(false)
            }
        }

        fetchQuestion()
    }, [])

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

    return (
        <div className="bg-white p-8 lg:p-20" id="faqSection">
            <div className='flex flex-wrap -mx-4'>
                <div className="w-full md:w-1/2 px-4 text-center lg:text-end flex flex-col justify-center mt-10 md:mt-0 mb-5 md:mb-0">
                    <AtomText type='title' text='Most Asked Question'/>
                    <AtomBreakline length={1}/>
                    {
                        activeIndex !== null && (
                            <div className="mt-2">
                                <AtomText type='content' text={faqItem[activeIndex].answer}/>
                            </div>
                        )
                    }
                </div>
                <div className="w-full md:w-1/2 px-4">
                    {
                        faqItem.map((item, idx) => <MoleculesCollapseButton key={idx} title={item.question} isActive={activeIndex === idx} onClick={() => setActiveIndex(idx)}/> )
                    }
                </div>
            </div>
        </div>
    )
}

export default OrganismsFAQBox