import React from 'react';
import Home from './pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import EventDetails from './pages/EventDetails';
import Timeline from './pages/Timeline';
import DataProvider from './context/DataProvider';

export default function App() {
  return (
    <DataProvider>
    <BrowserRouter>

    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>

   </BrowserRouter>
   </DataProvider>
  )
}
