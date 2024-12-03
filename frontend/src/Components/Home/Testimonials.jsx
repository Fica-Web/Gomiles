import React, { useState, useEffect } from "react";
import img1 from "../../assets/Images/testimonial.png"

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      img: img1,
      content_text:
        "They provided an amazing adventure that I'll never forget. The accommodations were top-notch, and the itinerary was a perfect trip of relaxation and excitement.",
      testimonial_name: "Sakkir  Jamal",
      location: "Dubai",
    },
    {
      id: 2,
      img: img1,
      content_text:
        "This was one of the best experiences of my life. Everything was planned to perfection and the team was incredibly helpful.",
      testimonial_name: "Omar",
      location: "India",
    },
    {
      id: 3,
      img: img1,
      content_text:
        "An unforgettable trip! The service was excellent, and the destinations were breathtaking. Highly recommend them!",
      testimonial_name: "Abdul Najeeb",
      location: "India",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Automatic sliding effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialData.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [testimonialData.length]);

  return (
    <div className="relative w-11/12 max-w-2xl mx-auto mt-20">
      {/* Heading Section */}
      <div className="w-full sm:w-11/12 md:w-full h-full sm:pt-10 md:pt-6 lg:pt-14 xl:pt-24 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-Bevas">
          Real{" "}
          <span className="font-against-regular text-2xl xl:text-5xl">
            stories
          </span>{" "}
          <br /> from travelers
        </h1>
      </div>

      {/* Testimonials Slider */}
      <div className="overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonialData.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-full p-6 border-2 rounded-lg shadow-md"
            >
              <p className="font-Aceh-Light text-gray-700 text-xl mb-6">{item.content_text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={item.img}
                  alt={item.testimonial_name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold font-Aceh-Light">{item.testimonial_name}</h3>
                  <p className="font-Aceh-Light text-sm text-gray-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={() =>
          setCurrent(
            (prev) => (prev - 1 + testimonialData.length) % testimonialData.length
          )
        }
        className="absolute left-0 top-1/2 transform -translate-y-1/2 "
      ></button>
      <button
        onClick={() =>
          setCurrent((prev) => (prev + 1) % testimonialData.length)
        }
        className="absolute right-0 top-1/2 transform -translate-y-1/2 "
      ></button>
    </div>
  );
};

export default Testimonials;


