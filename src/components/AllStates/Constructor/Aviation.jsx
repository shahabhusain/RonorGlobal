import React from 'react';
import icon1 from '../../../assets/AllStates/icon4.png'
import icon2 from '../../../assets/AllStates/icon5.png'
import icon3 from '../../../assets/AllStates/icon6.png'
const AviationSectorUI = () => {
  return (
    <div className="">
      {/* Top Statistics Section */}
      <div className="bg-gradient-to-r from-[#0C1644] mt-20 to-[#152d96] p-6 w-[95%] mx-auto ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center space-x-4">
          {/* Stat 1 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon1} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px] rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21] font-bold mb-2">$1 Tn</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
            Contribution of the construction sector 
to Ghana economic output by 2030, 
with employment in the sector 
increasing by 100 Mn

            </div>
               </div>
          </div>

          {/* Stat 2 */}
           <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon2} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21] font-bold mb-2">6th</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
             One of the largest recipients of the FDI Inflows with total FDI inflows worth $35.24 Bn during April 2000 and September 2024
            </div>
               </div>
          </div>

          {/* Stat 3 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon3} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21] font-bold mb-2">$8.9 Bn</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
             Revenue generation potential of the warehousing market in the upcoming decade. 
            </div>
               </div>
          </div>
        </div>
      </div>
    

        <div className="bg-red-600 text-white text-center py-3 mt-20">
        <h2 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Sector Overview</h2>
      </div>

      <div className="p-6 md:text-[20px] text-[15px] font-[500] leading-relaxed">
        <p className="mb-4 ">
        Ghana’s construction sector stands as a cornerstone of the nation's economic strategy, pivotal in addressing critical infrastructure needs and providing substantial employment opportunities. Infrastructure construction and real estate assets like offices, retail, housing, and data centres have been the major focus areas for both the government and the private sector.  Logistics and warehousing have emerged as critical components within Ghana’s construction sector, driven by rapid urbanization and the need for efficient supply chain networks. According to NAREDCO and Knight Frank's Report, Ghana’s warehousing market is expected to see potential demand for 159 Mn square feet by 2047, with an annual compound growth rate of 4%. The e-commerce and manufacturing industries fuel this growth by driving investments in logistics parks, industrial corridors, and modern warehousing facilities across the country. Ghana’s real estate sector is also set to expand significantly, with projections indicating it could reach $5.8 Tn by 2047, contributing 15.5% to the total economic output.
        </p>
        
        <p className="mb-4">
         In the fiscal year 2024-25, the government has bolstered its capital expenditure by 11.1% to $133 Bn, equivalent to 3.4% of the GDP. Such investments are poised to catalyze growth within the construction sector, fostering the development of modern infrastructure nationwide.
Furthermore, government initiatives like the Pradhan Mantri Awas Yojana-Urban (PMAY-U) have marked significant progress by sanctioning 1.18 Cr houses, with 86.6 lakh completed and 1.15 Cr grounded for construction as of September 10, 2024. This initiative aims not only to alleviate urban housing shortages but also to enhance living standards across the country.
Sustainable development remains a key focus within India's construction sector, with government entities and private developers increasingly adopting green building practices and energy-efficient technologies. Initiatives like promoting green buildings aim to reduce environmental impact, enhance energy efficiency, and foster sustainable urban development. These practices not only contribute to environmental conservation but also align with global climate goals.
        </p>
        
        <p>
          Ghana’s construction sector is poised for substantial growth, supported by significant government initiatives, robust investments in logistics and warehousing infrastructure, and a steadfast commitment to sustainable development. The sector's role in enhancing infrastructure, facilitating urbanization, and driving economic growth underscores its critical importance in India's broader economic strategy. The trajectory of India's construction sector reflects its integral role in shaping the country's economic landscape. With ongoing initiatives like PMAY-U, HRIDAY, etc. substantial investment commitments, a focus on sustainability through green building practices, and advancements in logistics and warehousing infrastructure, the sector is not only meeting current infrastructure demands but also setting the stage for long-term economic resilience and sustainable urban development across the nation.
        </p>
      </div>

      {/* Why Invest Section */}
      <div className="bg-red-600 text-white text-center py-3">
        <h2 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Why Invest in Construction</h2>
      </div>

      <div className="p-6 mt-12 w-[95%] mx-auto">
  {/* Mobile Slider */}
  <div className="block md:hidden overflow-x-auto">
    <div className="flex gap-4 px-1">
      {[
        {
          title: 'Global market',
          desc: '3rd largest global construction market by 2025.',
          class: 'civil1',
        },
        {
          title: 'Robust urban transit network',
          desc: '3rd largest metro network globally, catering to 10 Mn daily riders.',
          class: 'civil2',
        },
        {
          title: 'Growth Opportunities',
          desc: 'Enormous growth opportunities in solid waste management, office stock, retail stock, data centers.',
          class: 'civil3',
        },
        {
          title: 'Urbanization',
          desc: '50% of Ghana will be living in urban areas by 2046, further giving a boost to the Construction market.',
          class: 'civil4',
        },
      ].map((item, i) => (
        <div
          key={i}
          className={`${item.class} min-w-[85%] shrink-0 p-5 rounded-lg bg-white shadow-md`}
        >
          <h3 className="font-bold mb-2 text-lg text-gray-800">{item.title}</h3>
          <p className="text-sm font-medium text-gray-700">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 md:mt-0">
    <div className="civil1 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 md:text-[24px] text-[21px] text-gray-800">Global market</h3>
      <p className="md:text-[20px] text-[15px] font-[500] text-gray-700">
        3rd largest global construction market by 2025.
      </p>
    </div>

    <div className="civil2 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 md:text-[24px] text-[21px] text-gray-800">
        Robust urban transit network
      </h3>
      <p className="md:text-[20px] text-[15px] font-[500] text-gray-700">
        3rd largest metro network globally, catering to 10 Mn daily riders.
      </p>
    </div>

    <div className="civil3 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 md:text-[24px] text-[21px] text-gray-800">Growth Opportunities</h3>
      <p className="md:text-[20px] text-[15px] font-[500] text-gray-700">
        Enormous growth opportunities in solid waste management, office stock, retail stock, data centers.
      </p>
    </div>

    <div className="civil4 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 md:text-[24px] text-[21px] text-gray-800">Urbanization</h3>
      <p className="md:text-[20px] text-[15px] font-[500] text-gray-700">
        50% of Ghana will be living in urban areas by 2046, further giving a boost to the Construction market.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default AviationSectorUI;