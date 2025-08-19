import React from "react";
import RestaurantCard from "./RestaurantCard";

function Restaurant({ resData }) {

  return (
    <section id="Restaurant" className="w-full flex flex-col md:flex-row">
      <div className="flex gap-x-8 flex-wrap">
        {resData?.map((restaurant) => {
        const resInfo = restaurant.info;
        return (
          <RestaurantCard
            imgId={resInfo.cloudinaryImageId}
            key={resInfo.id}
            name={resInfo.name}
            cuisines={resInfo.cuisines}
            starRating={resInfo.avgRating}
            deliveryTime={resInfo.sla.slaString}
            costForTwo={resInfo.costForTwo}
          />
        );
      })}
      </div>
    </section>
  );
}

export default Restaurant;
