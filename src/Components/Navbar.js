import { useState } from "react";
import { Link } from "react-router-dom";



export function Navbar({location,setlocation}){
const[inputdata,setinputdata] = useState();

async function onsubmithandler(){
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputdata}&limit=5&appid=${process.env.REACT_APP_API_ID}`);
    const result = await response.json();
    if(result.length){
        setlocation({
            lat:result[0].lat,
            lon:result[0].lon,
            city:result[0].name,
            state:result[0].state
        })
    }else{
        alert("Incorrect address");
    }
 
    
}

return (
    <div>
    <div className="bg-black flex justify-around items-center py-4">
        <div className="flex gap-3 items-center">
            <h1 className="text-orange-500">ZEOTAP</h1>
            <div className="text-white">
            <p>{location.city},{location.state}</p>
            </div>
        </div>
        <div>
            <input className="mr-2 px-2 py-1" placeholder="Search by city and state" onChange={(e)=>{
                setinputdata(e.target.value);
            }}/>
            <button className="bg-sky-400 px-2 py-1 rounded text-white hover:bg-sky-300" onClick={onsubmithandler}>Search</button>
        </div>
    </div>


    <div className="flex justify-center items-center flex-col mb-2">
        <div className="flex justify-around items-center w-1/2 text-lg font-light py-2">
        <Link to={'/page'} className="hover:cursor-pointer hover:text-orange-400 focus:text-color-400 active:text-orange-400">Today</Link>
        <Link to={'/hour'} className="hover:cursor-pointer hover:text-orange-400 focus:text-color-400 active:text-orange-400">Hourly</Link>
        <Link to={'/week'} className="hover:cursor-pointer hover:text-orange-400 focus:text-color-400 active:text-orange-400">Daily</Link>
        </div>
        <div className="border border-black-400 w-1/2"></div>
    </div>

    </div>
)
}