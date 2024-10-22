import { DayCard } from '../Components/DayCard';
import { SummaryCard } from '../Components/SummaryCard';
import { Sidefilter } from '../Components/SideFilter';



export default function DayPage(){
    return (
        <>
         <div className='absolute left-2 top-1/6'>
    <Sidefilter isdaypage={true}/>
    </div>
    <div className='flex justify-center items-center flex-col gap-2 mt-2'>
    <SummaryCard/>
    <DayCard/>
    </div>
        </>
    )
}