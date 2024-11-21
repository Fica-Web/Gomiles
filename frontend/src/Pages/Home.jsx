import React from 'react'
import Banner from '../Components/Home/Banner'
import Introduction from '../Components/Home/Introduction'
import Hero from '../Components/Home/Hero'
import Testimonials from '../Components/Home/Testimonials'
import PackageCard from '../Components/Packages/PackageCard'

const Home = () => {
  return (
    <div>
        <Banner />
        <Hero />
        <PackageCard />
        <Introduction />
        <Testimonials />
    </div>
  )
}

export default Home