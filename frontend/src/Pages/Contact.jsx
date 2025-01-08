import React from 'react';
import { Helmet } from 'react-helmet-async';
import ContactBanner from '../Components/Contact/ContactBanner'
import ContactForm from '../Components/Contact/ContactForm'
import ContactMap from '../Components/Contact/ContactMap'
import NavBar from '../Components/NavBar/NavBar'

const Contact = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Contact Page",
    "url": "https://gomilesinternational.com/contact",
    "description": "Learn about Gomiles International, our mission, beliefs, and commitment to providing exceptional travel experiences.",
    "publisher": {
      "@type": "Organization",
      "name": "Gomiles International",
    }
  };

  return (
    <div>
      <Helmet>
        <title>Gomiles International - Contact Us</title>
        <meta
          name="description"
          content="Learn about Gomiles International, our mission, beliefs, and commitment to providing exceptional travel experiences."
        />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>
      <NavBar />
      <ContactBanner />
      <ContactForm />
      <ContactMap />
    </div>
  )
}

export default Contact