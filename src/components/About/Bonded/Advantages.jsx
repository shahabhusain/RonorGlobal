import React from 'react';

const Advantages = () => {
  const servicesData = [
    {
      title: "Investor Targeting",
      desc: "Identifying niche investment opportunities to invite strategic partners",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Investment Promotion",
      desc: "Bridging the Industry-Government gap through robust stakeholder",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Policy Clarity",
      desc: "Cutting-edge research on sectoral opportunities across ghana States",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
    {
      title: "Facilitation",
      desc: "Strategic location assessment based on Investor requirements",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
    },
    {
      title: "Investor Aftercare",
      desc: "Continuous relationship management with investors post-",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  return (
    <div className='w-[95%] mx-auto mt-20 mb-20'>
      <h1 className='text-red-500 xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800]'>Advantages of Bonded Warehousing</h1>
      <h2 className='text-[#00105C] xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] mb-4'>Highlights</h2>
      <p className='text-gray-600 mb-12 max-w-2xl'>Discover the key benefits that make our bonded warehousing services stand out from the competition.</p>

      {/* Desktop View - Flex Grid */}
      <div className='hidden md:flex gap-6 mt-12 justify-center'>
        {servicesData.map((item, index) => (
          <div
            key={index}
            className='group flex flex-col gap-4 items-center w-[270px] h-[350px] hover:w-[400px] py-8 px-3 rounded-xl relative overflow-hidden transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl'
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Default state - semi-transparent overlay */}
            <div className='absolute inset-0 bg-[#00105C] opacity-30 transition-opacity duration-500'></div>
            
            {/* Hover state - darker overlay */}
            <div className='absolute inset-0 bg-[#00105C] opacity-0 group-hover:opacity-70 transition-opacity duration-500'></div>
            
            <div className='relative z-10 flex flex-col items-center gap-3 transition-all duration-300 group-hover:mt-12'>
              <h1 className='md:text-[25px] text-[16px] flex items-center justify-center font-[700] text-center transition-colors duration-300 text-white'>
                {item.title}
              </h1>
              <div className='w-12 h-1 bg-red-500 group-hover:bg-white transition-colors duration-300'></div>
            </div>
            <p className='relative z-10 md:text-[18px] text-[15px] font-[500] hidden group-hover:block text-center transition-all duration-300 text-white opacity-0 group-hover:opacity-100 px-4'>
              {item.desc}
            </p>
            <div className='absolute bottom-0 left-0 right-0 h-1 bg-red-500 group-hover:h-2 transition-all duration-300'></div>
          </div>
        ))}
      </div>

      {/* Mobile View - Slider */}
      <div className='md:hidden mt-12 overflow-x-auto pb-6'>
        <div className='flex space-x-4' style={{ minWidth: `${servicesData.length * 280}px` }}>
          {servicesData.map((item, index) => (
            <div
              key={index}
              className='flex flex-col gap-4 items-center w-[270px] h-[350px] py-8 px-3 rounded-xl relative overflow-hidden shadow-lg'
              style={{
                backgroundImage: `linear-gradient(rgba(0, 16, 92, 0.5), rgba(0, 16, 92, 0.5)), url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className='relative z-10 flex flex-col items-center gap-3'>
                <h1 className='text-[25px] flex items-center justify-center font-[700] text-center text-white'>
                  {item.title}
                </h1>
                <div className='w-12 h-1 bg-red-500'></div>
              </div>
              <p className='relative z-10 text-[18px] text-center font-[500] text-white mt-4 px-4'>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Advantages;