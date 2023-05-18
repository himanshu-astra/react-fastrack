import Home from "./Home";
import About from "./About";
import { useState } from "react";

const CustomRouter = () => {
  const [routeToShow, setRouteToShow] = useState("About");

  const goToHomePage = () => {
    setRouteToShow("Home");
    window.history.pushState({}, "", "/");
  };

  const goToAboutPage = () => {
    setRouteToShow("About");
    window.history.pushState({}, "", "/about");
  };

  if (routeToShow === "About") {
    return <About onClick={goToHomePage} />;
  }

  return <Home onClick={goToAboutPage} />;
};

export default CustomRouter;
