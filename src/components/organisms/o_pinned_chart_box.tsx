"use client"
import React, { useEffect, useState } from 'react'
import { CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import OrganismsLineChart from './o_line_chart'
import OrganismsPieChart from './o_pie_chart'
import { getTotalDailyTask } from '@/repositories/r_task'
import { getTotalDailyCashFlow } from '@/repositories/r_cash_flow'
import { runWithDelayQueue } from '@/helpers/execution'

interface IOrganismsPinnedChartBoxProps {}

interface PinnedChartData {
    title: string
    data: any
    type: 'line' | 'pie'
}

const OrganismsPinnedChartBox: React.FunctionComponent<IOrganismsPinnedChartBoxProps> = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [error, setError] = useState<string | null>(null)
    const [pinnedChart, setPinnedChart] = useState<PinnedChartData[]>([
        {
            title: 'Total Daily Task For Last Week',
            type: 'line',
            data: []
        },
        {
            title: 'Total Daily Spend For Last Week',
            type: 'line',
            data: []
        },
        {
            title: 'Task Contribution',
            type: 'pie',
            data: [
                { context: 'Robert', total: 12 },
                { context: 'Leo', total: 18 },
                { context: 'Budi', total: 11 },
            ]
        }
    ])

    useEffect(() => {
        runWithDelayQueue(1500, [
            fetchTotalDailyTask,
            fetchTotalDailyCashFlow
        ])
    }, [])

    const fetchTotalDailyTask = async () => {
        try {
            const today = new Date().toISOString().slice(0, 10)
            const result = await getTotalDailyTask(today)
        
            setPinnedChart(prev => {
                const updated = [...prev]
                updated[0] = {
                    ...updated[0],
                    data: [...result.data].reverse()
                }
                return updated
            })
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        }
    }

    const fetchTotalDailyCashFlow = async () => {
        try {
            const today = new Date().toISOString().slice(0, 10)
            const result = await getTotalDailyCashFlow(today)
        
            setPinnedChart(prev => {
                const updated = [...prev]
                updated[1] = {
                    ...updated[1],
                    data: [...result.data].reverse()
                }
                return updated
            })
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        }
    }

    useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])
    
    return (
        <div className="w-full h-full flex flex-col justify-start text-center lg:text-left">
            <Carousel setApi={setApi}  plugins={[
                    Autoplay({
                        delay: 7500,
                    }),
                ]} className="w-full rounded-2xl p-5 pb-10 bg-primary text-white">
                <CarouselContent className="w-full">
                    {
                        pinnedChart.map((dt: any, idx: number) => (
                            <CarouselItem className="w-full h-85" key={idx}>
                                <div className="w-full h-full">
                                    <CardContent>
                                        { dt.type === 'line' ? <OrganismsLineChart title={dt.title} data={dt.data}/> : <OrganismsPieChart title={dt.title} data={dt.data}/>}
                                    </CardContent>
                                </div>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="carousel-container">
                    <CarouselPrevious/>
                    <CarouselNext/>
                </div>
            </Carousel>
            <div className="text-muted-foreground py-2 text-center text-sm">
                Pinned Chart {current} of {count}
            </div>
        </div>
    )
}

export default OrganismsPinnedChartBox;
