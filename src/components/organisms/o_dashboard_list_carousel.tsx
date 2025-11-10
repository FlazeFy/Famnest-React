"use client"
import * as React from 'react';
import { CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import OrganismsLastMoneyFlow from './o_last_money_flow';
import { MoneyFlowItem, TaskItem } from '@/helpers/variable';
import OrganismsTaskList from './o_task_list';

interface IDashboardListCarouselProps {
    lastMoneyItem: MoneyFlowItem[]
    taskItem: TaskItem[]
}

const OrganismsDashboardListCarousel: React.FunctionComponent<IDashboardListCarouselProps> = ({ lastMoneyItem, taskItem }) => {
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
                ]} className="w-full rounded-2xl p-5 pb-10 bg-primary text-white md:min-h-[85vh]">
                <CarouselContent>
                    <CarouselItem>
                        <CardContent>
                            <OrganismsLastMoneyFlow lastMoneyItem={lastMoneyItem}/>
                        </CardContent>
                    </CarouselItem>
                    <CarouselItem>
                        <CardContent>
                            <OrganismsTaskList taskItem={taskItem}/>
                        </CardContent>
                    </CarouselItem>
                </CarouselContent>
                <div className="carousel-container">
                    <CarouselPrevious/>
                    <CarouselNext/>
                </div>
            </Carousel>
        </div>
    );
};

export default OrganismsDashboardListCarousel;
