import logo from '../logo.svg'



export function SummaryCard(){
    return (
        <div className="w-1/2 bg-white p-4">
            <div className='flex justify-between items-center p-2'>
            <p className='text-sm font-light '>TODAY'S WEATHER</p>
            <p className='text-sm font-semibold'>Tue 21</p>
            </div>
            <div className="border border-gray border-t"></div>
            <div className='p-2'>
                <div className='flex'>
                <img src={logo} height='40' width='40'/>
                <p>Low clouds, then perhaps some thunderstorm</p>
                </div>
                <div className='flex'>
                <img src={logo} height='40' width='40'/>
                <p>Tonight partly cloudy</p>
                </div>
            </div>
        </div>
    )
}