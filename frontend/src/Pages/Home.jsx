import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Components/Home/Banner'
import Introduction from '../Components/Home/Introduction'
import Hero from '../Components/Home/Hero'
import Testimonials from '../Components/Home/Testimonials'
import PackageCard from '../Components/Packages/PackageCard'
import Beliefs from '../Components/About/Beliefs'

const Home = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Home Page",
    "url": "https://gomilesinternational.com/",
    "description": "Home page for Gomiles International, offering premium travel packages and customer testimonials.",
    "publisher": {
      "@type": "Organization",
      "name": "Gomiles International",
    }
  };

  return (
    <div>
      <Helmet>
        <title>Gomiles International - Home</title>
        <meta name="description" content="Discover premium travel packages and customer testimonials on Gomiles International's homepage." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

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