



export function SummaryCard({summary,temp}){
    return (
        <div className="w-1/2 bg-white p-4">
            <div className='flex justify-between items-center p-2 '>
            <p className='text-sm font-light '>TODAY'S WEATHER</p>
            <p className='text-sm font-semibold'>{summary.month} {summary.day}</p>
            </div>
            <div className="border border-gray border-t"></div>
            <div className='p-2 flex'>
                <div className='w-1/2'>
                <div className='flex'>
                <img src={`https://openweathermap.org/img/wn/${summary.icon}.png`} height='40' width='40' alt="weather"/>
                <p>Dominant weather condition today would be {summary.weather}</p>
                </div>
                </div>
                <div className='w-2/5'>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Max Temperature</p>
                    <p className='font-semibold'>{summary.max_temp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Min Temperature</p>
                    <p className='font-semibold'>{summary.min_temp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Average Temperature</p>
                    <p className='font-semibold'>{summary.avg_temp} { (temp === "metric") ? <span>C</span> : (temp === "standard") ? <span>K</span> : <span>F</span>}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>

                <div>
                <div className='flex p-2 justify-between items-center'>
                    <p className='font-light'>Weather condition</p>
                    <p className='font-semibold'>{summary.weather}</p>
                </div>
                <div className="border border-gray border-b"></div>
                </div>
                </div>
            </div>
        </div>
    )
}