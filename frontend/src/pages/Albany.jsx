import React from 'react';
import CityLanding from '../components/CityLanding';
import { albanyLocations } from '../data/mockData';

const Albany = () => {
  const cityData = {
    locations: albanyLocations,
    areaCode: '518'
  };

  return (
    <CityLanding 
      cityName="Albany" 
      cityData={cityData}
      phoneNumber="(518) 777-2662"
    />
  );
};

export default Albany;
