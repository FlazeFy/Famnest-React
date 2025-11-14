import OrganismsAddMoneyFlowDialog from "@/components/organisms/o_add_money_flow_dialog";
import OrganismsListMoneyFlowTable from "@/components/organisms/o_list_money_flow_table";
import { lastMoneyItem } from "@/helpers/dummy";

export default function MoneyFlowPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-5">
                <OrganismsAddMoneyFlowDialog/>
            </div>
            <OrganismsListMoneyFlowTable listMoneyFlow={lastMoneyItem}/>
        </div>
    );
}
