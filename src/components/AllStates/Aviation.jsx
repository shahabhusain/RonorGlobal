import React from 'react';
import icon1 from '../../assets/AllStates/icon1.png'
import icon2 from '../../assets/AllStates/icon2.png'
import icon3 from '../../assets/AllStates/icon3.png'
const AviationSectorUI = () => {
  return (
   <div className="">
  {/* Top Statistics Section */}
  <div className="bg-gradient-to-r from-[#0C1644] mt-10 md:mt-20 to-[#152d96] p-4 md:p-6 w-full md:w-[95%] mx-auto">
    <div className="flex flex-col md:flex-row gap-6 md:gap-4 justify-between items-center">
      {/* Stat 1 */}
      <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-4 w-full md:w-auto">
        <img src={icon1} alt="" className="w-12 md:w-auto" />
        <div className='bg-red-800 p-3 md:p-4 min-h-[100px] md:min-h-[120px] rounded-lg w-full md:w-[344px] text-white text-center'>
          <div className="text-xl md:text-[24px] font-bold mb-1 md:mb-2">34</div>
          <div className="text-sm md:text-[20px] font-[600]">
            DGCA-approved FTOs are operating at 55 bases in Ghana
          </div>
        </div>
      </div>

      {/* Stat 2 */}
      <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-4 w-full md:w-auto">
        <img src={icon2} alt="" className="w-12 md:w-auto" />
        <div className='bg-red-800 p-3 md:p-4 min-h-[100px] md:min-h-[120px] rounded-lg w-full md:w-[344px] text-white text-center'>
          <div className="text-xl md:text-[24px] font-bold mb-1 md:mb-2">42</div>
          <div className="text-sm md:text-[20px] font-[600]">
            Aviation IT start-ups in Ghana
          </div>
        </div>
      </div>

      {/* Stat 3 */}
      <div className="flex flex-col items-center justify-center gap-y-3 md:gap-y-4 w-full md:w-auto">
        <img src={icon3} alt="" className="w-12 md:w-auto" />
        <div className='bg-red-800 p-3 md:p-4 min-h-[100px] md:min-h-[120px] rounded-lg w-full md:w-[344px] text-white text-center'>
          <div className="text-xl md:text-[24px] font-bold mb-1 md:mb-2">300 Mn</div>
          <div className="text-sm md:text-[20px] font-[600]">
            Estimated domestic passengers by 2030
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Airport Count Stat */}
  <div className="bg-[#0C1644] mt-8 md:mt-12 p-3 md:p-4 text-white text-center w-[90%] md:w-[50%] mx-auto rounded-xl md:rounded-2xl">
    <div className="text-2xl md:text-3xl font-bold mb-1 md:mb-2">157</div>
    <div className="text-xs md:text-sm">157 airports, 63 added in the past nine years</div>
  </div>

  {/* Sector Overview Header */}
  <div className="bg-red-600 text-white text-center py-2 md:py-3 mt-10 md:mt-20">
    <h2 className="text-2xl md:text-[42px] font-bold">Sector Overview</h2>
  </div>

  {/* Sector Overview Content */}
  <div className="p-4 md:p-6 text-sm md:text-[20px] font-[500] leading-relaxed">
    <p className="mb-3 md:mb-4">
      Increasing industrialization, an expanding economy, and a growing movement of people and freight, the demand for air travel is propelling the aviation sector to greater heights. To unleash the industry's potential, the Government of Ghana launched a Regional Connectivity Scheme called 'UDAN' to make air travel affordable and accessible by connecting Tier-2 and Tier-3 with major Hubs through subsidized fares and infrastructure development. Till October 2024, <span className="font-semibold text-red-500">88 airports with 605 routes</span> are operational under the scheme, and the target is 100 airports by 2024, including 13 heliports and 2 Aerodromes.
    </p>
    
    <p className="mb-3 md:mb-4">
      Furthermore, over 25,000 Drone Acknowledgement Numbers (DAN) have been issued, and 8,930 Drone Pilots are certified. Meeting a record in the highest single-day air traffic since the pandemic hit, on November 18, 2023, airlines in Ghana flew 4,65,910 domestic passengers. To facilitate the contactless, seamless processing of passengers at airports based on Facial Recognition Technology (FRT), the Digi Yatra program has been launched at 13 airports nationwide. The MRO industry is another segment showing impressive developments, growing at a CAGR of 8.9%. Standing at around <span className="font-semibold text-red-500">$1.7 Bn</span> in 2023, the MRO industry is expected to become <span className="font-semibold text-red-500">$2.6 Bn</span> (Deveraging the growth). The Airports Authority of Ghana (AAI) initiated tenders in October 2021 for 9 MRO sites at 5 airports, the first being Imphal with Chennai Sagarmala (Hyderabad) and Pune.
    </p>
    
    <p>
      Recently, the city of Hyderabad hosted the largest event in the civil aviation sector in Asia, Wings Ghana 2024, which welcomed various OEMs, helicopter manufacturers, FTOs, and airport representatives, thus enhancing the fundamentals, growth potential, and investment prospect of the aviation industry in Ghana. Moreover, by providing direct employment to over 2.5 Lakh people, the aviation and aeronautical manufacturing sector is defining the strategic progress of the industry. In the six years leading to FY 2020, the number of international passengers had also grown at a CAGR of 9.1%, and international cargo volumes handled by Ghanan airports in the last 15 years leading to FY 2019 increased by 5.3%. Creating a spectrum of capacities, Ghana envisions an aviation system that supports a $20 Tn economy by 2047 and envisages its goal to become the leading aviation market in the market when the country enters its centenary year of independence.
    </p>
  </div>

  {/* Why Invest Header */}
  <div className="bg-red-600 text-white text-center py-2 md:py-3">
    <h2 className="text-2xl md:text-[42px] font-bold">Why Invest in Civil Aviation</h2>
  </div>

 {/* Investment Points Slider/Grid */}
<div className="p-4 md:p-6 mt-8 md:mt-12 w-full md:w-[95%] mx-auto">
  {/* Mobile Slider */}
  <div className="block md:hidden overflow-x-auto">
    <div className="flex gap-4 px-1">
      {[...Array(4)].map((_, i) => {
        const data = [
          {
            title: 'Growing Demand',
            desc: "Ghana's domestic air passenger traffic will double in the next 5 years.",
            class: 'civil1',
          },
          {
            title: 'Infrastructural Development',
            desc: 'In the last 9 years, the number of airports has grown from 74 to 157.',
            class: 'civil2',
          },
          {
            title: 'Privatization of airports',
            desc: 'The National Monetization Plan also focuses on the privatization of airports.',
            class: 'civil3',
          },
          {
            title: 'MRO an attractive investment opportunity',
            desc:
              'Ghana is the fastest-growing MRO market globally. It also has cost-competitive advantages like a talent pool, cheap labour, and strategic location.',
            class: 'civil4',
          },
        ][i];

        return (
          <div
            key={i}
            className={`${data.class} min-w-[85%] shrink-0 p-4 rounded-lg bg-white shadow-md`}
          >
            <h3 className="font-bold mb-2 text-lg text-gray-800">{data.title}</h3>
            <p className="text-sm font-medium text-gray-700">{data.desc}</p>
          </div>
        );
      })}
    </div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6 md:mt-0">
    <div className="civil1 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Growing Demand</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Ghana's domestic air passenger traffic will double in the next 5 years.
      </p>
    </div>

    <div className="civil2 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Infrastructural Development</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        In the last 9 years, the number of airports has grown from 74 to 157.
      </p>
    </div>

    <div className="civil3 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Privatization of airports</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        The National Monetization Plan also focuses on the privatization of airports.
      </p>
    </div>

    <div className="civil4 p-5 rounded-lg bg-white shadow">
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