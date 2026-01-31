"use client"
import React from 'react'
import { AtomBreakline } from '../atoms/a_breakline'
import AtomButton from '../atoms/a_button'
import AtomText from '../atoms/a_text'

interface ContactItem {
    title: any
    url: string
}

interface OrganismsContactProps {
    contactItem: ContactItem[]
    email: string
    bodyEmail: string
}

const OrganismsContact: React.FC<OrganismsContactProps> = ({ contactItem, email, bodyEmail }) => {
    return (
        <div className=" bg-white p-10 pb-20 lg:px-20 text-center md:text-start flex flex-wrap -mx-4" id="contactSection">
            <div className="w-full sm:w-full md:w-7/12 lg:w-8/12">
                <AtomText type='content-title' text="Want to collaborate?" extraClass='mb-1'/>
                <AtomText type='title' text="Let's make something amazing together"/>
                <AtomBreakline length={3}/>
                <AtomText type='content-title' text="Start By"/>
                <AtomText type='sub-title' text={<><AtomButton type='btn-link' text="saying hi to Leo" url={`mailto:${email}?subject=Hello&body=${bodyEmail}`}/></>}/>
            </div>
            <div className="w-full sm:w-full md:w-5/12 lg:w-4/12 items-center justify-start mt-10 md:mt-0 lg:mt-0">
                <AtomText type='sub-title-small' text='Information'/>
                <AtomBreakline length={1}/>
                {
                    contactItem.map((dt,idx) => (
                        <AtomButton key={idx} type='btn-link' text={dt.title} extraClass="mb-3 inline mr-5 md:block md:mr-0" url={dt.url}/>
                    ))
                }
            </div>
        </div>
    )
}

export default OrganismsContact