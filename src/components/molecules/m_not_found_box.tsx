import * as React from 'react';
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface IMoleculesNotFoundBoxProps {
    title: string
}

const MoleculesNotFoundBox: React.FunctionComponent<IMoleculesNotFoundBoxProps> = ({title}) => {
    return (
        <div className="container bg-gray-100 mt-2 rounded-xl p-2 italic text-center">
            <AtomText type='subtitle' text={<><FontAwesomeIcon icon={faTriangleExclamation}/> Warning</>}/>
            <AtomText type='content' text={title}/>
        </div>
    )
};

export default MoleculesNotFoundBox;