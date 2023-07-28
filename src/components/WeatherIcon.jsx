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
  const objectIcons = {
    snow: <BsFillCloudSnowFill size={200} />,
    rain: <BsFillCloudRainFill size={200} />,
    fog: <BsCloudFogFill size={200} />,
    wind: <RiCloudWindyFill size={200} />,
    cloudy: <BsFillCloudyFill size={200} />,
    "partly-cloudy-day": <BsFillCloudSunFill size={200} />,
    "partly-cloudy-night": <BsFillCloudMoonFill size={200} />,
    "clear-day": <BsFillSunFill size={200} />,
    "clear-night": <BsFillMoonFill size={200} />,
  };

  const currentIcon = objectIcons[icon];
  return (
    <div className="w-full max-h-fit overflow-hidden flex flex-col justify-center items-center">
      {currentIcon}
      <h1 className="uppercase font-semibold text-6xl">{icon}</h1>
    </div>
  );
};

export default WeatherIcon;
