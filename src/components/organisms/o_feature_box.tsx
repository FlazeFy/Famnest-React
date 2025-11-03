"use client"
import * as React from 'react';
import AtomText from '../atoms/a_text';
import { CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

interface ListFeature {
    title: string,
    description: string
}

interface IOrganismsFeatureBoxProps {
    feature: ListFeature[]
}

const OrganismsFeatureBox: React.FunctionComponent<IOrganismsFeatureBoxProps> = (props) => {
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
        <div className="flex flex-col lg:flex-row items-center justify-between w-full mt-10 gap-10">
            <div className="w-full md:w-5/12 lg:w-1/3 flex flex-col justify-center text-center lg:text-left mb-6 md:mb-0">
                <AtomText type="sub-title" text="Our Feature" />
                <AtomText type="content" text="Stay connected anywhere. Famnest is available on every platform you use, from Mobile, Desktop, and Social Media Bot." />
            </div>
            <div className="w-full md:w-7/12 lg:w-2/3 flex flex-col justify-center text-center lg:text-left">
                <Carousel setApi={setApi}  plugins={[
                        Autoplay({
                            delay: 7500,
                        }),
                    ]} className="w-full rounded-2xl p-5 bg-primary text-white">
                    <CarouselContent className="w-full h-auto">
                    {
                        props.feature.map((dt, index) => (
                            <CarouselItem key={index} className="w-full">
                            <div className="w-full h-full">
                                <CardContent className="flex flex-col lg:flex-row items-center justify-between h-full p-6 gap-6">
                                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                                    <h3 className="text-2xl font-semibold mb-2">{dt.title}</h3>
                                </div>
                                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
                                    <p className="text-base">{dt.description}</p>
                                </div>
                                </CardContent>
                            </div>
                            </CarouselItem>
                        ))
                    }
                    </CarouselContent>
                </Carousel>
                <div className="text-muted-foreground py-2 text-center text-sm">
                    Feature {current} of {count}
                </div>
            </div>
        </div>
    );
};

export default OrganismsFeatureBox;
