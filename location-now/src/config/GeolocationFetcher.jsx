import axios from 'axios';
import { useEffect, useState } from 'react';

const GeolocationFetcher = ({ setCoordinates }) => {
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_URL}key=${process.env.REACT_APP_API_KEY}`
        );
        const { lat, lng } = response.data.location;
        const coordinates = { latitude: lat, longitude: lng };
        setCoordinates(coordinates);
        // Guardar los resultados en localStorage
        localStorage.setItem('coordinates', JSON.stringify(coordinates));
        console.log(coordinates);
      } catch (error) {
        console.error('Error fetching location:', error);
      }
    };

    fetchLocation();
  }, [setCoordinates]);

  return null;
};

export default GeolocationFetcher;
