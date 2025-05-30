import React, { useState } from 'react';

export default function BusinessDetailsForm() {
  const [formData, setFormData] = useState({
    applicantName: '',
    panNumber: '',
    gstNumber: '',
    importerExporterCode: '',
    businessConstitution: '',
    otherConstitution: '',
    certificationFile: null,
    memorandumFile: null,
    articleFile: null,
    registeredOfficeAddress: '',
    contactNumber: '',
    businessEmail: '',
    fax: '',
    bankName: '',
    branchName: '',
    accountNumber: '',
    proprietorDetails: [
      {
        name: '',
        designation: '',
        address: '',
        idProofFile: null
      }
    ],
    authorisedSignatoryName: '',
    authorisedSignatoryDesignation: '',
    aadharCardFile: null,
    hasManufacturingFacility: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Clear other specification if not "Others" is selected
      ...(value !== 'others' && { otherConstitution: '' })
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0] || null
    }));
  };

  const handleProprietorChange = (index, field, value) => {
    const updatedProprietors = [...formData.proprietorDetails];
    updatedProprietors[index] = {
      ...updatedProprietors[index],
      [field]: value
    };
    setFormData(prev => ({
      ...prev,
      proprietorDetails: updatedProprietors
    }));
  };

  const handleProprietorFileChange = (index, file) => {
    const updatedProprietors = [...formData.proprietorDetails];
    updatedProprietors[index] = {
      ...updatedProprietors[index],
      idProofFile: file
    };
    setFormData(prev => ({
      ...prev,
      proprietorDetails: updatedProprietors
    }));
  };

  const addProprietor = () => {
    setFormData(prev => ({
      ...prev,
      proprietorDetails: [
        ...prev.proprietorDetails,
        {
          name: '',
          designation: '',
          address: '',
          idProofFile: null
        }
      ]
    }));
  };

  const removeProprietor = (index) => {
    if (formData.proprietorDetails.length > 1) {
      const updatedProprietors = formData.proprietorDetails.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        proprietorDetails: updatedProprietors
      }));
    }
  };

  return (
    <div className="w-[95%] mx-auto p-6 bg-white">
      {/* Header with mandatory fields note */}
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-4">
          <span className="text-red-500">*</span> Indicates mandatory fields
        </p>
        
        {/* Part I Header */}
        <h2 className="text-[40px] font-[800] text-center text-red-600 mb-6">
          Part I – Business Details
        </h2>
      </div>

      {/* Business Details Section */}
      <div className="space-y-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          1. Business Details
        </h3>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Name of the applicant */}
          <div>
            <label htmlFor="applicantName" className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 1.1 Name of the applicant
            </label>
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* PAN Number */}
          <div>
            <label htmlFor="panNumber" className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 1.2 PAN Number
            </label>
            <input
              type="text"
              id="panNumber"
              name="panNumber"
              value={formData.panNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* GST Identification Number */}
          <div>
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 1.3 GST Identification Number
            </label>
            <input
              type="text"
              id="gstNumber"
              name="gstNumber"
              value={formData.gstNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>

          {/* Importer Exporter Code */}
          <div>
            <label htmlFor="importerExporterCode" className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 1.4 Importer Exporter Code
            </label>
            <input
              type="text"
              id="importerExporterCode"
              name="importerExporterCode"
              value={formData.importerExporterCode}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder=""
            />
          </div>
        </div>

        {/* Constitution of Business Section */}
        <div className="mt-8">
          <div className="bg-blue-100 p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              2. Constitution of business<span className="text-red-500">*</span> (select one option)
            </h4>
            
            <div className="space-y-3">
              {[
                'Proprietorship',
                'Partnership',
                'Limited Liability Partnership',
                'Registered Public Limited Company',
                'Registered Private Limited Company',
                'Registered Trust',
                'Society / Cooperative Society',
                'Others (please specify)'
              ].map((option, index) => (
                <label key={index} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="businessConstitution"
                    value={option.toLowerCase().replace(/[^a-z0-9]/g, '')}
                    checked={formData.businessConstitution === option.toLowerCase().replace(/[^a-z0-9]/g, '')}
                    onChange={handleRadioChange}
                    className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                  />
                  <span className="text-gray-700 text-sm font-medium">{option}</span>
                </label>
              ))}
            </div>

            {/* Others specification input */}
            {formData.businessConstitution === 'otherspleasespecify' && (
              <div className="mt-4">
                <input
                  type="text"
                  name="otherConstitution"
                  value={formData.otherConstitution}
                  onChange={handleInputChange}
                  placeholder="Please specify other constitution type"
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            )}
          </div>
        </div>

        {/* File Upload Section */}
        <div className="mt-8 space-y-6">
          {/* Certification of Incorporation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2.1 Certification of Incorporation<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <div className="flex-1 px-4 py-3 bg-gray-200 border border-gray-300 rounded-l-md text-gray-500 text-sm">
                {formData.certificationFile ? formData.certificationFile.name : 'No file chosen'}
              </div>
              <label className="px-6 py-2.5 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="certificationFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Memorandum of Objects */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2.2 Memorandum of Objects<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <div className="flex-1 px-4 py-3 bg-gray-200 border border-gray-300 rounded-l-md text-gray-500 text-sm">
                {formData.memorandumFile ? formData.memorandumFile.name : 'No file chosen'}
              </div>
              <label className="px-6 py-2.5 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="memorandumFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* Article of Association */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              2.3 Article of Association in case of companies<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <div className="flex-1 px-4 py-3 bg-gray-200 border border-gray-300 rounded-l-md text-gray-500 text-sm">
                {formData.articleFile ? formData.articleFile.name : 'No file chosen'}
              </div>
              <label className="px-6 py-2.5 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="articleFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            </div>
          </div>

          {/* File format note */}
          <p className="text-sm text-gray-600 mt-2">
            (Format: pdf, doc, docx; Max. File Size: 5 MB)
          </p>
        </div>

        {/* Registered Office Details Section */}
        <div className="mt-8">
          <div className="bg-blue-900 text-white p-4 rounded-t-lg">
            <h4 className="text-lg font-semibold">3. Registered Office Details</h4>
          </div>
          <div className="bg-blue-900 p-6 rounded-b-lg space-y-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">
                3.1 Registered Office address
              </label>
              <input
                type="text"
                name="registeredOfficeAddress"
                value={formData.registeredOfficeAddress}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                3.2 Contact Number Tel with STD code /Mobile
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                3.3 Business E-mail
              </label>
              <input
                type="email"
                name="businessEmail"
                value={formData.businessEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">
                3.4 Fax
              </label>
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">4. Bank Details</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 4.1 Bank Name
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 4.2 Branch Name
            </label>
            <input
              type="text"
              name="branchName"
              value={formData.branchName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 4.3 Account Number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Proprietor/Partner/Director Details Section */}
        <div className="mt-8 space-y-6">
          <h4 className="text-lg font-semibold text-gray-800">5. Details of Proprietor/Partner/Director</h4>
          
          {formData.proprietorDetails.map((proprietor, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> (a) Name
                  </label>
                  <input
                    type="text"
                    value={proprietor.name}
                    onChange={(e) => handleProprietorChange(index, 'name', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    (b) Designation
                  </label>
                  <input
                    type="text"
                    value={proprietor.designation}
                    onChange={(e) => handleProprietorChange(index, 'designation', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> (c) Address
                  </label>
                  <input
                    type="text"
                    value={proprietor.address}
                    onChange={(e) => handleProprietorChange(index, 'address', e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <span className="text-red-500">*</span> (e) Attach scanned copy of any ID Proof: Acceptable - Passport, Driving License
                  </label>
                  <div className="flex items-center gap-4">
                    <div className="flex-1 flex items-center">
                      <div className="flex-1 px-4 py-3 bg-gray-200 border border-gray-300 rounded-l-md text-gray-500 text-sm">
                        {proprietor.idProofFile ? proprietor.idProofFile.name : 'No file chosen'}
                      </div>
                      <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                        <span className="text-gray-700 font-medium">Browse</span>
                        <input
                          type="file"
                          onChange={(e) => handleProprietorFileChange(index, e.target.files[0] || null)}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                      </label>
                    </div>
                    {formData.proprietorDetails.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeProprietor(index)}
                        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    (Format: pdf, doc, docx; Max. File Size: 5 MB)
                  </p>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={addProprietor}
            className="text-blue-600 hover:text-blue-800 font-medium underline"
          >
            Add Another Item
          </button>
        </div>

        {/* Authorised Signatory Section */}
        <div className="mt-8 space-y-4">
          <h4 className="text-lg font-semibold text-gray-800">6. Authorised signatory</h4>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 6.1 Name of Authorised Signatory
            </label>
            <input
              type="text"
              name="authorisedSignatoryName"
              value={formData.authorisedSignatoryName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <span className="text-red-500">*</span> 6.2 Designation
            </label>
            <input
              type="text"
              name="authorisedSignatoryDesignation"
              value={formData.authorisedSignatoryDesignation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              6.3 Aadhar Card as proof of ID<span className="text-red-500">*</span>
            </label>
            <div className="flex items-center">
              <div className={`flex-1 px-4 ${formData.aadharCardFile ? "py-3.5" : "py-6"}  bg-white border-2 border-gray-300 rounded-l-md text-gray-500 text-sm`}>
                {formData.aadharCardFile ? formData.aadharCardFile.name : ''}
              </div>
              <label className="px-6 py-3 bg-white border-2 border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="aadharCardFile"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="hidden"
                />
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              (Format: pdf, doc, docx; Max. File Size: 5 MB)
            </p>
          </div>
        </div>

        {/* Manufacturing Facility Section */}
        <div className="mt-8">
          <div className="border-2 border-gray-300 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              7. DETAILS OF EXISTING MANUFACTURING FACILITY IN INDIA AND/OR OVERSEAS?
            </h4>
            
            <div className="space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="hasManufacturingFacility"
                  value="yes"
                  checked={formData.hasManufacturingFacility === 'yes'}
                  onChange={handleRadioChange}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 font-medium">Yes</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="hasManufacturingFacility"
                  value="no"
                  checked={formData.hasManufacturingFacility === 'no'}
                  onChange={handleRadioChange}
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 font-medium">No</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}