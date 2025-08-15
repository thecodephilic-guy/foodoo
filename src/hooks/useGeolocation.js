import { useState } from "react";
const openCageApiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

const useGeolocation = () => {
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationCoordinates, setLocationCoordinates] = useState(null);
  const [locationData, setLocationData] = useState(null);

  const getGeolocation = () => {  
    setIsLocationLoading(true);
    setError(null);

    if(!("geolocation" in navigator)){
      setError("Geolocation is not supported by your browser");
      setIsLocationLoading(false);
      return;
    }
    
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocationCoordinates({ latitude, longitude });
        try {
          const response = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=${openCageApiKey}`
          );
          const data = await response.json();
          setLocationData(data?.results[0]?.components);
        } catch (e) {
          console.error(e.message);
          setError("Unable to fetch location");
        }finally{
          setIsLocationLoading(false);
        }
      },
      (e) => {
        setError(e.message);
        setIsLocationLoading(false);
      }
    );
  };

  const returnValues = {locationCoordinates, locationData, getGeolocation , isLocationLoading,  error};

  return returnValues;
};

export default useGeolocation;
