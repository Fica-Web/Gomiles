import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutBanner from '../Components/About/AboutBanner'
import AboutUs from '../Components/About/AboutUs'
import Beliefs from '../Components/About/Beliefs'
import AboutConnect from '../Components/About/AboutConnect'
import NavBar from '../Components/NavBar/NavBar'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Resets scroll to the top of the page
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "About Page",
    "url": "https://gomilesinternational.com/about",
    "description": "Learn about Gomiles International, our mission, beliefs, and commitment to providing exceptional travel experiences.",
    "publisher": {
      "@type": "Organization",
      "name": "Gomiles International",
    }
  };

  return (
    <div>
      <Helmet>
        <title>Gomiles International - About Us</title>
        <meta
          name="description"
          content="Learn about Gomiles International, our mission, beliefs, and commitment to providing exceptional travel experiences."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <NavBar />
      <AboutBanner />
      <AboutUs />
      <Beliefs />
      <AboutConnect />
    </div>
  )
}

export default About