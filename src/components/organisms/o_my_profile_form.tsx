'use client'
import { convertUTCToLocal, convertUTCToLocalDateInput } from '@/helpers/converter'
import { calculateAgeYearsMonths } from '@/helpers/math'
import { getMyProfile, MyProfileResponse } from '@/repositories/r_auth'
import { faFloppyDisk } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import AtomText from '../atoms/a_text'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

interface IOrganismsMyProfileFormProps {}

const OrganismsMyProfileForm: React.FunctionComponent<IOrganismsMyProfileFormProps> = () => {
    const [profileItem, setProfileItem] = useState<MyProfileResponse>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchMyProfile = async () => {
            try {
                const data = await getMyProfile()
                setProfileItem(data)
            } catch (err: any) {
                setError(err?.response?.data?.message || "Something went wrong")
            } finally { 
                setLoading(false)
            }
        }

        fetchMyProfile()
    })

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

    let age: string = ''

    if (profileItem?.born_at) {
        age = calculateAgeYearsMonths(profileItem?.born_at)
    }
    
    return (
        <div className='shadow-lg rounded-2xl p-10'>
            <AtomText type='sub-title' text='My Profile'/>
            <hr className='my-5'/>
            <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <Label htmlFor="username" className="mb-2">Username</Label>
                    <Input id="username" type="username" name="username" className="mb-4" defaultValue={profileItem?.username}/>
                    <Label htmlFor="email" className="mb-2">Email</Label>
                    <Input id="email" type="email" name="email" className="mb-4" defaultValue={profileItem?.email}/>
                    <Label htmlFor="fullname" className="mb-2">Fullname</Label>
                    <Input id="fullname" type="fullname" name="fullname" className="mb-4" defaultValue={profileItem?.fullname}/>
                    <div className='flex align-middle justify-between mb-2'>
                        <Label htmlFor="born_at">Born At</Label>
                        <AtomText type='content' extraClass='font-semibold' text={age}/>
                    </div>
                    <Input id="born_at" type="date" name="born_at" className="mb-4" defaultValue={profileItem ? convertUTCToLocalDateInput(profileItem?.born_at):''}/>
                    <Label htmlFor="bio" className="mb-2">Bio</Label>
                    <Textarea id='bio' className='mb-2' name='bio' defaultValue={profileItem?.bio} style={{minHeight:"140px"}}></Textarea>
                </div>
                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                    <AtomText type='content' text='<b>Joined At</b>'/>
                    <AtomText type='content' text={profileItem? convertUTCToLocal(profileItem?.created_at) : ''} extraClass='mb-2'/>
                    <AtomText type='content' text='<b>Last Updated</b>'/>
                    <AtomText type='content' text={profileItem? convertUTCToLocal(profileItem?.updated_at) : ''}/>
                    <Button className='bg-success my-5 w-full'><FontAwesomeIcon icon={faFloppyDisk}/> Save Changes</Button>
                </div>
            </div>
        </div>
    )
}

export default OrganismsMyProfileForm;
