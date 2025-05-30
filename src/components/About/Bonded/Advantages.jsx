import React from 'react'

const Advantages = () => {
      const servicesData = [
        {
          title: "Investor Targeting",
          desc: "Identifying niche investment opportunities to invite strategic partners",
        },
        {
          title: "Investment Promotion",
          desc: "Bridging the Industry-Government gap through robust stakeholder",
        },
        {
          title: "Policy Clarity",
          desc: "Cutting-edge research on sectoral opportunities across Indian States",
        },
        {
          title: "Facilitation",
          desc: "Strategic location assessment based on Investor requirements",
        },
        {
          title: "Investor Aftercare",
          desc: "Continuous relationship management with investors post-",
        },
      ]
  return (
    <div className=' w-[95%] mx-auto mt-20'>
        <h1 className=' text-red-500 text-[40px] font-[800]'>Advantages of  Bonded Warehousing</h1>
        <h2 className=' text-[#00105C] text-[40px] font-[800]'>Highlights</h2>

         <div className='flex gap-6 mt-12 justify-center'>
                {servicesData.map((item, index) => (
                  <div
                    key={index}
                    className='group flex flex-col gap-4 items-center border-[2px] w-[270px] h-[300px] bg-[#BDC6F2] hover:w-[400px] border-[#7A7A7A] py-8 px-3 rounded-md relative transition-all duration-300 ease-in-out hover:px-12 hover:bg-[#00105C] hover:border-none'
                  >
                    <div className='flex flex-col group-hover:flex-row items-center gap-3 group-hover:mt-12 transition-all duration-300'>
                      <h1 className='text-[25px] flex items-center justify-center font-[700] text-center transition-colors duration-300 text-[#00105C] group-hover:text-white'>
                        {item.title}
                      </h1>
                    </div>
                    <p className='text-[18px] group-hover:text-center font-[500] hidden group-hover:block text-center transition-colors duration-300 text-black group-hover:text-white'>
                      {item.desc}
                    </p>
                  
                  </div>
                ))}
              </div>
    </div>
  )
}

export default Advantages