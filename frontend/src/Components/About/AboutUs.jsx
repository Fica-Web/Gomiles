import React from 'react'
import bannerimg from "../../assets/Images/CityLights.jpg";
import capadokiya from "../../assets/Images/Cappadocia.jpeg"

const AboutUs = () => {
    return (
        <div className='mt-10'>
            <div className='w-11/12 mx-auto space-y-6  lg:flex lg:space-y-0 lg:space-x-20'>
                <div className='w-full  space-y-6 lg:w-1/2'>
                    <div className='w-full h-48 bg-golden overflow-hidden rounded-2xl xl:h-56'>
                        <img src={bannerimg} alt='' className='w-full h-full object-cover' />
                    </div>
                    <div className='w-full h-96 overflow-hidden rounded-2xl lg:h-72 xl:h-96'>
                        <img src={capadokiya} alt='' className='w-full h-full object-cover' />
                    </div>
                </div>
                <div className='space-y-6 lg:w-1/2 lg:p-12 xl:p-28 '>
                    <h2 className='font-Bevas text-4xl xl:text-6xl'>Crafting <span className='font-against-regular text-2xl xl:text-4xl'> Travel</span> Experience</h2>
                    <p className='font-Aceh-Light text-lg xl:text-xl'>We are passionate about crafting extraordinary travel experiences that leave a lasting imapct.
                        With years of expertise, we have honed the art of live curating unique
                        journeys that blend adventure, culture, and sustainability. Our mission
                        is to connect travelers with the worlds wonders while preserving its beauty for generations to come.
                    </p>
                    <button className='bg-black text-white rounded-xl p-2 font-Bevas xl:p-2 xl:text-xl'>Explore Now</button>
                </div>
            </div>
            
        </div>

    )
}

export default AboutUs