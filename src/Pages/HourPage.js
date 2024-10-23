import { Sidefilter } from '../Components/SideFilter';
import { HourCard } from '../Components/HourCard';
import { useEffect, useState } from 'react';



export default function HourPage({location,temp,settemp}){
const[hourdata,sethourdata] = useState([{}])

function convertTo12Hour(time24) {
    let [hours] = time24.split(':').map(Number);
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours} ${period}`;
}


function savehourdata(result){
let final = [];

for(let i=0;i<24;i = i+4){
let ans = {};
ans.id = i;
ans.temperature = result.hourly.temperature_2m[i];
ans.humidity = result.hourly.relative_humidity_2m[i];
ans.wind_speed = result.hourly.wind_speed_10m[i];
ans.time = convertTo12Hour(result.hourly.time[i].split('T')[1]);
ans.rain = result.hourly.rain[i];
ans.precipitation = result.hourly.precipitation[i];
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
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&hourly=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m,precipitation,rain&temperature_unit=${temperature}`);
    const result = await response.json();
    console.log(result)
    sethourdata(savehourdata(result));
}
fetchdata()
},[location,temp])


    return (<>
        <div className='absolute left-2 top-1/6'>
        <Sidefilter isdaypage={false} temp={temp} settemp={settemp}/>
        </div>
        <div className='flex justify-center items-center flex-col gap-2 mt-2'>
            {
                hourdata.map((obj)=>{
                    return <HourCard key={obj.id} temp={temp} time={obj.time} wind_speed={obj.wind_speed} humidity={obj.humidity} temperature={obj.temperature} rain={obj.rain} precipitation={obj.precipitation}/>
                })
            }
        </div>
        </>
    )
}