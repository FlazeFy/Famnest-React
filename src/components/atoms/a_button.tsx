import React from 'react'

interface AtomButton {
    type: string
    text: any
    extraClass?: string
    onClick?: () => void
}

const AtomButton: React.FC<AtomButton> = ({ type, text, extraClass = '', onClick }) => {
    if (type === 'btn-primary') {
        return <button className={`${type} ${extraClass}`} onClick={onClick}>{text}</button>
    } else {
        return <></>
    }
}

export default AtomButton
