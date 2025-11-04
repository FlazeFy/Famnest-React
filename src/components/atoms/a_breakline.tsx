import React from 'react'

interface AtomBreaklineProps {
    length: number
}

const AtomBreakline: React.FC<AtomBreaklineProps> = ({ length }) => {
    return <>
        {
            Array.from({ length }).map((_, idx) => ( <br key={idx} />))
        }
    </>
}

export default AtomBreakline