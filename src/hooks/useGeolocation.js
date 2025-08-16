import { useState } from "react";
const openCageApiKey = process.env.REACT_APP_OPENCAGE_API_KEY;

const useGeolocation = () => {
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [error, setError] = useState(null);
  const [locationCoordinates, setLocationCoordinates] = useState({
    latitude: 28.367063100684394,
    longitude: 79.4430160444716,
  }); //default coordinates to populate UI
  const [locationData, setLocationData] = useState(null);

  const getGeolocation = () => {
    setIsLocationLoading(true);
    setError(null);

    if (!("geolocation" in navigator)) {
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
        } finally {
          setIsLocationLoading(false);
        }
      },
      (e) => {
        setError(e.message);
        setIsLocationLoading(false);
      }
    );
  };

  const getCoordinatesFromCity = async (city) => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${openCageApiKey}`
      );
      const data = await response.json();
      const coordinates = data?.results[0]?.geometry;
      setLocationCoordinates({
        latitude: coordinates.lat,
        longitude: coordinates.lng,
      });
    } catch {
      console.error(e.message);
      setError("Unable to fetch location coordinates");
    }
  };

  const returnValues = {
    locationCoordinates,
    locationData,
    getGeolocation,
    getCoordinatesFromCity,
    isLocationLoading,
    error,
  };

  return returnValues;
};

export default useGeolocation;
