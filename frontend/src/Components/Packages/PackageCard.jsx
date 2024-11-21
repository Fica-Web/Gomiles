import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPackages, selectPackage } from '../../Reducer/packageSlice';
import { useNavigate } from 'react-router-dom';
import img2 from "../../assets/Images/package01.png"


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
        image: img2,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Arrival", "Blue Mosque", "Aya Sofia","Galata tower"],
              meals: "Dinner included"
            }
          },
          {
            day: 2,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Road trip to Cappadocia (760 KM, via Ankara)", "Paşabag", "Devrent Valley"," Avanos pottery demonstration","Horse Ride"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 3,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Hot Air Balloon Ride", "Underground city", " Pigeon Valley", "Uçhisar Castle", "Göreme Panorama", "Rose Valley", "Drive to Fethiye (746 KM, via Isparta & Konya)"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 4,
            title: "Fethiye",
            details: {
              place: "Fethiye",
              activities: ["Sightseeing", "Paragliding","Cave Village (ruins)","Fish bazaar","Panoramas","Hidden Villages","Marina"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 5,
            title: "Bursa",
            details: {
              place: "Bursa",
              activities: ["Drive to Pamukkale", "Hierapolis","Greek city","Hot air balloon","Drive to Istanbul via Bursa"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 6,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Spice Bazar", "Ortakoy Mosque","Balat","Taksim","Bosporus Cruise"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 7,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Grand Bazar", "A whole day for Shopping."],
              meals: "Breakfast , lunch  included"
            }
          }
        ]
      },
      {
        id: 2,
        name: 'ISTANBUL & CAPPADOCIA',
        duration: "5 DAYS & 4 NIGHTS",
        image: img2,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Arrival", "Blue Mosque", "Aya Sofia","Galata tower"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 2,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Paşabag", "Devrent Valley", "Avanos pottery demonstration","Horse Ride"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 3,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Hot Air Baloon ride", "Underground city","Pigeon Valley","Uçhisar Castle","Göreme Panorama"," Rose Valley"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 4,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Ortakoy Mosque", "Ayyub Sultan","Balat","Bosporus Cruise","Taksim"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 5,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Shopping Day", "Grand Bazar","Spice Bazaar"],
              meals: "Breakfast , lunch and Dinner included"
            }
          }
        ]
      },
      {
        id: 3,
        name: 'ANTALYA & FETHIYE',
        duration: "4 DAYS & 3 NIGHTS",
        image: img2,
        itinerary: [
          {
            day: 1,
            title: "Antalya",
            details: {
              place: "Antalya",
              activities: ["Upper Dudan waterfalls", "Lower Duden Waterfalls", "Old port"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 2,
            title: "Antalya",
            details: {
              place: "Antalya",
              activities: ["Antalya Aquarium", "Cable car", "Marina"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 3,
            title: "Marmaris",
            details: {
              place: "Marmaris",
              activities: ["Marina", "İsland cruise"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 4,
            title: "Fethiye",
            details: {
              place: "Fethiye",
              activities: ["Paragliding", "Butterfly Valley","Blue Lagoon","Old Greek village","Oludeniz Beach"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
        ]
      },
      {
        id: 4,
        name: 'ISTANBUL & BURSA',
        duration: "5 DAYS & 4 NIGHTS",
        image: img2,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Arrival", "Blue Mosque", "Aya Sofia"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 2,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Topkapi Palace", "Ortaköy Mosque","Eminonu","Galata Tower","Taksim Square"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 3,
            title: "Bursa",
            details: {
              place: "Bursa",
              activities: ["Yalova (Hot Spring)", "Uludağ Mountain (Winter Sports)","Tomb Of Usman (Founder of Ottoman Empire)"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 4,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Princess Island", "Bosporus Cruise"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 5,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Spice Bazar", "Grand Bazar", "Day for Shopping"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
        ]
      },
      {
        id: 5,
        name: 'TURKEY GRAND TOUR',
        duration: "12 DAYS & 11 NIGHTS",
        image: img2,
        itinerary: [
          {
            day: 1,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Blue Mosque", "Galata Tower", "Aya Sofia"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 2,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Topkapi Palace", "Ortaköy Mosque","Eminonu","Galata Tower","Taksim Square"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 3,
            title: "Bursa",
            details: {
              place: "Bursa",
              activities: ["Uludağ Mountain (Winter Sports)", "Tomb Of Usman & Orhan (founder of Ottoman empire)"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 4,
            title: "Söğüt",
            details: {
              place: "Söğüt",
              activities: ["Tomb of Ertuğrul Gazi", "Places which related Diriliş Ertuğrul series"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 5,
            title: "Pamukkale",
            details: {
              place: "Pamukkale",
              activities: ["Hierapolis tour"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 6,
            title: "Fathiye",
            details: {
              place: "Fathiye",
              activities: ["Butterfly Valley","Blue Lagoon","Old Greek village","Rock Tombs","Oludeniz Beach"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 7,
            title: "Antalya",
            details: {
              place: "Antalya",
              activities: ["Ephesus","Duden Waterfalls","Aquarium","Cable Car","Marina"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 8,
            title: "Konya",
            details: {
              place: "Konya",
              activities: ["Tomb of Rumi","Sama (Sufi Dance)"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 9,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Göreme open-air museum","Paşabag","Devrent Valley","Avanos pottery demonstration"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 10,
            title: "Cappadocia",
            details: {
              place: "Cappadocia",
              activities: ["Hot air balloon","Underground city","Pigeon Valley","Uçhisar Castle","Göreme Panorama"," Rose Valley"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 11,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Sulimaniye Mosque","Ayyub Sultan","Fatih Mosque","Camlica Mosque"],
              meals: "Breakfast , lunch and Dinner included"
            }
          },
          {
            day: 12,
            title: "Istanbul",
            details: {
              place: "Istanbul",
              activities: ["Grand Bazaar","Spice Bazaar","Bosphorus Cruise"],
              meals: "Breakfast , lunch and Dinner included"
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
    <div className='mt-40'>
      <div className='w-11/12 mx-auto'>
        <h1 className='text-2xl uppercase font-Marcellus md:text-4xl lg:text-5xl'>Tour Packages</h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white  rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => handlePackageClick(pkg)}
          >
            <img
              src={pkg.image}
              alt={pkg.name}
              className="w-full h-96 object-cover"
              
            />
            <div className="p-4">
              <h2 className="text-lg  font-Switzer-Medium text-gray1">{pkg.name}</h2>
            </div>
          </div>
        ))}
      </div>


    </div>

  )
}

export default PackageCard