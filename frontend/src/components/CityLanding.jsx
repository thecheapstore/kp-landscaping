import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, Star, MapPin, Phone } from 'lucide-react';
import { services, testimonials, offices } from '../data/mockData';

const CityLanding = ({ cityName, cityData, phoneNumber }) => {
  const { locations, areaCode } = cityData;

  return (
    <div className="city-landing-page">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" 
            alt={`${cityName} Landscaping Services`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Professional Landscaping Services in {cityName}, NY
            </h1>
            <p className="text-xl text-emerald-50 mb-8">
              Trusted by homeowners and businesses across the {cityName} area for over 15 years. Expert lawn care, landscaping installation, and property maintenance.
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

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">{cityName} Landscaping Services</h2>
            <p className="section-subheading">
              Complete landscaping solutions for {cityName} residents and businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="service-card group">
                <div className="h-48 overflow-hidden rounded-t-lg">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-4">{service.shortDesc}</p>
                  <Link 
                    to={`/${cityName.toLowerCase()}/${service.id}`} 
                    className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="cta-button-large">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Areas We Serve in {cityName} Region</h2>
            <p className="section-subheading">
              Professional landscaping services throughout the {cityName} area
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {locations.map((location) => (
              <Link
                key={location}
                to={`/${cityName.toLowerCase()}/${location.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-lg p-4 text-center hover:bg-emerald-100 hover:shadow-md transition-all group"
              >
                <MapPin className="w-5 h-5 text-emerald-600 mx-auto mb-2" />
                <span className="text-gray-700 font-semibold group-hover:text-emerald-700">
                  {location}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">What Our {cityName} Customers Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-emerald-50 rounded-lg p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="section-heading">Find Us in {cityName}</h2>
          </div>
          <div className="bg-emerald-50 border-2 border-dashed border-emerald-300 rounded-lg p-12 text-center">
            <MapPin className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
            <p className="text-emerald-700 font-semibold mb-2">Google Maps Integration Area</p>
            <p className="text-gray-600">Embed your map here showing service area</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready for a Beautiful Lawn?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Call our {cityName} office today for a free consultation and quote
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
    </div>
  );
};

export default CityLanding;
