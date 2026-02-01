import { ArrowRight, Facebook, Twitter, Linkedin, Globe } from 'lucide-react';
import mapImage from "figma:asset/8c80b4094c764e5ff7f717c9f6aa7b82ad7e133a.png";
import imgLogo from "./../assets/omtlogo.svg";

interface ContactPageProps {
  onBack: () => void;
  onNavigate?: (page: 'home' | 'contact' | 'about') => void;
}

export function ContactPage({ onBack, onNavigate }: ContactPageProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header */}
      <header className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="px-3 py-4">
          <div className="flex items-center justify-between mb-0">
            <div className="flex items-center gap-1">
              <img src={imgLogo} alt="OMT Logo" className="w-auto h-10" />
            </div>
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
                <button onClick={() => onNavigate?.('about')} className="text-gray-700 hover:text-[#203066] font-medium">About us</button>
                <a href="#" className="text-[#203066] font-semibold">Contact</a>
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

      {/* Desktop Navigation Tabs */}
      <nav className="hidden lg:block bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            <button className="flex items-center gap-2 px-5 py-4 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <span className="font-medium">Flight</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-4 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-6.18C12.4 5.84 11.3 5 10 5H7c-1.89 0-3.39 1.67-3 3.56L5 22h2l-1-8h2v8h2v-8h4v8h2v-8h2l1 8h2l1-13c0-.55-.45-1-1-1z"/>
              </svg>
              <span className="font-medium">Hotel</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-4 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 6l-3.75 5 2.85 3.8-1.6 1.2C9.81 13.75 7 10 7 10l-6 8h22L14 6z"/>
              </svg>
              <span className="font-medium">Flight + Hotel</span>
            </button>
            <button className="flex items-center gap-2 px-5 py-4 border-b-2 border-transparent hover:border-gray-300 text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.47 6.07C16.61 5.39 15.38 5 14 5H8v2h6c.63 0 1.19.2 1.64.55l-.37 2.45H9c-1.66 0-3 1.34-3 3s1.34 3 3 3h6c1.66 0 3-1.34 3-3V9.67l.5-3.31c.08-.52-.35-.96-.87-.96-.3 0-.58.15-.74.39l-.42.28z"/>
              </svg>
              <span className="font-medium">Packages</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 lg:mb-12">Contact Us</h1>

        {/* Two Column Layout for Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8 lg:space-y-12">
            {/* Our Offices Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Our offices</h2>
              
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                {/* Map */}
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={mapImage}
                    alt="Gurugram Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Office Details */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Gurugram</h3>
                  <div className="text-sm text-gray-600 leading-relaxed mb-4 space-y-0.5">
                    <p>O My Travel</p>
                    <p>B16, 6th Floor,</p>
                    <p>Logic Technova Business Park</p>
                    <p>Sector 132,</p>
                    <p>Noida - 201301</p>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm text-[#155DFC] hover:underline font-medium"
                  >
                    Get directions
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Additional Office - Mobile */}
              <div className="lg:hidden mt-6 bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={mapImage}
                    alt="Bangalore Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Bangalore</h3>
                  <div className="text-sm text-gray-600 leading-relaxed mb-4 space-y-0.5">
                    <p>Cleartrip Pvt Ltd,</p>
                    <p>5th and 6th Floor,</p>
                    <p>Embassy Tech Village,</p>
                    <p>Devarabeesanahalli, ORR,</p>
                    <p>Bangalore - 560103</p>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm text-[#155DFC] hover:underline font-medium"
                  >
                    Get directions
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </section>

            {/* Email Section */}
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Email</h2>
              
              <div className="space-y-4 text-sm">
                <p className="text-gray-700">
                  For booking queries and support, visit{' '}
                  <a href="https://www.omytravel.com" className="text-[#155DFC] hover:underline">
                    https://www.omytravel.com
                  </a>
                </p>
                
                <p className="text-gray-700">
                  For concerns regarding Privacy statement & practices,{' '}
                  <a href="#" className="text-[#155DFC] hover:underline">
                    click here
                  </a>
                </p>
              </div>
            </section>
          </div>

          {/* Right Column - Desktop Only */}
          <div className="hidden lg:block">
            <section>
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative h-48 bg-gray-100">
                  <img 
                    src={mapImage}
                    alt="Bangalore Office Location" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-base font-bold text-gray-900 mb-3">Bangalore</h3>
                  <div className="text-sm text-gray-600 leading-relaxed mb-4 space-y-0.5">
                    <p>Cleartrip Pvt Ltd,</p>
                    <p>5th and 6th Floor,</p>
                    <p>Embassy Tech Village,</p>
                    <p>Devarabeesanahalli, ORR,</p>
                    <p>Bangalore - 560103</p>
                  </div>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-sm text-[#155DFC] hover:underline font-medium"
                  >
                    Get directions
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Engage with us Section */}
        <section className="mt-8 lg:mt-12">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Engage with us</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Facebook */}
            <a 
              href="#" 
              className="flex items-center gap-3 px-5 py-4 border border-gray-300 rounded-lg hover:border-[#155DFC] hover:bg-blue-50 transition-colors"
            >
              <Facebook className="w-5 h-5 text-gray-600" />
              <div className="text-sm text-[#155DFC]">
                <div>Connect with us on</div>
                <div className="font-medium">Facebook</div>
              </div>
            </a>

            {/* Twitter */}
            <a 
              href="#" 
              className="flex items-center gap-3 px-5 py-4 border border-gray-300 rounded-lg hover:border-[#155DFC] hover:bg-blue-50 transition-colors"
            >
              <Twitter className="w-5 h-5 text-gray-600" />
              <div className="text-sm text-[#155DFC]">
                <div>Follow us on</div>
                <div className="font-medium">Twitter</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="#" 
              className="flex items-center gap-3 px-5 py-4 border border-gray-300 rounded-lg hover:border-[#155DFC] hover:bg-blue-50 transition-colors"
            >
              <Linkedin className="w-5 h-5 text-gray-600" />
              <div className="text-sm text-[#155DFC]">
                <div>Stay connected on</div>
                <div className="font-medium">Linked-In</div>
              </div>
            </a>
          </div>
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
                <li><a href="#" className="hover:text-[#203066]">About</a></li>
                <li><a href="#" className="hover:text-[#203066]">Jobs</a></li>
                <li><a href="#" className="hover:text-[#203066]">Blogs</a></li>
                <li><a href="#" className="hover:text-[#203066]">Contact us</a></li>
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