import OrganismsMemberList from "@/components/organisms/o_member_list";
import { memberItem } from "@/helpers/dummy";

export default function MemberPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <OrganismsMemberList memberItem={memberItem}/>
        </div>
    );
}
