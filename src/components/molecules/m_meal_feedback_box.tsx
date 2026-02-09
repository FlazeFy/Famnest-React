import * as React from 'react'
import AtomText from '../atoms/a_text'
import { faStar, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IMoleculesMealFeedbackBoxProps {
    username: string
    feedback_rate: number 
    feedback_body: string | null
}

const MoleculesMealFeedbackBox: React.FunctionComponent<IMoleculesMealFeedbackBoxProps> = ({username, feedback_body, feedback_rate}) => {
    return (
        <div className={`mealbox`}>
            <div>
                <AtomText type='content' extraClass='mb-2' text={<><span className={`${feedback_rate >= 4 ? 'bg-success' : feedback_rate === 3 ? 'bg-warning' : 'bg-danger'} py-1 px-2 rounded`}><FontAwesomeIcon icon={faStar}/> {feedback_rate}</span> {feedback_body && <span className='ms-1'>{feedback_body}</span>}</>} />
                <AtomText type='content' text={`Rated by: ${username}`} extraClass="text-gray-400"/>
            </div>
        </div>
    )
}

export default MoleculesMealFeedbackBox;

