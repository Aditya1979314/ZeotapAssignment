



export function HourCard({temp,temperature,time,humidity,wind_speed,rain,precipitation}){
    return (
        <div className='w-1/2 p-4 bg-white shadow rounded'>
        <p>{time}</p>
        <div className="border border-gray border-t"></div>
        <div className='p-2 flex justify-around items-center'>
        <div className='flex items-center '>
            <div className='flex'>
            <h1 className='font-bold text-6xl'>{temperature}</h1>
            <p className='font-bold'>.</p>
            </div>
            <p>C</p>
        </div>
        <div className=' w-2/5'>
            <div className=''>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Temperature</p>
                <p className='font-semibold'>{temperature} {(temp === "metric" || temp === "standard") ? <span>C</span> : <span>F</span>}</p>
            </div>
            <div className="border border-gray border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Humidity</p>
                <p className='font-semibold'>{humidity} %</p>
            </div>
            <div className="border border-gray border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Wind Speed</p>
                <p className='font-semibold'>{wind_speed} Km/h</p>
            </div>
            <div className="border border-gray border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Rain</p>
                <p className='font-semibold'>{rain} mm</p>
            </div>
            <div className="border border-gray border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Precipitation</p>
                <p className='font-semibold'>{precipitation} mm</p>
            </div>
            <div className="border border-gray border-b"></div>
            </div>
        </div>
        </div>
    </div>
    )
}