import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';
import { services } from '../data/mockData';

const Services = () => {
  const getIcon = (iconName) => {
    const Icon = Icons[iconName];
    return Icon ? <Icon className="w-8 h-8" /> : <Icons.Leaf className="w-8 h-8" />;
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center bg-gradient-to-r from-emerald-800 to-emerald-600">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1597201278257-3687be27d954" 
            alt="Our Services"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-emerald-50">Comprehensive landscaping solutions for every need</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What We Offer</h2>
            <p className="section-subheading">
              Professional landscaping services tailored to your property's unique needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="service-card group">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center text-emerald-600 mb-4">
                    {getIcon(service.icon)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas CTA */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Available in Your Area</h2>
            <p className="text-xl text-emerald-100 mb-8">
              All services are available across our three service regions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link to="/buffalo" className="bg-white text-gray-900 rounded-lg p-6 text-center hover:bg-emerald-50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Buffalo</h3>
              <p className="text-gray-600">View Buffalo Services</p>
            </Link>
            <Link to="/rochester" className="bg-white text-gray-900 rounded-lg p-6 text-center hover:bg-emerald-50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Rochester</h3>
              <p className="text-gray-600">View Rochester Services</p>
            </Link>
            <Link to="/albany" className="bg-white text-gray-900 rounded-lg p-6 text-center hover:bg-emerald-50 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Albany</h3>
              <p className="text-gray-600">View Albany Services</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Need a Custom Service Package?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us to discuss your specific landscaping needs
          </p>
          <Link to="/contact" className="cta-button-large">
            Get Your Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
