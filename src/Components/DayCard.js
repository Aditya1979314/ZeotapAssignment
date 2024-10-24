



export function DayCard({currentWeather,temp}){
    return(
        <div className='w-1/2 p-4 bg-white shadow rounded'>
            <p>Current Weather</p>
            <div className="border border-gray border-t"></div>
            <div className='p-2 flex justify-around items-center'>
            <div className='flex items-center '>
                <img src={`https://openweathermap.org/img/wn/${currentWeather.icon}.png`} width='100' height='100' alt="weather" />
                <div className='flex'>
                <h1 className='font-bold text-6xl'>{currentWeather.temp}</h1>
                <p className='font-bold'>.</p>
                </div>
                <p>C</p>
            </div>
            <div className=' w-2/5'>
                <div className=''>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Temperature</p>
                    <p className='font-semibold'>{currentWeather.temp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Max Temperature</p>
                    <p className='font-semibold'>{currentWeather.max_temp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Min Temperature</p>
                    <p className='font-semibold'>{currentWeather.min_temp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Humidity</p>
                    <p className='font-semibold'>{currentWeather.humidity} %</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Wind speed</p>
                    <p className='font-semibold'>{currentWeather.wind} m/s</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>
            </div>
            </div>
        </div>
    )
}