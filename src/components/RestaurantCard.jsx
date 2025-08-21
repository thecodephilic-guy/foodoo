import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import { Star, Timer, Users } from "lucide-react";
import { CDN_URL } from "../utils/constants";

export default function RestaurantCard({
  imgId,
  name,
  cuisines,
  starRating,
  deliveryTime,
  costForTwo,
}) {
  const displayCuisines = cuisines.join(" ");

  return (
    <Card className="md:w-56  flex flex-col border-0 shadow-sm m-2 overflow-hidden">
      <CardContent className="flex flex-col p-2 flex-1">
        <img
          src={CDN_URL + imgId}
          alt="Restaurant cover"
          className="w-full h-40 object-cover rounded-lg"
        />

        <div className="flex-1 flex flex-col justify-between py-2">
          <div>
            <CardTitle className="text-sm font-semibold truncate">
              {name}
            </CardTitle>

            <CardDescription className="text-xs mt-1">
              <div className="flex justify-between gap-x-4 items-center">
                <span>{displayCuisines}</span>
                <div className="flex items-center text-xs text-black shrink-0">
                  <Star className="w-4 h-4 text-primary mr-1" />
                  <span>{starRating}</span>
                </div>
              </div>
            </CardDescription>
          </div>

          <div className="flex justify-between items-center text-xs mt-3 pt-2">
            <div className="flex items-center gap-1">
              <Timer className="w-4 h-4 text-primary" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4 text-primary" />
              <span>{costForTwo}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function RestaurantCardSkeleton() {
  return (
    <Card className="md:w-56 flex flex-col border-0 shadow-sm m-2 overflow-hidden p-2 bg-muted ">
      <CardContent className="flex flex-col p-2 flex-1 animate-pulse bg-muted border-0">
        {/* Image Placeholder */}
        <div className="w-full h-40 bg-muted-foreground/20 rounded-lg" />

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between py-2">
          <div>
            {/* Title */}
            <div className="h-4 bg-muted-foreground/20 rounded w-3/4 mb-2" />
            {/* Cuisines + Rating */}
            <div className="flex justify-between items-center">
              <div className="h-3 bg-muted-foreground/20 rounded w-1/2" />
              <div className="h-3 bg-muted-foreground/20 rounded w-8" />
            </div>
          </div>

          {/* Delivery Time + Cost */}
          <div className="flex justify-between items-center text-xs mt-3 pt-2">
            <div className="h-3 bg-muted-foreground/20 rounded w-10" />
            <div className="h-3 bg-muted-foreground/20 rounded w-12" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}