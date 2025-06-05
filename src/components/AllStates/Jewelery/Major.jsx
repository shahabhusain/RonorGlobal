import React from 'react'; 
import img1 from '../../../assets/AllStates/img1.png'
import img2 from '../../../assets/AllStates/img2.png'
import img3 from '../../../assets/AllStates/img3.png'
import img4 from '../../../assets/AllStates/img4.png'
import img5 from '../../../assets/AllStates/img5.png'
const PolicyArchiveAndSuccessStories = () => {

 

  return (
    <div className="">

      {/* Policy Cards Section */}
      <div className=" mt-20">
           <div className="bg-red-600 text-white text-center py-3 mb-6">
          <h2 className="xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px]   font-bold">Incentives & Schemes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-3 gap-4 mb-6 w-[95%] mx-auto">
          {/* Policy Card 1 */}
          <div className="bg-[#00105C] text-white   pt-4 rounded-lg relative">
            <div className="md:text-[24px] text-[19px]  font-medium px-4">
              Export Promotion Capital
Goods (EPCG) scheme
            </div>
            <button className=' md:text-[37px] text-[25px] font-[700] bg-red-500 text-white py-3 px-5 w-full mt-6'>Download</button>
          </div>

          {/* Policy Card 2 */}
          <div className="bg-[#00105C] text-white  pt-4 rounded-lg relative">
            <div className="md:text-[24px] text-[19px]  font-medium px-4">
              Ghana’s Forest & Wood
Certification Scheme
            </div>
            <button className=' md:text-[37px] text-[25px] font-[700] bg-red-500 text-white py-3 px-5 w-full mt-6'>Download</button>
          </div>

          {/* Policy Card 3 */}
          <div className="bg-[#00105C]  text-white pt-4 rounded-lg relative">
            <div className="md:text-[24px] text-[19px]  font-medium px-4">
             Duty Drawback Scheme
            </div>
            <button className=' md:text-[37px] text-[25px] font-[700] bg-red-500 text-white py-3 px-5 w-full mt-[3.8rem]'>Download</button>
          </div>
        </div>

     


      </div>
    </div>
  );
};

export default PolicyArchiveAndSuccessStories;