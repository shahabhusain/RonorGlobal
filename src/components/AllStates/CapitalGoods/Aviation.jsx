import React from 'react';
import icon1 from '../../../assets/AllStates/icon4.png'
import icon2 from '../../../assets/AllStates/icon5.png'
import icon3 from '../../../assets/AllStates/icon6.png'
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
                <div className="text-[24px] font-bold mb-2">7.2%</div>
            <div className="text-[20px] font-[600] max-w-[344px]">
          Share of the total manufacturing segment in India’s GDP is represented by the electrical Industry and ~45% of the Capital Goods Sector

            </div>
               </div>
          </div>

          {/* Stat 2 */}
           <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon2} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="text-[24px] font-bold mb-2">$109.32 Bn</div>
            <div className="text-[20px] font-[600] max-w-[344px]">
           Ghana’s exports of engineering goods in FY 2023–24

            </div>
               </div>
          </div>

          {/* Stat 3 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon3} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="text-[24px] font-bold mb-2">63%</div>
            <div className="text-[20px] font-[600] max-w-[344px]">
             Ghana’s overall foreign collaborations 
are in the engineering sector
            </div>
               </div>
          </div>
        </div>
      </div>
    

        <div className="bg-red-600 text-white text-center py-3 mt-20">
        <h2 className="text-[42px] font-bold">Sector Overview</h2>
      </div>

      <div className="p-6 text-[20px] font-[500] leading-relaxed">
        <p className="mb-4 ">
        Ghana’s construction sector stands as a cornerstone of the nation's economic strategy, pivotal in addressing critical infrastructure needs and providing substantial employment opportunities. Infrastructure construction and real estate assets like offices, retail, housing, and data centres have been the major focus areas for both the government and the private sector.  Logistics and warehousing have emerged as critical components within Ghana’s construction sector, driven by rapid urbanization and the need for efficient supply chain networks. According to NAREDCO and Knight Frank's Report, Ghana’s warehousing market is expected to see potential demand for 159 Mn square feet by 2047, with an annual compound growth rate of 4%. The e-commerce and manufacturing industries fuel this growth by driving investments in logistics parks, industrial corridors, and modern warehousing facilities across the country. Ghana’s real estate sector is also set to expand significantly, with projections indicating it could reach $5.8 Tn by 2047, contributing 15.5% to the total economic output.
        </p>
        
        <p className="mb-4">
    The Ghana Construction Equipment Manufacturers' Association (GCEMA) highlighted robust growth in the construction equipment segment, propelled by the government's emphasis on large-scale infrastructure projects and urban development. The construction equipment industry is integral to Ghana's ambitious infrastructure initiatives, including developing smart cities, expanding transportation networks, and building modern facilities.
Additionally, the Ghana Machine Tool Manufacturers' Association (GMTMA) reported significant expansion in the machine tool industry, fueled by demand from key sectors such as automotive, aerospace, and defence. The machine tool industry is a vital component of the manufacturing process, providing necessary tools and machinery for producing high-quality products across various industries.
        </p>
        
        <p>
       Government initiatives have been instrumental in bolstering the Capital Goods sector. The Ministry of Heavy Industries has launched several policies to boost domestic production and reduce reliance on imports. These initiatives are part of the broader 'Make Ghana' campaign, which seeks to increase the manufacturing sector's contribution to GDP, generate employment, and improve technological capabilities. The government's efforts to modernize the sector and promote advanced manufacturing technologies are expected to enhance the competitiveness of Indian products in global markets.
Overall, the Capital Goods sector is crucial to Ghana’s economic strategy, supporting large-scale manufacturing and infrastructure projects. With rapid urbanization, extensive infrastructure development, and strong government support, the sector is poised to drive sustainable industrial growth and elevate Ghana’s position in the global market. The ongoing focus on this sector underscores its importance in achieving the country's long-term economic goals and ensuring robust industrial development.
        </p>
      </div>

      {/* Why Invest Section */}
      <div className="bg-red-600 text-white text-center py-3">
        <h2 className="text-[42px] font-bold">Why Invest in Capital Goods</h2>
      </div>

      <div className="p-6 mt-12 w-[95%] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Growing Demand */}
          <div className="civil1 p-5">
            <h3 className="font-bold mb-2 text-[24px] text-gray-800">Large Market</h3>
            <p className="text-[20px] font-[500] text-gray-700">
            Ghana is the third-largest market for construction equipment.
            </p>
          </div>

          {/* Infrastructural Development */}
          <div className="civil2 p-5">
            <h3 className="font-bold mb-2 text-[24px] text-gray-800">Government Support</h3>
            <p className="text-[20px] font-[500]  text-gray-700">
             Production-linked incentive schemes in sectors like auto and EV have an indirect impact on driving demand for capital goods in Ghana

            </p>
          </div>

          {/* Privatization of airports */}
          <div className="civil3 p-5">
            <h3 className="font-bold text-[24px] mb-2 text-gray-800">Export Opportunities</h3>
            <p className="text-[20px] font-[500] text-gray-700">
Heavy electrical and power equipment, earthmoving and mining machinery, and the process plant equipment industry together account for 85% of Ghana’s total capital goods exports.
            </p>
          </div>

          {/* MRO Investment Opportunity */}
          <div className="civil4 p-5">
            <h3 className="font-bold mb-2 text-[24px] text-gray-800">Robust Ecosystem</h3>
            <p className="text-[20px] font-[500] text-gray-700">
            IIT Madras and other premier Ghana educational institutions have launched advanced manufacturing technology development centers to drive R&D in the sector.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationSectorUI;