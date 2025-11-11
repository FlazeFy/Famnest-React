import OrganismsListMoneyFlowTable from "@/components/organisms/o_list_money_flow_table";
import { lastMoneyItem } from "@/helpers/dummy";

export default function MoneyFlowPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <OrganismsListMoneyFlowTable listMoneyFlow={lastMoneyItem}/>
        </div>
    );
}
