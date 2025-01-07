import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className=' flex items-center justify-center w-full mt-10 sm:mt-10 sm:h-48 lg:h-64 xl:h-80 2xl:h-96 '>
      <div className='w-11/12 sm:h-44 sm:flex lg:h-60 xl:h-72 2xl:h-80 '>
        <div className='w-full sm:w-11/12 md:w-full h-full   sm:pt-10 md:pt-6 lg:pt-14 xl:pt-24'>
          <h1 className='text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-Bevas '>Must  <span className='font-against-regular text-2xl xl:text-5xl'>experience</span> <br /> Packages</h1>
        </div>
        <div className='w-full h-full pt-6 sm:w-11/12  sm:pt-10  md:pt-14 lg:w-5/6 lg:pt-28 lg:pl-4 xl:pt-32  '>
          <p className='text-xl sm:text-sm lg:text-base xl:text-2xl font-Aceh-Light text-lightgray'>Indulge in our carefully crafted packages to immerse you in the most captivating and transformative travel adventures</p>
          <button className='w-1/2 h-8 mt-4 md:h-6 lg:h-8  xl:w-1/3 rounded-2xl bg-gray text-white font-Bevas' onClick={() => window.open("https://gomilesbooking.netlify.app/", "_blank")}>Book Our Packages</button>
        </div>
      </div>
    </div>
  )
}

export default Hero