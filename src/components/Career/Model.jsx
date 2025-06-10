import React from 'react';
import icon from '../../assets/Career/model.png'
const Model = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl overflow-y-auto max-h-[90vh] w-[90%] lg:w-[80%] xl:w-[70%] shadow-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 text-xl"
        >
          ✖
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left image side */}
          <div className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-xl">
            <h1 className="text-xl font-bold text-[#00105C] mb-4">Junior Specialist</h1>
            <p className="text-gray-700">5–6 Years | Delhi</p>
            <img
              src={icon}
              alt="Illustration"
              className="w-3/4 mt-8"
            />
          </div>

          {/* Form section */}
          <form className="bg-[#eaf4fc] p-6 rounded-xl space-y-4">
            <h2 className="text-[#00105C] font-semibold">*All fields are mandatory</h2>

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name *" className="input" />
              <input type="text" placeholder="Mobile Number *" className="input" />
              <input type="email" placeholder="Email *" className="input" />
              <input type="text" placeholder="Current Location *" className="input" />
            </div>

            {/* Motivation */}
            <textarea
              rows="3"
              placeholder="Why do you want to work at Invest H=Ghana? *"
              className="input resize-none"
              maxLength={200}
            ></textarea>
            <div className="text-right text-sm text-gray-500">You have 200/200 characters remaining</div>

            {/* Experience Details */}
            <h3 className="font-semibold text-[#00105C] mt-4">Experience Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Total Work Experience *" className="input" />
              <input type="text" placeholder="Current Employer Name *" className="input" />
              <input type="date" placeholder="Start Date *" className="input" />
              <input type="date" placeholder="End Date *" className="input" />
              <label className="flex items-center space-x-2 col-span-full">
                <input type="checkbox" />
                <span>Currently Working</span>
              </label>
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block font-medium text-[#00105C] mb-1">Upload your resume *</label>
              <input type="file" className="input" />
            </div>

            {/* Dropdowns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="input">
                <option>-Select option-</option>
                <option>Company Website</option>
                <option>Social Media</option>
              </select>
              <select className="input">
                <option>-Select option-</option>
                <option>Immediately</option>
                <option>Within 1 month</option>
              </select>
            </div>

            <button type="submit" className="bg-[#00105C] text-white px-6 py-2 rounded-lg mt-4">Submit Application</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
