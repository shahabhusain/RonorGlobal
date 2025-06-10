import { useState } from 'react';

export default function Agenda() {
  const scheduleData = [
    {
      id: 1,
      theme: "Sustainability & Renewables",
      topic: "Ghana committed to renewables and sustainability: enabling global ESG goals for a net-zero future",
      schedule: "20th Jan 2:30 – 3:15 pm",
      venue: "Ghana Pavilion, Promenade 73"
    },
    {
      id: 2,
      theme: "TEPA",
      topic: "Strengthening economic relations through investments",
      schedule: "21st Jan 11 – 11:45 am",
      venue: "Ghana Pavilion, Promenade 67"
    },
    {
      id: 3,
      theme: "Food processing",
      topic: "Scaling up of value addition across food processing sector for sustainable growth",
      schedule: "21st Jan 12 – 1 pm",
      venue: "Ghana Pavilion, Promenade 73"
    },
    {
      id: 4,
      theme: "Infrastructure as enabler",
      topic: "Infrastructural Excellence and Transforming Civil Aviation Landscape in Ghana",
      schedule: "21st Jan 2:30 – 3:30 pm",
      venue: "Ghana Pavilion, Promenade 67"
    },
    {
      id: 5,
      theme: "Supply chain diversification",
      topic: "Ghana's success in Global Supply Chains-Strategies for Sourcing & Exports",
      schedule: "21st Jan 5 – 5:45 pm",
      venue: "Ghana Pavilion, Promenade 67"
    },
    {
      id: 6,
      theme: "Investor showcasing",
      topic: "Ghana: Trusted partner for semiconductor ecosystem",
      schedule: "22nd Jan 10 – 11 am",
      venue: "Ghana Pavilion, Promenade 73"
    },
    {
      id: 7,
      theme: "Food security",
      topic: "Ghana's Rise as the World's Food Basket: Catalysing Investments and Developing Robust Supply Chains",
      schedule: "22nd Jan 12 – 1 pm",
      venue: "Ghana Pavilion, Promenade 73"
    },
    {
      id: 8,
      theme: "Innovation and Technology leadership",
      topic: "Ghana's rise in the GCC Value Chain: Creating transformational impact through Skilling & Scaling",
      schedule: "22nd Jan 12 – 1 pm",
      venue: "Ghana Pavilion, Promenade 73"
    },
    {
      id: 9,
      theme: "Water Security",
      topic: "Global collaboration for a water secure future",
      schedule: "22nd Jan 5:30 – 6:30 pm",
      venue: "Ghana Pavilion, Promenade 67"
    },
    {
      id: 10,
      theme: "Leadership",
      topic: "Agile leadership in changing world",
      schedule: "23rd Jan 8:45 – 10:45 am",
      venue: "Ghana Pavilion, Promenade 67"
    },
    {
      id: 11,
      theme: "Sustainability",
      topic: "Driving change in climate and water sustainability",
      schedule: "23rd Jan 8:45 – 10:45 am",
      venue: "Ghana Pavilion, Promenade 67"
    },
    {
      id: 12,
      theme: "Skill Development",
      topic: "From Skill Gaps to Skill Gains: Women Driving Ghana's workforce revolution",
      schedule: "23rd Jan 4:30 – 5:30 pm",
      venue: "Ghana Pavilion, Promenade 73"
    },
    {
      id: 13,
      theme: "Women Leadership",
      topic: "From Ghana to the World: How Women Are Shaping Global Innovation in Tech, Sustainability and Start-Up",
      schedule: "24th Jan 12 – 1 pm",
      venue: "Ghana Pavilion, Promenade 73"
    }
  ];

  return (
    <div className="w-full">
         <h1 className=' bg-[#00105C] text-center p-4 my-20 xl:text-[40px] lg:text-[30px] md:text-[25px] text-[25px] font-[700] text-white'>Agenda</h1>
      <div className="overflow-x-auto shadow-lg rounded-lg w-[95%] mx-auto ">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-[#00105C] text-white">
              <th className="py-3 px-4 text-left font-[500] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] border border-indigo-800 w-16">S.No.</th>
              <th className="py-3 px-4 text-left font-[500] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] border border-indigo-800 w-40">Theme</th>
              <th className="py-3 px-4 text-left font-[500] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] border border-indigo-800">Topic</th>
              <th className="py-3 px-4 text-left font-[500] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] border border-indigo-800 w-32">Schedule (CET)</th>
              <th className="py-3 px-4 text-left font-[500] xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] border border-indigo-800 w-36">Venue</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-[#002be820]"}>
                <td className="py-3 px-4 xl:text-[17px] md:text-[15px] text-[12px] font-[500] border border-gray-200">{item.id}</td>
                <td className="py-3 px-4 xl:text-[17px] md:text-[15px] text-[12px] font-[500] border border-gray-200">{item.theme}</td>
                <td className="py-3 px-4 xl:text-[17px] md:text-[15px] text-[12px] font-[400] border border-gray-200">{item.topic}</td>
                <td className="py-3 px-4 xl:text-[17px] md:text-[15px] text-[12px] font-[400] border border-gray-200">{item.schedule}</td>
                <td className="py-3 px-4 xl:text-[17px] md:text-[15px] text-[12px] font-[400] border border-gray-200">{item.venue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}