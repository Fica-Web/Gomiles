import React from 'react';
import { Helmet } from 'react-helmet-async';
import PackageBanner from '../Components/Packages/PackageBanner'
import PackageCard from '../Components/Packages/PackageCard'
import Book from '../Components/Packages/Book'
import PackageHero from '../Components/Packages/PackageHero'
import NavBar from '../Components/NavBar/NavBar'

const Packages = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Packages Page",
    "url": "https://gomilesinternational.com/about",
    "description": "Explore premium travel packages offered by Gomiles International, designed to deliver unforgettable experiences.",
    "publisher": {
      "@type": "Organization",
      "name": "Gomiles International",
    }
  };
  return (
    <div>
      <Helmet>
        <title>Gomiles International - Packages</title>
        <meta name="description" content="Discover premium travel packages and customer testimonials on Gomiles International's homepage." />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <NavBar />
        <PackageHero />
        <PackageBanner />
        <PackageCard />
        <Book/>
    </div>
  )
}

export default Packages