import * as React from 'react';
import AtomText from '../atoms/a_text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

interface IMoleculesNoDataBoxProps {
}

const MoleculesNoDataBox: React.FunctionComponent<IMoleculesNoDataBoxProps> = (props) => {
    return (
        <div className="container bg-warning">
            <AtomText type='subtitle' text={<><FontAwesomeIcon icon={faTriangleExclamation}/> Warning</>}/>
            <AtomText type='content' text="No enough data to visualize"/>
        </div>
    )
};

export default MoleculesNoDataBox;