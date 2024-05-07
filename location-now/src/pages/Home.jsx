import React, { useState } from 'react';
import GeolocationFetcher from '../config/GeolocationFetcher';
import GeolocationViewer from './GeolocationViewer';
import ResultsViewer from './ResultsViewer';

const Home = () => {
  const [coordinates, setCoordinates] = useState(null);

  return (
    <div>
      <GeolocationFetcher setCoordinates={setCoordinates} />
      <GeolocationViewer coordinates={coordinates} />
      <ResultsViewer />
    </div>
  );
};

export default Home;
