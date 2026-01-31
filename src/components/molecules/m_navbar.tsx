'use client'
import React, { useState } from 'react'
import Link from "next/link"
import AtomButton from "../atoms/a_button"
import { usePathname } from 'next/navigation'
import useAuthStore from '@/store/s_auth'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface MenuItem { 
    title: string 
    target: string 
}
interface MoleculesNavbarProps { 
    menuItem: MenuItem[] 
    isSignedIn: boolean
    isLanding: boolean
}

const MoleculesNavbar: React.FC<MoleculesNavbarProps> = ({ menuItem, isSignedIn, isLanding }) => {
    const pathname = usePathname()
    const { email } = useAuthStore()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center pb-10 w-full" style={ pathname === '/' ? { border:"none", boxShadow:"none", padding:"0", marginBottom:"var(--spaceMD)", position:"relative" } : {} }>
            <div className="hidden md:flex gap-2">
                {
                    menuItem.map((dt, idx) => 
                        <Link key={idx} href={dt.target}>
                            <AtomButton type='btn-link' extraClass="hidden md:flex items-center" text={dt.title}/>
                        </Link>
                    )
                }
            </div>
            {
                isLanding ?
                    <Link href={ isSignedIn ? '/family' : '/register' }>
                        <AtomButton type='btn-success' extraClass="hidden md:flex items-center" text={ isSignedIn ? 'Manage Family' : 'Register My Family' }/>
                    </Link>
                :
                    <div className='inline-flex gap-2'>
                        <Link href={'/family/profile'}>
                            <AtomButton type='btn-primary' text={
                                <span className="inline-flex items-center gap-2">
                                    <FontAwesomeIcon icon={faUser}/><span className='hidden md:flex'> {email}</span>
                                </span>
                            }/>
                        </Link>
                        <Link href={'/'}>
                            <AtomButton type='btn-success' text={'Famnest'}/>
                        </Link>
                    </div>
                    
            }
            <button className={`menu-toggle block md:hidden ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={ isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
                </svg>
            </button>
            {
                isOpen && (
                    <div className="mobile-menu md:hidden shadow-2xl p-5 flex flex-col items-start animate-slideDown rounded-b-2xl">
                        {
                            menuItem.map((dt, idx) => (
                                <Link key={idx} href={dt.target}>
                                    <AtomButton extraClass='w-full text-left transition-all nav-link' type='btn-primary' text={dt.title}/>
                                </Link>
                            ))
                        }
                        {
                            isLanding ?
                                <Link href={ isSignedIn ? '/family' : '/register' }>
                                    <AtomButton type='btn-success' extraClass="w-full text-left transition-all nav-link" text={ isSignedIn ? 'Manage Family' : 'Register My Family' }/>
                                </Link>
                            :
                                <Link href='/'>
                                    <AtomButton type='btn-success' extraClass="nav-link rounded-full px-3 py-2 mr-2 font-bold" text='Famnest'/>
                                </Link>
                        }
                    </div>
                )
            }
        </nav>
    )
}

export default MoleculesNavbar