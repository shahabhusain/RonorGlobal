import React from 'react';
import faci from '../../assets/faci.png';

const Infrastructure = () => {
  const data = [
    {
      title: '2nd largest',
      desc: 'Road Network Globally',
    },
    {
      title: '2nd largest',
      desc: 'Road Network Globally',
    },
    {
      title: 'Port Handling',
      desc: 'Capacity to be quadrupled by 2047',
    },
    {
      title: '14.5%',
      desc: 'CAGR of the Domestic aviation sector',
    },
    {
      title: '39,000',
      desc: 'Unnecessary compliances and 1,500 archaic laws removed to ensure EoDB',
    },
    {
      title: '95+ minerals',
      desc:
        'Ghana produces over 95 minerals, which include fuel, metallic, non-metallic, atomic and minor minerals (including building and other materials)',
    },
  ];

  return (
<div className="flex items-center md:gap-x-12 gap-x-0 flex-col md:flex-row">
      {/* Mobile Slider */}
      <div className="flex md:hidden overflow-x-auto space-x-4 px-4 w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-[#00105C] h-[130px] border-l-[10px] border-l-red-500 flex flex-col gap-2 p-4 rounded-r-2xl shrink-0"
          >
            <h1 className="text-white text-[15px] font-[800]">{item.title}</h1>
            <p className="text-white text-[12px] font-[600] max-w-[333px]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#00105C] md:h-[230px] border-l-[20px] border-l-red-500 flex flex-col gap-2 p-6 rounded-r-3xl"
          >
            <h1 className="text-white text-[20px] font-[800]">{item.title}</h1>
            <p className="text-white text-[14px] font-[600]">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Image - only on desktop */}
      <img className="md:block hidden w-auto" src={faci} alt="Infrastructure" />
    </div>
  );
};

export default Infrastructure;
