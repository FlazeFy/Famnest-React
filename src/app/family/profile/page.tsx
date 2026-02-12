import OrganismsExportSection from "@/components/organisms/o_export_section"
import OrganismsFeedbackBox from "@/components/organisms/o_feedback_form"
import { OrganismsHistory } from "@/components/organisms/o_list_history"
import { OrganismsManageAccount } from "@/components/organisms/o_manage_account"
import OrganismsMyProfileForm from "@/components/organisms/o_my_profile_form"

export default function ProfilePage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <OrganismsMyProfileForm/>
                    <OrganismsExportSection/>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <OrganismsManageAccount/>
                    <OrganismsHistory/>
                    <OrganismsFeedbackBox/>
                </div>
            </div>
        </div>
    )
}
