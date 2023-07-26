import React from "react";
import Frog from "../assets/frog-svgrepo-com.svg";

const Header = () => {
  return (
    <div className="w-full sticky top-0 h-20 flex sm:justify-center items-center bg-[#526D82] overflow-hidden">
      <div className="flex justify-center items-center gap-2">
        <img src={Frog} alt="frog" className="w-[60px]" />
        <h1 className="text-3xl font-bold">ForecastFrog</h1>
      </div>
    </div>
  );
};

export default Header;
