// src/app/components/services.tsx
import React from 'react';

// Define types for our services
type Service = {
  title: string;
  description: string;
  features: string[];
  image: string;
  ctaText: string;
};

const ServicesSection: React.FC = () => {
  // Define our services data with proper typing
  const services: Service[] = [
    {
      title: "Freight Booking",
      description: "Book shipments in minutes with trusted quotes.",
      features: [
        "Dynamic package options based on size, weight, and destination",
        "Easy booking process with a simple interface",
        "Multiple payment options including cards, mobile money, and bank transfers",
        "Transparent pricing with no hidden fees"
      ],
      image: "/images/freight-booking.jpg",
      ctaText: "Book Now"
    },
    {
      title: "Fleet Management",
      description: "Operate your fleet with real-time updates.",
      features: [
        "Vehicle tracking: Monitor your fleet location in real-time",
        "Maintenance scheduling: Plan vehicle maintenance to reduce downtime",
        "Route optimization: Find the most efficient routes for your drivers",
        "Load management: Match the right vehicles to shipments for maximum efficiency"
      ],
      image: "/"
      ctaText: "Manage Fleet"
    },
    {
      title: "Real-Time Tracking",
      description: "Track your shipments anytime, anywhere.",
      features: [
        "GPS-assisted tracking for precise location updates",
        "Instant notifications for key shipment milestones",
        "Accurate delivery time estimates",
        "Remote alerts for delays or route changes"
      ],
      image: "/images/real-time-tracking.jpg",
      ctaText: "Track Shipment"
    },
    {
      title: "Payment Solutions",
      description: "Secure and transparent payment processing.",
      features: [
        "Multiple payment options for customer convenience",
        "Secure transactions with encryption and fraud protection",
        "Automated invoicing and receipts",
        "Payment tracking with real-time history",
        "Advanced security measures for all transactions"
      ],
      image: "/images/payment-solutions.jpg",
      ctaText: "Payment Options"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 mb-28 last:mb-0`}
          >
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
              <p className="text-xl text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <li key={i} className="relative pl-8 before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-red-600 before:rounded-full">
                    <p className="text-gray-700">{feature}</p>
                  </li>
                ))}
              </ul>
              
              <button className="bg-gradient-to-b from-red-600 to-red-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition duration-300">
                {service.ctaText}
              </button>
            </div>
            
            <div className="md:w-1/2">
              {/* Replace with your actual image component */}
              <div className="bg-gray-200 rounded-xl h-80 w-full flex items-center justify-center overflow-hidden">
                <span className="text-gray-500">Image: {service.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;