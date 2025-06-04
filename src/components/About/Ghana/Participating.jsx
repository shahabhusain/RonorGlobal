import { useState } from 'react';
import icon1 from '../../../assets/About/icon1.png'
import icon2 from '../../../assets/About/icon2.png'
import icon3 from '../../../assets/About/icon3.png'
import icon4 from '../../../assets/About/icon4.png'
import icon5 from '../../../assets/About/icon5.png'
export default function Participating() {
  const scheduleData = [
    {
      id: 1,
      state: "Andhra Pradesh",
      theme: "AI for Good - Designing Smarter, Sustainable Solutions",
      topic: "This roundtable aims to convene leaders and experts to discuss AI applications for key social issues like education, healthcare and climate change",
      schedule: "1st Jan 12:00 - 1:00 pm CET",
      venue: "Grand Hotel Barcelona",
      chair: "Hon'ble IT & HRD Minister, Andhra Pradesh"
    },
    {
      id: 2,
      state: "Telangana",
      theme: "Industrial Farming as Solution to Indian Responsible Agriculture Market",
      topic: "Can Telangana's trailblazing journey for agricultural innovation work as a sustainable business opportunity model for nationwide replication. Witness how Telangana's advanced agricultural landscape has set the path for agri-value addition, ensuring food security across the state through processing and green technology",
      schedule: "1st Jan 2:15 - 3:15 pm CET",
      venue: "Congress Centre Barcelona",
      chair: "Hon'ble Chief Minister, Telangana"
    },
    {
      id: 3,
      state: "Telangana",
      theme: "CEO Forum - Showcasing Telangana as an Investment Destination",
      topic: "Showcasing Telangana's transformational history, highlighting technology leaders to global forums, drawing successful marquee companies entering industrial growth from across the globe. Witness the informed decision why Telangana is the preferred choice of India Inc.",
      schedule: "1st Jan 3:45 - 4:45 pm CET",
      venue: "Hotel Barcelona City Centre",
      chair: "Hon'ble Chief Minister, Telangana"
    },
    {
      id: 4,
      state: "Andhra Pradesh",
      theme: "Building for next trillion consumers",
      topic: "This roundtable will discuss the strategies to attract global investment across sectors for generating business that is helpful to Indian economy and boost job creation in India",
      schedule: "2nd Jan 11 - 12 pm CET",
      venue: "Grand Hotel Barcelona",
      chair: "Hon'ble Chief Minister, Andhra Pradesh"
    },
    {
      id: 5,
      state: "Maharashtra",
      theme: "Projecting Opportunities for Foreign Direct Investments in Infrastructure",
      topic: "Understanding successful methods to attract Foreign Direct Investments (FDI) for the ever-growing infrastructure needs of the urban centers",
      schedule: "2nd Jan 2 - 3 pm CET",
      venue: "India Pavilion, Promenade 67",
      chair: "Sr. Advisor, Infrastructure, Maharashtra"
    },
    {
      id: 6,
      state: "Andhra Pradesh",
      theme: "The Next Wave - Pioneering the Bold Ecosystem of Innovation",
      topic: "This roundtable will showcase Andhra Pradesh's role providing startup and innovation ecosystem, incentivizing emerging technologies for R&D, Film production and the creative industries",
      schedule: "2nd Jan 3:30 - 4:30 pm CET",
      venue: "Grand Hotel Barcelona",
      chair: "Hon'ble Chief Minister, Andhra Pradesh"
    },
    {
      id: 7,
      state: "Andhra Pradesh",
      theme: "Shaping the Future for the Next Gen AI Ecosystem in the State of Andhra Pradesh",
      topic: "Andhra Pradesh can establish itself as a global player for AI and technology solutions by creating a fostering environment for young talents to integrate into the varied tech needs of the world",
      schedule: "2nd Jan 5:00 - 7:00 pm CET",
      venue: "Grand Hotel Barcelona",
      chair: "Hon'ble IT & HRD Minister, Andhra Pradesh"
    },
    {
      id: 8,
      state: "Kerala",
      theme: "Investing in People - Shaping Economic Dividend",
      topic: "Kerala's model of governance in laying a strong foundation for a creative knowledge-based economy, and socially harmonious society",
      schedule: "3rd Jan 1 - 2 pm CET",
      venue: "India Pavilion, Promenade 67",
      chair: "State Secretary, Industries; Chief Secretary, Kerala"
    },
    {
      id: 9,
      state: "Maharashtra",
      theme: "Transition to Renewable Energy",
      topic: "Understanding methods to transform the energy sector for cleaner and sustainable future",
      schedule: "23rd Jan 10 - 11 am CET",
      venue: "India Pavilion, Promenade 67",
      chair: "MD-MIDC; DG, Renewable Energy Development Corporation of Maharashtra"
    },
    {
      id: 10,
      state: "Uttar Pradesh",
      theme: "Uttar Pradesh to the World: Open to Growth, Handmade for Partnership",
      topic: "Showcasing Uttar Pradesh as an investment for something lucrative sectors in a growing economy",
      schedule: "23rd Jan 4 - 5 pm CET",
      venue: "India Pavilion, Promenade 67",
      chair: "Hon'ble Chief Minister, Uttar Pradesh"
    },
    {
      id: 11,
      state: "Tamil Nadu",
      theme: "Building value-added supply chain diversification by forward integration",
      topic: "Strengthening global integration and replacing opportunities lost to other countries. The strategic project to invite manufacturers of intermediate and finished goods",
      schedule: "23rd Jan 5 - 5:30 pm CET",
      venue: "India Pavilion, Promenade 73",
      chair: "Industries Secretary, Tamil Nadu"
    },
    {
      id: 12,
      state: "Andhra Pradesh",
      theme: "Preparing the Future with Green Hydrogen - Gateway to Decarbonize",
      topic: "This roundtable will explore Andhra Pradesh's strategic vision to build the foundations for a hydrogen economy. Do not miss elite energy transitional conversations from industry experts, hydrogen producers",
      schedule: "23rd Jan 5:45 - 7:00 pm CET",
      venue: "Grand Hotel Barcelona",
      chair: "Hon'ble Chief Minister, Andhra Pradesh"
    },
    {
      id: 13,
      state: "Kerala",
      theme: "Kerala - Set emerging for transition from e-governance to e-democracy",
      topic: "Kerala's journey of scaling e-Governance infrastructure and processes for transition to participatory governance, empowering citizens with secure digital tools",
      schedule: "24th Jan 11 - 12 pm CET",
      venue: "India Pavilion, Promenade 67",
      chair: "IT Secretary, GoK; Director, Kerala State IT Mission"
    },
    {
      id: 14,
      state: "Uttar Pradesh",
      theme: "Uttar Pradesh - India's emerging as destination of choice to invest",
      topic: "Highlighting the inherent strengths that can be leveraged to position Uttar Pradesh as an upcoming hub for AI investments",
      schedule: "24th Jan 5:00 - 6:00 pm CET",
      venue: "India Pavilion, Promenade 67",
      chair: "Chief Secretary, Uttar Pradesh"
    }
  ];

  return (
    <div className="w-full">
         <h1 className=' bg-[#00105C] text-center p-4 my-20 xl:text-[40px] lg:text-[30px] md:text-[25px] text-[25px] font-[700] text-white'>Participating States and their Agenda</h1>
         <div className=' grid md:grid-cols-5 grid-cols-3 w-[95%] mb-20 mx-auto'>
            <img className=' xl:w-[500px] w-[100px]' src={icon1} alt="" />
            <img className=' xl:w-[500px] w-[100px]' src={icon2} alt="" />
            <img className=' xl:w-[500px] w-[100px]' src={icon3} alt="" />
            <img className=' xl:w-[500px] w-[100px]' src={icon4} alt="" />
            <img className=' xl:w-[500px] w-[100px]' src={icon5} alt="" />
         </div>
      <div className="overflow-x-auto w-[95%] mx-auto shadow-lg rounded-lg">
        <table className="min-w-full bg-white border-collapse">
          <thead>
            <tr className="bg-[#00105C] text-white">
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800 w-12">S.No.</th>
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800 w-28">State</th>
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800 w-36">Theme</th>
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800">Topic</th>
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800 w-24">Schedule (CET)</th>
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800 w-28">Venue</th>
              <th className="py-3 px-2 text-left xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] border border-indigo-800 w-28">Chair</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "bg-blue-50" : "bg-blue-100"}>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200 font-medium">{item.id}</td>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200 font-medium">{item.state}</td>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200 font-medium">{item.theme}</td>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200">{item.topic}</td>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200">{item.schedule}</td>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200">{item.venue}</td>
                <td className="py-2 px-2 md:text-[15px] text-[12px] border border-gray-200">{item.chair}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}