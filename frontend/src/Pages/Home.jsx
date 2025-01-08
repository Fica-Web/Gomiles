import React from 'react'
import Banner from '../Components/Home/Banner'
import Introduction from '../Components/Home/Introduction'
import Hero from '../Components/Home/Hero'
import Testimonials from '../Components/Home/Testimonials'
import PackageCard from '../Components/Packages/PackageCard'
import Beliefs from '../Components/About/Beliefs'

const Home = () => {
  return (
    <div>
        <Banner />
        <Hero />
        <PackageCard limit={8} />
        <div className='bg-gray3'>
        <Beliefs />
        </div>
        
        <Introduction />
        <Testimonials />
    </div>
  )
}

export default Home