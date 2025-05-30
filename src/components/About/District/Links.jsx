import React from 'react'

const Links = () => {
  return (
    <div>
         <div className="bg-[#0C1644] text-white p-4 text-center my-20">
          <h2 className="text-[42px] font-bold">Important Links</h2>
        </div>
        <div className='w-[95%] mx-auto'>
     
        
        <div className="bg-[#0029E8] text-white p-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="font-semibold text-[24px]">Document</div>
            <div className="font-semibold text-[24px]">Link</div>
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-b-lg">
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className=' text-[20px] font-[500]'>Schemes of Government of India relevant to the OOCF Initiative</div>
              <div><a href="#" className="text-[#0029E8] text-[20px] font-[500] underline hover:text-blue-800">Click here</a></div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className=' text-[20px] font-[500]'>Guidelines for Permitting the Use of OOCF Logo for Retailers</div>
              <div><a href="#" className="text-[#0029E8] text-[20px] font-[500] underline hover:text-blue-800">Click here</a></div>
            </div>
            <div className="grid grid-cols-2 gap-4 items-center">
              <div className=' text-[20px] font-[500]'>Collaborate with OOCF</div>
              <div><a href="#" className="text-[#0029E8] text-[20px] font-[500] underline hover:text-blue-800">Click here</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links