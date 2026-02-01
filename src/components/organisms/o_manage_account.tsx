'use client'
import React from 'react'
import AtomText from '../atoms/a_text'
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'
import useAuthStore from '@/store/s_auth'

interface IOrganismsManageAccountProps {}

export const OrganismsManageAccount: React.FunctionComponent<IOrganismsManageAccountProps> = () => {
    const onLogOutStore = useAuthStore((state) => state.onLogOutStore)
    const router = useRouter()

    const handleLogout = async () => {
        const confirmResult = await Swal.fire({
            title: 'Sign out?',
            text: 'You will be logged out from your account',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, sign out',
            cancelButtonText: 'Cancel',
            allowOutsideClick: false,
            allowEscapeKey: false,
        })
    
        if (!confirmResult.isConfirmed) return
    
        const successResult = await Swal.fire({
            title: 'Signed out',
            text: 'You have been logged out successfully',
            icon: 'success',
            confirmButtonText: 'Continue',
            allowOutsideClick: false,
            allowEscapeKey: false,
        })
    
        if (!successResult.isConfirmed) return
    
        // Clear global state
        onLogOutStore()

        // Clear client local / session
        localStorage.clear()
        sessionStorage.clear()

        router.push('/')
    }

    return (
        <div className='shadow-lg rounded-2xl p-10'>
            <AtomText type='sub-title' text='Manage Account'/>
            <hr className='my-5'/>

            <div className='flex gap-2'>
                <Button className='bg-danger' onClick={handleLogout}><FontAwesomeIcon icon={faArrowRightFromBracket} /> Sign Out</Button>
            </div>
        </div>
    )
}
