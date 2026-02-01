'use client'
import React, { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CardContent } from '@/components/ui/card'
import MoleculesDayMealBox from '../molecules/m_day_meal_box'
import AtomText from '../atoms/a_text'
import OrganismsManageMealByTimeDayDialog from './o_manage_meal_dialog'
import OrganismsLastMealBox from './o_last_meal_box'
import { getAllMeal, MealItem } from '@/repositories/r_meal'
import Skeleton from 'react-loading-skeleton'
import MoleculesNotFoundBox from '../molecules/m_not_found_box'

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

interface IOrganismsMealScheduleCarouselProps { }

const OrganismsMealScheduleCarousel: React.FunctionComponent<IOrganismsMealScheduleCarouselProps> = () => {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)
    const [count, setCount] = useState(0)
    const [mealItem, setMealItem] = useState<MealItem[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        fetchMeal()

        if (!api) return
        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)
        api.on('select', () => setCurrent(api.selectedScrollSnap() + 1))
    }, [api])

    const fetchMeal = async () => {
        try {
            const data = await getAllMeal()
            setMealItem(data)
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
            <Carousel setApi={setApi}
                plugins={[
                    Autoplay({ delay: 7500 }),
                ]}
                className="w-full rounded-2xl p-5 pb-10 bg-primary min-h-[85vh]">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-3'>
                    <div>
                        <AtomText type="sub-title" text="Here's the weekly schedule for your meal"/>
                    </div>
                    <div>
                        <OrganismsLastMealBox mealItem={mealItem.slice(0,3)}/>
                    </div>
                </div>
                <CarouselContent>
                    <CarouselItem className="hidden lg:block">
                        <CardContent>
                            <div className="flex flex-wrap justify-center gap-4 h-full">
                                {
                                    days.map(day => (
                                        <div key={day} className="flex-1 min-w-[12%] h-full">
                                            <MoleculesDayMealBox dayName={day} mealItem={mealItem} dayLabelAndManageButton={
                                                (dayName, time) => (
                                                    <OrganismsManageMealByTimeDayDialog dayName={dayName} time={time} mealItem={mealItem} fetchMeal={fetchMeal}/>
                                                )
                                            }/>
                                        </div>
                                    ))
                                }
                            </div>
                        </CardContent>
                    </CarouselItem>
                    {
                        Array.from({ length: Math.ceil(days.length / 3) }).map((_, i) => (
                            <CarouselItem key={i} className="hidden md:block lg:hidden">
                            <CardContent>
                                <div className="flex flex-wrap justify-center gap-4">
                                {
                                    days.slice(i * 3, i * 3 + 3).map(day => (
                                        <div key={day} className="flex-1 min-w-[28%] h-full">
                                            <MoleculesDayMealBox dayName={day} mealItem={mealItem} dayLabelAndManageButton={
                                                (dayName, time) => (
                                                    <OrganismsManageMealByTimeDayDialog dayName={dayName} time={time} mealItem={mealItem} fetchMeal={fetchMeal}/>
                                                )
                                            }/>
                                        </div>
                                    ))
                                }
                                </div>
                            </CardContent>
                            </CarouselItem>
                        ))
                    }
                    {
                        days.map(day => (
                            <CarouselItem key={day} className="block md:hidden">
                                <CardContent>
                                    <div className="flex justify-center">
                                        <MoleculesDayMealBox dayName={day} mealItem={mealItem} dayLabelAndManageButton={
                                            (dayName, time) => (
                                                <OrganismsManageMealByTimeDayDialog dayName={dayName} time={time} mealItem={mealItem} fetchMeal={fetchMeal}/>
                                            )
                                        }/>
                                    </div>
                                </CardContent>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <div className="carousel-container">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    )
}

export default OrganismsMealScheduleCarousel;
