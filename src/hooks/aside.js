import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const Aside = () => {
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(location.pathname);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setCurrentPage("/");
        break;
      case "/workout-log":
        setCurrentPage("/workout-log");
        break;
      case "/statistics":
        setCurrentPage("/statistics");
        break;
      case "/goals":
        setCurrentPage("/goals");
        break;
      case "/settings":
        setCurrentPage("/settings");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return { currentPage };
};
