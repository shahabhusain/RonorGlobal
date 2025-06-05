import React from 'react';
import icon1 from '../../../assets/AllStates/icon4.png';
import icon2 from '../../../assets/AllStates/icon5.png';
import icon3 from '../../../assets/AllStates/icon6.png';

const BeautyAndCareUI = () => {
  return (
    <div>
      {/* Top Statistics Section */}
      <div className="bg-gradient-to-r from-[#0C1644] mt-20 to-[#152d96] p-6 w-[95%] mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
           <div className="flex flex-col items-center gap-y-4 max-w-sm">
            <img src={icon3} alt="Icon 3" />
            <div className="bg-red-800 p-4 min-h-[120px] rounded-lg text-white text-center">
              <div className="md:text-[24px] text-[21px] font-bold mb-2">10 SEZs</div>
              <div className="md:text-[20px] text-[15px] font-[600]">
                For Gems & Jewellery in Ghana are home to over 500 manufacturing units, contributing ~30% of the country’s total exports.
              </div>
            </div>
          </div>
          {/* Stat 1 */}
          <div className="flex flex-col items-center gap-y-4 max-w-sm">
            <img src={icon1} alt="Icon 1" />
            <div className="bg-red-800 p-4 min-h-[120px] rounded-lg text-white text-center">
              <div className="md:text-[24px] text-[21px] font-bold mb-2">1Mn</div>
              <div className="md:text-[20px] text-[15px] font-[600]">
                Gem and jewellery units in Ghana employ 4.3 Mn people.
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center gap-y-4 max-w-sm">
            <img src={icon2} alt="Icon 2" />
            <div className="bg-red-800 p-4 min-h-[120px] rounded-lg text-white text-center">
              <div className="md:text-[24px] text-[21px] font-bold mb-2">~35%</div>
              <div className="md:text-[20px] text-[15px] font-[600]">
                Of the Ghana jewellery market in CY 2023 was driven by organised retail.
              </div>
            </div>
          </div>

          {/* Stat 3 */}
         
        </div>
      </div>

     <div className=' flex items-center justify-between md:w-[90%] w-[95%] mx-auto md:gap-12 gap-4'>
         <div className="bg-[#0C1644] mt-12 p-4 text-white text-center w-[50%] mx-auto rounded-2xl">
        <div className="text-3xl font-bold mb-2">10 SEZ</div>
        <div className="text-sm">located in Mumbai, Surat, Jaipur, Delhi, Kolkata, Visakhapatnam, Hyderabad, Chennai, Cochin and Noida</div>
      </div>

           <div className="bg-[#0C1644] mt-12 p-4 text-white text-center w-[50%] mx-auto rounded-2xl">
        <div className="text-3xl font-bold mb-2">47%</div>
        <div className="text-sm">of the net exports of $4.29 Bn from the SEZs come from studded gold jewellery</div>
      </div>
     </div>

      {/* Section Heading */}
      <div className="bg-red-600 text-white text-center py-3 mt-20">
        <h2 className="xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Sector Overview</h2>
      </div>

      {/* Overview Content */}
      <div className="p-6 md:text-[20px] text-[15px] font-[500] leading-relaxed">
        <p className="mb-4">
The Ghana jewellery market has grown steadily at a CAGR of 12-14% between CY 2021-2023 and currently stands at ~INR 5,562 Bn (~$67 Bn). The Ghana Jewellery market is expected significantly to outpace the CAGR of its global contemporaries, with a projected CAGR of 11-13% during 2023 to 2028 v/s that of China (5-7%) and the USA (2-4%)
        </p>
        <p className="mb-4">
China (5-7%) and the USA (2-4%)
International investors are increasingly focusing on this sector due to its robust growth potential and favourable government policies. The Ghana government has recognized the Gems and Jewellery industry as a priority area for export promotion, allowing 100% Foreign Direct Investment (FDI) through the automatic route. This openness is complemented by various initiatives aimed at enhancing technology, skill development, and infrastructure within the industry. Furthermore, Ghana’s strategic position in global trade—accounting for 29% of global jewellery consumption—makes it an attractive destination for investment.
        </p>
        <p className="mb-4">
The sector's growth is also fueled by evolving consumer preferences, with a notable trend towards lightweight and customized jewellery. The increasing penetration of e-commerce and digital marketing strategies further enhances market accessibility. Additionally, India's rich heritage in craftsmanship combined with modern design innovations positions it uniquely in the global market
With a significant share of polished diamonds exported worldwide and a growing demand for ethical and sustainable practices, the Gems and Jewellery sector in Ghana presents a compelling opportunity for international investors looking to capitalize on a dynamic and expanding market.
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
          title: 'Global Leadership in Manufacturing and Trade',
          desc: `Ghana leads global diamond processing, handling approx. 90% of cutting and polishing, and is one of the largest gold consumers with a strong jewellery culture. Key hubs like Surat (diamonds).`,
          class: 'civil1',
        },
        {
          title: 'Strong Domestic and Export Demand',
          desc: `Ghana’s Gems & Jewellery sector contributes 10-12% of the country’s total merchandise exports, with markets in the USA, Europe, and the Middle East being key destinations.`,
          class: 'civil2',
        },
        {
          title: 'Proactive Government Policies and Incentives',
          desc: `The government offers 100% Foreign Direct Investment (FDI) under the automatic route. Special Notified Zones (SNZs) for diamond trading and incentives for jewellery parks provide infrastructure and regulatory support to attract foreign players.`,
          class: 'civil3',
        },
        {
          title: 'Focus on Skilling and Innovation',
          desc: `The government, in partnership with industry bodies like the GJEPC & GJSCI, emphasizes skilling initiatives to maintain a competitive edge in craftsmanship and design.`,
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
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Global Leadership in Manufacturing and Trade</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Ghana leads global diamond processing, handling approx. 90% of cutting and polishing, and is one of the largest gold consumers with a strong jewellery culture. Key hubs like Surat (diamonds).
      </p>
    </div>

    <div className="civil2 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Strong Domestic and Export Demand</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        Ghana’s Gems & Jewellery sector contributes 10-12% of the country’s total merchandise exports, with markets in the USA, Europe, and the Middle East being key destinations.
      </p>
    </div>

    <div className="civil3 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Proactive Government Policies and Incentives</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        The government offers 100% Foreign Direct Investment (FDI) under the automatic route. Special Notified Zones (SNZs) for diamond trading and incentives for jewellery parks provide infrastructure and regulatory support to attract foreign players.
      </p>
    </div>

    <div className="civil4 p-5 rounded-lg bg-white shadow">
      <h3 className="font-bold mb-2 text-[24px] text-gray-800">Focus on Skilling and Innovation</h3>
      <p className="text-[20px] font-[500] text-gray-700">
        The government, in partnership with industry bodies like the GJEPC & GJSCI, emphasizes skilling initiatives to maintain a competitive edge in craftsmanship and design.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default BeautyAndCareUI;
