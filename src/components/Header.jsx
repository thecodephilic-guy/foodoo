import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Logo } from "../assets/Logo";
import { Button } from "./ui/button";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="w-32">
            <Logo />
          </div>

          <div className="flex items-center space-x-8">
            <Button className={`cursor-pointer hover:bg-transparent`} variant="ghost" size="icon"><ShoppingCart /></Button>
            <Button className={`cursor-pointer`} variant="secondary" onClick={() => {console.log("clicked");
            }}>Sign in</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
