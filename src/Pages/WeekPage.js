
import { useEffect, useState } from 'react';
import { Sidefilter } from '../Components/SideFilter';
import WeekCard from '../Components/WeekCard';



export default function WeekPage({location,temp,settemp}){
const[weekdata,setweekdata] = useState([]);

function formatDate(dateString) {
    const months = [
        "January", "February", "March", "April", "May", "June", 
        "July", "August", "September", "October", "November", "December"
    ];

    const [year,month, day] = dateString.split('-');
    const monthName = months[parseInt(month) - 1]; // Convert month number to month name

    return `${day} ${monthName}`;
}

function saveweekdata(result){
    let final = [];

    for(let i=0;i<5;i++){
        let ans = {};
        ans.id = i;
        ans.maxTemp = result.daily.temperature_2m_max[i];
        ans.minTemp = result.daily.temperature_2m_min[i];
        ans.rainSum = result.daily.rain_sum[i];
        ans.precProb = result.daily.precipitation_probability_max[i];
        ans.windSpeed = result.daily.wind_speed_10m_max[i];
        ans.time = formatDate(result.daily.time[i])
        final.push(ans);
    }

    return final;
}

useEffect(()=>{
async function fetchdata(){
    let temperature = '';
    if(temp === 'standard' || temp === 'metric')
        temperature = 'celsius'
    else
    temperature = 'fahrenheit'
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=temperature_2m_max,temperature_2m_min,rain_sum,precipitation_probability_max,wind_speed_10m_max&models=icon_seamless&unit=${temperature}`);
    const result = await response.json();
    setweekdata(saveweekdata(result));
}
fetchdata();
},[location,temp])

    return (<>
        <div className='absolute left-2 top-1/6'>
        <Sidefilter isdaypage={false} settemp={settemp} temp={temp}/>
        </div>
        <div className='flex justify-center items-center flex-col gap-2 mt-2'>
            {
                weekdata.map((obj)=>{
                    return <WeekCard key={obj.id} maxTemp={obj.maxTemp} minTemp={obj.minTemp} precProb={obj.precProb} rainSum={obj.rainSum} time={obj.time} windSpeed={obj.windSpeed} temp={temp}/>
                })
            }
        </div>
        </>
    )
}