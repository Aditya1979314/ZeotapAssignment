import { DayCard } from '../Components/DayCard';
import { SummaryCard } from '../Components/SummaryCard';
import { Sidefilter } from '../Components/SideFilter';
import { useEffect, useMemo, useState } from 'react';



export default function DayPage({location,settemp,temp}){ 
const[currentWeather,setcurrentWeather] = useState({});
const[summary,setsummary] = useState({})
const[thresholdtemp,setthresholdtemp] = useState(0);
const[thresholdweather,setthresholdweather] = useState('');



function getdateandmonth(date){
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthNumber = date.getMonth();
const day = date.getDate(); 
const month = months[monthNumber];

return {
    day:day,
    month:month
}
}

useEffect(()=>{
    function checkthreshold(){
        if(thresholdtemp == currentWeather.temp){
            alert("temperature threshold")
            setthresholdtemp(0);
        }

        if(thresholdweather === summary.weather){
            alert('weather threshold')
            setthresholdweather('');
        }
    }
    checkthreshold()
},[thresholdtemp,thresholdweather,currentWeather,summary])

useEffect(()=>{
async function fetchdailydata(){

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=${temp}&appid=${process.env.REACT_APP_API_ID}`);
    const result = await response.json();
    setcurrentWeather({
        temp:result.main.temp,
        min_temp:result.main.temp_min,
        max_temp:result.main.temp_max,
        humidity:result.main.humidity,
        icon:result.weather[0].icon,
        wind:result.wind.speed
    })

    setsummary({
        avg_temp:result.main.temp,
        max_temp:result.main.temp_max,
        min_temp:result.main.temp_min,
        weather:result.weather[0].description,
        day:getdateandmonth(new Date(result.dt*1000+(result.timezone*1000))).day,
        month:getdateandmonth(new Date(result.dt*1000+(result.timezone*1000))).month,
        icon:result.weather[0].icon
    })
}
fetchdailydata()
},[location,temp])



    return (
        <>
         <div className='absolute left-2 top-1/6'>
    <Sidefilter isdaypage={true} temp={temp} settemp={settemp} setthresholdtemp={setthresholdtemp} setthresholdweather={setthresholdweather}/>
    </div>
    <div className='flex justify-center items-center flex-col gap-2 mt-2'>
    <SummaryCard summary={summary} temp={temp}/>
    <DayCard currentWeather={currentWeather} temp={temp}/>
    </div>
        </>
    )
}