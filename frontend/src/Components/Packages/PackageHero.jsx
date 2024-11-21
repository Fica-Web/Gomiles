import React from 'react'
import bannerimg from "../../assets/Images/CityLights.jpeg"

const PackageHero = () => {
  return (
    <div className='relative w-full sm:h-80 xl:h-96'>
            <img
                src={bannerimg}
                alt="Banner"
                className='w-full h-full object-cover'
            />
            <div className='absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50'>

                <p className='text-white text-2xl font-against-regular lg:text-7xl'>Tour Packages</p>
            </div>
        </div>
  )
}

export default PackageHero