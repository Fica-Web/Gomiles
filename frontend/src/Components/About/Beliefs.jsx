import React from 'react'
import { RiAccountCircleFill } from "react-icons/ri";
import { IoLeafOutline } from "react-icons/io5";
import { MdAirplanemodeActive } from "react-icons/md";
import { CiStar } from "react-icons/ci";

const Beliefs = () => {
  return (
    <div className='mt-10 md:mt-32  py-10'>
        <div className='w-11/12 mx-auto  space-y-4 lg:flex lg:space-y-0 lg:space-x-2'>
            <div className='space-y-4 lg:w-1/2 lg:py-28 lg:space-y-20'>
                <h2 className='font-Bevas text-4xl xl:text-6xl'>Our true beliefs for your benefits</h2>
                <p className='font-Aceh-Light text-lg xl:text-xl'>Our beliefs aren't just words; they are the foundation of every adventure we offer. With high commitment to sustainability, authenticity, and customer-centricity, we ensure that every trip you take with us is valuable.</p>
            </div>
            <div className='space-y-6 lg:w-1/2  lg:px-8'>
                <div className='flex border-2 rounded-2xl p-2 transition duration-300 transform hover:scale-105 hover:border-golden '>
                    <div className='w-1/4 px-4 '>
                    <RiAccountCircleFill  className='text-5xl'/>
                    </div>
                    <div className='w-3/4 space-y-2'>
                        <h2 className='font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl'>Customer-centric</h2>
                        <p className='text-gray1 font-Aceh-Light sm:text-xl lg:text-base xl:text-lg'>Being customer-centric is the compass that guides our travel services. We prioritize our customers' needs.</p>
                    </div>
                </div>
                <div className='flex border-2 rounded-2xl p-2 bg-black transition duration-300 transform hover:scale-105 hover:border-golden '>
                    <div className='w-1/4 px-4 py-2 '>
                        <IoLeafOutline  className='text-white text-5xl border-2 rounded-full p-2'/>
                    </div>
                    <div className='w-3/4 space-y-2'>
                        <h2 className='text-white font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl'>Sustainable Travel</h2>
                        <p className=' text-gray2 font-Aceh-Light sm:text-xl lg:text-base xl:text-lg'>Committed to responsible and eco-conscious journeys, traveling the world with minimal footprints and pollutions.</p>
                    </div>
                </div>
                <div className='flex border-2 rounded-2xl p-2 transition duration-300 transform hover:scale-105 hover:border-golden '>
                    <div className='w-1/4 px-4 py-2'>
                    <MdAirplanemodeActive  className='text-5xl border-2 rounded-full p-2'/>
                    </div>
                    <div className='w-3/4 space-y-2'>
                        <h2 className='font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl'>Authentic Experiences</h2>
                        <p className='font-Aceh-Light sm:text-xl lg:text-base xl:text-lg'>We deliver journeys that immerse you in unforgettable encounter with the world's diverse cultures & landscapes.</p>
                    </div>
                </div>
                <div className='flex border-2 rounded-2xl p-2 bg-black transition duration-300 transform hover:scale-105 hover:border-golden '>
                    <div className='w-1/4 px-4 py-2'>
                    <CiStar  className='text-white text-5xl border-2 rounded-full p-2'/>
                    </div>
                    <div className='w-3/4 space-y-2'>
                        <h2 className='text-white font-Bevas text-xl sm:text-xl font-bold lg:text-lg xl:text-xl'>Quality Guides</h2>
                        <p className='text-gray2 font-Aceh-Light sm:text-xl lg:text-base xl:text-lg'>Every journey will be led by knowledgeable, passionate experts who enhance your travel experience.</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Beliefs