import { Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home'
import Packages from './Pages/Packages';
import PackageDetails from './Components/Packages/PackageDetails';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/packages' element={<Packages/>} />
      <Route path='/packages/:id' element={<PackageDetails />} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact />}/>
    </Routes>
  )
}

export default App