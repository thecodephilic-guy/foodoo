import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Restaurant from "../components/Restaurant";

function Home() {
  const [locationCoordinates, setLocationCoordinates] = useState({
    latitude: 28.367063100684394,
    longitude: 79.4430160444716,
  }); //default coordinates to populate UI
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [appData, setAppData] = useState(null);

  const fetchData = async () => {
    try {
      setIsDataLoading(true);
      const url = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationCoordinates.latitude}&lng=${locationCoordinates.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const corsByPassedUrl =
        "https://thingproxy-760k.onrender.com/fetch/" + url;

      const response = await fetch(corsByPassedUrl);
      const data = await response.json();      
      setAppData(data?.data);
    } catch (e) {
      console.error(e.message);
    } finally {
      setIsDataLoading(false);      
    }
  };  

  useEffect(() => {
    fetchData();
  }, [locationCoordinates]);
  return (
    <>
      <Hero />
      <Restaurant resData={appData?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants} />
    </>
  );
}

export default Home;
