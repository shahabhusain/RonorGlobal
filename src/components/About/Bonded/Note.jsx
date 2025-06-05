import React from 'react'
import main from '../../../assets/About/main2.png'
const Note = () => {
  return (
    <div>
             <div className=' bg-[#0C1644] md:p-20 p-4 rounded-2xl mt-20 gap-12 flex flex-col-reverse md:flex-row items-center justify-between '>
                     <div className=' flex flex-col gap-5 md:w-[60%]'>
                     <h1 className=' text-red-500 xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800]'>Note</h1>
                <p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500] text-white'>When the raw material or capital goods are imported, the import
duty on them is deferred. If these imported inputs are utilized for
exports, the deferred duty is exempted. Only when the finished 
goods are cleared to the domestic market, import duty is to be 
paid on the imported raw material used in the production. Import
duty on capital goods are cleared to the domestic market.</p>
        <p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500] text-white'>When finished goods are exported, in addition to the waiver of 
BCD+IGST on the imported goods used, the GST on the finished
goods can be zero-rated.</p>
<h1 className=' text-red-500 md:text-[40px] text-[25px] font-[800]'>Recent Announcement</h1>
<p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500] text-white'>Government Notice relating to <span className=' text-red-500'>CAAR Customs Authority for Advance Rulings</span></p>
                     </div>
                     <img className=' md:w-[40%]' src={main} alt="" />
            </div>
    </div>
  )
}

export default Note