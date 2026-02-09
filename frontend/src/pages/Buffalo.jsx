import React from 'react';
import CityLanding from '../components/CityLanding';
import { buffaloLocations } from '../data/mockData';

const Buffalo = () => {
  const cityData = {
    locations: buffaloLocations,
    areaCode: '716'
  };

  return (
    <CityLanding 
      cityName="Buffalo" 
      cityData={cityData}
      phoneNumber="(716) XXX-XXXX"
    />
  );
};

export default Buffalo;
