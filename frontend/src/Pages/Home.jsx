import React from 'react';
import { Helmet } from 'react-helmet-async';
import HomeNavbar from '../Components/NavBar/HomeNavbar';
import Banner from '../Components/Home/Banner';
import WhatsAppButton from '../Components/common/WhatsappButton';
import Introduction from '../Components/Home/Introduction';
import Hero from '../Components/Home/Hero';
import Testimonials from '../Components/Home/Testimonials';
import PackageCard from '../Components/Packages/PackageCard';
import Beliefs from '../Components/About/Beliefs';

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
      "url": "https://gomilesinternational.com",
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Gomiles International",
    "url": "https://gomilesinternational.com",
    "telephone": ["+971 58 952 7383", "+90 534 259 66 56"],
    "email": "info@gomilesinternational.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mecidiyeköy, Şişli",
      "addressLocality": "Şişli",
      "addressRegion": "İstanbul",
      "postalCode": "34387",
      "addressCountry": "Türkiye"
    },
    "sameAs": [
      "https://www.facebook.com/gomilesturkey",
      "https://www.instagram.com/gomilesturkey",
      "https://www.linkedin.com/company/gomilesinternational",
    ]
  };

  return (
    <div>
      <Helmet>
        <title>Gomiles International - Home</title>
        <meta
          name="description"
          content="Discover premium travel packages and customer testimonials on Gomiles International's homepage."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>

      <HomeNavbar />
      <WhatsAppButton />
      <Banner />
      <Hero />
      <PackageCard limit={8} />
      <div className="bg-gray3">
        <Beliefs />
      </div>

      <Introduction />
      <Testimonials />
    </div>
  );
};

export default Home;