import React from "react";
import {
  BsFillCloudyFill,
  BsFillCloudSnowFill,
  BsFillCloudRainFill,
  BsCloudFogFill,
  BsFillSunFill,
  BsFillMoonFill,
  BsFillCloudSunFill,
  BsFillCloudMoonFill,
} from "react-icons/bs";
import { RiCloudWindyFill } from "react-icons/ri";

const WeatherIcon = ({ icon }) => {
  const currentIcon = (size) => {
    if (icon === "snow") return <BsFillCloudSnowFill size={size} />;
    if (icon === "rain") return <BsFillCloudRainFill size={size} />;
    if (icon === "fog") return <BsCloudFogFill size={size} />;
    if (icon === "wind") return <RiCloudWindyFill size={size} />;
    if (icon === "cloudy") return <BsFillCloudyFill size={size} />;
    if (icon === "partly-cloudy-day") return <BsFillCloudSunFill size={size} />;
    if (icon === "partly-cloudy-night")
      return <BsFillCloudMoonFill size={size} />;
    if (icon === "clear-day") return <BsFillSunFill size={size} />;
    if (icon === "clear-night") return <BsFillMoonFill size={size} />;
  };
  return (
    <div className="w-full max-h-fit overflow-hidden flex flex-col justify-center items-center">
      <div>{currentIcon(200)}</div>
      <h1 className="uppercase font-semibold text-6xl">{icon}</h1>
    </div>
  );
};

export default WeatherIcon;
