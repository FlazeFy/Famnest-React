import React from 'react'

interface AtomButton {
    type: string
    text: any
    extraClass?: string
    url?: string
    onClick?: () => void
}

const AtomButton: React.FC<AtomButton> = ({ type, text, extraClass = '', onClick, url }) => {
    if (['btn-primary','btn-warning','btn-danger','btn-success','btn-link'].includes(type)) {
        return <button className={`${type} ${extraClass}`} onClick={onClick}>{text}</button>
    } else if(type === 'btn-link'){
        return <a className={`${type} ${extraClass}`} href={url}>{text}</a>
    } else {
        return <></>
    }
}

export default AtomButton
