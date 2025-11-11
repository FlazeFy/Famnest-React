import OrganismsMealScheduleCarousel from "@/components/organisms/o_meal_schedule_carousel";
import { mealItem } from "@/helpers/dummy";

export default function MealPage() {
    return (
        <div className='flex min-h-[90vh] flex-wrap text-center lg:text-start w-full'>
            <OrganismsMealScheduleCarousel mealItem={mealItem}/>
        </div>
    );
}
