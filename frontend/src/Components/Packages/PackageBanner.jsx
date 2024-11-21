import React from 'react'
import img from "../../assets/Images/banner02.jpg"

const PackageBanner = () => {
  return (
    <div className='mt-14 lg:mt-32'>
    <div className='w-11/12 mx-auto  md:flex  xl:w-5/6 '>
        <div className="md:w-1/2  py-12 lg:py-16 ">
            <h1 className="font-Marcellus text-3xl lg:text-4xl xl:text-6xl">Travel smarter, connect deeper.</h1>
            <p className="mt-8 font-Montserrat text-textColor text-base lg:mt-6 lg:text-lg xl:mt-10">
                Gomiles International, your trusted partner for unforgettable travel experiences. We’re thrilled to expand our horizons and offer captivating journeys to Georgia, Dubai, and our home state, Kerala.

                Founded in 2023, Gomiles International has quickly established itself as a trusted name in the travel industry. Our passion for travel and commitment to excellence have driven us to explore new destinations and offer innovative travel packages
            </p>
            <div className="mt-2">
                <h2 className="font-Marcellus text-base mt-8 lg:mt-6 lg:text-lg xl:text-xl">
                    <a href="/about" className="hover:text-golden cursor-pointer transition-colors duration-300">Learn More</a>
                </h2>
            </div>
        </div>

        <div className='mt-4  flex md:w-1/2 md:mt-0 md:pl-6 lg:pl-10'>
            <img src={img} alt='resturant dubai food3' className='w-5/6 ml-6 sm:w-1/2 sm:ml-0 md:w-11/12 md:ml-4  lg:w-11/12  lg:ml-8 xl:ml-20 xl:w-11/12' />
            <img src={img} alt='resturant dubai food1' className='hidden sm:block sm:w-1/2 sm:ml-0 md:hidden' />
        </div>
    </div>
</div>
    
  )
}

export default PackageBanner