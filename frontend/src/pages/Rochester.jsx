import React from 'react';
import CityLanding from '../components/CityLanding';
import { rochesterLocations } from '../data/mockData';

const Rochester = () => {
  const cityData = {
    locations: rochesterLocations,
    areaCode: '585'
  };

  return (
    <CityLanding 
      cityName="Rochester" 
      cityData={cityData}
      phoneNumber="(585) 560-1134"
    />
  );
};

export default Rochester;
