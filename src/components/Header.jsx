import React, { useEffect, useState } from "react";
import { ShoppingCart } from "lucide-react";
import { Logo } from "../assets/Logo";
import { Button } from "./ui/button";
import { NavLink } from "react-router";

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
          <NavLink to='/'>
            <div className="w-32">
            <Logo />
          </div>
          </NavLink>

          <div className="flex items-center space-x-8">
            <Button
              className={`hover:bg-transparent transform hover:scale-125`}
              variant="ghost"
              size="icon"
            >
              <NavLink to="/cart" end>
                <ShoppingCart />
              </NavLink>
            </Button>
            <Button variant="secondary">
              <NavLink to="/signup">Sign in</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
