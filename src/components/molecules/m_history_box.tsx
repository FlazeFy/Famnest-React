import { convertUTCToLocal } from '@/helpers/converter';
import { HistoryItem } from '@/repositories/r_history';
import * as React from 'react'
import AtomText from '../atoms/a_text'

const MoleculesHistoryBox: React.FunctionComponent<HistoryItem> = ({id, history_type, history_context, created_at}) => {
    return (
        <div className='bg-white rounded-2xl shadow-md text-dark p-3 flex flex-wrap gap-2 mb-2'>
            <div className='text-start'>
                <AtomText type='content' text={`${history_type} | ${history_context}`} />
                <AtomText type='content' text={convertUTCToLocal(created_at)}/>
            </div>
        </div>
    )
}

export default MoleculesHistoryBox;
