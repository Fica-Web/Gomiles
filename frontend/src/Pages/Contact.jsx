import React from 'react'
import ContactBanner from '../Components/Contact/ContactBanner'
import ContactForm from '../Components/Contact/ContactForm'
import ContactMap from '../Components/Contact/ContactMap'
import NavBar from '../Components/NavBar/NavBar'

const Contact = () => {
  return (
    <div>
      <NavBar />
        <ContactBanner />
        <ContactForm />
        <ContactMap />
    </div>
  )
}

export default Contact