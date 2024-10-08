import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import Crew from './pages/Crew/Crew';
import Destinations from './pages/Destination/Destinations';
import Technology from './pages/Technology/Technology';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className='app-container '>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/destination/*" element={<Destinations />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
