import React from 'react'

const Book = () => {
  return (
    <div className='mt-14 lg:mt-32'>
    <div className='pb-28'>
        <div className=' w-5/6   text-center mx-auto'>
            <h1 className='font-Marcellus text-3xl lg:text-4xl xl:text-6xl'>Book Your Trip</h1>
            <h3 className='font-Montserrat text-textColor text-base mt-6 lg:text-lg xl:text-xl'>"Let’s create an unforgettable travel experience just for you! "</h3>
            <h3  className='font-Montserrat text-textColor text-base lg:text-lg xl:text-xl'>Tell us about your travel preferences and interests to create a personalized itinerary for your unforgettable trip to Turkey.</h3>
        </div>
        <div className='flex justify-center mt-4 md:mt-8'>
          <button 
            onClick={() => window.open("https://gomilesbooking.netlify.app/", "_blank")}
            className='p-3 lg:px-12 rounded-full bg-gray text-white font-Bevas' 
          >
            Book Our Packages
          </button>
        </div>
        <div className='w-5/6  text-center mx-auto mt-10 space-y-6'>
            <h1 className='font-Marcellus text-xl lg:text-2xl xl:text-xl'>Turkey:- +90 534 259 66 56</h1>
            <h1 className='font-Marcellus text-xl lg:text-2xl xl:text-xl'>UAE   :- +971 58 952 7383</h1>
            <h1 className='font-Marcellus text-xl lg:text-2xl xl:text-xl'>Email: info@gomilesinternational.com</h1>
        </div>
    </div>
</div>
  )
}

export default Book