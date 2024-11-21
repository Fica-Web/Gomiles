import React, {useEffect} from 'react'
import AboutBanner from '../Components/About/AboutBanner'
import AboutUs from '../Components/About/AboutUs'
import Beliefs from '../Components/About/Beliefs'
import AboutConnect from '../Components/About/AboutConnect'
import NavBar from '../Components/NavBar/NavBar'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);
  return (
    <div>
      <NavBar />
        <AboutBanner />
        <AboutUs />
        <Beliefs />
        <AboutConnect />
    </div>
  )
}

export default About