"use client"
import * as React from 'react'
import dynamic from "next/dynamic"
import AtomText from '../atoms/a_text'
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false })

interface SeriesData {
    name: string
    data: number[]
}

interface IOrganismsMultiLineChartProps {
    categories: string[]
    series: SeriesData[]
    title: string
}

const OrganismsMultiLineChart: React.FunctionComponent<IOrganismsMultiLineChartProps> = ({categories, series, title}) => {
    const options: ApexCharts.ApexOptions = {
        chart: {
            type: "line",
            toolbar: { show: false }
        },
        stroke: {
            curve: "smooth",
            width: 3
        },
        xaxis: {
            categories: categories
        },
        legend: {
            position: "top"
        },
        grid: {
            borderColor: "#e5e7eb"
        }
    }

    return (
        <div className="text-dark w-full text-center">
            <AtomText type='sub-title' text={title}/>
            <ReactApexChart options={options} series={series} type="line"/>
        </div>
    )
}

export default OrganismsMultiLineChart;
