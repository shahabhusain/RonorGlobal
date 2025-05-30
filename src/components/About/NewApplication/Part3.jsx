import React, { useState } from 'react';

export default function Part3ApplicantDetails() {
  const [formData, setFormData] = useState({
    title: '',
    firstName: '',
    lastName: '',
    contactNumber: '',
    companyName: '',
    designation: '',
    email: '',
    location: '',
    declarationAgreement: false,
    undertakingAgreement: false,
       signatureFile: null,
    stampFile: null,
    date: '',
    place: '',
    captcha: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

   const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0] || null
    }));
  };

  return (
    <div className="w-[95%] mx-auto p-6 bg-white mt-20">
      {/* Part III Header */}
      <div className="mb-6">
        <h2 className="text-[40px] font-[800] text-center text-red-600 mb-6">
          Part III – Applicant Details
        </h2>
      </div>

      <div className="space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.1 Title<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.3 Last Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.5 Company Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.7 Applicant Email Id<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.2 First Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.4 Contact Number<span className="text-red-500">*</span> (Tel with STD code/mobile)
              </label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.6 Designation<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                1.8 Location<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Email Note */}
        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800 italic">
            <strong>Note:</strong> This Email ID is the most important one as all the details will be sent to this ID on submission.
          </p>
        </div>

           <div className=' bg-[#0C1644] p-12'>
              {/* Declaration */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-white mb-4">DECLARATION:</h3>
          <p className="text-sm font-medium text-white mb-3">I/We declare that:</p>
          
          <ul className="list-disc pl-5 space-y-2 text-sm text-white mb-6">
            <li>I/We are a registered or incorporated entity in Ghana.</li>
            <li>I/We undertake to comply with such terms & conditions as may be specified by the Principal Commissioner of Customs or the Commissioner of Customs.</li>
            <li>I/We have not been declared unbroken or bankrupt by a court or tribunal.</li>
            <li>I/We have not been convicted for an offence under any law.</li>
            <li>There is no bankruptcy or criminal proceedings pending against me / us.</li>
            <li>I/We have neither been penalized or convicted nor are being prosecuted for an offence under the Customs Act, 1982 or Central Dates Act, 1944 or Finance Act, 1984 or Central Goods and Services Tax Act, 2017 or Integrated Goods and Services Tax Act, 2017 or Goods and Services Tax (Compensation to Stategic) Act, 2017.</li>
            <li>We hereby declare that the information given in the application form is true, correct and complete in every respect and that I am authorised to sign on behalf of the Licenses I further undertake that if any particulars declared by me/us are proved to be false, the licence granted to me/us shall be liable to be cancelled and I/we shall be liable for action under Customs Act, 1982.</li>
          </ul>

        </div>

        {/* Undertaking */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-white mb-4">UNDERTAKING:</h3>
          <p className="text-sm font-medium text-white mb-3">I/We undertake to:</p>
          
          <ul className="list-disc pl-5 space-y-2 text-sm text-white mb-6">
            <li>Maintain accounts of receipt and removal of goods in digital form in such format as may be specified and furnish the same to the bond officer on monthly basis digitally.</li>
            <li>Execute a bond in such format as may be specified.</li>
            <li>Inform the input–output norms, whenever considered necessary for raw materials and the final products and to inform the revised input–output norms in case of change therein.</li>
            <li>Comply with such terms & conditions as may be specified by the Principal Commissioner of Customs or the Commissioner of Customs.</li>
          </ul>

        </div>
           </div>
              <div className="mt-8 border-t border-gray-200 pt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">SIGNATURE AND STAMP</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Signature */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SIGNATURE OF THE APPLICANT/AUTHORISED SIGNATORY*
            </label>
            <div className="flex items-center">
              <div className={`flex-1 px-4 ${formData.signatureFile ? "py-3.5" : "py-6"} bg-gray-100 border border-gray-300 rounded-l-md text-gray-500 text-sm`}>
                {formData.signatureFile ? formData.signatureFile.name : ''}
              </div>
              <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="signatureFile"
                  onChange={handleFileChange}
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              (Format: png, jpg, jpeg; Max. File Size: 5 MB)
            </p>
          </div>

          {/* Stamp */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              STAMP*
            </label>
            <div className="flex items-center">
              <div className={`flex-1 px-4 ${formData.stampFile ? "py-3.5" : "py-6"} bg-gray-100 border border-gray-300 rounded-l-md text-gray-500 text-sm`}>
                {formData.stampFile ? formData.stampFile.name : ''}
              </div>
              <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="stampFile"
                  onChange={handleFileChange}
                  accept=".png,.jpg,.jpeg"
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              (Format: png, jpg, jpeg; Max. File Size: 5 MB)
            </p>
          </div>
        </div>

        {/* Date and Place */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date*
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Place*
            </label>
            <input
              type="text"
              name="place"
              value={formData.place}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* CAPTCHA */}
        <div className="mt-6">
          <div className="mb-2">
            <p className="text-sm font-medium text-gray-700">10/03/2025 10:05:44</p>
            <p className="text-xl font-bold tracking-widest">6 3 $ 2 V</p>
          </div>

          <label className="block text-sm font-medium text-gray-700 mb-2">
            Enter the characters shown in the image.*
          </label>
          <input
            type="text"
            name="captcha"
            value={formData.captcha}
            onChange={handleInputChange}
            className="w-full md:w-1/2 px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="mt-8">
          <button
            type="button"
            className="w-full md:w-auto px-8 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          >
            Submit
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}