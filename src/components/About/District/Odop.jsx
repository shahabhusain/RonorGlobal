import React from 'react';

export default function GovernmentProcurementUI() {

  return (
    <div className=" mt-20">
       <div className="bg-[#0C1644] text-white p-4 my-20 text-center">
          <h2 className="text-[42px] font-bold">ODOP Repository</h2>
        </div>
      {/* OOCF Product Information Section */}
      <div className="mb-8  w-[95%] mx-auto ">
        <div className="bg-[#0029E8] text-white p-3 rounded-t-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className=" text-[24px] font-semibold">Document</div>
            <div className=" text-[24px] font-semibold">Link</div>
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-b-lg">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className=' text-[24px] font-[500]'>OOCF Product List</div>
              <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">Click here</a></div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div  className=' text-[24px] font-[500]'>OOCF Seller Directory</div>
              <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500] ">Click here</a></div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-start">
              <div  className=' text-[24px] font-[500]'>OOCF Catalogue</div>
              <div className="space-y-3">
                <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">Volume 1</a></div>
                <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">Volume 2</a></div>
                <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">Volume 3</a></div>
                <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">Volume 4</a></div>
                <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">AllCatalogue</a></div>
                <div><a href="#" className="text-[#0029E8] underline hover:text-blue-800 text-[20px] font-[500]">View All videos</a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}