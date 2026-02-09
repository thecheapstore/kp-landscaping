import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users, Award } from 'lucide-react';
import { services } from '../data/mockData';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605117882932-f9e32b03fea9" 
            alt="Professional Landscaping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Premium Landscaping Services Across New York
            </h1>
            <p className="text-xl text-emerald-50 mb-8">
              Transforming properties in Buffalo, Rochester, and Albany with professional landscaping excellence since 2010.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="hero-cta-primary">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link to="/services" className="hero-cta-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="trust-indicator">
              <Award className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-700">15+</p>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="trust-indicator">
              <Users className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-700">5000+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="trust-indicator">
              <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-700">Licensed</p>
              <p className="text-gray-600">& Insured</p>
            </div>
            <div className="trust-indicator">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-3" />
              <p className="text-3xl font-bold text-emerald-700">100%</p>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Services</h2>
            <p className="section-subheading">
              Comprehensive landscaping solutions for residential and commercial properties
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
                  <Link to="/services" className="text-emerald-600 font-semibold hover:text-emerald-700 inline-flex items-center">
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

      {/* Service Areas */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Serving Multiple Locations Across New York</h2>
            <p className="text-xl text-emerald-100">
              Professional landscaping services in your area
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/buffalo" className="location-card">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" 
                  alt="Buffalo Area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Buffalo</h3>
                  <p className="text-emerald-100">& Surrounding Areas</p>
                </div>
              </div>
              <div className="p-6 bg-white text-gray-900">
                <p className="mb-4">Serving 19 locations including Amherst, Williamsville, and Orchard Park</p>
                <span className="text-emerald-600 font-semibold inline-flex items-center">
                  View Buffalo Services <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>

            <Link to="/rochester" className="location-card">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" 
                  alt="Rochester Area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Rochester</h3>
                  <p className="text-emerald-100">& Surrounding Areas</p>
                </div>
              </div>
              <div className="p-6 bg-white text-gray-900">
                <p className="mb-4">Serving 25 locations including Brighton, Pittsford, and Webster</p>
                <span className="text-emerald-600 font-semibold inline-flex items-center">
                  View Rochester Services <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>

            <Link to="/albany" className="location-card">
              <div className="relative h-64 overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.pexels.com/photos/1974596/pexels-photo-1974596.jpeg" 
                  alt="Albany Area"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white">Albany</h3>
                  <p className="text-emerald-100">& Surrounding Areas</p>
                </div>
              </div>
              <div className="p-6 bg-white text-gray-900">
                <p className="mb-4">Serving 13 locations including Clifton Park, Colonie, and Troy</p>
                <span className="text-emerald-600 font-semibold inline-flex items-center">
                  View Albany Services <ArrowRight className="w-4 h-4 ml-2" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Property?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get a free quote today and discover why thousands of homeowners trust KP Landscaping
          </p>
          <Link to="/contact" className="cta-button-large">
            Get Your Free Quote
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
