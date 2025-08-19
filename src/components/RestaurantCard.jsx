import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Star, Timer, Users } from "lucide-react";
import {CDN_URL} from "../utils/constants";

export default function RestaurantCard({imgId, name, cuisines, starRating, deliveryTime, costForTwo }) {
  return (
    <Card className="w-[220px] p-2 border-0 shadow-lg">
      <CardContent className="p-2 ">
        <img
          src={CDN_URL+imgId}
          alt="Reataurant cover photo"
          className="w-full h-[140px] object-cover rounded-lg"
        />

        <div className="py-2">

          <CardTitle className="text-sm font-semibold">
            {name}
          </CardTitle>

          <CardDescription className="text-xs py-2">
            <div className="flex justify-between gap-x-4">
              <span>{cuisines}</span>
              <div className="flex text-xs text-black">
                <Star className="w-4 h-4 text-primary mr-1" />
                <span>{starRating}</span>
              </div>
            </div>
          </CardDescription>
          
        </div>
        <div className="flex justify-between items-center text-xs w-full">
          <div className="flex items-center">
            <Timer className="w-4 h-4 text-primary" />
            <span>{deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 text-primary" />
            <span>{costForTwo}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
