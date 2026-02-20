"use client"
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CardContent } from '@/components/ui/card'
import AtomText from '../atoms/a_text'
import OrganismsMultiLineChart from './o_multi_line_chart'
import OrganismsPieChart from './o_pie_chart'
import { CashFlowByCategoryResponse, getTotalCashFlowPerCategoryRepo } from '@/repositories/r_cash_flow'
import Skeleton from 'react-loading-skeleton'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'

interface IOrganismsPeriodicFamilyMemberMoneyFlowCarouselProps {}

const OrganismsPeriodicFamilyMemberMoneyFlowCarousel: React.FunctionComponent<IOrganismsPeriodicFamilyMemberMoneyFlowCarouselProps> = (props) => {
    // For retrive value from repo
    const [statsItem, setStatsItem] = useState<CashFlowByCategoryResponse>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    // For carousel
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)

    useEffect(() => {
        fetchStats()

        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
    }, [api])

    const fetchStats = async () => {
        try {
            const data = await getTotalCashFlowPerCategoryRepo()
            setStatsItem(data)
        } catch (err: any) {
            setError(err?.response?.data?.message || "Something went wrong")
        } finally {
            setLoading(false)
        }
    }

    if (loading) return <Skeleton style={{height:"400px"}}/>
    if (error) return <MoleculesNotFoundBox title="No enough data to show" style={{height:"400px"}}/>

    return (
        <div className="w-full h-full flex flex-col justify-start text-center lg:text-left">
            {
                statsItem &&
                    <Carousel setApi={setApi}
                        plugins={[
                            Autoplay({ delay: 7500 }),
                        ]}
                        className="w-full min-h-[85vh]">
                        <AtomText type="sub-title" text="Here's the data visualization from your cash flow" extraClass='mb-5'/>
                        <CarouselContent>
                            <CarouselItem>
                                <CardContent>
                                    <div className="grid grid-cols-12 gap-4 w-full h-full py-5">
                                        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                                            <div className='bg-white shadow-xl rounded-2xl'>
                                                <OrganismsMultiLineChart title='Weekly Spending' categories={statsItem?.spending.categories} series={statsItem?.spending.series}/>
                                            </div>
                                            <div className='bg-white shadow-xl rounded-2xl py-5 my-5'>
                                                <OrganismsPieChart title='Spending vs Income Comparison' data={statsItem?.comparison}/>
                                            </div>
                                        </div>
                                        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6">
                                            <div className='bg-white shadow-xl rounded-2xl'>
                                                <OrganismsMultiLineChart title='Monthly Income' categories={statsItem?.income.categories} series={statsItem?.income.series}/>
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
            }
        </div>
    )
}

export default OrganismsPeriodicFamilyMemberMoneyFlowCarousel;
