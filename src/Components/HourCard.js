import logo from '../logo.svg'



export function HourCard(){
    return (
        <div className='w-1/2 p-4 bg-white shadow rounded'>
        <p>10 PM</p>
        <div className="border border-black border-t"></div>
        <div className='p-2 flex justify-around items-center'>
        <div className='flex items-center '>
            <img src={logo} width='200' height='200' />
            <div className='flex'>
            <h1 className='font-bold text-6xl'>25</h1>
            <p className='font-bold'>.</p>
            </div>
            <p>C</p>
        </div>
        <div className=' w-2/5'>
            <div className=''>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Temperature</p>
                <p className='font-semibold'>NE 9Km/h</p>
            </div>
            <div className="border border-black border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Max Temperature</p>
                <p className='font-semibold'>NE 9Km/h</p>
            </div>
            <div className="border border-black border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Min Temperature</p>
                <p className='font-semibold'>NE 9Km/h</p>
            </div>
            <div className="border border-black border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Humidity</p>
                <p className='font-semibold'>NE 9Km/h</p>
            </div>
            <div className="border border-black border-b"></div>
            </div>

            <div>
            <div className='flex p-2 justify-between items-center'>
                <p className='font-light'>Wind speed</p>
                <p className='font-semibold'>NE 9Km/h</p>
            </div>
            <div className="border border-black border-b"></div>
            </div>
        </div>
        </div>
    </div>
    )
}