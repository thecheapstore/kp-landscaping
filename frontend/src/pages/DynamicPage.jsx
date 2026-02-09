import React from 'react';
import { useParams } from 'react-router-dom';
import MicroLocation from '../components/MicroLocation';
import ServicePage from '../components/ServicePage';
import { buffaloLocations, rochesterLocations, albanyLocations, services } from '../data/mockData';

const DynamicPage = () => {
  const { city, page } = useParams();
  
  // Determine which city's data to use
  let locations = [];
  let phoneNumber = '';
  let cityName = '';
  
  if (city === 'buffalo') {
    locations = buffaloLocations;
    phoneNumber = '(716) XXX-XXXX';
    cityName = 'Buffalo';
  } else if (city === 'rochester') {
    locations = rochesterLocations;
    phoneNumber = '(585) XXX-XXXX';
    cityName = 'Rochester';
  } else if (city === 'albany') {
    locations = albanyLocations;
    phoneNumber = '(518) XXX-XXXX';
    cityName = 'Albany';
  }
  
  // Check if this is a service page
  const service = services.find(s => s.id === page);
  
  if (service) {
    return (
      <ServicePage 
        serviceName={service.name}
        serviceDesc={service.shortDesc}
        cityName={cityName}
        phoneNumber={phoneNumber}
        serviceImage={service.image}
      />
    );
  }
  
  // Check if this is a micro-location page
  const locationName = page
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const locationExists = locations.some(
    loc => loc.toLowerCase().replace(/\s+/g, '-') === page
  );
  
  if (locationExists) {
    return (
      <MicroLocation 
        cityName={cityName}
        locationName={locationName}
        phoneNumber={phoneNumber}
      />
    );
  }
  
  // 404 - Page not found
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="cta-button">Return Home</a>
      </div>
    </div>
  );
};

export default DynamicPage;
