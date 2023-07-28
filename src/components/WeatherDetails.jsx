import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { PiWindDuotone } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { GiWindsock } from "react-icons/gi";

const WeatherDetails = ({ details, value }) => {
  const iconMapping = {
    "Feels like": <CiTempHigh size={30} />,
    "Wind speed": <PiWindDuotone size={30} />,
    Humidity: <WiHumidity size={30} />,
    UV: <BsSun size={30} />,
    Visibility: <AiOutlineEye size={30} />,
    "Air pressure": <GiWindsock size={30} />,
  };

  const icon = iconMapping[details];
  return (
    <div>
      <div className="flex flex-col items-center bg-[#526D82] p-6 rounded-xl">
        {icon}
        <h1>{details}</h1>
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default WeatherDetails;
