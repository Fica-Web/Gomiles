import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPackages, selectPackage } from "../../Reducer/packageSlice";
import { useNavigate, Link } from "react-router-dom";
import samplePackages from "../../Data/packages";

const PackageCard = ({ limit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const packages = useSelector((state) => state.packages.packages);

  useEffect(() => {
    dispatch(setPackages(samplePackages));
  }, [dispatch]);

  const handlePackageClick = (pkg) => {
    dispatch(selectPackage(pkg));
    navigate(`/packages/${pkg.id}`);
  };

  // Determine which packages to display
  const displayedPackages = limit ? packages.slice(0, limit) : packages;

  return (
    <div className="mt-20 lg:w-11/12 mx-auto">
      <div className="w-11/12 mx-auto">
        <h1 className="text-2xl uppercase font-Bevas md:text-4xl lg:text-5xl lg:text-center">
          Tour Packages
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
        {displayedPackages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => handlePackageClick(pkg)}
          >
            {/* Image */}
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-119 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />

            {/* Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 space-y-1 bg-gradient-to-t from-black via-transparent to-transparent p-4">
              <h2 className="text-lg font-Bevas text-white">{pkg.name}</h2>
              <p className="text-sm font-Bevas text-white">{pkg.duration}</p>
            </div>
          </div>
        ))}
      </div>
      {limit && (
        <div className='flex justify-center sm:mt-16 mt-8'>
          <Link to={'/packages'}>
            <button
              className=' p-3 px-5 sm:px-6 lg:px-12 rounded-full bg-gray text-white font-Bevas hover:scale-105'
            >
              Explore More
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default PackageCard;