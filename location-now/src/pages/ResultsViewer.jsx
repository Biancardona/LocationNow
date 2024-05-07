import React, { useState, useEffect } from 'react';

const ResultsViewer = () => {
  const [coordinates, setCoordinates] = useState([]);
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = () => {
    setShowInfo(!showInfo);
    const fetchResults = () => {
      // Obtener los resultados guardados en localStorage
      const savedCoordinates = localStorage.getItem('coordinates');
      if (savedCoordinates) {
        let parsedCoordinates;
        try {
          parsedCoordinates = JSON.parse(savedCoordinates);
          if (parsedCoordinates) {
            setCoordinates(parsedCoordinates);
          } else {
            console.error('Coordinates are not an array:', parsedCoordinates);
          }
        } catch (error) {
          console.error('Error parsing coordinates:', error);
        }
      }
    };

    fetchResults();
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <div>
      <div>
        <h3 className='md:mt-20 text-indigo-600 font-black text-lg'>
          Resultados
          <span className='text-black'> de las Búsquedas</span>{' '}
        </h3>
        <button
          className='border w-full p-3 mt-5 my-5 px-10 bg-indigo-600 text-white uppercase rounded-xl font-bold hover:cursor-pointer hover:bg-indigo-900'
          onClick={handleSubmit}
        >
          {showInfo ? 'Ocultar resultados' : 'Mostrar Resultados'}
        </button>
      </div>
      {showInfo && (
        <div className='shadow-lg px-5 py-10 rounded-xl bg-white'>
          <div>
            <div>
              <ul>
                {Object.values(coordinates).map((index) => (
                  <li key={index}>
                    Latitud: {coordinates.latitude}, Longitud:{' '}
                    {coordinates.longitude}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsViewer;
