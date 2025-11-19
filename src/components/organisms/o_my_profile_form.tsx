import { MyProfile } from '@/helpers/variable';
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';

interface IOrganismsMyProfileFormProps {
    myProfile: MyProfile
}

const OrganismsMyProfileForm: React.FunctionComponent<IOrganismsMyProfileFormProps> = ({myProfile}) => {
    return (
        <div className='shadow-lg rounded-2xl p-10'>
            <AtomText type='sub-title' text='My Profile'/>
            <hr className='my-5'/>
            <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <Label htmlFor="username" className="mb-2">Username</Label>
                    <Input id="username" type="username" name="username" className="mb-4" defaultValue={myProfile.username}/>
                    <Label htmlFor="email" className="mb-2">Email</Label>
                    <Input id="email" type="email" name="email" className="mb-4" defaultValue={myProfile.email}/>
                    <Label htmlFor="bio" className="mb-2">Bio</Label>
                    <Textarea id='bio' className='mb-2' name='bio' defaultValue={myProfile.bio} style={{minHeight:"140px"}}></Textarea>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <Label htmlFor="phone" className="mb-2">Phone</Label>
                    <Input id="phone" type="phone" name="phone" className="mb-4" defaultValue={myProfile.phone}/>
                    <Label htmlFor="telegram" className="mb-2">Telegram</Label>
                    <Input id="telegram" type="text" name="telegram" className="mb-4" defaultValue={myProfile.telegram}/>
                    <AtomText type='content' text='<b>Joined At</b>'/>
                    <AtomText type='content' text={myProfile.createdAt} extraClass='mb-2'/>
                    <AtomText type='content' text='<b>Last Updated</b>'/>
                    <AtomText type='content' text={myProfile.updatedAt}/>
                    <Button className='bg-success my-5 w-full'><FontAwesomeIcon icon={faFloppyDisk}/> Save Changes</Button>
                </div>
            </div>
        </div>
    );
};

export default OrganismsMyProfileForm;
