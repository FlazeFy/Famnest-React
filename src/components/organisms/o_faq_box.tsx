"use client"
import React, { useState } from 'react'
import AtomBreakline from '../atoms/a_breakline'
import AtomText from '../atoms/a_text'
import MoleculesCollapseButton from '../molecules/m_collapse_button'

interface FAQBoxItem {
    question: string
    answer: string
}

interface OrganismsFAQBoxProps {
    faqItem: FAQBoxItem[]
}

const OrganismsFAQBox: React.FC<OrganismsFAQBoxProps> = ({ faqItem }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <div className="bg-white p-8 lg:p-20" id="skillSection">
            <div className='flex flex-wrap -mx-4'>
                <div className="w-full md:w-1/2 px-4">
                    {
                        faqItem.map((item, idx) => (
                            <MoleculesCollapseButton key={idx} title={item.question} isActive={activeIndex === idx} onClick={() => setActiveIndex(idx)}/>
                        ))
                    }
                </div>
                <div className="w-full md:w-1/2 px-4 text-center lg:text-start flex flex-col justify-center mt-10 md:mt-0">
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
            </div>
        </div>
    )
}

export default OrganismsFAQBox