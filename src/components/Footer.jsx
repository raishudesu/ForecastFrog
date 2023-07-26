import React from "react";
import Frog from "../assets/frog-svgrepo-com.svg";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full max-h-fit bg-[#526D82]">
      <div className="flex flex-col justify-center items-center gap-2 p-6">
        <img src={Frog} alt="frog" className="w-[40px]" />

        <div className="flex justify-center items-center gap-1">
          <BiCopyright size={15} />
          <h1>ForecastFrog 2023</h1>
        </div>
        <h1>All rights reserved.</h1>
      </div>
    </div>
  );
};

export default Footer;
