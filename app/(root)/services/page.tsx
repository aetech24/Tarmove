import React from 'react';
import Image from 'next/image';

const ServicesSection = () => {
  const services = [

    {
      title: "Freight Booking",
      description: "Book information is available with Freight Logistics.",
      features: [
        "My package provides a check, data to help people in their own services.",
        "Mobile appliance updates: Choose new credit card, online money or other supplies.",
        "Management Store for Home Now may do full cash offers."
      ],
      image: "/assets/shipper_bgImg.png",
      imagePosition: "right" 
    },
    {
      title: "Fleet Management",
      description: "Operators your fleet with user store capabilities.",
      features: [
        "Mobile backlog: Mobile your fleet's mobile airframe is true.",
        "Management scheduling: How part can mobile customers be quicker than the customer.",
        "Real applications: Use of direct links to keep home and service efficient now.",
        "Last fully completed: Main cargo with the right vehicles for backup activities."
      ],
      image: "/assets/truck.png",
      imagePosition: "left" 
    },
    {
      title: "Real-Time Tracking",
      description: "Track your components anytime, anywhere.",
      features: [
        "Off specified tracking rules you requested during all its operations runs.",
        "Mission notifications (as much as we want) for pilots, but not on duty.",
        "Localized Packing: Think into locally what your shipyard will be run.",
        "Remote Packing: Remote sites and access for transportation stops."
      ],
      image: "/assets/map_tracker.jpg",
      imagePosition: "right" 
    },
    {
      title: "Payment Solutions",
      description: "Service and management payment productivity.",
      features: [
        "Worker Payment Options: Pay rate costs and, while being in line with the latest payments.",
        "Elevation Payment: Ensure that Internet Pricing and Technology will affect these expenses.",
        "Automated tracking: Remove and send remote automating.",
        "Payment Tracking: Monitor content value and timing in order to save.",
        "Total Payment Rate: Account monthly response to product year breakdown."
      ],
      image: "/assets/payment.jpg",
      imagePosition: "left" 
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
     
     <div className="flex flex-col md:flex-row-reverse items-center gap-10 mb-16">
     <div className="md:w-1/3 w-full h-64 relative rounded-xl overflow-hidden shadow-lg">
     <Image
            src="/assets/GetQuoteHero.png" 
            alt="Our Services"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:w-2/3 w-full text-left">
          <h1 className="text-4xl font-bold text-black mb-4">Our Services</h1>
          <p className="text-xl text-gray-700 mb-6">Effective, reliable, and seamless logistics solutions.</p>
          <div className="w-24 h-1 bg-red-600 mt-6"></div>
        </div>
      </div>

      {services.map((service, index) => (
        <div 
          key={index} 
          className={`flex flex-col ${service.imagePosition === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 mb-20`}
        >
          <div className="md:w-1/2 w-full">
            <h2 className="text-3xl font-bold text-black mb-4">{service.title}</h2>
            <p className="text-xl text-gray-800 mb-6">{service.description}</p>
            
            <ul className="space-y-3 mb-8">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-red-600 font-bold text-xl mr-2">•</span>
                  <span className="text-black text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
              Learn More
            </button>
          </div>

          <div className="md:w-1/2 w-full h-96 relative  overflow-hidden shadow-lg">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              style={{ filter: 'brightness(1.05)' }}
            />
          </div>
        </div>
      ))}

      <div className="text-center py-16">
        <h3 className="text-3xl font-bold text-black mb-6">
          Ready to Streamline Your Logistics? Get Started Today!
        </h3>
        <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
          Contact Us Now
        </button>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold text-black mb-4">Tarmove</h4>
            <p className="text-gray-700">
              Your Airframe & Business Logistics Annual Charts with Innovative Solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-black mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-700 hover:text-red-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-black mb-4">Contact Us</h4>
            <p className="text-gray-700">Archa Gomez</p>
            <p className="text-gray-700">+23.000.000.0000</p>
            <p className="text-gray-700">Tarmove.com</p>
          </div>
        </div>
        
        <div className="text-center text-gray-500 mt-12">
          <p>© {new Date().getFullYear()} Tarmove. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;