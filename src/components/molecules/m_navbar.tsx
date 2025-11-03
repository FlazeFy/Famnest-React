'use client'
import React, { useState } from 'react'

interface MenuItem { 
    title: string 
    target: string 

}
interface MoleculesNavbarProps { 
    menuItem: MenuItem[] 
}

const MoleculesNavbar: React.FC<MoleculesNavbarProps> = ({ menuItem }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="flex justify-between items-center pb-10 w-full">
            <div className="hidden md:flex">
                {
                    menuItem.map((dt, idx) => 
                        <a key={idx} className="nav-link rounded-full px-3 py-2 mr-2" href={dt.target}>{dt.title}</a>
                    )
                }
            </div>
            <a className="hidden md:flex items-center nav-link bg-success" href="/register">Register My Family</a>
            <button className={`menu-toggle block md:hidden ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {
                    isOpen ? 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                    : 
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                }
                </svg>
            </button>
            {
                isOpen && (
                    <div className="mobile-menu md:hidden shadow-2xl p-5 flex flex-col items-start animate-slideDown rounded-b-2xl">
                        {
                            menuItem.map((dt, idx) => <a key={idx} className="w-full text-left transition-all nav-link" href={dt.target}>{dt.title}</a>)
                        }
                        <a className="w-full text-left transition-all nav-link bg-success" href="/register">Register My Family</a>
                    </div>
                )
            }
        </nav>
    )
}

export default MoleculesNavbar