import './App.css';
import React from 'react';
import HomePage from './screens/homePage.jsx'
import LoginHomePage from './screens/loginHomePage';
import GetMembership from './screens/getMembership';
import { Route, Routes } from 'react-router-dom';
import ScheduleWorkout from './screens/scheduleWorkout';
import Pt from './screens/personalTraining';


function App() {
  return (
     <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/login" element={<LoginHomePage/>} />
      <Route path='/getMembership' element={< GetMembership />}/>
      <Route path='/scheduler' element={<ScheduleWorkout/>}/>
      <Route path="/training" element={<Pt/>}/>
      </Routes>
  );
}

export default App;
