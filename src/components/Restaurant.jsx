import React from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantCardSkeleton } from "./RestaurantCard";

function Restaurant({ resData, isLoading }) {
  return isLoading ? (
    <div className="grid grid-cols-1 md:grid-cols-5">
      {Array.from({ length: 20 }).map((_, i) => (
        <RestaurantCardSkeleton key={i} />
      ))}
    </div>
  ) : (
    <section id="Restaurant" className="w-full">
      <div className="px-6 py-4">
        <h1 className="font-bold md:text-2xl text-lg">
          Restaurants with online food delivery in Bareilly
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5">
        {resData.map((restaurant) => {
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
