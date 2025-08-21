import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Restaurant from "../components/Restaurant";

function Home() {
  const [locationCoordinates, setLocationCoordinates] = useState({
    latitude: 28.367063100684394,
    longitude: 79.4430160444716,
  }); //default coordinates to populate UI
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [resData, setResData] = useState([]);

  const fetchData = async () => {
    try {
      setIsDataLoading(true);
      const mobileApiUrl = `https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=${locationCoordinates.latitude}&lng=${locationCoordinates.longitude}&carousel=true&third_party_vendor=1
`;
      const desktopApiUrl = `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${locationCoordinates.latitude}&lng=${locationCoordinates.longitude}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`;
      const corsByPassedUrl =
        "https://thingproxy-760k.onrender.com/fetch/" + desktopApiUrl;

      const response = await fetch(corsByPassedUrl);
      const data = await response.json();
      setResData(
        data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
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
      {resData && <Restaurant resData={resData} isLoading={isDataLoading}/>}
    </>
  );
}

export default Home;
