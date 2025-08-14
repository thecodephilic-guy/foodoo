import { useCallback, useState } from "react";

const useGeolocation = (options) => {
  const [location, setLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [isLocationLoading, setIsLocationLoading] = useState(false);

  const getGeolocation = useCallback(() => {
    setIsLocationLoading(true);
    setLocationError(null);
    setLocation(null);
    
    if (!("geolocation" in navigator)) {
      setLocationError("Geolocation is not supported by your browser");
      setIsLocationLoading(false);
      return;
    }

    const successCallback = (position) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
      setIsLocationLoading(false);
    };

    const locationErrorCallback = (e) => {
      setLocationError(e.message);
      setIsLocationLoading(false);
    };

    navigator.geolocation.getCurrentPosition(successCallback, locationErrorCallback);
  }, [options]);

  return { location, getGeolocation, locationError, isLocationLoading };
};

export default useGeolocation;
