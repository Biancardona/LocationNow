import { useState } from 'react';

const GeolocationViewer = ({ coordinates }) => {
  const [showInfo, setShowInfo] = useState(false);
  const handleSubmit = () => {
    setShowInfo(!showInfo);
  };
  return (
    <>
      <div>
        <h1 className='text-indigo-600 font-black text-6xl'>
          Location
          <spam className='text-black'> Now</spam>
        </h1>
      </div>
      <div>
        <div className='mt 20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white'>
          <button
            className='border w-full p-3 mt-5 my-5 px-10 bg-indigo-600 text-white uppercase rounded-xl font-bold hover:cursor-pointer hover:bg-indigo-900'
            onClick={handleSubmit}
          >
            {showInfo ? 'Ocultar información' : 'Mostrar información'}
          </button>
          {showInfo && (
            <div>
              <p>Latitud: {coordinates.latitude}</p>
              <p>Longitud: {coordinates.longitude}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default GeolocationViewer;
