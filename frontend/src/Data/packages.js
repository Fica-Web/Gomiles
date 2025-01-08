import img3 from "../assets/Images/package1.jpeg";
import img4 from "../assets/Images/packages2.jpeg";
import img5 from "../assets/Images/packages4.jpeg";
import img6 from "../assets/Images/packages6.jpeg";
import img7 from "../assets/Images/packages7.jpeg";
import img8 from '../assets/Images/Baku.jpg';
import img9 from '../assets/Images/Pyramid.jpg';
import img10 from '../assets/Images/georgia.webp';
import img11 from '../assets/Images/dubai.jpg';
import img12 from '../assets/Images/marackech.jpeg';

const samplePackages = [
  {
    id: 1,
    name: "TURKEY IN A WEEK",
    duration: "7 DAYS & 6 NIGHTS",
    image: img3,
    itinerary: [
      {
        day: 1,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Arrival", "Blue Mosque", "Aya Sofia", "Galata tower"],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Cappadocia",
        details: {
          place: "Cappadocia",
          activities: [
            "Road trip to Cappadocia (760 KM, via Ankara)",
            "Paşabag",
            "Devrent Valley",
            " Avanos pottery demonstration",
            "Horse Ride",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Cappadocia",
        details: {
          place: "Cappadocia",
          activities: [
            "Hot Air Balloon Ride",
            "Underground city",
            " Pigeon Valley",
            "Uçhisar Castle",
            "Göreme Panorama",
            "Rose Valley",
            "Drive to Fethiye (746 KM, via Isparta & Konya)",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Fethiye",
        details: {
          place: "Fethiye",
          activities: [
            "Sightseeing",
            "Paragliding",
            "Cave Village (ruins)",
            "Fish bazaar",
            "Panoramas",
            "Hidden Villages",
            "Marina",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Bursa",
        details: {
          place: "Bursa",
          activities: [
            "Drive to Pamukkale",
            "Hierapolis",
            "Greek city",
            "Hot air balloon",
            "Drive to Istanbul via Bursa",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 6,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: [
            "Spice Bazar",
            "Ortakoy Mosque",
            "Balat",
            "Taksim",
            "Bosporus Cruise",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 7,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Grand Bazar", "A whole day for Shopping."],
          meals: "Breakfast",
        },
      },
    ],
  },
  {
    id: 2,
    name: "ISTANBUL & CAPPADOCIA",
    duration: "5 DAYS & 4 NIGHTS",
    image: img4,
    itinerary: [
      {
        day: 1,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Arrival", "Blue Mosque", "Aya Sofia", "Galata tower"],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Cappadocia",
        details: {
          place: "Cappadocia",
          activities: [
            "Paşabag",
            "Devrent Valley",
            "Avanos pottery demonstration",
            "Horse Ride",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Cappadocia",
        details: {
          place: "Cappadocia",
          activities: [
            "Hot Air Baloon ride",
            "Underground city",
            "Pigeon Valley",
            "Uçhisar Castle",
            "Göreme Panorama",
            " Rose Valley",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: [
            "Ortakoy Mosque",
            "Ayyub Sultan",
            "Balat",
            "Bosporus Cruise",
            "Taksim",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Shopping Day", "Grand Bazar", "Spice Bazaar"],
          meals: "Breakfast",
        },
      },
    ],
  },
  {
    id: 3,
    name: "ANTALYA & FETHIYE",
    duration: "4 DAYS & 3 NIGHTS",
    image: img5,
    itinerary: [
      {
        day: 1,
        title: "Antalya",
        details: {
          place: "Antalya",
          activities: [
            "Upper Dudan waterfalls",
            "Lower Duden Waterfalls",
            "Old port",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Antalya",
        details: {
          place: "Antalya",
          activities: ["Antalya Aquarium", "Cable car", "Marina"],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Marmaris",
        details: {
          place: "Marmaris",
          activities: ["Marina", "İsland cruise"],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Fethiye",
        details: {
          place: "Fethiye",
          activities: [
            "Paragliding",
            "Butterfly Valley",
            "Blue Lagoon",
            "Old Greek village",
            "Oludeniz Beach",
          ],
          meals: "Breakfast",
        },
      },
    ],
  },
  {
    id: 4,
    name: "ISTANBUL & BURSA",
    duration: "5 DAYS & 4 NIGHTS",
    image: img6,
    itinerary: [
      {
        day: 1,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Arrival", "Blue Mosque", "Aya Sofia"],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: [
            "Topkapi Palace",
            "Ortaköy Mosque",
            "Eminonu",
            "Galata Tower",
            "Taksim Square",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Bursa",
        details: {
          place: "Bursa",
          activities: [
            "Yalova (Hot Spring)",
            "Uludağ Mountain (Winter Sports)",
            "Tomb Of Usman (Founder of Ottoman Empire)",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Princess Island", "Bosporus Cruise"],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Spice Bazar", "Grand Bazar", "Day for Shopping"],
          meals: "Breakfast",
        },
      },
    ],
  },
  {
    id: 5,
    name: "TURKEY GRAND TOUR",
    duration: "12 DAYS & 11 NIGHTS",
    image: img7,
    itinerary: [
      {
        day: 1,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Blue Mosque", "Galata Tower", "Aya Sofia"],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: [
            "Topkapi Palace",
            "Ortaköy Mosque",
            "Eminonu",
            "Galata Tower",
            "Taksim Square",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Bursa",
        details: {
          place: "Bursa",
          activities: [
            "Uludağ Mountain (Winter Sports)",
            "Tomb Of Usman & Orhan (founder of Ottoman empire)",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Söğüt",
        details: {
          place: "Söğüt",
          activities: [
            "Tomb of Ertuğrul Gazi",
            "Places which related Diriliş Ertuğrul series",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Pamukkale",
        details: {
          place: "Pamukkale",
          activities: ["Hierapolis tour"],
          meals: "Breakfast",
        },
      },
      {
        day: 6,
        title: "Fathiye",
        details: {
          place: "Fathiye",
          activities: [
            "Butterfly Valley",
            "Blue Lagoon",
            "Old Greek village",
            "Rock Tombs",
            "Oludeniz Beach",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 7,
        title: "Antalya",
        details: {
          place: "Antalya",
          activities: [
            "Ephesus",
            "Duden Waterfalls",
            "Aquarium",
            "Cable Car",
            "Marina",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 8,
        title: "Konya",
        details: {
          place: "Konya",
          activities: ["Tomb of Rumi", "Sama (Sufi Dance)"],
          meals: "Breakfast",
        },
      },
      {
        day: 9,
        title: "Cappadocia",
        details: {
          place: "Cappadocia",
          activities: [
            "Göreme open-air museum",
            "Paşabag",
            "Devrent Valley",
            "Avanos pottery demonstration",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 10,
        title: "Cappadocia",
        details: {
          place: "Cappadocia",
          activities: [
            "Hot air balloon",
            "Underground city",
            "Pigeon Valley",
            "Uçhisar Castle",
            "Göreme Panorama",
            " Rose Valley",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 11,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: [
            "Sulimaniye Mosque",
            "Ayyub Sultan",
            "Fatih Mosque",
            "Camlica Mosque",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 12,
        title: "Istanbul",
        details: {
          place: "Istanbul",
          activities: ["Grand Bazaar", "Spice Bazaar", "Bosphorus Cruise"],
          meals: "Breakfast",
        },
      },
    ],
  },
  {
    id: 6,
    name: "Azerbaijan",
    duration: "5 DAYS",
    image: img8,
    itinerary: [
      {
        day: 1,
        title: "Baku City Tour",
        details: {
          place: "Baku",
          activities: ["Explore the Flame Towers, Fountain Square, and Nizami Street.", "Visit the Baku Boulevard and Flame Towers for panoramic views of the city", "Icherisheher (Old City), a UNESCO World Heritage site", "Maiden Tower and Palace of the Shirvanshahs."],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Baku - Gobustan - Absheron Peninsula",
        details: {
          place: "Baku",
          activities: [
            "Gobustan National Park: Explore ancient petroglyphs and mud volcanoes",
            "Bibi-Heybat Mosque: Visit this iconic mosque, with views of Baku Bay",
            "Absheron Peninsula: Tour the Ateshgah Fire Temple and Yanardag (Fire Mountain).",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Baku - Sheki",
        details: {
          place: "Baku - Sheki",
          activities: [
            "Drive to Sheki: 4-5 hour drive from Baku (optional stop at Shamakhi).",
            "Sheki Khan’s Palace: Famous for its stunning stained glass windows.",
            "Karavansaray: Traditional caravanserai with a rich history",
            "Visit the Sheki Museum of History and Chalabi Mosque",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Sheki - Gabala",
        details: {
          place: "Sheki - Gabala",
          activities: [
            "Drive to Gabala: 1-2 hour drive from Sheki.",
            "Tufandag Mountain Resort: Cable car rides with scenic views",
            "Gabala Waterfalls: Visit Seven Beauties Waterfall.",
            "Explore the Gabala Shooting Club or enjoy local food and shopping",
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Gabala - Baku Departure",
        details: {
          place: "Gabala - Baku Departure",
          activities: ["Drive back to Baku: Relax and explore more local spots if time allows.", "Shopping at Taza Bazaar or 28 Mall.", "Departure: Transfer to the airport for your flight back"],
          meals: "Breakfast",
        },
      },
    ],
  },
  {
    id: 7,
    name: "Egypt",
    duration: "6 DAYS",
    image: img9,
    itinerary: [
      {
        day: 1,
        title: "Arrival in Cairo",
        details: {
          place: "Cairo",
          activities: [
            "Arrive in Cairo: Transfer to hotel.",
            "Evening Nile Cruise: Enjoy a relaxing dinner cruise along the Nile River with traditional music and entertainment."
          ],
          meals: "Dinner"
        }
      },
      {
        day: 2,
        title: "Cairo – Giza",
        details: {
          place: "Cairo - Giza",
          activities: [
            "Giza Pyramids: Visit the Great Pyramid of Giza, Sphinx, and the Pyramid of Khafre.",
            "Egyptian Museum: Explore the museum and its treasures, including King Tutankhamun’s tomb.",
            "Coptic Cairo: Visit the Hanging Church and Coptic Museum."
          ],
          meals: "Breakfast"
        }
      },
      {
        day: 3,
        title: "Cairo - Luxor",
        details: {
          place: "Cairo - Luxor",
          activities: [
            "Flight to Luxor: Morning flight to Luxor.",
            "Luxor Temple: Explore this ancient temple dedicated to the god Amun.",
            "Karnak Temple: Visit the massive complex, known for its grand halls and columns.",
            "Evening Sound and Light Show: Watch a spectacular show at the Karnak Temple."
          ],
          meals: "Breakfast"
        }
      },
      {
        day: 4,
        title: "Luxor - West Bank",
        details: {
          place: "Luxor - West Bank",
          activities: [
            "Valley of the Kings: Visit the tombs of famous pharaohs, including Tutankhamun’s tomb.",
            "Temple of Hatshepsut: Explore the well-preserved mortuary temple of the female pharaoh.",
            "Colossi of Memnon: See the giant statues guarding the ancient site.",
            "Hot Air Balloon Ride (optional): Enjoy a breathtaking view of Luxor from above."
          ],
          meals: "Breakfast"
        }
      },
      {
        day: 5,
        title: "Luxor – Aswan",
        details: {
          place: "Luxor - Aswan",
          activities: [
            "Morning Transfer to Aswan: Travel to Aswan by train or private vehicle (approx. 3-4 hours).",
            "Philae Temple: Visit the ancient island temple dedicated to the goddess Isis.",
            "Unfinished Obelisk: See the ancient obelisk that was abandoned due to cracks.",
            "Aswan High Dam: Learn about the engineering marvel that controls the Nile River."
          ],
          meals: "Breakfast"
        }
      },
      {
        day: 6,
        title: "Aswan – Cairo",
        details: {
          place: "Aswan - Cairo",
          activities: [
            "Morning: Optional visit to Abu Simbel (by flight or bus) to see the magnificent temples of Ramses II.",
            "Return to Cairo: Afternoon flight back to Cairo for your departure."
          ],
          meals: "Breakfast"
        }
      }
    ]
  },
  {
    id: 8,
    name: "Georgia",
    duration: "5 DAYS",
    image: img10, 
    itinerary: [
      {
        day: 1,
        title: "Tbilisi City Tour",
        details: {
          place: "Tbilisi",
          activities: [
            "Explore the Old Town: Visit Narikala Fortress, Metekhi Church, and Rustaveli Avenue.",
            "Relax at the famous Abanotubani district, known for its traditional sulfur baths.",
            "Take a ride on the Tbilisi Cable Car to get panoramic views of the city.",
            "Visit Freedom Square and Tbilisi Botanical Garden."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Tbilisi - Mtskheta - Gudauri",
        details: {
          place: "Tbilisi - Mtskheta - Gudauri",
          activities: [
            "Head to Mtskheta, the ancient capital of Georgia.",
            "Visit Jvari Monastery for a stunning view of the confluence of the Mtkvari and Aragvi rivers.",
            "Explore Svetitskhoveli Cathedral, a UNESCO World Heritage site.",
            "Drive to Gudauri and visit Ananuri Fortress overlooking the Zhinvali Reservoir.",
            "Relax at Panorama Gudauri with breathtaking mountain views."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Gudauri - Kazbegi - Tbilisi",
        details: {
          place: "Gudauri - Kazbegi - Tbilisi",
          activities: [
            "Drive towards Stepantsminda (Kazbegi), known for its majestic views of Mount Kazbeg.",
            "Visit Gergeti Trinity Church, set at an altitude of 2,170 meters, with stunning views of the mountain.",
            "Enjoy the scenic beauty and an optional 4x4 jeep ride to the church.",
            "Return to Tbilisi in the evening."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Tbilisi - Wine Region (Kakheti)",
        details: {
          place: "Tbilisi - Kakheti",
          activities: [
            "Drive to Kakheti, the wine region of Georgia.",
            "Visit Sighnaghi, the charming hilltop town with cobblestone streets and scenic views of the Alazani River Valley.",
            "Explore the Sighnaghi Fortress and local wineries.",
            "Experience a traditional Georgian wine tasting session.",
            "Visit Alaverdi Monastery and Bodbe Monastery.",
            "Return to Tbilisi in the evening."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Tbilisi - Uplistsikhe - Departure",
        details: {
          place: "Tbilisi - Uplistsikhe - Departure",
          activities: [
            "Visit Uplistsikhe, an ancient rock-hewn town with caves and temples.",
            "Explore the ruins of this fascinating site, dating back to the early Iron Age.",
            "Return to Tbilisi and do some last-minute shopping or visit a local café.",
            "Transfer to the airport for your flight home."
          ],
          meals: "Breakfast",
        },
      },
    ],
    inclusions: [
      "Accommodation in 4-star hotels (or as per your preference)",
      "Breakfast included",
      "All transfers (private vehicle)",
      "English-speaking guide",
      "Entrance fees to sites and activities",
      "Wine tasting session in Kakheti",
    ],
  }, 
  {
    id: 9,
    name: "Dubai",
    duration: "5 DAYS",
    image: img11, // Replace with the actual image variable or path
    itinerary: [
      {
        day: 1,
        title: "Arrival in Dubai + Unique Experiences",
        details: {
          place: "Dubai",
          activities: [
            "Arrive in Dubai and transfer to your hotel.",
            "Explore Alserkal Avenue, a vibrant artsy neighborhood in Al Quoz.",
            "Visit Al Fahidi Historical Neighborhood with narrow alleys and traditional wind towers.",
            "Take a traditional Abra boat ride through Dubai Creek.",
            "Evening stroll along Dubai Water Canal with scenic views."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Cultural & Nature Experiences",
        details: {
          place: "Dubai",
          activities: [
            "Morning visit to Riyadh Park for relaxation and walks.",
            "Explore The Coffee Museum and learn about the history of coffee in the Middle East.",
            "Afternoon trip to Hatta Dam for kayaking or hiking in the peaceful mountain surroundings.",
            "Evening visit to Jumeirah Fishing Harbor for fresh seafood and a relaxing time by the water."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Unique Views & Experiences",
        details: {
          place: "Dubai",
          activities: [
            "Morning visit to rooftop cafes at La Mer Beach for peaceful views.",
            "Explore The Green Planet, an immersive indoor rainforest at City Walk.",
            "Afternoon visit to Dubai Design District (d3), a hub for art galleries and boutique shops.",
            "Evening visit to Dubai Opera Garden for a serene experience."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Day Trip to Abu Dhabi",
        details: {
          place: "Dubai - Abu Dhabi",
          activities: [
            "Morning drive to Abu Dhabi (1.5 hours).",
            "Visit Qasr Al Hosn, the oldest stone building in Abu Dhabi, showcasing the city’s history.",
            "Afternoon visit to Al Bateen Beach, a peaceful spot in Abu Dhabi.",
            "Explore Al Ain Oasis, a UNESCO-listed oasis with shaded palm groves and traditional irrigation systems.",
            "Return to Dubai in the evening."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Natural & Modern Escapes",
        details: {
          place: "Dubai",
          activities: [
            "Morning exploration of Dubai Desert Conservation Reserve, with wildlife and peaceful dunes.",
            "Afternoon visit to Dubai Garden Glow, a luminous garden with themed light sculptures and installations.",
            "Evening farm-to-table dinner at The Farm in Al Barari, surrounded by greenery."
          ],
          meals: "Breakfast",
        },
      },
    ],
    inclusions: [
      "Accommodation in 4-star hotels (or as per your preference)",
      "Breakfast included",
      "All transfers (private vehicle)",
      "English-speaking guide",
      "Entrance fees to sites and activities",
    ],
  },
  {
    id: 10,
    name: "Marrakech",
    duration: "5 DAYS",
    image: img12, // Replace with the actual image variable or path
    itinerary: [
      {
        day: 1,
        title: "Arrival in Marrakech",
        details: {
          place: "Marrakech",
          activities: [
            "Arrive in Marrakech and transfer to your hotel.",
            "Explore Marrakech Medina: Wander through the narrow streets of the UNESCO-listed old town, visiting Jemaa el-Fnaa square with street performers, food stalls, and markets.",
            "Visit Koutoubia Mosque and its beautiful gardens.",
            "Explore Bahia Palace with its stunning architecture and gardens.",
            "Evening visit to Le Jardin Majorelle, a tranquil garden designed by Jacques Majorelle, later owned by Yves Saint Laurent."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 2,
        title: "Marrakech - Atlas Mountains",
        details: {
          place: "Marrakech - Atlas Mountains",
          activities: [
            "Morning: Take a day trip to the Atlas Mountains (1.5 hours from Marrakech).",
            "Visit the Berber villages to learn about local life.",
            "Hike to Ouzoud Waterfalls or enjoy a mule ride around the area.",
            "Afternoon: Visit a local Berber market for handmade goods.",
            "Evening: Return to Marrakech for a relaxing evening."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 3,
        title: "Marrakech - Essaouira",
        details: {
          place: "Marrakech - Essaouira",
          activities: [
            "Morning: Travel to Essaouira (2.5 hours).",
            "Stroll through the medina, a UNESCO World Heritage site with whitewashed buildings and blue accents.",
            "Visit the Skala de la Ville fortress with views of the Atlantic coast.",
            "Afternoon: Explore Essaouira beach for its relaxed vibe and beautiful coastline.",
            "Visit the Essaouira fish market and enjoy fresh seafood.",
            "Evening: Relax and further explore the vibrant medina."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 4,
        title: "Essaouira - Fes",
        details: {
          place: "Essaouira - Fes",
          activities: [
            "Morning: Travel to Fes (5 hours).",
            "Visit the Royal Palace and the Bou Inania Madrasa, an example of Marinid architecture.",
            "Afternoon: Explore Fes el-Bali, the ancient walled city and UNESCO site.",
            "Visit Al Quaraouiyine Mosque, the oldest continuously operating university in the world.",
            "Wander through the tanneries and watch the traditional leather-dyeing process.",
            "Evening: Stroll through the winding streets of the medina and enjoy Moroccan food at a traditional restaurant."
          ],
          meals: "Breakfast",
        },
      },
      {
        day: 5,
        title: "Fes - Chefchaouen",
        details: {
          place: "Fes - Chefchaouen",
          activities: [
            "Morning: Travel to Chefchaouen (3.5 hours).",
            "Explore the iconic blue-painted streets of this charming mountain town.",
            "Visit Ras El Maa Waterfall for a peaceful escape.",
            "Afternoon: Wander through the medina, shop for local handicrafts, and visit Kasbah Museum.",
            "Evening: Enjoy the sunset from The Spanish Mosque, overlooking the town."
          ],
          meals: "Breakfast",
        },
      },
    ],
    inclusions: [
      "Accommodation in 4-star hotels (or as per your preference)",
      "Breakfast included",
      "All transfers (private vehicle)",
      "English-speaking guide",
      "Entrance fees to sites and activities"
    ],
  }  
];

export default samplePackages;