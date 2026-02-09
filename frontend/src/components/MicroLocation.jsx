import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';

const MicroLocation = ({ cityName, locationName, phoneNumber }) => {
  return (
    <div className="micro-location-page">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <Link to={`/${cityName.toLowerCase()}`} className="hover:text-emerald-600">{cityName}</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{locationName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9" 
            alt={`${locationName} Landscaping`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Landscaping Services in {locationName}, NY
            </h1>
            <p className="text-xl text-emerald-50 mb-8">
              Professional lawn care and landscaping services for {locationName} residents. Licensed, insured, and locally trusted.
            </p>
            <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 mb-8 inline-block">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-600">Call {cityName} Office</p>
                  <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-emerald-700 hover:text-emerald-800">
                    {phoneNumber}
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="hero-cta-primary">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Expert Landscaping in {locationName}
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  KP Landscaping is proud to serve homeowners and businesses in {locationName}, NY. Our team of experienced landscaping professionals provides comprehensive services to keep your property looking its best year-round.
                </p>
                <p className="mb-4">
                  From regular lawn mowing and maintenance to complete landscape design and installation, we have the expertise and equipment to handle projects of any size in {locationName}.
                </p>
                <p>
                  As a locally operated company, we understand the unique climate and soil conditions in {locationName} and tailor our services accordingly. Our commitment to quality and customer satisfaction has made us the preferred choice for landscaping services in the area.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-emerald-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Licensed and insured for your protection</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">15+ years serving {locationName} area</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Professional, trained staff</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Quality equipment and materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Free quotes and consultations</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services in {locationName}</h2>
            <p className="section-subheading">
              Complete landscaping solutions for {locationName} properties
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.id} className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{service.shortDesc}</p>
                <Link 
                  to={`/${cityName.toLowerCase()}/${service.id}`}
                  className="text-emerald-600 font-semibold text-sm hover:text-emerald-700 inline-flex items-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your {locationName} Property?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Call us today for a free quote on landscaping services in {locationName}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href={`tel:${phoneNumber}`} className="text-2xl font-bold bg-white text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors">
              {phoneNumber}
            </a>
            <Link to="/contact" className="hero-cta-secondary">
              Request Quote Online
            </Link>
          </div>
        </div>
      </section>

      {/* Back to City Link */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            to={`/${cityName.toLowerCase()}`}
            className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center"
          >
            ← Back to {cityName} Area Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default MicroLocation;
