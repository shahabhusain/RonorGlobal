import React from "react";
import { FaEnvelope } from "react-icons/fa";
import PhoneIcon from "../assets/phone_in_talk.svg";
const PreNav = () => {
  return (
    <div className="bg-[#0C1644] w-full h-[50px] hidden md:flex items-center justify-between md:px-4 lg:px-28 text-white text-[16px] font-medium">
      <div className="flex items-center  gap-2">
        <FaEnvelope className="w-[25px] h-[25px]" />
        <span>Email: info@rnorglobal.com</span>
      </div>
      <div className="flex items-center gap-2">
        <img src={PhoneIcon} alt="" srcset="" className="w-[25px] h-[25px]" />
        <span>+012 345 6789</span>
      </div>
    </div>
  );
};

export default PreNav;
