'use client'
import React, { useEffect, useState } from 'react'
import AtomText from '../atoms/a_text'
import { Button } from '../ui/button'
import { OrganismsExportDataset } from './o_export_dataset'

interface IOrganismsExportSectionProps {}

const OrganismsExportSection: React.FunctionComponent<IOrganismsExportSectionProps> = () => {
    return (
        <div className='shadow-lg rounded-2xl p-10 mt-5'>
            <AtomText type='sub-title' text='Export Dataset'/>
            <hr className='my-5'/>
            <div className='flex gap-2'>
                <OrganismsExportDataset context='cash_flows'/>
                <OrganismsExportDataset context='tasks'/>
                <OrganismsExportDataset context='meals'/>
            </div>
        </div>
    )
}

export default OrganismsExportSection;
