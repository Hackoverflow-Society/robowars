import { useEffect, useState } from "react";
import { useIsTablet } from "../utilities/isTablet";
import { useScrollDirection } from "../utilities/scrollDirection";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const isTablet = useIsTablet();
  useEffect(() => {
    if (scrollDirection === "down") {
      setIsOpen(false);
    }
  }, [scrollDirection]);
  return (
    <nav
      className={`relative ${
        isTablet ? "pt-5" : "pt-10"
      }  text-white flex justify-around fixed  items-center z-[999] backdrop-blur-sm ${
        scrollDirection === "down" ? "-translate-y-[300%]" : "top-0"
      } duration-500`}
    >
      {isTablet ? (
        <MobileNavbar setIsOpen={setIsOpen} isOpen={isOpen} />
      ) : (
        <DesktopNavbar />
      )}
    </nav>
  );
};

export default Navbar;
