



export function Sidefilter({isdaypage,temp,settemp,setthresholdtemp,setthresholdweather}){

    function onchangehandler(e){
        if(e.target.value === 'Celsius')
            settemp('metric')
        else if(e.target.value === 'Kelvin')
            settemp('standard')
        else if(e.target.value === 'Fahrenheit')
            settemp('imperial')
    }


    return (
        <div className="bg-white w-72 p-4 shadow rounded">
            <div className="flex gap-1 mb-2">
            <p className="text-lg font-semibold">Temperature Unit :</p>
            <select className="border border-black" onChange={onchangehandler}>
                <option>Celsius</option>
                <option>Kelvin</option>
                <option>Fahrenheit</option>
            </select>
            </div>
            {
                isdaypage && (
                    <div>
                    <p className="text-lg font-semibold">Thresholds</p>
                        <div className="mb-2">
                            <input placeholder="temperature threshold" className="p-2 border border-black" onChange={(e)=>{
                                setthresholdtemp(e.target.value)
                            }}/>
                        </div>
                        <div>
                            <input placeholder="Weather condition" className="p-2 border border-black" onChange={(e)=>{
                                setthresholdweather(e.target.value)
                            }}/>
                        </div>
                    </div>
                )
            }
        </div>
    )
}