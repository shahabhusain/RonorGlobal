import React from 'react';
import blog from '../../assets/Career/blog1.png'
import uni from '../../assets/Career/uni.png'
const BlogDel = () => {
  return (
    <div className="min-h-screen w-[95%] mx-auto bg-gray-50">
      {/* Hero Section */}
      <div className="relative ">
        <div className=" px-4 py-8">
          <div className=" flex flex-col md:flex-row">
          
     <img className=' md:w-[70%]' src={blog} alt="" />

            {/* Right - CTA Card */}
            <div className="lg:col-span-1 md:w-[30%] mt-5 md:mt-0 ">
              <div className="bg-white rounded-lg  shadow-lg p-6 max-w-sm mx-auto">
                <div className="text-center mb-4 flex flex-col items-center justify-center">
                     <p className="text-sm text-gray-600 leading-relaxed">
                    We are Ghana national Investment 
                    facilitation agency.
                  </p>
                    <img src={uni} alt="" />
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    For further queries on this subject, Please 
                    Get In Touch with us at ghana India
                  </p>
                </div>

                <button className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-4 rounded-full transition-colors">
                  RAISE YOUR QUERY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className=" px-4 py-8">
        {/* Article Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed mb-4">
            From Florence Nightingale to Amrita Saarani, Sunghri Naidu to Rani Rukmani, Indira Gandhi to Sushma Swaraj, women have long been at the heart of 
            economic progress and not just contributors. Today, they are leaders, innovators and changemakers who drive transformation, lead enterprises and 
            shape the future across industries.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            Simply put, a new look at the and more recent examples of Priya Agarwal Hebbar, Arundhati Bhattacharya, Deepjyoti Ghosh, Victoria D'Souza, Gul 
            Panag, Dr Premlaji Seetly and Vineeta Singh, these new-age trailblazers are making their presence felt with each unit every more they take on the 
            field and international stages.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            From technology to investments, renewable energy to automotive to healthcare, their growing presence in leadership, research and 
            entrepreneurship is accelerating progress, fostering inclusivity and creating a sustainable and prosperous future. Their contributions are not only 
            breaking barriers but also setting new benchmarks for innovation, investment and economic growth.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This blog highlights the impact of women across diverse industries, showcasing how they are redefining success and creating opportunities for the 
            next generation.
          </p>
        </div>

        {/* India's Focus Sectors Header */}
        <div className="mb-6">
          <div className="bg-red-600 text-white px-4 py-3 rounded-t-lg inline-block">
            <h2 className="text-lg font-bold">INDIA'S FOCUS SECTORS</h2>
          </div>
        </div>

        {/* Semiconductor Section */}
        <div className="mb-8">
          <div className="border-l-4 border-blue-500 pl-4 mb-4">
            <h3 className="text-2xl font-bold text-blue-700 mb-2">Semiconductor</h3>
          </div>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            With semiconductors being one of the emerging growth areas in India, the sector's workforce composition is also undergoing a sea change. 
            Teamresearch pegs the tech workforce in India at 5.4 million, with 1.84 million women workers.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            In the semiconductor industry, women constitute 28% of the workforce. Leading companies like Micron and NXP are investing significantly in training 
            women engineers. Specifically, women in semiconductor manufacturing can expect strong career advancement opportunities.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Through its 'Women in Tech' programme, NXP trained over 500 female engineering students in VLSI design concepts. At Micron, women comprise 
            28% of its local ACDC employed and Gujarat teams, with IT having the largest share at 30%. Sharmila Dhar, Country Head, began 
            Organisation-Centre activities following this development, data science technology engineering also saw healthy representation.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Another notable intervention in this sector has been by Foxconn, the contract manufacturer for Apple Inc. in India. The company has invested $230 
            million to set up a housing complex for its women employees in Sriperumbudur in Tamil Nadu to accommodate up to 18,750 employees.
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            According to an Accenture report, the median representation of women in the global semiconductor industry is between 20% and 25%. Women 
            comprise nearly a fourth of India's chip design and engineering workforce.
          </p>

          <p className="text-gray-700 leading-relaxed">
            This trend is expected to continue, with projections indicating that women's share could rise to ~30% by 2027. Research has shown that increased 
            representation of women in the workforce drives better business outcomes, including improved innovation and decision-making.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogDel;