import { convertUTCToLocal } from '@/helpers/converter';
import { HistoryItem } from '@/repositories/r_history';
import * as React from 'react'
import AtomText from '../atoms/a_text'

interface IMoleculesHistoryBoxProps {
    deleteButton: any
}

const MoleculesHistoryBox: React.FunctionComponent<HistoryItem & IMoleculesHistoryBoxProps> = ({history_type, history_context, created_at, deleteButton}) => {
    return (
        <div className='bg-white rounded-2xl shadow-md text-dark p-3 flex flex-wrap justify-between gap-2 mb-2'>
            <div className='text-start'>
                <AtomText type='content' text={`${history_type} | ${history_context}`} />
                <AtomText type='content' text={convertUTCToLocal(created_at)}/>
            </div>
            {deleteButton}
        </div>
    )
}

export default MoleculesHistoryBox;
