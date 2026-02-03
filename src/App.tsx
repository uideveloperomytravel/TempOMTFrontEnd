import { useState } from 'react';
import React from 'react';
import { Menu, Heart, Home, Calendar, MessageCircle, MapPin, ChevronRight, Search, ChevronLeft } from 'lucide-react';
import { ContactPage } from './components/ContactPage';
import { AboutPage } from './components/AboutPage';
import { PackageEnquiryPopup } from './components/PackageEnquiryPopup';

// Import Figma assets
import imgThailand from "figma:asset/3c5cdd1b11b55adc84f1abf772de7dc53629134a.png";
import imgBali from "figma:asset/9b4b55218bf29fea824686411a1f02abd191926e.png";
import imgSingapore from "figma:asset/8a0c90534a15869a007842b30714ab6ecc18f127.png";
import imgDubai from "figma:asset/3e195ca68f361e2a08c4a56843d9ac08a394d044.png";
import imgGoa from "figma:asset/cc176334d1d2f05c05a68374eb963671a620307d.png";
import imgKerala from "figma:asset/22d626b5db71fa1b442bc1ca0bdc4f940f9dd4a9.png";
import imgOoty from "figma:asset/04f001a258d8ba3ec30ead5b222b8cc27ab8bd45.png";
import imgShimla from "figma:asset/c0b8ff5284804a493b219148448ef602d7fd555f.png";
import imgLogo from "./assets/omtlogo.svg";

// Package details generator
const generatePackageDetails = (name: string, price: string, image: string) => {
  const allFlights = ['Round Trip Flights', 'Direct Flights', 'Economy Class Flights', 'Premium Economy Flights'];
  const allHotels = ['4 Star, 3 Star Hotels', '5 Star Luxury Hotels', '4 Star Beachfront Hotels', '3 Star City Hotels', 'Boutique Hotels'];
  const allActivities = ['6 Activities', '8 Activities', '10 Activities', '5 Activities', '7 Activities'];
  
  const toursByDestination: { [key: string]: string[] } = {
    'Thailand': ['Poda Islands Tour', 'James Bond Island Tour', 'Ferry Transfer', 'Phi Phi Islands Tour', 'Bangkok City Tour'],
    'Bali': ['Ubud Rice Terrace Tour', 'Water Temple Visit', 'Beach Club Access', 'Volcano Sunrise Trek'],
    'Singapore': ['Marina Bay Tour', 'Gardens by the Bay', 'Sentosa Island', 'Universal Studios'],
    'Dubai': ['Burj Khalifa Visit', 'Desert Safari', 'Dubai Mall Tour', 'Palm Jumeirah Cruise'],
    'Goa': ['Beach Hopping Tour', 'Old Goa Heritage Walk', 'Water Sports Package', 'Sunset Cruise'],
    'Kerala': ['Backwater Houseboat', 'Tea Plantation Visit', 'Kathakali Performance', 'Ayurveda Spa Session'],
    'Ooty': ['Botanical Gardens', 'Toy Train Ride', 'Tea Estate Tour', 'Ooty Lake Boating'],
    'Shimla Manali': ['Mall Road Walk', 'Rohtang Pass', 'Solang Valley', 'Hadimba Temple'],
    'Hongkong': ['Victoria Peak Tram', 'Star Ferry Ride', 'Disneyland Pass', 'Night Market Tour'],
    'Mauritius': ['Ile aux Cerfs Island', 'Underwater Walk', 'Catamaran Cruise', 'Seven Colored Earth'],
    'Kyoto': ['Bamboo Forest Walk', 'Golden Pavilion', 'Geisha District Tour', 'Tea Ceremony'],
    'Trichy': ['Rock Fort Temple', 'Sri Ranganathaswamy Temple', 'Jambukeswarar Temple', 'Kallanai Dam']
  };

  const randomIndex = Math.floor(Math.random() * allFlights.length);
  const flights = allFlights[randomIndex];
  const hotels = allHotels[randomIndex % allHotels.length];
  const activities = allActivities[randomIndex % allActivities.length];
  
  // Get tours for this destination, or use default tours
  const tours = toursByDestination[name] || ['City Tour', 'Cultural Experience', 'Adventure Activity', 'Local Cuisine Tasting'];
  const selectedTours = tours.slice(0, 3);

  return {
    name,
    price,
    image,
    flights,
    hotels,
    activities,
    tours: selectedTours
  };
};

export default function App() {
  const [selectedFilter, setSelectedFilter] = useState('ALL PACKAGES');
  const [mobileNavActive, setMobileNavActive] = useState('Home');
  const [currentPage, setCurrentPage] = useState<'home' | 'contact' | 'about'>('home');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);

  const handlePackageClick = (name: string, price: string, image: string) => {
    const packageDetails = generatePackageDetails(name, price, image);
    setSelectedPackage(packageDetails);
    setIsPopupOpen(true);
  };

  // If on about page, show AboutPage component
  if (currentPage === 'about') {
    return <AboutPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
  }

  // If on contact page, show ContactPage component
  if (currentPage === 'contact') {
    return <ContactPage onBack={() => setCurrentPage('home')} onNavigate={setCurrentPage} />;
  }

  const filters = [
    'ALL PACKAGES', 'HONEYMOON (21)', 'FAMILY VACAYS (23)', 'FAMILY SPECIAL (23)', 
    'FAMILY FUN', 'FAMILY WITH KIDS', 'PREMIUM (12)', 'LUXURY (12)', 'GROUP TOURS (4)', 'BOOK @ Rs.1 (6)'
  ];

  const honeymoonDestinations = [
    { name: 'Goa', price: '₹30,900', image: imgGoa },
    { name: 'Kerala', price: '₹30,900', image: imgKerala },
    { name: 'Ooty & Coorg', price: '₹30,900', image: imgOoty },
    { name: 'Shimla Manali', price: '₹30,900', image: imgShimla }
  ];

  const visaFreePackages = [
    { name: 'Thailand', price: '₹30,900', image: imgThailand },
    { name: 'Bali', price: '₹30,900', image: imgBali },
    { name: 'Singapore', price: '₹30,900', image: imgSingapore },
    { name: 'Dubai', price: '₹30,900', image: imgDubai }
  ];

  const trendingDestinations = [
    { 
      name: 'Ooty', 
      price: '₹30,900', 
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' 
    },
    { 
      name: 'Goa', 
      price: '₹30,900', 
      image: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' 
    },
    { 
      name: 'Trichy', 
      price: '₹30,900', 
      image: 'https://images.unsplash.com/photo-1554880369-f762cfa9832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800' 
    }
  ];

  const groupTourPackages = [
    { name: 'Thailand', price: '₹30,900', image: imgThailand },
    { name: 'Bali', price: '₹30,900', image: imgBali },
    { name: 'Dubai', price: '₹30,900', image: imgDubai }
  ];

  const featuredTours = [
    { 
      title: 'Explore Hongkong', 
      price: '₹21,999', 
      duration: '6N/7D',
      image: 'https://images.unsplash.com/photo-1471347025057-68ff089f54cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    },
    { 
      title: 'Explore Mauritius', 
      price: '₹24,999', 
      duration: '5N/6D',
      image: 'https://images.unsplash.com/photo-1716115927980-7fac8b0f96c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    },
    { 
      title: 'Explore Kyoto', 
      price: '₹29,999', 
      duration: '7N/8D',
      image: 'https://images.unsplash.com/photo-1729864881494-d96345092845?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
    }
  ];

  const whyChooseReasons = [
    { 
      icon: '✈️', 
      title: 'Best Tour Experience', 
      description: 'We provide reliable and affordable tickets for the trip in 2022.' 
    },
    { 
      icon: '🏨', 
      title: 'Easy Booking', 
      description: 'Book your ticket online with quick & easy. Easy steps & convenient.' 
    },
    { 
      icon: '⏱️', 
      title: '24/7 Support', 
      description: 'Wherever and whenever, we are always available 24/7 for you.' 
    }
  ];

  const exclusiveDeals = [
    { 
      title: 'Maldives', 
      discount: 'Upto 50% off',
      image: 'https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    { 
      title: 'SBI Exclusive', 
      discount: 'Extra 10% off',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    { 
      title: 'Maldives Special', 
      discount: 'Flat 40% off',
      image: 'https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    },
    { 
      title: 'Book Today', 
      discount: 'Save Big',
      image: 'https://images.unsplash.com/flagged/photo-1575834678162-9fd77151f40b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600'
    }
  ];

  const blogPosts = [
    {
      title: '10 Reasons why to Choose Maldives',
      excerpt: 'Discover paradise on Earth with crystal clear waters and luxury resorts...',
      image: 'https://images.unsplash.com/photo-1637576308588-6647bf80944d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      date: 'Jan 25, 2026'
    },
    {
      title: 'Best Temples to Visit in India',
      excerpt: 'Explore the spiritual and architectural marvels across India...',
      image: 'https://images.unsplash.com/photo-1681847627328-b1e0b71d0d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      date: 'Jan 20, 2026'
    },
    {
      title: 'Top Beach Destinations for 2026',
      excerpt: 'From Goa to Bali, discover the best beaches for your next vacation...',
      image: 'https://images.unsplash.com/photo-1663848018507-accf7c6a2ebb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      date: 'Jan 15, 2026'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="flex items-center justify-between px-4 py-3">
          <button className="p-2">
            <Menu className="w-6 h-6 text-gray-800" />
          </button>
          <div className="flex items-center gap-1">
            <img src={imgLogo} alt="OMT Logo" className="w-auto h-10" />
          </div>
          <button className="p-2">
            <Heart className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-1">
                <img src={imgLogo} alt="OMT Logo" className="w-auto h-10" />
              </div>
              <nav className="flex gap-6">
                <a href="#" className="text-gray-700 hover:text-[#203066] font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-[#203066] font-medium">Packages</a>
                <a href="#" className="text-gray-700 hover:text-[#203066] font-medium">Destinations</a>
                <button onClick={() => setCurrentPage('about')} className="text-gray-700 hover:text-[#203066] font-medium">About us</button>
                <button onClick={() => setCurrentPage('contact')} className="text-gray-700 hover:text-[#203066] font-medium">Contact</button>
              </nav>
            </div>
            <button className="bg-[#155DFC] text-white px-6 py-2.5 rounded-lg hover:bg-[#1347d4] transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Service Grid */}
      <section className="lg:hidden px-4 py-6 bg-white">
        <div className="grid grid-cols-3 gap-2">
          <button className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
            <div className="bg-[#EFF6FF] rounded-lg p-3">
              <Calendar className="w-6 h-6 text-[#155DFC]" />
            </div>
            <span className="text-xs font-semibold text-center">Holiday Packages</span>
          </button>
          <button className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
            <div className="bg-[#EFF6FF] rounded-lg p-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#155DFC" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" />
                <line x1="10" y1="8" x2="14" y2="8" />
                <line x1="10" y1="12" x2="14" y2="12" />
                <line x1="10" y1="16" x2="14" y2="16" />
                <line x1="10" y1="20" x2="14" y2="20" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-center">Hotels</span>
          </button>
          <button className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center gap-2 hover:shadow-md transition-shadow">
            <div className="bg-[#EFF6FF] rounded-lg p-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#155DFC" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>
            </div>
            <span className="text-xs font-semibold text-center">Flights</span>
          </button>
        </div>
      </section>

      {/* Mobile Offers Section */}
      <section className="lg:hidden px-4 py-6 bg-gray-50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">🔥 Offers</h2>
          <button className="text-[#155DFC] text-sm font-medium flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          <div className="min-w-[280px] relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1554880369-f762cfa9832a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
              alt="Keys To Memories" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="text-white font-semibold text-sm">Keys TO Memories</h3>
            </div>
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">
              OFFERS
            </div>
          </div>
          <div className="min-w-[280px] relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1609523660193-217b488aa8f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600" 
              alt="SBI Exclusive" 
              className="w-full h-32 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="text-white font-semibold text-sm">SBI Exclusive</h3>
            </div>
            <div className="absolute top-3 right-3 bg-white px-2 py-1 rounded text-xs font-medium">
              SBI
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Filter Chips */}
      <section className="lg:hidden px-4 py-4 bg-white">
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm whitespace-nowrap hover:bg-gray-50">
            Visa Free
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm whitespace-nowrap hover:bg-gray-50">
            Trending
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm whitespace-nowrap hover:bg-gray-50">
            Group package
          </button>
        </div>
      </section>

      {/* Desktop Hero/Filter Section */}
      <section className="hidden lg:block relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">What kind of holiday are you looking for?</h1>
          </div>
          <div className="bg-[rgba(24,23,23,0.69)] rounded-xl p-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedFilter === filter
                      ? 'bg-white text-gray-900 shadow-lg'
                      : 'bg-white/10 text-white border border-white/30 hover:bg-white/20'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honeymoon Destinations */}
      <section className="px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#203066] mb-2">Honeymoon Destinations</h2>
            <p className="text-gray-600 text-sm hidden lg:block">Dream Destinations, Zero Paperwork!</p>
          </div>
          <button className="text-[#155DFC] text-sm font-medium flex items-center gap-1 lg:hidden">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        
        {/* Mobile: Circular Images */}
        <div className="lg:hidden flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {honeymoonDestinations.map((dest) => (
            <button 
              key={dest.name} 
              onClick={() => handlePackageClick(dest.name, dest.price, dest.image)}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-2 border-2 border-gray-200">
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-semibold text-gray-900 text-center">{dest.name}</p>
            </button>
          ))}
        </div>

        {/* Desktop: Card Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {honeymoonDestinations.map((dest) => (
            <button 
              key={dest.name} 
              onClick={() => handlePackageClick(dest.name, dest.price, dest.image)}
              className="group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                <img src={dest.image} alt={dest.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{dest.name}</h3>
              <p className="text-sm text-gray-600">Starting at {dest.price} Per person</p>
            </button>
          ))}
        </div>
      </section>

      {/* Visa Free Packages */}
      <section className="px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto bg-white lg:bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-[#203066] mb-2">Visa Free Packages</h2>
            <p className="text-gray-600 text-sm hidden lg:block">Embark on a journey to some of the world's most captivating destinations</p>
          </div>
          <button className="text-[#155DFC] text-sm font-medium flex items-center gap-1 lg:hidden">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {visaFreePackages.map((pkg) => (
            <button 
              key={pkg.name} 
              onClick={() => handlePackageClick(pkg.name, pkg.price, pkg.image)}
              className="min-w-[160px] group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-3 shadow-md">
                <img src={pkg.image} alt={pkg.name} className="w-full h-44 object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{pkg.name}</h3>
              <p className="text-xs text-gray-600">Starting {pkg.price}</p>
            </button>
          ))}
        </div>

        {/* Desktop: Card Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {visaFreePackages.map((pkg) => (
            <button 
              key={pkg.name} 
              onClick={() => handlePackageClick(pkg.name, pkg.price, pkg.image)}
              className="group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                <img src={pkg.image} alt={pkg.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{pkg.name}</h3>
              <p className="text-sm text-gray-600">Starting at {pkg.price} Per person</p>
            </button>
          ))}
        </div>
      </section>

      {/* Trending Destinations */}
      <section className="px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#203066]">🚀 Trending Destinations</h2>
          <button className="text-[#155DFC] text-sm font-medium flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop: Large Featured Cards with side images */}
        <div className="hidden lg:grid grid-cols-2 gap-6">
          <button
            type="button"
            onClick={() => handlePackageClick(featuredTours[0].title, featuredTours[0].price, featuredTours[0].image)}
            className="relative h-96 rounded-2xl overflow-hidden shadow-xl group cursor-pointer text-left"
          >
            <img 
              src={featuredTours[0].image} 
              alt={featuredTours[0].title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-3xl font-bold mb-2">{featuredTours[0].title}</h3>
              <p className="text-lg">Starting {featuredTours[0].price} {featuredTours[0].duration}</p>
            </div>
          </button>
          <div className="grid grid-rows-2 gap-6">
            {featuredTours.slice(1).map((tour) => (
              <button
                key={tour.title}
                type="button"
                onClick={() => handlePackageClick(tour.title, tour.price, tour.image)}
                className="relative h-44 rounded-2xl overflow-hidden shadow-xl group cursor-pointer text-left"
              >
                <img 
                  src={tour.image} 
                  alt={tour.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-2xl font-bold mb-1">{tour.title}</h3>
                  <p className="text-sm">Starting {tour.price} {tour.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {trendingDestinations.map((dest) => (
            <button 
              key={dest.name} 
              onClick={() => handlePackageClick(dest.name, dest.price, dest.image)}
              className="min-w-[160px] group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-3 shadow-md">
                <img src={dest.image} alt={dest.name} className="w-full h-44 object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{dest.name}</h3>
              <p className="text-xs text-gray-600">Starting {dest.price}</p>
            </button>
          ))}
        </div>
      </section>

      {/* Group Tour Packages */}
      <section className="px-4 lg:px-8 py-8 lg:py-12 max-w-7xl mx-auto bg-white lg:bg-gray-50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#203066]">👥 Group Tour Packages</h2>
          <button className="text-[#155DFC] text-sm font-medium flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="lg:hidden flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {groupTourPackages.map((tour) => (
            <button 
              key={tour.name} 
              onClick={() => handlePackageClick(tour.name, tour.price, tour.image)}
              className="min-w-[160px] group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-3 shadow-md">
                <img src={tour.image} alt={tour.name} className="w-full h-44 object-cover" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900">{tour.name}</h3>
              <p className="text-xs text-gray-600">Starting {tour.price}</p>
            </button>
          ))}
        </div>

        {/* Desktop: Card Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-5">
          {groupTourPackages.map((tour) => (
            <button 
              key={tour.name} 
              onClick={() => handlePackageClick(tour.name, tour.price, tour.image)}
              className="group cursor-pointer text-left"
            >
              <div className="rounded-lg overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                <img src={tour.image} alt={tour.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{tour.name}</h3>
              <p className="text-sm text-gray-600">Starting at {tour.price} Per person</p>
            </button>
          ))}
        </div>
      </section>

      {/* Why Choose to Travel Section - Desktop Only */}
      <section className="hidden lg:block px-8 py-16 max-w-7xl mx-auto bg-gradient-to-b from-blue-50 to-white rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#203066] mb-3">WHY CHOOSE TO TRAVEL?</h2>
          <p className="text-gray-600 text-lg">We Make Your Travel Experiences Seamless</p>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {whyChooseReasons.map((reason, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Deals - Desktop Only */}
      <section className="hidden lg:block px-8 py-12 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-[#203066] mb-6">Exclusive Deals & Offer</h2>
        <div className="grid grid-cols-4 gap-4">
          {exclusiveDeals.map((deal, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handlePackageClick(deal.title, deal.discount, deal.image)}
              className="relative rounded-xl overflow-hidden shadow-lg group cursor-pointer h-64 text-left"
            >
              <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-white">
                <h3 className="text-lg font-bold mb-1">{deal.title}</h3>
                <p className="text-sm">{deal.discount}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* From our Blog - Desktop Only */}
      <section className="hidden lg:block px-8 py-12 max-w-7xl mx-auto bg-gray-50 rounded-2xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#203066]">From our blog</h2>
          <button className="text-[#155DFC] text-sm font-medium flex items-center gap-1">
            View All <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{post.excerpt}</p>
                <button className="text-[#155DFC] text-sm font-medium">Read more →</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Desktop Footer */}
      <footer className="hidden lg:block bg-[#203066] text-white py-12 mt-12">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-white font-bold text-2xl">O</span>
                <span className="text-[#EC2027] font-bold text-2xl">My</span>
                <span className="text-white font-bold text-2xl">Travel</span>
              </div>
              <p className="text-gray-300 text-sm">Your trusted travel partner for unforgettable journeys.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Discover</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Packages</a></li>
                <li><a href="#" className="hover:text-white">Destinations</a></li>
                <li><a href="#" className="hover:text-white">Deals</a></li>
                <li><a href="#" className="hover:text-white">Reviews</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-300 text-sm">
            © 2026 O My Travel. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="flex items-center justify-around py-3">
          <button 
            onClick={() => setMobileNavActive('Home')}
            className={`flex flex-col items-center gap-1 px-4 ${mobileNavActive === 'Home' ? 'text-[#155DFC]' : 'text-gray-500'}`}
          >
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button 
            onClick={() => setMobileNavActive('My Trips')}
            className={`flex flex-col items-center gap-1 px-4 ${mobileNavActive === 'My Trips' ? 'text-[#155DFC]' : 'text-gray-500'}`}
          >
            <Calendar className="w-6 h-6" />
            <span className="text-xs font-medium">My Trips</span>
          </button>
          <button 
            onClick={() => setMobileNavActive('Ask AI')}
            className={`flex flex-col items-center gap-1 px-4 relative ${mobileNavActive === 'Ask AI' ? 'text-[#155DFC]' : 'text-gray-500'}`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs font-medium">Ask AI</span>
            {mobileNavActive !== 'Ask AI' && (
              <span className="absolute top-0 right-2 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </button>
          <button 
            onClick={() => setMobileNavActive('WhereDos')}
            className={`flex flex-col items-center gap-1 px-4 ${mobileNavActive === 'WhereDos' ? 'text-[#155DFC]' : 'text-gray-500'}`}
          >
            <MapPin className="w-6 h-6" />
            <span className="text-xs font-medium">WhereDos</span>
          </button>
        </div>
      </nav>

      {/* Add padding at bottom for mobile to prevent content being hidden by bottom nav */}
      <div className="lg:hidden h-20" />

      {/* Add custom CSS for hiding scrollbars */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Package Enquiry Popup */}
      {isPopupOpen && selectedPackage && (
        <PackageEnquiryPopup 
          isOpen={isPopupOpen}
          packageDetails={selectedPackage} 
          onClose={() => setIsPopupOpen(false)}
        />
      )}
    </div>
  );
}