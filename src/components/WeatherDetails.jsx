import React from "react";
import { CiTempHigh } from "react-icons/ci";
import { PiWindDuotone } from "react-icons/pi";
import { WiHumidity } from "react-icons/wi";
import { BsSun } from "react-icons/bs";
import { AiOutlineEye } from "react-icons/ai";
import { GiWindsock } from "react-icons/gi";

const WeatherDetails = ({ details, value }) => {
  const detailIcon = (size) => {
    if (details === "Feels like") return <CiTempHigh size={size} />;
    if (details === "Wind speed") return <PiWindDuotone size={size} />;
    if (details === "Humidity") return <WiHumidity size={size} />;
    if (details === "UV") return <BsSun size={size} />;
    if (details === "Visibility") return <AiOutlineEye size={size} />;
    if (details === "Air pressure") return <GiWindsock size={size} />;
  };
  return (
    <div>
      <div className="flex flex-col items-center bg-[#526D82] p-6 rounded-xl">
        {detailIcon(30)}
        <h1>{details}</h1>
        <h1>{value}</h1>
      </div>
    </div>
  );
};

export default WeatherDetails;
