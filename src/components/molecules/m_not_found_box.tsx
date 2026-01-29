import * as React from 'react';
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface IMoleculesNotFoundBoxProps {
    title: string
    style?: any
}

const MoleculesNotFoundBox: React.FunctionComponent<IMoleculesNotFoundBoxProps> = ({ title, style }) => {
    return (    
        <div className="container bg-red-100 mt-2 rounded-xl py-10 w-full mx-auto flex flex-col items-center justify-center text-center" style={style}>
            <AtomText type='content-title' text={<><FontAwesomeIcon icon={faTriangleExclamation}/> Warning</>}/>
            <AtomText type='content' text={title}/>
        </div>
    )
}

export default MoleculesNotFoundBox