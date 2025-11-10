import * as React from 'react';
import AtomButton from '../atoms/a_button';
import AtomText from '../atoms/a_text';
import { Input } from '../ui/input';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MoleculesMoneyFlowBox from '../molecules/m_money_flow_box';
import { numberFormat } from '@/helpers/math';

interface LastMoneyFlowItem {
    title: string
    description?: string
    category: string
    amount: number
    tags?: string[]
    createdAt: string
    createdBy: string
}

interface IOrganismsLastMoneyFlowProps {
    lastMoneyItem: LastMoneyFlowItem[]
}

const OrganismsLastMoneyFlow: React.FunctionComponent<IOrganismsLastMoneyFlowProps> = ({ lastMoneyItem }) => {
    const totalIncome = `Rp. ${numberFormat(lastMoneyItem.filter(dt => dt.category === 'Income').reduce((sum,dt) => sum + dt.amount, 0),0,',','.')}`
    const totalSpending = `Rp. ${numberFormat(lastMoneyItem.filter(dt => dt.category === 'Spending').reduce((sum,dt) => sum + dt.amount,0),0,',','.')}`

    return (
        <div>
            <AtomText type="sub-title" text="Here's some list of you and your family money flow" />
            <div className="flex flex-wrap w-full mt-5">
                <div className="w-full md:w-1/2 flex mb-5 gap-2">
                    <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faMinus} height={20} width={20}/> {totalSpending}</span>}/>
                    <AtomButton type='btn-primary' text={<span className="flex gap-2"><FontAwesomeIcon icon={faPlus} height={20} width={20}/> {totalIncome}</span>}/>
                </div>
                <div className="w-full md:w-1/2 flex flex-col">
                    <Input type="text" placeholder="Search money flow..." />
                </div>
            </div>
            <div className='mt-5 items-end text-start'>
                {
                    lastMoneyItem.map((dt, idx) => (
                        <MoleculesMoneyFlowBox key={idx} title={dt.title} description={dt.description} category={dt.category} createdAt={dt.createdAt} createdBy={dt.createdBy} tags={dt.tags} amount={dt.amount}/>
                    ))
                }
            </div>
        </div>
    )
};

export default OrganismsLastMoneyFlow;
