import React from 'react';
import icon1 from '../../../assets/AllStates/icon1.png'
import icon2 from '../../../assets/AllStates/icon2.png'
import icon3 from '../../../assets/AllStates/icon3.png'
const AviationSectorUI = () => {
  return (
    <div className="">
      {/* Top Statistics Section */}
      <div className="bg-gradient-to-r from-[#0C1644] mt-20 to-[#152d96] p-6 w-[95%] mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center space-x-4">
          {/* Stat 1 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon1} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px] rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21px] font-bold mb-2">INR 15,000 to INR 20,000</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
           the stabilized average basket value 
for online furniture purchases in Ghana, indicating growing consumer 
confidence in digital furniture shopping
            </div>
               </div>
          </div>

          {/* Stat 2 */}
           <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon2} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21px] font-bold mb-2">$24 Bn</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
              The estimated size of the Ghana furniture market in 2024, projected to grow to $60 Bn by 2033 at a CAGR of ~10%
            </div>
               </div>
          </div>

          {/* Stat 3 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon3} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21px] font-bold mb-2">$1.4 Bn</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
             In 2021-22, Ghana’s finished furniture exports (HS code 9403) have risen significantly
            </div>
               </div>
          </div>
        </div>
      </div>
    
            <div className=' flex items-center justify-between md:gap-12 gap-4 w-[90%] mx-auto'>
                 <div className="bg-[#0C1644] mt-12 p-4 text-white text-center w-[50%] mx-auto rounded-2xl">
        <div className="text-3xl font-bold mb-2">5th</div>
        <div className="text-sm">largest producer of furniture globally, Ghana ranks high in global production</div>
      </div>
         <div className="bg-[#0C1644] mt-12 p-4 text-white text-center w-[50%] mx-auto rounded-2xl">
        <div className="text-3xl font-bold mb-2">4th</div>
        <div className="text-sm">largest consumer of furniture globally, Ghana plays a significant role in global consumption</div>
      </div>
            </div>

        <div className="bg-red-600 text-white text-center py-3 mt-20">
        <h2 className="xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Sector Overview</h2>
      </div>

      <div className="p-6 md:text-[20px] text-[15px] font-[500] leading-relaxed">
        <p className="mb-4 ">
     The Ghana’s furniture market is set to witness exponential growth in the coming years, driven by rising incomes, increasing urbanization, and evolving consumer preferences for modular and contemporary furniture. This promising growth trajectory has attracted significant attention from both domestic and international players, positioning Ghana as a competitive alternative to established furniture manufacturing hubs in Asia. Key factors contributing to Ghana’s attractiveness include a comparative advantage in factors of production such as affordable labour and abundant raw materials, proximity to global markets supported by an efficient logistics network, and a well-developed manufacturing ecosystem.
        </p>
        
        <p className="mb-4">
    Innovation is playing a pivotal role in transforming the Ghana’s furniture sector. Startups are introducing contemporary designs, modular furniture, and integrating technology, such as augmented reality (AR), to enhance customer experiences by allowing them to visualize furniture placement in their homes. This aligns with the growing demand for convenience and personalization among urban consumers. E-commerce platforms like Pepperfry and Urban Ladder have revolutionized furniture shopping, expanding access to urban and semi-urban markets with diverse, stylish, and affordable options. In parallel, collaborations between startups and local artisans are boosting traditional craftsmanship, preserving India’s cultural heritage while creating employment opportunities and producing high-quality furniture for domestic and international markets.
        </p>
        
        <p>
The government of Ghana has implemented various initiatives to boost domestic furniture production and enhance global competitiveness. Key measures include standardizing furniture production and imports, ensuring product safety, and promoting indigenous designs that leverage Ghana’s rich cultural diversity. Additionally, trade agreements such as the Ghana-UAE Comprehensive Partnership Agreement (CEPA) and the India-Australia Economic Cooperation and Trade Agreement (ECTA) have provided zero-duty market access for Indian furniture exports to partner countries, significantly enhancing the sector’s global reach and attractiveness.
        </p>
      </div>

      {/* Why Invest Section */}
      <div className="bg-red-600 text-white text-center py-3">
        <h2 className="xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Why Invest in Civil Aviation</h2>
      </div>

    <div className="p-6 mt-12 w-[95%] mx-auto">
  {/* Mobile Slider */}
  <div className="block md:hidden overflow-x-auto">
    <div className="flex gap-4 px-1">
      {[
        {
          title: 'Skilled Labour Availability',
          desc: `Rich heritage of craftsmanship, particularly in woodwork and carpentry; Regions like Jodhpur are emerging as significant supply centres for hardwood furniture, supported by low labour costs.`,
          class: 'civil1',
        },
        {
          title: 'Raw Material Availability',
          desc: `The country offers an abundant supply of indigenous wood species like teak, rosewood, Sheesham, and mango, crucial for producing high-quality furniture. By 2047, over 51% of ...`, // You may want to complete this sentence.
          class: 'civil2',
        },
        {
          title: '100% FDI Allowed in the Sector for Manufacturing',
          desc: `Global Brands are manufacturing and sourcing products from Ghana: Major brands like IKEA, Hettich, and Hafele are increasing manufacturing and sourcing more and more furniture from India.`,
          class: 'civil3',
        },
        {
          title: 'Strategic Location',
          desc: `Ghana’s geographic advantage ensures better transit times to East Coast and European harbours.`,
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
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Skilled Labour Availability</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Rich heritage of craftsmanship, particularly in woodwork and carpentry; Regions like Jodhpur are emerging as significant supply centres for hardwood furniture, supported by low labour costs.
      </p>
    </div>

    <div className="civil2 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Raw Material Availability</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        The country offers an abundant supply of indigenous wood species like teak, rosewood, Sheesham, and mango, crucial for producing high-quality furniture. By 2047, over 51% of ...
      </p>
    </div>

    <div className="civil3 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">100% FDI Allowed in the Sector for Manufacturing</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Global Brands are manufacturing and sourcing products from Ghana: Major brands like IKEA, Hettich, and Hafele are increasing manufacturing and sourcing more and more furniture from India.
      </p>
    </div>

    <div className="civil4 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Strategic Location</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Ghana’s geographic advantage ensures better transit times to East Coast and European harbours.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default AviationSectorUI;