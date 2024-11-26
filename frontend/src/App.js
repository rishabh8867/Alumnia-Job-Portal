import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EventDetails from './pages/EventDetails';
import Timeline from './pages/Timeline';
import AlumniSpotlights from './pages/AlumniSpotlights';

export default function App() {
  return (
    <BrowserRouter>

      <Header/>

    <Routes>
      <Route path="/homepage" element={<Home />} />
      <Route path="/event-details" element={<EventDetails />} />
      <Route path="/timeline" element={<Timeline />} />
      <Route path="/alumni-spotlights" element={<AlumniSpotlights />} />
      
    </Routes>

   </BrowserRouter>
  )
}
