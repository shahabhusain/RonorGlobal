import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { MdOutlineDepartureBoard, MdMessage, MdLocationOn } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";
import { AiOutlineShareAlt } from 'react-icons/ai';
import { FaCalendarAlt } from "react-icons/fa";
import Model from './Model';

const Apply = () => {
  const [openModel, setOpenModel] = useState(false);

  return (
    <div className="relative my-20">
      <div className="w-[95%] mx-auto">
        <div className="shadow-md p-6 sm:p-12 rounded-xl bg-white">
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Logo + Title */}
            <div className="flex items-center gap-4">
              <img src={logo} alt="logo" className="w-12 sm:w-auto" />
              <div>
                <h1 className="text-[16px] sm:text-[18px] font-bold text-[#00105C]">Junior Specialist</h1>
                <p className="text-[14px] sm:text-[16px] font-medium text-black">Company Secretary</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setOpenModel(true)}
                className="text-white bg-red-500 px-4 py-2 rounded-lg text-[16px] font-medium"
              >
                Apply
              </button>
              <span className="bg-[#E2F0F9] p-3 rounded-md">
                <AiOutlineShareAlt size={20} />
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[2px] bg-[#6b6a6a67] mt-4" />

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Info Card */}
            {[
              {
                icon: <MdOutlineDepartureBoard size={20} />,
                label: "Department",
                value: "Invest Ghana",
              },
              {
                icon: <PiIdentificationCard size={20} />,
                label: "Job ID",
                value: "406",
              },
              {
                icon: <MdMessage size={20} />,
                label: "Experience",
                value: "5-6 Years",
              },
              {
                icon: <MdLocationOn size={20} />,
                label: "Location",
                value: "Delhi",
              },
              {
                icon: <FaCalendarAlt size={20} />,
                label: "Date Posted",
                value: "Posted 1 week ago",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="bg-[#E2F0F9] p-3 rounded-md">{item.icon}</span>
                <div>
                  <h1 className="text-[14px] sm:text-[16px] font-normal text-[#00105C]">
                    {item.label}
                  </h1>
                  <p className="text-[14px] sm:text-[16px] font-bold text-black">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {openModel && <Model onClose={() => setOpenModel(false)} />}
    </div>
  );
};

export default Apply;
