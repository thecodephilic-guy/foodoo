import { useEffect, useState, useRef } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import HeroCard from "./HeroCard";

function Hero() {
  const listOfPopularCities = [
    "Hyderabad",
    "Chennai",
    "Mumbai",
    "Bangalore",
    "Delhi",
    "Kolkata",
  ];

  const images = [
    "https://blog.swiggy.com/wp-content/uploads/2024/03/Biryani-2-1024x538.jpg",
    "https://st2.depositphotos.com/27201292/43045/i/450/depositphotos_430451912-stock-photo-closeup-shot-indian-restaurant-non.jpg",
    "https://images.pexels.com/photos/2122294/pexels-photo-2122294.jpeg?cs=srgb&dl=pexels-kyleroxas-2122294.jpg&fm=jpg",
  ];

  const [centerIndex, setCenterIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  const startAutoRotate = () => {
    intervalRef.current = setInterval(() => {
      setCenterIndex((prev) => (prev + 1) % images.length);
    }, 3000);
  };

  const stopAutoRotate = () => {
    clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, [images.length]);

  const getPosition = (i) => {
    const position = (i - centerIndex + images.length) % images.length;
    if (position === 0) {
      return { scale: isHovered ? 1.3 : 1.1, x: 0, zIndex: 3 }; // hover makes it even bigger
    }
    if (position === 1) return { scale: 0.85, x: 220, zIndex: 2 };
    if (position === 2) return { scale: 0.85, x: -220, zIndex: 2 };
    return { scale: 0.7, x: 0, zIndex: 1 };
  };

  return (
    <section id="Hero" className="w-full flex flex-col md:flex-row">
      <section className="md:w-1/2 flex flex-col justify-center px-6 py-8">
        <h1 className="text-3xl md:text-5xl text-primary-950 md:leading-normal md:tracking-wide">
          Premium <span className="text-primary">quality</span>
          <br />
          Food for your <span className="text-primary">healthy</span>
          <br /> & <span className="text-primary">Daily life</span>
        </h1>
        <p className="text-xs md:text-sm w-10/12 text-muted-foreground py-4">
          Discover fresh, flavorful meals made with premium ingredients,
          delivered straight to your doorstep. Whether it’s your everyday
          favorites or a wholesome choice for a healthy lifestyle, we’ve got you
          covered.
        </p>
        <div className="flex space-x-4 py-6">
          <Input
            type="text"
            placeholder="Delivery location"
            className="text-xs md:text-sm"
          />
          <Button variant="secondary">Get Started</Button>
        </div>
        <span className="text-xs">Popular cities in India</span>
        <div className="flex space-x-4 md:space-x-6 py-2 flex-wrap">
          {listOfPopularCities.map((city, index) => (
            <Button
              onClick={() => {
                console.log(
                  "Write logic to set the city name inside input box"
                );
              }}
              variant="link"
              key={index}
              className={`p-0 text-sm ${
                index % 2 === 0 ? "text-muted-foreground" : "text-primary"
              }`}
            >
              {city}
            </Button>
          ))}
        </div>
      </section>

      <section className="md:w-1/2 flex items-center justify-center relative overflow-hidden py-8">
        <div className="relative w-[500px] h-[400px]">
          {images.map((src, i) => {
            const { scale, x, zIndex } = getPosition(i);
            const isCenter =
              (i - centerIndex + images.length) % images.length === 0;

            return (
              <motion.div
                key={src}
                initial={{ scale, x }}
                animate={{ scale, x }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ zIndex }}
                onMouseEnter={() => {
                  if (isCenter) {
                    stopAutoRotate();
                    setIsHovered(true);
                  }
                }}
                onMouseLeave={() => {
                  if (isCenter) {
                    setIsHovered(false);
                    startAutoRotate();
                  }
                }}
              >
                <HeroCard src={src} alt={`food-item-${i}`} />
              </motion.div>
            );
          })}
        </div>
      </section>
    </section>
  );
}

export default Hero;
