import { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    sector: '',
    country: '',
    message: '',
    captcha: '',
    agreeToPolicy: false
  });

  const [fileName, setFileName] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleSubmit = () => {
    console.log('Form Data:', formData);
    console.log('File:', fileName);
    // Handle form submission logic here
  };

  return (
    <div className="flex flex-col md:flex-row w-[95%] mx-auto p-4 gap-6 my-32">
      {/* Left side - Form */}
      <div className="w-full">
        <div className="bg-red-600 text-white font-[800] text-[38px] p-3 mb-12 inline-block">
          Query Form
        </div>
        
        <div className=' border-[1px] border-[#0000001b] bg-[#f8f8f8] p-10 rounded-2xl'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Last Name*</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Company*</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm mb-1">Sector*</label>
              <input
                type="text"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Country*</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-1">How may we assist you?*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2 h-32"
            ></textarea>
          </div>

          <div className="flex items-center mb-4">
            <button 
              type="button" 
              className="flex items-center text-blue-600 border border-gray-300 rounded py-2 px-3"
              onClick={() => document.getElementById('fileInput').click()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Attach File
            </button>
            <input
              id="fileInput"
              type="file"
              onChange={handleFileChange}
              className="hidden"
            />
            {fileName && <span className="ml-2 text-sm text-gray-600">{fileName}</span>}
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4 mb-4">
          <div className="flex items-start mb-4">
            <input
              type="checkbox"
              name="agreeToPolicy"
              id="agreeToPolicy"
              checked={formData.agreeToPolicy}
              onChange={handleChange}
              className="mt-1 mr-2"
            />
            <label htmlFor="agreeToPolicy" className="text-sm">
              By submitting this form, you agree to our <span className="text-blue-600 cursor-pointer">Privacy Policy*</span>
            </label>
          </div>
            <div className="flex-1">
              <input
                type="text"
                name="captcha"
                value={formData.captcha}
                onChange={handleChange}
                placeholder="Enter the characters shown in the image"
                className="w-full border border-gray-300 rounded p-2 text-sm"
              />
            </div>
          </div>

        

          <button
            onClick={handleSubmit}
            className="bg-red-600 text-white font-bold py-2 px-8 rounded"
          >
            SUBMIT
          </button>
        </div>
      </div>

      {/* Right side - Contact info */}
      <div className="w-full md:w-1/2 bg-[#f8f8f8] rounded-b-2xl">
        <div className="bg-blue-900 text-white p-2 rounded-t-lg mb-4">
          <div className="font-bold text-center py-2">MEET US</div>
        </div>

        <div className="mb-4 p-3">
          <div className="font-bold uppercase mb-2">Invest Ghana</div>
          <p className="text-sm mb-1">Vigan Bhavan Annexe,</p>
          <p className="text-sm">Maulana Azad Road</p>
        </div>

        <div className="flex flex-col gap-4 mb-6 p-3">
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Mail size={20} className="text-blue-800" />
            </div>
            <span className="text-sm">contact@investghana.com</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Phone size={20} className="text-blue-800" />
            </div>
            <span className="text-sm">+91-11-23048185</span>
          </div>
        </div>

      </div>
    </div>
  );
}