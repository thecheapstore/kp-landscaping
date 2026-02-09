import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

const ServicePage = ({ serviceName, serviceDesc, cityName, phoneNumber, serviceImage }) => {
  return (
    <div className="service-page">
      {/* Breadcrumbs */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-emerald-600">Home</Link>
            <span>/</span>
            <Link to={`/${cityName.toLowerCase()}`} className="hover:text-emerald-600">{cityName}</Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{serviceName}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={serviceImage} 
            alt={serviceName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 to-emerald-700/70"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {serviceName} in {cityName}, NY
            </h1>
            <p className="text-xl text-emerald-50 mb-8">
              Professional {serviceName.toLowerCase()} services for {cityName} area homes and businesses
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

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional {serviceName} Services
              </h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  {serviceDesc} Our experienced team uses professional-grade equipment and proven techniques to deliver exceptional results for {cityName} area properties.
                </p>
                <p className="mb-4">
                  We understand the unique needs of lawns and landscapes in the {cityName} region. Our {serviceName.toLowerCase()} services are designed to work with local climate conditions, soil types, and seasonal changes to ensure optimal results.
                </p>
                <p>
                  Whether you need one-time service or ongoing maintenance, KP Landscaping has the expertise and dedication to exceed your expectations. We're fully licensed and insured for your peace of mind.
                </p>
              </div>
            </div>

            <div>
              <div className="bg-emerald-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Expert service from trained professionals</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Professional-grade equipment and materials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Customized solutions for your property</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Reliable, on-time service</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Competitive, transparent pricing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">100% satisfaction guarantee</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Call or fill out our online form for a free consultation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free Quote</h3>
              <p className="text-gray-600">We assess your property and provide a detailed estimate</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Schedule Service</h3>
              <p className="text-gray-600">We schedule at your convenience and show up on time</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Enjoy Results</h3>
              <p className="text-gray-600">Relax and enjoy your beautifully maintained property</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Get Started with {serviceName} Today
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Call our {cityName} office for a free quote
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
            ← Back to {cityName} Services
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;
