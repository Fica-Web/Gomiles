import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPackages, selectPackage } from '../../Reducer/packageSlice';
import { useNavigate } from 'react-router-dom';
import img2 from "../../assets/Images/package01.png"
import img3 from "../../assets/Images/package1.jpeg"
import img4 from "../../assets/Images/packages2.jpeg"
import img5 from "../../assets/Images/packages4.jpeg"
import img6 from "../../assets/Images/packages6.jpeg"
import img7 from "../../assets/Images/packages7.jpeg"


const PackageCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const packages = useSelector((state) => state.packages.packages);

  useEffect(()=>{
    const samplePackages  = [
      {
        id: 1,
        name: 'TURKEY IN A WEEK',
        duration: "7 DAYS & 6 NIGHTS",
        image: img3,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Arrival", "Blue Mosque", "Aya Sofia","Galata tower"],
              meals: "Breakfast"
            }
          },
          {
            day: 2,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Road trip to Cappadocia (760 KM, via Ankara)", "Paşabag", "Devrent Valley"," Avanos pottery demonstration","Horse Ride"],
              meals: "Breakfast"
            }
          },
          {
            day: 3,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Hot Air Balloon Ride", "Underground city", " Pigeon Valley", "Uçhisar Castle", "Göreme Panorama", "Rose Valley", "Drive to Fethiye (746 KM, via Isparta & Konya)"],
              meals: "Breakfast"
            }
          },
          {
            day: 4,
            title: "Fethiye",
            details: {
              place: "Fethiye",
              activities: ["Sightseeing", "Paragliding","Cave Village (ruins)","Fish bazaar","Panoramas","Hidden Villages","Marina"],
              meals: "Breakfast"
            }
          },
          {
            day: 5,
            title: "Bursa",
            details: {
              place: "Bursa",
              activities: ["Drive to Pamukkale", "Hierapolis","Greek city","Hot air balloon","Drive to Istanbul via Bursa"],
              meals: "Breakfast"
            }
          },
          {
            day: 6,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Spice Bazar", "Ortakoy Mosque","Balat","Taksim","Bosporus Cruise"],
              meals: "Breakfast"
            }
          },
          {
            day: 7,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Grand Bazar", "A whole day for Shopping."],
              meals: "Breakfast"
            }
          }
        ]
      },
      {
        id: 2,
        name: 'ISTANBUL & CAPPADOCIA',
        duration: "5 DAYS & 4 NIGHTS",
        image: img4,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Arrival", "Blue Mosque", "Aya Sofia","Galata tower"],
              meals: "Breakfast"
            }
          },
          {
            day: 2,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Paşabag", "Devrent Valley", "Avanos pottery demonstration","Horse Ride"],
              meals: "Breakfast"
            }
          },
          {
            day: 3,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Hot Air Baloon ride", "Underground city","Pigeon Valley","Uçhisar Castle","Göreme Panorama"," Rose Valley"],
              meals: "Breakfast"
            }
          },
          {
            day: 4,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Ortakoy Mosque", "Ayyub Sultan","Balat","Bosporus Cruise","Taksim"],
              meals: "Breakfast"
            }
          },
          {
            day: 5,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Shopping Day", "Grand Bazar","Spice Bazaar"],
              meals: "Breakfast"
            }
          }
        ]
      },
      {
        id: 3,
        name: 'ANTALYA & FETHIYE',
        duration: "4 DAYS & 3 NIGHTS",
        image: img5,
        itinerary: [
          {
            day: 1,
            title: "Antalya",
            details: {
              place: "Antalya",
              activities: ["Upper Dudan waterfalls", "Lower Duden Waterfalls", "Old port"],
              meals: "Breakfast"
            }
          },
          {
            day: 2,
            title: "Antalya",
            details: {
              place: "Antalya",
              activities: ["Antalya Aquarium", "Cable car", "Marina"],
              meals: "Breakfast"
            }
          },
          {
            day: 3,
            title: "Marmaris",
            details: {
              place: "Marmaris",
              activities: ["Marina", "İsland cruise"],
              meals: "Breakfast"
            }
          },
          {
            day: 4,
            title: "Fethiye",
            details: {
              place: "Fethiye",
              activities: ["Paragliding", "Butterfly Valley","Blue Lagoon","Old Greek village","Oludeniz Beach"],
              meals: "Breakfast"
            }
          },
        ]
      },
      {
        id: 4,
        name: 'ISTANBUL & BURSA',
        duration: "5 DAYS & 4 NIGHTS",
        image: img6,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Arrival", "Blue Mosque", "Aya Sofia"],
              meals: "Breakfast"
            }
          },
          {
            day: 2,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Topkapi Palace", "Ortaköy Mosque","Eminonu","Galata Tower","Taksim Square"],
              meals: "Breakfast"
            }
          },
          {
            day: 3,
            title: "Bursa",
            details: {
              place: "Bursa",
              activities: ["Yalova (Hot Spring)", "Uludağ Mountain (Winter Sports)","Tomb Of Usman (Founder of Ottoman Empire)"],
              meals: "Breakfast"
            }
          },
          {
            day: 4,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Princess Island", "Bosporus Cruise"],
              meals: "Breakfast"
            }
          },
          {
            day: 5,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Spice Bazar", "Grand Bazar", "Day for Shopping"],
              meals: "Breakfast"
            }
          },
        ]
      },
      {
        id: 5,
        name: 'TURKEY GRAND TOUR',
        duration: "12 DAYS & 11 NIGHTS",
        image: img7,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Blue Mosque", "Galata Tower", "Aya Sofia"],
              meals: "Breakfast"
            }
          },
          {
            day: 2,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Topkapi Palace", "Ortaköy Mosque","Eminonu","Galata Tower","Taksim Square"],
              meals: "Breakfast"
            }
          },
          {
            day: 3,
            title: "Bursa",
            details: {
              place: "Bursa",
              activities: ["Uludağ Mountain (Winter Sports)", "Tomb Of Usman & Orhan (founder of Ottoman empire)"],
              meals: "Breakfast"
            }
          },
          {
            day: 4,
            title: "Söğüt",
            details: {
              place: "Söğüt",
              activities: ["Tomb of Ertuğrul Gazi", "Places which related Diriliş Ertuğrul series"],
              meals: "Breakfast"
            }
          },
          {
            day: 5,
            title: "Pamukkale",
            details: {
              place: "Pamukkale",
              activities: ["Hierapolis tour"],
              meals: "Breakfast"
            }
          },
          {
            day: 6,
            title: "Fathiye",
            details: {
              place: "Fathiye",
              activities: ["Butterfly Valley","Blue Lagoon","Old Greek village","Rock Tombs","Oludeniz Beach"],
              meals: "Breakfast"
            }
          },
          {
            day: 7,
            title: "Antalya",
            details: {
              place: "Antalya",
              activities: ["Ephesus","Duden Waterfalls","Aquarium","Cable Car","Marina"],
              meals: "Breakfast"
            }
          },
          {
            day: 8,
            title: "Konya",
            details: {
              place: "Konya",
              activities: ["Tomb of Rumi","Sama (Sufi Dance)"],
              meals: "Breakfast"
            }
          },
          {
            day: 9,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Göreme open-air museum","Paşabag","Devrent Valley","Avanos pottery demonstration"],
              meals: "Breakfast"
            }
          },
          {
            day: 10,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Hot air balloon","Underground city","Pigeon Valley","Uçhisar Castle","Göreme Panorama"," Rose Valley"],
              meals: "Breakfast"
            }
          },
          {
            day: 11,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Sulimaniye Mosque","Ayyub Sultan","Fatih Mosque","Camlica Mosque"],
              meals: "Breakfast"
            }
          },
          {
            day: 12,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Grand Bazaar","Spice Bazaar","Bosphorus Cruise"],
              meals: "Breakfast"
            }
          },
        ]
      },
      
    ];
    
  
    dispatch(setPackages(samplePackages));
  }, [dispatch]);

  const handlePackageClick = (pkg) => {
    dispatch(selectPackage(pkg));
    navigate(`/packages/${pkg.id}`);
  };
  return (
    <div className='mt-20 lg:w-11/12 mx-auto'>
    <div className='w-11/12 mx-auto'>
      <h1 className='text-2xl uppercase font-Bevas md:text-4xl lg:text-5xl lg:text-center'>Tour Packages</h1>
    </div>
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
      {packages.map((pkg) => (
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
            <p className="text-sm font-Bevas text-white">
              {pkg.duration}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
  



  )
}

export default PackageCard