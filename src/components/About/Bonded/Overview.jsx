import React from 'react'
import main from '../../../assets/About/main1.png'
import box1 from '../../../assets/About/box1.png'
import box2 from '../../../assets/About/box2.png'
const Overview = () => {
  return (
        <div className='w-[95%] mx-auto'>
              <div className=' bg-[#0C1644] md:p-20 p-5 rounded-2xl mt-20 gap-12 flex flex-col-reverse md:flex-row items-center justify-between '>
             <div className=' flex flex-col gap-5 md:w-[60%]'>
             <h1 className=' text-white xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800]'>Overview</h1>
        <p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500] text-white'>For any queries, concerns or the nedd for further clarification this scheme,
        please write your queries to <span className=' text-red-500'>lc.setion18@gov.in</span> and <span className=' text-red-500'>uslc-cbec@gov.in</span>.</p>
        <p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[800] text-white'>Ghana allows manufacturing and other operations in a bonded 
        manufacturing facility.</p>
        <p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500] text-white'>With the Government's continuous efforts to promote Ghana as the manufacturing
hub globally and the commitment towards ease of doing business, another initi-
ative in this direction by the Board of Indirect Taxes (CBIC) is allowing import of raw 
material and capital goods without payment of duty for manufacturing and other
operations in a bonded manufacturing facility.</p>
<p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500] text-white'>When the raw material or capital goods are imported, the import duty in them id deferred. 
If these imported inputs are utilised for exports, the deferred duty is exempted. Only when 
the finished goods are cleared to the domestic market, import duty to be paid on the im-
ported raw material used in the production. Import duty on capital goods is to be paid if
and when the capital goods are cleared to the domestic market.</p>
             </div>
             <img className=' md:w-[40%]' src={main} alt="" />
    </div>
    <div className=' flex items-center justify-between mt-20'>
        <img className=' w-[45%]' src={box1} alt="" />
        <img className=' w-[45%]' src={box2} alt="" />
    </div>
        </div>
  )
}

export default Overview