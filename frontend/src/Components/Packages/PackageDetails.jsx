import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import Book from './Book';

const PackageDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Resets scroll to the top of the page
    }, []);
    const selectedPackage = useSelector((state) => state.packages.selectedPackage);

    if (!selectedPackage) {
        return <p>Please select a package to view details.</p>;
    }
    return (

        <div className="w-11/12 mx-auto mt-20 space-y-10 lg:w-1/2">
            {/* General Package Information */}
            <div className="space-y-2">
                <p className="font-Bevas text-gray">Recommended Package</p>
                <h1 className=" uppercase font-Bevas text-4xl xl:text-6xl">{selectedPackage.name}</h1>
                <p className="font-Switzer-Medium text-gray">{selectedPackage.date}</p>
                <img
                    src={selectedPackage.image}
                    alt={selectedPackage.title}
                    className="mt-6 w-full h-124 object-cover rounded-lg"
                />
            </div>

            {/* Description */}
            <div className="space-y-4">
                <h2 className="font-Bevas text-3xl md:text-4xl">About the Package</h2>
                <p className="font-Bevas text-sm mt-4">{selectedPackage.description}</p>
            </div>

            {/* Daily Itinerary */}
            {/* Daily Itinerary */}
            <div className="space-y-6">
                <h2 className="font-Bevas text-3xl">Daily Itinerary</h2>
                {selectedPackage.itinerary && selectedPackage.itinerary.map((day, index) => (
                    <div
                        key={index}
                        className="space-y-2 border-b-2 border-golden pb-4 transition duration-300"
                    >
                        <h3 className="font-Aceh-Light sm:text-xl lg:text-base xl:text-lg">
                            <span className="font-Bevas text-lg uppercase sm:text-xl font-bold lg:text-lg xl:text-2xl">
                                Day {day.day}:
                            </span>
                            {day.title}
                        </h3>
                        <p className="font-Aceh-Light text-lg">
                            <span className="font-Bevas text-lg uppercase sm:text-xl font-bold lg:text-lg xl:text-2xl">
                                Location:
                            </span>
                            {day.details.place}
                        </p>
                        <p className="font-Aceh-Light text-lg">
                            <span className="font-Bevas text-lg uppercase sm:text-xl font-bold lg:text-lg xl:text-2xl">
                                Meals:
                            </span>
                            {day.details.meals}
                        </p>
                        <ul className="font-Aceh-Light text-lg">
                            {day.details.activities.map((activity, idx) => (
                                <li key={idx}>• {activity}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className='mt-10'>
                <Book />
            </div>

        </div>
    );
};

export default PackageDetails