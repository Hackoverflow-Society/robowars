import { useEffect, useState } from "react";

function useIsTablet() {
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const mobileMediaQuery = window.matchMedia("(max-width: 1024px)"); // Adjust the breakpoint as needed

    const handleTabletChange = (event) => {
      setIsTablet(event.matches);
    };

    mobileMediaQuery.addEventListener("change", handleTabletChange);
    setIsTablet(mobileMediaQuery.matches);

    return () => {
      mobileMediaQuery.removeEventListener("change", handleTabletChange);
    };
  }, []);

  return isTablet;
}

export { useIsTablet };
