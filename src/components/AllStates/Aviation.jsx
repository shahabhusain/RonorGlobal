import React from 'react';
import icon1 from '../../assets/AllStates/icon1.png'
import icon2 from '../../assets/AllStates/icon2.png'
import icon3 from '../../assets/AllStates/icon3.png'
const AviationSectorUI = () => {
  return (
    <div className="">
      {/* Top Statistics Section */}
      <div className="bg-gradient-to-r from-[#0C1644] mt-20 to-[#152d96] p-6 w-[95%] mx-auto ">
        <div className="flex justify-between items-center space-x-4">
          {/* Stat 1 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon1} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px] rounded-lg flex-1 text-white text-center'>
                <div className="text-[24px] font-bold mb-2">34</div>
            <div className="text-[20px] font-[600] max-w-[344px]">
             DGCA-approved FTOs are operating at 55 bases in India
            </div>
               </div>
          </div>

          {/* Stat 2 */}
           <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon2} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="text-[24px] font-bold mb-2">42</div>
            <div className="text-[20px] font-[600] max-w-[344px]">
              Aviation IT start-ups in Ghana
            </div>
               </div>
          </div>

          {/* Stat 3 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon3} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="text-[24px] font-bold mb-2">300 Mn</div>
            <div className="text-[20px] font-[600] max-w-[344px]">
              Estimated domestic passengers by 2030
            </div>
               </div>
          </div>
        </div>
      </div>
    
            <div className="bg-[#0C1644] mt-12 p-4 text-white text-center w-[50%] mx-auto rounded-2xl">
        <div className="text-3xl font-bold mb-2">157</div>
        <div className="text-sm">157 airports, 63 added in the past nine years</div>
      </div>

        <div className="bg-red-600 text-white text-center py-3 mt-20">
        <h2 className="text-[42px] font-bold">Sector Overview</h2>
      </div>

      <div className="p-6 text-[20px] font-[500] leading-relaxed">
        <p className="mb-4 ">
          Increasing industrialization, an expanding economy, and a growing movement of people and freight, the demand for air travel is propelling the aviation sector to greater heights. To unleash the industry's potential, the Government of India launched a Regional Connectivity Scheme called 'UDAN' to make air travel affordable and accessible by connecting Tier-2 and Tier-3 with major Hubs through subsidized fares and infrastructure development. Till October 2024, <span className="font-semibold text-red-500">88 airports with 605 routes</span> are operational under the scheme, and the target is 100 airports by 2024, including 13 heliports and 2 Aerodromes.
        </p>
        
        <p className="mb-4">
          Furthermore, over 25,000 Drone Acknowledgement Numbers (DAN) have been issued, and 8,930 Drone Pilots are certified. Meeting a record in the highest single-day air traffic since the pandemic hit, on November 18, 2023, airlines in Ghana flew 4,65,910 domestic passengers. To facilitate the contactless, seamless processing of passengers at airports based on Facial Recognition Technology (FRT), the Digi Yatra program has been launched at 13 airports nationwide. The MRO industry is another segment showing impressive developments, growing at a CAGR of 8.9%. Standing at around <span className="font-semibold text-red-500">$1.7 Bn</span> in 2023, the MRO industry is expected to become <span className="font-semibold text-red-500">$2.6 Bn</span> (Deveraging the growth). The Airports Authority of India (AAI) initiated tenders in October 2021 for 9 MRO sites at 5 airports, the first being Imphal with Chennai Sagarmala (Hyderabad) and Pune.
        </p>
        
        <p>
          Recently, the city of Hyderabad hosted the largest event in the civil aviation sector in Asia, Wings Ghana 2024, which welcomed various OEMs, helicopter manufacturers, FTOs, and airport representatives, thus enhancing the fundamentals, growth potential, and investment prospect of the aviation industry in Ghana. Moreover, by providing direct employment to over 2.5 Lakh people, the aviation and aeronautical manufacturing sector is defining the strategic progress of the industry. In the six years leading to FY 2020, the number of international passengers had also grown at a CAGR of 9.1%, and international cargo volumes handled by Indian airports in the last 15 years leading to FY 2019 increased by 5.3%. Creating a spectrum of capacities, India envisions an aviation system that supports a $20 Tn economy by 2047 and envisages its goal to become the leading aviation market in the market when the country enters its centenary year of independence.
        </p>
      </div>

      {/* Why Invest Section */}
      <div className="bg-red-600 text-white text-center py-3">
        <h2 className="text-[42px] font-bold">Why Invest in Civil Aviation</h2>
      </div>

      <div className="p-6 mt-12 w-[95%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Growing Demand */}
          <div className="civil1 p-5">
            <h3 className="font-bold mb-2 text-[24px] text-gray-800">Growing Demand</h3>
            <p className="text-[20px] font-[500] text-gray-700">
              Ghana's domestic air passenger traffic will double in the next 5 years.
            </p>
          </div>

          {/* Infrastructural Development */}
          <div className="civil2 p-5">
            <h3 className="font-bold mb-2 text-[24px] text-gray-800">Infrastructural Development</h3>
            <p className="text-[20px] font-[500]  text-gray-700">
              In the last 9 years, the number of airports has grown from 74 to 157.
            </p>
          </div>

          {/* Privatization of airports */}
          <div className="civil3 p-5">
            <h3 className="font-bold text-[24px] mb-2 text-gray-800">Privatization of airports</h3>
            <p className="text-[20px] font-[500] text-gray-700">
              The National Monetization Plan also focuses on the privatization of airports.
            </p>
          </div>

          {/* MRO Investment Opportunity */}
          <div className="civil4 p-5">
            <h3 className="font-bold mb-2 text-[24px] text-gray-800">MRO an attractive investment opportunity</h3>
            <p className="text-[20px] font-[500] text-gray-700">
              Ghana is the fastest-growing MRO market globally. It also has cost-competitive advantages like a talent pool, cheap labour, and strategic location.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationSectorUI;