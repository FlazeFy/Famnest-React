import * as React from 'react'
import AtomText from '../atoms/a_text'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { convertUTCToLocal } from '@/helpers/converter'

interface IMoleculesMealFeedbackBoxProps {
    username: string
    meal_rate: number 
    meal_feedback?: string | null
    created_at: string
}

const MoleculesMealFeedbackBox: React.FunctionComponent<IMoleculesMealFeedbackBoxProps> = ({username, meal_feedback, meal_rate, created_at}) => {
    return (
        <div className={`mealbox`}>
            <div>
                <AtomText type='content' extraClass='mb-2' text={<><span className={`${meal_rate >= 4 ? 'bg-success' : meal_rate === 3 ? 'bg-warning' : 'bg-danger'} py-1 px-2 rounded me-1`}>
                    <FontAwesomeIcon icon={faStar}/> {meal_rate}</span> {meal_feedback && <>"{meal_feedback}." </>}<span className='italic'>- By {username}</span></>
                    }/>
                
                <AtomText type='content' text={`Review at: ${convertUTCToLocal(created_at)}`} extraClass="text-gray-400 italic"/>
            </div>
        </div>
    )
}

export default MoleculesMealFeedbackBox;

