'use client'
import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { CardContent } from '@/components/ui/card'
import MoleculesDayTaskBox from '../molecules/m_day_task_box'
import { TaskItem, TaskScheduleItem } from '@/helpers/variable'
import AtomText from '../atoms/a_text'
import OrganismsAddTaskScheduleDialog from './o_add_task_schedule_dialog'
import OrganismsEditTaskScheduleDialog from './o_edit_task_schedule_dialog'

const days = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

interface IOrganismsTaskScheduleCarouselProps {
    taskItems: TaskScheduleItem[]
}

const OrganismsTaskScheduleCarousel: React.FunctionComponent<IOrganismsTaskScheduleCarouselProps> = ({taskItems}) => {
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
            <Carousel setApi={setApi} plugins={[ Autoplay({ delay: 7500 }) ]} className="w-full rounded-2xl p-5 pb-10 bg-primary min-h-[85vh]">
                <AtomText type="sub-title" text="Here's the weekly schedule for your task" extraClass='mb-5'/>
                <CarouselContent>
                    <CarouselItem className="hidden lg:block">
                        <CardContent>
                            <div className="flex flex-wrap justify-center gap-4 h-full">
                                {
                                    days.map(day => (
                                        <div key={day} className="flex-1 min-w-[12%] h-full">
                                            <MoleculesDayTaskBox dayName={day} taskItem={taskItems} addTaskScheduleDialog={<OrganismsAddTaskScheduleDialog/>} editTaskScheduleDialog={(taskItem: TaskScheduleItem) => <OrganismsEditTaskScheduleDialog taskItem={taskItem}/>}/>
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
                                            <MoleculesDayTaskBox dayName={day} taskItem={taskItems} addTaskScheduleDialog={<OrganismsAddTaskScheduleDialog/>} editTaskScheduleDialog={(taskItem: TaskScheduleItem) => <OrganismsEditTaskScheduleDialog taskItem={taskItem}/>}/>
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
                                        <MoleculesDayTaskBox dayName={day} taskItem={taskItems} addTaskScheduleDialog={<OrganismsAddTaskScheduleDialog/>} editTaskScheduleDialog={(taskItem: TaskScheduleItem) => <OrganismsEditTaskScheduleDialog taskItem={taskItem}/>}/>
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

export default OrganismsTaskScheduleCarousel;
