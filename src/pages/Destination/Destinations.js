import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Moon from './Destinations/Moon/Moon';
import Mars from './Destinations/Mars/Mars';
import Europa from './Destinations/Europa/Europa';
import Titan from './Destinations/Titan/Titan';
import DestHeader from './components/DestHeader';
import './Destinations.css';

const Destinations = () => {
  return (
    <div className='destinations-container'>
      <DestHeader />
      <Routes>
        <Route path="/" element={<Moon />} />
        <Route path="moon" element={<Moon />} />
        <Route path="mars" element={<Mars />} />
        <Route path="europa" element={<Europa />} />
        <Route path="titan" element={<Titan />} />
      </Routes>
    </div>
  );
}

export default Destinations;
