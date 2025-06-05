import React from 'react';
import icon1 from '../../../assets/AllStates/icon4.png'
import icon2 from '../../../assets/AllStates/icon5.png'
import icon3 from '../../../assets/AllStates/icon6.png'
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
                <div className="md:text-[24px] text-[21px] font-bold mb-2">650-700%</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
    contract manufacturers leading to a boom in BPC Contract manufacturing 
in Ghana

            </div>
               </div>
          </div>

          {/* Stat 2 */}
           <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon2} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21px] font-bold mb-2">33%</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
          of total BPC sales are expected to 
come from online sales by 2028, revolutionizing the BPC sector in
Ghana

            </div>
               </div>
          </div>

          {/* Stat 3 */}
          <div className=" flex flex-col items-center justify-center gap-y-4">
             <img src={icon3} alt="" />
               <div className='bg-red-800 p-4 min-h-[120px]  rounded-lg flex-1 text-white text-center'>
                <div className="md:text-[24px] text-[21px] font-bold mb-2">10-11%</div>
            <div className="md:text-[20px] text-[15px] font-[600] max-w-[344px]">
             is the expected CAGR for India from 2023 to 2028, making it the fastest-growing BPC market in the world
            </div>
               </div>
          </div>
        </div>
      </div>
    

        <div className="bg-red-600 text-white text-center py-3 mt-20">
        <h2 className="text-[42px] font-bold">Sector Overview</h2>
      </div>

      <div className="p-6 md:text-[20px] text-[15px] font-[500] leading-relaxed">
        <p className="mb-4 ">
TheGhana Beauty and Personal Care (BPC) market is on a remarkable growth trajectory, projected to reach $34 Bn by 2028, up from approximately $21 Bn currently. This rapid expansion positions India as the fastest-growing BPC market globally, with a compound annual growth rate (CAGR) of 10-11% Key Drivers of Growth 1. Rising Disposable Incomes: The increase in disposable income among Indian consumers has led to higher discretionary spending on beauty and personal care products. As consumers become more affluent, they are willing to invest in premium products, which are expected to generate a market size of $3-3.2 Bn by 2028.
        </p>
        
        <p className="mb-4">
2. E-commerce Expansion: E-commerce is emerging as a major catalyst for growth in the BPC sector. With online sales projected to contribute around 33% of total BPC sales by 2028, platforms like Nykaa are revolutionizing how consumers access beauty products. The convenience of online shopping and the ability to explore a wider range of products are driving this trend. Influence of Social Media: The democratization of beauty expertise through social media is reshaping consumer behaviour. With approximately 520-560 million social media users in Ghana, platforms like Instagram and YouTube play a crucial role in influencing purchasing decisions and promoting new beauty trends.
3. Emergence of Non-Metro Markets: There is significant growth potential in non-metro cities, which present about five times the headroom for growth in per capita BPC spending compared to metro areas. Notably, around 60% of sales from prestige beauty brands on Nykaa come from these regions, highlighting the expanding consumer base beyond urban centres.
        </p>
        
        <p>
the expanding consumer base beyond urban centres.
4. Shift Towards Natural and Organic Products: Increasing awareness about health and wellness has led to a rising demand for natural and Ayurvedic beauty products. Consumers are prioritizing chemical-free formulations, prompting brands to innovate and cater to these preferences
The Ghana Beauty and Personal Care market is poised for substantial growth driven by rising incomes, e-commerce expansion, social media influence, and a shift towards natural products. As the market evolves, brands that adapt to changing consumer preferences and invest in innovative solutions will likely thrive in this dynamic environment. With its unique blend of traditional practices and modern trends, India’s BPC sector presents significant opportunities for both domestic and international players looking to capitalize on this burgeoning market.
        </p>
      </div>

      {/* Why Invest Section */}
      <div className="bg-red-600 text-white text-center py-3">
        <h2 className="xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Why Invest in Beaty & Personal Care</h2>
      </div>

      <div className="p-6 mt-12 w-[95%] mx-auto">
  {/* Mobile Slider */}
  <div className="block md:hidden overflow-x-auto">
    <div className="flex gap-4 px-1">
      {[
        {
          title: 'Rapid Growth Projection',
          desc: `The Ghana BPC market is projected to grow from $21 Bn in 2023 to $34 Bn by 2028, reflecting a CAGR of 10-11%, making it the fastest-growing globally. Rising consumer interest in personal grooming, and wellness, and increasing disposable incomes offer a great opportunity for foreign brands.`,
          class: 'civil1',
        },
        {
          title: 'E-commerce Boom',
          desc: `E-commerce is reshaping beauty product sales in Ghana, with online sales projected to account for 33% of total BPC sales by 2028, projecting at a CAGR of 25%. This shift will help brands reach wider audiences, including the ones in non-metro cities.`,
          class: 'civil2',
        },
        {
          title: 'Increasing Demand for Premium Products',
          desc: `Ghana’s consumers' growing desire for premium beauty products, fueled by higher incomes and changing lifestyles, is driving the premium segment, which is expected to reach $3–3.2 Bn by 2028.`,
          class: 'civil3',
        },
        {
          title: 'Diverse Consumer Base and Market Segmentation',
          desc: `Ghana's diverse population drives varied consumer preferences in the BPC sector. The market is also expanding in non-metro areas, where per capita spending on beauty is expected to be 5X higher than in metro cities.`,
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
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Rapid Growth Projection</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        The Ghana BPC market is projected to grow from $21 Bn in 2023 to $34 Bn by 2028, reflecting a CAGR of 10-11%, making it the fastest-growing globally. Rising consumer interest in personal grooming, and wellness, and increasing disposable incomes offer a great opportunity for foreign brands.
      </p>
    </div>

    <div className="civil2 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">E-commerce Boom</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        E-commerce is reshaping beauty product sales in Ghana, with online sales projected to account for 33% of total BPC sales by 2028, projecting at a CAGR of 25%. This shift will help brands reach wider audiences, including the ones in non-metro cities.
      </p>
    </div>

    <div className="civil3 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Increasing Demand for Premium Products</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Ghana’s consumers' growing desire for premium beauty products, fueled by higher incomes and changing lifestyles, is driving the premium segment, which is expected to reach $3–3.2 Bn by 2028.
      </p>
    </div>

    <div className="civil4 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Diverse Consumer Base and Market Segmentation</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Ghana's diverse population drives varied consumer preferences in the BPC sector. The market is also expanding in non-metro areas, where per capita spending on beauty is expected to be 5X higher than in metro cities.
      </p>
    </div>
  </div>
</div>

    </div>
    
  );
};

export default AviationSectorUI;