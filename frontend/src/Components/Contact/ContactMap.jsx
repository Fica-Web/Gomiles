import React from 'react';

const ContactMap = () => {
  return (
    <div className="mt-6 w-11/12 mx-auto">
      {/* Text Section */}
      <div className="text-center mb-6 space-y-8">
        <h2 className="font-Marcellus text-3xl lg:text-4xl xl:text-6xl">Find Us on <span className='font-against-regular text-2xl xl:text-6xl'>Map</span></h2>
        <p className="w-11/12 lg:w-1/2 mx-auto font-Aceh-Light text-lg xl:text-2xl">
        Reach out to us for any inquiries, feedback, or assistance. We’re here to help and ensure your experience is seamless. Drop us a message, and our team will get back to you promptly!
        </p>
      </div>

      {/* Map Section */}
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6353032.633157805!2d29.842173628822962!3d38.96814459275029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b0155c964f2671%3A0x40d9dbd42a625f2a!2zVMO8cmtpeWU!5e0!3m2!1sen!2sin!4v1731911088147!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen=""
          loading="lazy"
          title="Google Maps"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactMap;
