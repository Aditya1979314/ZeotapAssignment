
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Route,Routes, Navigate} from 'react-router-dom';
import DayPage from './Pages/DayPage';
import HourPage from './Pages/HourPage';
import WeekPage from './Pages/WeekPage';
import { useState } from 'react';

function App() {
const [location,setlocation] = useState({
  lat:18.5204,
  lon:73.8567,
  city:'Pune',
  state:"Maharashtra"
});

const[temp,settemp] = useState('metric')


  return (<div className='bg-gray-100 h-full relative'>
    <BrowserRouter>
    <Navbar location={location} setlocation={setlocation}/>
    <Routes>
    <Route path="*" element={<Navigate to="/page" />} />
      <Route default path="/page" element={<DayPage location={location} settemp={settemp} temp={temp}/>}/>
      <Route path="/hour" element={<HourPage location={location} settemp={settemp} temp={temp}/>}/>
      <Route path='/week' element={<WeekPage location={location} settemp={settemp} temp={temp}/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
