import React from 'react'

interface AtomBreaklineProps {
    length: number
}

export const AtomBreakline: React.FC<AtomBreaklineProps> = ({ length }) => {
    return <>
        {
            Array.from({ length }).map((_, idx) => ( <br key={idx} />))
        }
    </>
}