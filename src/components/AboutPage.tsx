import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Import Figma assets
import imgFounder from "figma:asset/02e3f454d85bbf270bde4ff058a46d9c8315303b.png";
import imgCulture1 from "figma:asset/39c70ecf2108a45434ce0e0efbcad85303d71536.png";
import imgCulture2 from "figma:asset/be606da059fdd02d7fe78a0c5ee3ae583ecdea05.png";
import imgCulture3 from "figma:asset/02d2c303448f53b71c8fe76e616c91c4d1d12b80.png";
import imgCulture4 from "figma:asset/6db2cf7d001e5096b270359f40689627ae7cbfc3.png";
import imgCulture5 from "figma:asset/8f94f897b13c6bca1e60b9008759ed986b55d5fe.png";
import imgCulture6 from "figma:asset/cad614525d924dbfc2ff2561df39c3d3948f0cf4.png";
import imgDestinations from "figma:asset/de10c919f5497ac0118768365883acd6bf8afb9c.png";
import imgLogo from "./../assets/omtlogo.svg";

interface AboutPageProps {
  onBack: () => void;
  onNavigate: (page: 'home' | 'contact' | 'about') => void;
}

export function AboutPage({ onBack, onNavigate }: AboutPageProps) {
  const [currentAchievement, setCurrentAchievement] = useState(0);

  const stats = [
    { value: '55 Mn+', label: 'Quarterly Avg. Monthly Active Users' },
    { value: '99.8%+', label: 'Platform Availability' },
    { value: '195 Mn+', label: 'Cumulative Transactions' },
    { value: '5,193', label: 'Employees' },
    { value: '60.1 Bn', label: 'Gross Booking (FY 24)' },
    { value: '34,000+', label: 'Hotel Supply' },
    { value: '19 Mn+', label: 'Happy Customers (FY 24)' },
    { value: '400+', label: 'Destinations Worldwide' }
  ];

  const achievements = [
    {
      title: 'Best Travel Platform 2025',
      description: 'Awarded for innovation and customer service excellence',
      icon: '🏆'
    },
    {
      title: 'Top Employer 2025',
      description: 'Recognized for workplace culture and employee satisfaction',
      icon: '⭐'
    },
    {
      title: 'Innovation Award',
      description: 'Leading technology advancement in travel industry',
      icon: '💡'
    }
  ];

  const cultureImages = [
    { image: imgCulture1, title: 'Our Work Culture' },
    { image: imgCulture2, title: 'Team Building Activities' },
    { image: imgCulture3, title: 'Learning & Development' },
    { image: imgCulture4, title: 'Innovation Hub' },
    { image: imgCulture5, title: 'Diversity & Inclusion' },
    { image: imgCulture6, title: 'Work-Life Balance' }
  ];

  const nextAchievement = () => {
    setCurrentAchievement((prev) => (prev + 1) % achievements.length);
  };

  const prevAchievement = () => {
    setCurrentAchievement((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-3 py-4">
          <div className="flex items-center justify-between">
            <button onClick={onBack} className="flex items-center gap-1">
              <img src={imgLogo} alt="OMT Logo" className="w-auto h-10" />
            </button>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-3 py-2 rounded">
                <Globe className="w-5 h-5 text-[#203066]" />
                <span className="text-sm font-medium text-[#203066]">ENG</span>
              </button>
              <button className="bg-[#203066] text-white px-5 py-2 rounded-xl text-sm font-medium">
                Login now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Header */}
      <header className="hidden lg:block bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <button onClick={onBack} className="flex items-center gap-1 cursor-pointer">
              <img src={imgLogo} alt="OMT Logo" className="w-auto h-10" />
              </button>
              <nav className="flex gap-6">
                <button onClick={onBack} className="text-gray-700 hover:text-[#203066] font-medium">Home</button>
                <a href="#" className="text-gray-700 hover:text-[#203066] font-medium">Packages</a>
                <a href="#" className="text-gray-700 hover:text-[#203066] font-medium">Destinations</a>
                <a href="#" className="text-[#203066] font-semibold">About us</a>
                <button onClick={() => onNavigate('contact')} className="text-gray-700 hover:text-[#203066] font-medium">Contact</button>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-50">
                <Globe className="w-5 h-5 text-[#203066]" />
                <span className="text-sm font-medium text-[#203066]">ENG</span>
              </button>
              <button className="bg-[#203066] text-white px-6 py-2.5 rounded-lg hover:bg-[#1a2651] transition-colors">
                Login now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background */}
      <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 lg:h-80 h-48">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src={imgDestinations} 
            alt="Travel Destinations" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 -mt-16 lg:-mt-32 relative z-10">
        {/* About OMyTravel Section */}
        <section className="bg-white rounded-2xl shadow-xl p-6 lg:p-12 mb-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">OMyTravel</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                OMyTravel is an innovative online travel platform, founded in 2025. The company provides comprehensive online travel services including flight tickets, domestic and international holiday packages, hotel reservations, rail, and bus tickets.
              </p>
              <p className="text-gray-600 leading-relaxed">
                OMyTravel has quickly established itself as a leading travel portal with a growing market presence across multiple regions. The company operates in various countries including India, United States, Singapore, Malaysia, Thailand, UAE, and several European destinations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Through our cutting-edge technology platform, we enable travelers to book their perfect trip with ease and confidence. Our commitment to customer satisfaction and continuous innovation has made us a trusted brand in the travel industry.
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                The company's vision is to be the most customer-centric travel organization, where customers can discover and book their dream destinations effortlessly. We strive to offer our customers a seamless and delightful booking experience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With our modern approach and customer-first mindset, we have built a comprehensive travel services platform. Our offerings range from budget-friendly options to luxury experiences, covering both domestic and international travel needs for every type of traveler.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our success is driven by our talented team of professionals who work tirelessly to innovate and deliver exceptional value to our customers every single day.
              </p>
            </div>
          </div>
        </section>

        {/* Our Founder Section */}
        <section className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 px-6 lg:px-12 pt-8 lg:pt-12 mb-8 lg:mb-12">Our Founder</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-64 lg:h-auto">
              <img 
                src={imgFounder} 
                alt="Chaitanya - Founder & CEO" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-2">Chaitanya</h3>
              <p className="text-xl text-[#155DFC] font-semibold mb-6">Founder & CEO</p>
              
              <div className="space-y-4 text-gray-600">
                <p className="leading-relaxed">
                  Arjun Mehta is the visionary founder and CEO of OMyTravel. With over 15 years of experience in the travel and technology industry, he has been instrumental in revolutionizing how people plan and book their travel experiences.
                </p>
                <p className="leading-relaxed">
                  Before founding OMyTravel in 2025, Arjun held senior leadership positions at leading tech companies where he developed a deep understanding of customer needs and technology innovation. His passion for travel and technology drove him to create a platform that makes travel accessible, affordable, and enjoyable for everyone.
                </p>
                <p className="leading-relaxed">
                  Under his leadership, OMyTravel has grown rapidly and is on track to become one of India's most trusted travel platforms. Arjun's vision is to make OMyTravel the go-to platform for travelers seeking seamless booking experiences and personalized service.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Footprint Section */}
        <section className="bg-gradient-to-br from-[#1c398e] to-[#1447e6] rounded-2xl shadow-xl p-6 lg:p-12 mb-12 text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 lg:mb-12">Our Footprint</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 lg:p-6 text-center">
                <p className="text-2xl lg:text-4xl font-bold text-[#1c398e] mb-2">{stat.value}</p>
                <p className="text-xs lg:text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Achievements Section */}
        <section className="bg-white rounded-2xl shadow-xl p-6 lg:p-12 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">Our Achievements</h2>
          
          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={prevAchievement}
                className="w-10 h-10 rounded-full border-2 border-[#155DFC] flex items-center justify-center hover:bg-[#155DFC] hover:text-white transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex-1 mx-8 text-center">
                <div className="text-6xl mb-4">{achievements[currentAchievement].icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {achievements[currentAchievement].title}
                </h3>
                <p className="text-gray-600">
                  {achievements[currentAchievement].description}
                </p>
              </div>
              
              <button 
                onClick={nextAchievement}
                className="w-10 h-10 rounded-full border-2 border-[#155DFC] flex items-center justify-center hover:bg-[#155DFC] hover:text-white transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex justify-center gap-2">
              {achievements.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAchievement(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentAchievement ? 'bg-[#155DFC] w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Culture Section */}
        <section className="bg-white rounded-2xl shadow-xl p-6 lg:p-12 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8 lg:mb-12">Our Culture</h2>
          
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {cultureImages.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 lg:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-sm lg:text-base">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Media Presence Section */}
        <section className="bg-white rounded-2xl shadow-xl p-6 lg:p-12 mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">Our Media Presence</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leading Publications</h3>
              <p className="text-gray-600">Featured in top business and travel magazines worldwide</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">📺</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">TV Appearances</h3>
              <p className="text-gray-600">Regular appearances on major news and travel channels</p>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-4">🎙️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Podcasts & Interviews</h3>
              <p className="text-gray-600">Industry insights shared on popular travel podcasts</p>
            </div>
          </div>
        </section>

        {/* Contact Us CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl shadow-xl p-8 lg:p-12 mb-12 text-white text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-8 text-blue-100">Get in touch with us to plan your perfect vacation</p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-white text-[#203066] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us
          </button>
        </section>
      </main>

      {/* Footer - Desktop */}
      <footer className="hidden lg:block bg-[#F5F5F5] mt-16">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-1 mb-4">
                <span className="text-[#203066] font-bold text-xl">O</span>
                <span className="text-[#EC2027] font-bold text-xl">My</span>
                <span className="text-[#203066] font-bold text-xl">Travel</span>
              </div>
              <p className="text-gray-600 text-sm">Your Gateway</p>
              <p className="text-gray-600 text-sm">to Amazing Adventures!</p>
              <p className="text-gray-500 text-xs mt-4">© OMT 2024</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><button onClick={() => onNavigate('about')} className="hover:text-[#203066]">About</button></li>
                <li><a href="#" className="hover:text-[#203066]">Jobs</a></li>
                <li><a href="#" className="hover:text-[#203066]">Blogs</a></li>
                <li><button onClick={() => onNavigate('contact')} className="hover:text-[#203066]">Contact us</button></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Explore</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#203066]">Australia</a></li>
                <li><a href="#" className="hover:text-[#203066]">New Zealand</a></li>
                <li><a href="#" className="hover:text-[#203066]">United States America (USA)</a></li>
                <li><a href="#" className="hover:text-[#203066]">Greece</a></li>
                <li><a href="#" className="hover:text-[#203066]">Maldives</a></li>
                <li><a href="#" className="hover:text-[#203066]">Singapore</a></li>
                <li><a href="#" className="text-[#155DFC] hover:underline">See more</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Terms and Policies</h3>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li><a href="#" className="hover:text-[#203066]">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#203066]">Terms of use</a></li>
                <li><a href="#" className="hover:text-[#203066]">Accessibility</a></li>
                <li><a href="#" className="hover:text-[#203066]">Reward system policy</a></li>
              </ul>
              <h3 className="font-semibold text-gray-900 mb-4">Help</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><a href="#" className="hover:text-[#203066]">Support</a></li>
                <li><a href="#" className="hover:text-[#203066]">Cancel your bookings</a></li>
                <li><a href="#" className="hover:text-[#203066]">Use Coupon</a></li>
                <li><a href="#" className="hover:text-[#203066]">Refund Policies</a></li>
                <li><a href="#" className="hover:text-[#203066]">International Travel Documents</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
