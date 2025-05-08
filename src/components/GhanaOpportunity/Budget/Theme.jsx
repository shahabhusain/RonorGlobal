import React from 'react';

const BudgetTheme = () => {
  return (
    <div className=" px-12 mt-20">
      <h2 className="text-[30px] font-bold text-white bg-red-600 px-4 py-2 inline-block rounded">
        Budget theme
      </h2>

      <div className="mt-6 space-y-6 text-gray-800 text-base">
        <div>
          <p className="  text-[#00105C] text-[20px] font-[600]">
            1. To realize ‘Sabka Vikas’, stimulating balanced growth of all regions.
          </p>
        </div>

        <div>
          <p className="  text-[#00105C] text-[20px] font-[600]">2. Viksit Bharat, encompasses:</p>
          <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li className='text-[20px]'>zero–poverty;</li>
            <li className='text-[20px]'>hundred per cent good quality school education;</li>
            <li className='text-[20px]'>access to high-quality, affordable, and comprehensive healthcare;</li>
            <li className='text-[20px]'>hundred per cent skilled labour with meaningful employment;</li>
            <li className='text-[20px]'>seventy per cent women in economic activities; and</li>
            <li className='text-[20px]'>farmers making our country the ‘food basket of the world’.</li>
          </ul>
        </div>

        <div>
          <p className="  text-[#00105C] text-[20px] font-[600]">
            3. The proposed development measures span ten broad areas focusing on Garib, Youth, Annadata and Nari.
          </p>
          <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li className='text-[20px]'>Spurring Agricultural Growth and Productivity;</li>
            <li className='text-[20px]'>Building Rural Prosperity and Resilience;</li>
            <li className='text-[20px]'>Taking Everyone Together on an Inclusive Growth path;</li>
            <li className='text-[20px]'>Boosting Manufacturing and Furthering Make in India;</li>
            <li className='text-[20px]'>Supporting MSMEs;</li>
            <li className='text-[20px]'>Enabling Employment–led Development;</li>
            <li className='text-[20px]'>Investing in people, economy and innovation;</li>
            <li className='text-[20px]'>Securing Energy Supplies;</li>
            <li className='text-[20px]'>Promoting Exports; and</li>
            <li className='text-[20px]'>Nurturing Innovation.</li>
          </ul>
        </div>

        <div>
          <p className="  text-[#00105C] text-[20px] font-[600]">4. For this journey of development:</p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
            <li className='text-[20px]'>Four powerful engines: Agriculture, MSME, Investment, and Exports</li>
            <li className='text-[20px]'>Fuel: Reforms</li>
            <li className='text-[20px]'>Guiding spirit: Inclusivity</li>
            <li className='text-[20px]'>Destination: Viksit Bharat</li>
          </ul>
        </div>

        <div>
          <p className="  text-[#00105C] text-[20px] font-[600]">
            5. This Budget aims to initiate transformative reforms across following six domains:
          </p>
          <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
            <li className='text-[20px]'>Taxation;</li>
            <li className='text-[20px]'>Power Sector;</li>
            <li className='text-[20px]'>Urban Development;</li>
            <li className='text-[20px]'>Mining;</li>
            <li className='text-[20px]'>Financial Sector; and</li>
            <li className='text-[20px]'>Regulatory Reforms.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BudgetTheme;
