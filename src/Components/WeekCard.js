



export default function WeekCard({temp,minTemp,maxTemp,rainSum,precProb,windSpeed,time}){
    return (
        <div className='w-1/2 p-4 bg-white shadow rounded'>
            <p>{time}</p>
            <div className="border border-gray border-t"></div>
            <div className='p-2 flex justify-around items-center'>
            <div className='flex items-center '>
                <div className='flex'>
                <h1 className='font-bold text-6xl'>{maxTemp}</h1>
                <p className='font-bold'>.</p>
                </div>
                <p>{ (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
            </div>
            <div className=' w-2/5'>
                <div className=''>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Max Temperature</p>
                    <p className='font-semibold'>{maxTemp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Min Temperature</p>
                    <p className='font-semibold'>{minTemp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Max Wind speed</p>
                    <p className='font-semibold'>{windSpeed} Km/h</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Rain sum</p>
                    <p className='font-semibold'>{rainSum} mm</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>precipitation probability</p>
                    <p className='font-semibold'>{precProb}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>
            </div>
            </div>
        </div>
    )
}