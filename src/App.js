import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DayPage from './Pages/DayPage';
import HourPage from './Pages/HourPage';
import WeekPage from './Pages/WeekPage';

function App() {
  return (<div className='bg-gray-100 h-screen relative'>
    <BrowserRouter>
    <Navbar location={{city:'Jamshedpur',state:'Jharkhand'}} temp={{temp:'kelvin'}}/>
    <Routes>
      <Route path="/page" element={<DayPage/>}/>
      <Route path="/hour" element={<HourPage/>}/>
      <Route path='/week' element={<WeekPage/>}/>
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
