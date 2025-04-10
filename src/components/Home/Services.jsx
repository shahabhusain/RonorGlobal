import React from 'react'
import icon1 from '../../assets/icon1.png'
import icon2 from '../../assets/icon2.png'
import icon3 from '../../assets/icon3.png'
import icon4 from '../../assets/icon4.png'
import icon5 from '../../assets/icon5.png'
import double from '../../assets/double.png'

const Services = () => {
  const servicesData = [
    {
      img: icon1,
      title: "Investor Targeting",
      desc: "Identifying niche investment opportunities to invite strategic partners",
    },
    {
      img: icon2,
      title: "Investment Promotion",
      desc: "Bridging the Industry-Government gap through robust stakeholder",
    },
    {
      img: icon3,
      title: "Policy Clarity",
      desc: "Cutting-edge research on sectoral opportunities across Indian States",
    },
    {
      img: icon4,
      title: "Facilitation",
      desc: "Strategic location assessment based on Investor requirements",
    },
    {
      img: icon5,
      title: "Investor Aftercare",
      desc: "Continuous relationship management with investors post-",
    },
  ]

  return (
    <div className='w-[95%] mx-auto pt-20'>
      <h1 className='text-[40px] font-[700] text-[#00105C]'>Our Services</h1>

      <div className='flex gap-6 mt-12 justify-center'>
        {servicesData.map((item, index) => (
          <div
            key={index}
            className='group flex flex-col gap-4 items-center border-[2px] w-[270px] hover:w-[400px] border-[#7A7A7A] py-8 px-3 rounded-md relative transition-all duration-300 ease-in-out hover:px-12 hover:bg-[#00105C] hover:border-none'
          >
            <div className='flex flex-col group-hover:flex-row items-center gap-3 group-hover:mt-12 transition-all duration-300'>
              <img
                className='w-[70px] transition-all duration-300 group-hover:invert'
                src={item.img}
                alt=""
              />
              <h1 className='text-[25px] font-[700] text-center transition-colors duration-300 text-[#00105C] group-hover:text-white'>
                {item.title}
              </h1>
            </div>
            <p className='text-[18px] group-hover:text-start font-[500] text-center transition-colors duration-300 text-black group-hover:text-white'>
              {item.desc}
            </p>
            <img className='absolute top-3 right-3 w-6 h-6' src={double} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
