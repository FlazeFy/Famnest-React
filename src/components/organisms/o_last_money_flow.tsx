import * as React from 'react'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'
import { Input } from '../ui/input'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MoleculesMoneyFlowBox from '../molecules/m_money_flow_box'
import { useEffect, useState } from "react"
import { CashFlowComparisonItem, CashFlowItem, getRecentlyCashFlow } from '@/repositories/r_cash_flow'
import Skeleton from 'react-loading-skeleton'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'

interface IOrganismsLastMoneyFlowProps {}

const OrganismsLastMoneyFlow: React.FunctionComponent<IOrganismsLastMoneyFlowProps> = () => {
    const [flowItem, setCashFlowItem] = useState<CashFlowItem[]>([])
    const [summary, setSummary] = useState<CashFlowComparisonItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchCashFlow = async () => {
        try {
            const { summary, cash_flow } = await getRecentlyCashFlow()
            setCashFlowItem(cash_flow)
            setSummary(summary)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchCashFlow()
    }, [])

    const incomeTotal = summary.find(s => s.context === "income")?.total ?? 0
    const spendingTotal = summary.find(s => s.context === "spending")?.total ?? 0

    return (
        <div>
            <AtomText type="sub-title" text="Here's some list of you and your family cash flow" />
            <div className="flex flex-wrap w-full mt-5 gap-2">
                <AtomButton type='btn-primary' extraClass='border-2 border-white' text={<span className="flex gap-2"><FontAwesomeIcon icon={faMinus} height={20} width={20}/> Rp. {incomeTotal.toLocaleString()}</span>}/>
                <AtomButton type='btn-primary' extraClass='border-2 border-white' text={<span className="flex gap-2"><FontAwesomeIcon icon={faPlus} height={20} width={20}/> Rp. {spendingTotal.toLocaleString()}</span>}/>
            </div>
            <div className='mt-5 items-end text-start'>
                { loading && <Skeleton style={{ height: "200px" }}/> }
                { (!loading && error) || (!loading && flowItem?.length === 0) && <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/> }
                {
                    !loading && !error && flowItem.map((dt, idx) => (
                        <MoleculesMoneyFlowBox key={idx} id={dt.id}
                            flow_context={dt.flow_context} flow_desc={dt.flow_desc} flow_category={dt.flow_category} created_at={dt.created_at} user={dt.user} tags={dt.tags} flow_amount={dt.flow_amount} flow_type={dt.flow_type} updated_at={null}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsLastMoneyFlow;
