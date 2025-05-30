import React, { useState } from 'react';

export default function Collaborate() {
  const [formData, setFormData] = useState({
    collaboration: '',
    companyName: '',
    websiteLink: '',
    odopProducts: '',
    state: '',
    district: '',
    spocName: '',
    spocPhone: '',
    spocEmail: '',
    catalogueLink: '',
    captcha: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    setFormData(prev => ({
      ...prev,
      collaboration: e.target.value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add form validation and submission logic here
  };

  return (
        <div className=' mt-20'>
            <div className=' bggg4'>
               <h1 className='text-[42px] font-[700] text-white pt-40 pl-6'>Collaborate with ODOP!</h1>
            </div>
            <h1 className=' text-center bg-[#0C1644] py-3 px-5 text-[42px] font-[700] text-white mt-12'>Collaborate with ODOP</h1>
              <div className="w-[95%] mx-auto p-6 mt-20 min-h-screen">
      {/* Header Information */}
      <div className="bg-[#0C1644] text-white p-12 rounded-lg mb-6">
        <p className="text-[20px] font-[500] leading-relaxed">
   The One District One Product (ODOP) Initiative is aimed at manifesting the vision of the Hon'ble Prime Minister of Ghana to foster balanced regional development across all districts of the country. The idea is to select, brand, and promote one product from each district of the country through various interventions. To explore opportunities for collaborating with ODOP, please fill the form below. A team member will reach out to you shortly for more details !
        </p>
        <p className="text-[20px] font-[500] mt-3">
          For queries & feedback, please reach out to us at <span className="text-red-500">dipp-odop@gov.in</span> or <span className="text-red-500">+91-11-23063204</span>
        </p>
      </div>

      {/* Form Container */}
      <div className="space-y-6 mt-20">
        {/* Question 1 - Collaboration Type */}
        <div>
          <h3 className="text-[#0C1644] font-bold text-[36px] mb-3">1. How would you wish to collaborate with ODOP Initiative?</h3>
          <div className="space-y-2">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="collaboration" 
                value="gem-onboarding"
                checked={formData.collaboration === 'gem-onboarding'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-[#7B7878] text-[25px] font-semibold">GeM onboarding</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="collaboration" 
                value="supply-odop-products"
                checked={formData.collaboration === 'supply-odop-products'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-[#7B7878] text-[25px] font-semibold">Supply ODOP products (Missions abroad / Ministries/ Corporate gifting, etc.)</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="collaboration" 
                value="brand-placement"
                checked={formData.collaboration === 'brand-placement'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-[#7B7878] text-[25px] font-semibold">Brand placement/ collaboration</span>
            </label>
            <label className="flex items-center space-x-3 cursor-pointer">
              <input 
                type="radio" 
                name="collaboration" 
                value="odop-procurement"
                checked={formData.collaboration === 'odop-procurement'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-[#7B7878] text-[25px] font-semibold">ODOP procurement</span>
            </label>
          </div>
        </div>

        {/* Question 2 - Company Name */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            2. Company name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="Enter company name"
          />
        </div>

        {/* Question 3 - Website Link */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            3. Website link<span className="text-red-500">*</span>
          </label>
          <input
            type="url"
            name="websiteLink"
            value={formData.websiteLink}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="https://example.com"
          />
        </div>

        {/* Question 4 - ODOP Products */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            4. ODOP products the company is dealing in<span className="text-red-500">*</span>
          </label>
          <textarea
            name="odopProducts"
            value={formData.odopProducts}
            onChange={handleInputChange}
            rows="4"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white resize-vertical"
            placeholder="Describe the ODOP products your company deals in..."
          />
        </div>

        {/* Question 5 - State/UT */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            5. State/ UT<span className="text-red-500">*</span>
          </label>
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
          >
            <option value="">-State-</option>
            <option value="andhra-pradesh">Andhra Pradesh</option>
            <option value="arunachal-pradesh">Arunachal Pradesh</option>
            <option value="assam">Assam</option>
            <option value="bihar">Bihar</option>
            <option value="chhattisgarh">Chhattisgarh</option>
            <option value="goa">Goa</option>
            <option value="gujarat">Gujarat</option>
            <option value="haryana">Haryana</option>
            <option value="himachal-pradesh">Himachal Pradesh</option>
            <option value="jharkhand">Jharkhand</option>
            <option value="karnataka">Karnataka</option>
            <option value="kerala">Kerala</option>
            <option value="madhya-pradesh">Madhya Pradesh</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="manipur">Manipur</option>
            <option value="meghalaya">Meghalaya</option>
            <option value="mizoram">Mizoram</option>
            <option value="nagaland">Nagaland</option>
            <option value="odisha">Odisha</option>
            <option value="punjab">Punjab</option>
            <option value="rajasthan">Rajasthan</option>
            <option value="sikkim">Sikkim</option>
            <option value="tamil-nadu">Tamil Nadu</option>
            <option value="telangana">Telangana</option>
            <option value="tripura">Tripura</option>
            <option value="uttar-pradesh">Uttar Pradesh</option>
            <option value="uttarakhand">Uttarakhand</option>
            <option value="west-bengal">West Bengal</option>
            <option value="delhi">Delhi</option>
            <option value="chandigarh">Chandigarh</option>
            <option value="puducherry">Puducherry</option>
            <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
            <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu</option>
            <option value="lakshadweep">Lakshadweep</option>
            <option value="ladakh">Ladakh</option>
            <option value="jammu-kashmir">Jammu and Kashmir</option>
          </select>
        </div>

        {/* Question 6 - District */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            6. District<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="Enter district name"
          />
        </div>

        {/* Question 7 - SPOC Name */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            7. SPOC Name<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="spocName"
            value={formData.spocName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="Single Point of Contact Name"
          />
        </div>

        {/* Question 8 - SPOC Phone Number */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            8. SPOC Phone Number<span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="spocPhone"
            value={formData.spocPhone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="+91-XXXXXXXXXX"
          />
        </div>

        {/* Question 9 - SPOC Email ID */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            9. SPOC Email ID
          </label>
          <input
            type="email"
            name="spocEmail"
            value={formData.spocEmail}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="example@company.com"
          />
        </div>

        {/* Question 10 - Catalogue Link */}
        <div>
          <label className="block text-gray-800 font-medium mb-2">
            10. Link to your organization's catalogue (if any)
          </label>
          <input
            type="url"
            name="catalogueLink"
            value={formData.catalogueLink}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
            placeholder="https://catalogue.example.com"
          />
        </div>

        {/* CAPTCHA */}
        <div>
          <div className="flex items-center space-x-4 mb-3">
            <div className="bg-gray-200 border-2 border-gray-400 px-4 py-3 rounded-md">
              <span className="font-mono text-lg font-bold tracking-wider text-gray-800 select-none">
                6352V
              </span>
            </div>
            <input
              type="text"
              name="captcha"
              value={formData.captcha}
              onChange={handleInputChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              placeholder="Enter captcha"
            />
          </div>
          <p className="text-sm text-gray-600">Enter the characters shown in the image</p>
        </div>

       
      </div>
       {/* Submit Button */}
        <div className="pt-6 flex items-center justify-center">
          <button
            type="button"
            onClick={handleSubmit}
            className=" bg-red-600 text-white font-semibold py-3 px-6 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-200 shadow-sm"
          >
            Submit Application
          </button>
        </div>
    </div>
        </div>
  );
}