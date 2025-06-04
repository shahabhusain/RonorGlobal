import React from 'react'
import invest from '../../assets/invest.png'

const Invest = () => {
  return (
    <div className='w-full mt-20 flex flex-col lg:flex-row'>
      {/* Left Section */}
      <div className='bg-[#00105C] px-4 md:px-6 pt-6 w-full lg:w-[60%]'>
        <div className='flex flex-col lg:flex-row items-center gap-6'>
          <div className='text-center lg:text-left'>
            <h1 className='text-[24px] md:text-[29px] lg:text-[35px] xl:text-[42px] font-[700] text-white'>
              <span className='font-[500]'>Invest and Build </span>
              Your Business in GHANA
            </h1>
            <button className='bg-red-500 text-white py-2 px-4 md:py-3 md:px-5 text-[14px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-semibold rounded-md mt-6'>
              Know More
            </button>
          </div>
          <img
            className='w-[180px] md:w-[250px] lg:w-[300px] xl:w-[400px]'
            src={invest}
            alt="invest"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className='border-t-4 lg:border-t-0 lg:border-l-4 border-[#7A7A7A] w-full lg:w-[40%] p-4'>
        <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[700] text-[#00105C] mb-4'>
          Latest News
        </h1>

        <div className='w-full h-[250px] xl:h-[200px] overflow-y-auto scrollbar-custom pr-2'>
          {Array(4).fill(0).map((_, i) => (
            <div key={i} className='border-b-[2px] border-black pb-4 mt-4'>
              <h2 className='text-[14px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-[500] text-black'>
                Swedish home furnishing retailer, IKEA, marks strategic e-commerce foray in Ghana
              </h2>
              <button className='flex items-center gap-2 mt-2 text-sm'>
                28-5-2025 <span className='text-red-500 underline'>Know more</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Invest
