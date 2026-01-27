import React from 'react'
import AtomText from '../atoms/a_text'
import { Star } from "lucide-react"
import AtomStar from '../atoms/a_star'

interface MoleculesFeedbackBoxProps {
    image: string
    name: string
    feedback: string
    rate: number
    idx: number
}

const MoleculesFeedbackBox: React.FC<MoleculesFeedbackBoxProps> = ({ image, name, feedback, rate, idx }) => {
    const positionClass = idx === 1 ? 'self-start' : 'self-end'

    return (
        <div className={`relative bg-white shadow-lg rounded-3xl p-8 flex flex-col items-center transition-all duration-500 min-h-[280px] ${positionClass}`}>
            <img src={image} alt={name} className='w-20 h-20 rounded-full object-cover -mt-14 border-4 border-white shadow-md'/>
            <p className='mt-6 text-gray-600 italic text-sm md:text-base'>“{feedback}”</p>
            <div className='mt-6 text-center text-black'>
                <AtomText type='sub-title-small' text={name}/>
                <div className='mt-2'>
                    <AtomStar value={rate}/>
                </div>
            </div>
        </div>
    )
}

export default MoleculesFeedbackBox
