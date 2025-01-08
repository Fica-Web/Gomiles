import { Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';

const Home = lazy(() => import('./Pages/Home'));
const Packages = lazy(() => import('./Pages/Packages'));
const PackageDetails = lazy(() => import('./Components/Packages/PackageDetails'));
const About = lazy(() => import('./Pages/About'));
const Contact = lazy(() => import('./Pages/Contact'));

function App() {
  return (
    <Suspense fallback={<div className='w-full h-screen flex justify-center items-center'>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/packages' element={<Packages />} />
        <Route path='/packages/:id' element={<PackageDetails />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Suspense>
  );
}

export default App;