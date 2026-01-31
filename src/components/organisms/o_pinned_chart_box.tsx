"use client"
import * as React from 'react'
import { CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import OrganismsLineChart from './o_line_chart'
import OrganismsPieChart from './o_pie_chart'

interface PinnedChartData {
    title: string
    data: any
    type: string
}

interface IOrganismsPinnedChartBoxProps {
    pinnedChartData: PinnedChartData[]
}

const OrganismsPinnedChartBox: React.FunctionComponent<IOrganismsPinnedChartBoxProps> = ({pinnedChartData}) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)
    React.useEffect(() => {
        if (!api) {
            return
        }
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
                        pinnedChartData.map((dt: any, idx: number) => (
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
