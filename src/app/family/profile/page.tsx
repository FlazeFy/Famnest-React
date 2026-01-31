import { OrganismsManageAccount } from "@/components/organisms/o_manage_account";
import OrganismsMyProfileForm from "@/components/organisms/o_my_profile_form";

export default function ProfilePage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <OrganismsMyProfileForm/>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <OrganismsManageAccount/>
                </div>
            </div>
        </div>
    );
}
