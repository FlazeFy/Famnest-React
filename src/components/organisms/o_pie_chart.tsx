'use client'
import * as React from 'react'
import dynamic from 'next/dynamic'
import AtomText from '../atoms/a_text'
import MoleculesNoDataBox from '../molecules/m_no_data_box'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const colorPalleteChart = ['#46dca2', '#f55d86', '#FFC352', '#00b8ff']

interface IOrganismsPieChartProps {
  title: string
  data: any
}

const OrganismsPieChart: React.FunctionComponent<IOrganismsPieChartProps> = ({ title, data }) => {
    if (!data || data.length === 0) return <MoleculesNoDataBox/>

    const hasValidStructure = Object.keys(data[0]).length === 2 && typeof data[0].context === 'string' && Number.isInteger(data[0].total)

    if (!hasValidStructure) return <MoleculesNoDataBox/>

    const totals = data.map(d => d.total)
    const contexts = data.map(d => d.context)

    const options: ApexCharts.ApexOptions = {
        chart: {
            type: 'pie',
            height: 300,
        },
        labels: contexts,
        colors: colorPalleteChart,
        legend: { position: 'bottom' },
        responsive: [
            {
                options: { legend: { position: 'bottom' } },
            },
        ],
    }

    return (
        <div className="w-full text-center">
            <AtomText type='content-title' text={title} />
            <ApexChart options={options} series={totals} type="pie" height={300} />
        </div>
    )
}

export default OrganismsPieChart
