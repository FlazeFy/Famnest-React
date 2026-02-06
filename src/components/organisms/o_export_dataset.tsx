'use client'
import React, { useEffect, useState } from 'react'
import Swal from "sweetalert2"
import { Button } from '../ui/button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileExport } from '@fortawesome/free-solid-svg-icons'
import { getExportDataset } from '@/repositories/r_export'

interface IOrganismsExportDatasetProps {
    context: string
}

export const OrganismsExportDataset: React.FunctionComponent<IOrganismsExportDatasetProps> = ({ context }) => {
    const fetchExportDataset = async () => {
        try {
            Swal.showLoading()
            const blob = await getExportDataset(context)
            const url = window.URL.createObjectURL(new Blob([blob]))
            const link = document.createElement("a")
            link.href = url
            link.setAttribute("download", `${context}_export.csv`)
            document.body.appendChild(link)
            link.click()
            link.remove()
            Swal.hideLoading()
      
            Swal.fire("Success", "Exported dataset successfully!", "success")
        } catch (err: any) {
            Swal.fire("Error", err?.message || "Failed to export dataset", "error")
        }
    }

    return <Button variant="outline" className="bg-primary" onClick={fetchExportDataset}><FontAwesomeIcon icon={faFileExport}/> Export {context}</Button>
}
