"use client"
import * as React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { CardContent } from '@/components/ui/card';
import AtomText from '../atoms/a_text';
import OrganismsMultiLineChart from './o_multi_line_chart';
import { dayName, listIncomeMonthly, listSpendingWeekly, monthName } from '@/helpers/dummy';

interface IOrganismsPeriodicFamilyMemberMoneyFlowCarouselProps {
}

const OrganismsPeriodicFamilyMemberMoneyFlowCarousel: React.FunctionComponent<IOrganismsPeriodicFamilyMemberMoneyFlowCarouselProps> = (props) => {
    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
    }, [api])

    return (
        <div className="w-full h-full flex flex-col justify-start text-center lg:text-left">
            <Carousel setApi={setApi}
                plugins={[
                    Autoplay({ delay: 7500 }),
                ]}
                className="w-full min-h-[85vh]">
                <AtomText type="sub-title" text="Here's the data visualization from your money flow" extraClass='mb-5'/>
                <CarouselContent>
                    <CarouselItem>
                        <CardContent>
                            <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                                    <div className='bg-white shadow-xl rounded-2xl'>
                                        <OrganismsMultiLineChart title='Weekly Spending' categories={dayName} series={listSpendingWeekly}/>
                                    </div>
                                </div>
                                <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                                    <div className='bg-white shadow-xl rounded-2xl'>
                                        <OrganismsMultiLineChart title='Monthly Income' categories={monthName} series={listIncomeMonthly}/>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </CarouselItem>
                    <CarouselItem>
                        <CardContent>
                            <div className="grid grid-cols-12 gap-4 w-full h-full">
                                
                            </div>
                        </CardContent>
                    </CarouselItem>
                </CarouselContent>
                <div className="carousel-container">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    );
};

export default OrganismsPeriodicFamilyMemberMoneyFlowCarousel;
