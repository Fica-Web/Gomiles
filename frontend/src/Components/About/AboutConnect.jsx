import React from 'react'
import { Link } from 'react-router-dom';

const AboutConnect = () => {
  return (
    <div className='mt-14 lg:mt-32'>
    <div className='pb-28'>
        <div className=' w-5/6   text-center mx-auto'>
            <h1 className='font-Marcellus text-3xl lg:text-4xl xl:text-6xl'>Ready to <span className='font-against-regular text-2xl xl:text-4xl'>embark</span> <br></br>on a <span className='font-against-regular text-2xl xl:text-4xl'>new</span> journey?</h1>
            <h3 className='font-Montserrat text-textColor text-base mt-6 lg:text-lg xl:text-xl'>"Don't let your dream getaway remain a dream any longer. Take action now and let us craft your next unforgettable </h3>
            <h3  className='font-Montserrat text-textColor text-base lg:text-lg xl:text-xl'>adventure. Join us in turning your travel fantasies into unforgettable realities."</h3>
        </div>
        <div className='w-5/6  text-center mx-auto mt-10 space-y-6'>
        <Link to="/packages">
            <button className="bg-black text-white rounded-xl p-2 font-Bevas xl:p-2 xl:text-xl transition duration-300 hover:shadow-lg hover:text-gray1">
                Explore Now
            </button>
        </Link>
        </div>
    </div>
</div>
  )
}

export default AboutConnect