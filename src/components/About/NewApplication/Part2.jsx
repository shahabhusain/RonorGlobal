import React, { useState } from 'react';

export default function Part2FacilityDetails() {
  const [formData, setFormData] = useState({
    facilityAddress: '',
    northBoundary: '',
    southBoundary: '',
    eastBoundary: '',
    westBoundary: '',
    propertyHolding: '',
    contactNumber: '',
    fax: '',
    contactEmail: '',
    website: '',
    licenseIssueDate: '',
    commissionerateFile: '',
    warehouseLicenseFile: null,
    isLicensedCustomsBroker: '',
    isAuthorizedEconomicOperator: '',
    floorArea: '',
    numberOfStoreys: '',
    totalAreaForStorage: '',
    constructionType: '',
    yearOfEstablishment: '',
    remodelingDate: '',
    groundPlanFile: null,
     isCommercialUseAuthorized: '',
    goodsOperationsFile: null,
    burglarAlarmSystem: '',
    hasCCTV: '',
    securityArrangement: '',
    securityFirmName: '',
    securityFirmAddress: '',
    securityPersonnelPerShift: '',
    fireSecurityCertificateFile: null
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
      [name]: value
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
      {/* Part II Header */}
      <div className="mb-6">
        <h2 className="text-[40px] font-[800] text-center text-red-600 mb-6">
          Part II – Details of Proposed Facility
        </h2>
      </div>

      <div className="space-y-8">
        {/* 1. Details of proposed Facility */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            1. Details of proposed Facility
          </h3>

          {/* Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              1.1 Address of proposed site/ building<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="facilityAddress"
              value={formData.facilityAddress}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Boundaries */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              1.2 Boundaries of the warehouse
            </label>
            
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-gray-600 mb-1">(a) North</label>
                <input
                  type="text"
                  name="northBoundary"
                  value={formData.northBoundary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">(b) South</label>
                <input
                  type="text"
                  name="southBoundary"
                  value={formData.southBoundary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">(c) East</label>
                <input
                  type="text"
                  name="eastBoundary"
                  value={formData.eastBoundary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">(c) West</label>
                <input
                  type="text"
                  name="westBoundary"
                  value={formData.westBoundary}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Property Holding Rights */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              1.3 Details of property holding rights of the applicant<span className="text-red-500">*</span>
            </label>
            <div className="bg-orange-50 p-4 rounded-lg space-y-3">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="propertyHolding"
                  value="owner"
                  checked={formData.propertyHolding === 'owner'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 text-sm">Owner</span>
              </label>

              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="propertyHolding"
                  value="lease_rent"
                  checked={formData.propertyHolding === 'lease_rent'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700 text-sm">Lease/Rent</span>
              </label>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div>
          <h4 className="text-base font-medium text-gray-800 mb-4">
            1.4 Contact details at the site/premises
          </h4>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                (a) Contact Number: Tel with STD Code/Mobile
              </label>
              <input
                type="text"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                (b) Fax
              </label>
              <input
                type="text"
                name="fax"
                value={formData.fax}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                (c) Contact E-mail<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                (d) Website (if any)
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        {/* Warehouse License Details */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            2. Details of Warehouse License issued Earlier (if any)
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2.1 Date of Issue of License
              </label>
              <input
                type="date"
                name="licenseIssueDate"
                value={formData.licenseIssueDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2.2 Commissionerate File No.
              </label>
              <input
                type="text"
                name="commissionerateFile"
                value={formData.commissionerateFile}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                2.3 Scanned copy of warehouse license
              </label>
              <div className="flex items-center">
                <div className={`flex-1 px-4  ${formData.warehouseLicenseFile ? "py-3.5" : "py-6"} bg-gray-100 border border-gray-300 rounded-l-md text-gray-500 text-sm`}>
                  {formData.warehouseLicenseFile ? formData.warehouseLicenseFile.name : ''}
                </div>
                <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700 font-medium">Browse</span>
                  <input
                    type="file"
                    name="warehouseLicenseFile"
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
        </div>

        {/* Licensed Customs Broker */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            3. Whether the applicant is a Licensed Customs Broker?<span className="text-red-500">*</span>
          </h3>

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="isLicensedCustomsBroker"
                value="yes"
                checked={formData.isLicensedCustomsBroker === 'yes'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-gray-700">Yes</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="isLicensedCustomsBroker"
                value="no"
                checked={formData.isLicensedCustomsBroker === 'no'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Authorized Economic Operator */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            4. WHETHER THE APPLICANT IS AN AUTHORISED ECONOMIC OPERATOR ?*
          </h3>

          <div className="space-y-3">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="isAuthorizedEconomicOperator"
                value="yes"
                checked={formData.isAuthorizedEconomicOperator === 'yes'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-gray-700">Yes</span>
            </label>

            <label className="flex items-center space-x-3 cursor-pointer">
              <input
                type="radio"
                name="isAuthorizedEconomicOperator"
                value="no"
                checked={formData.isAuthorizedEconomicOperator === 'no'}
                onChange={handleRadioChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
              />
              <span className="text-gray-700">No</span>
            </label>
          </div>
        </div>

        {/* Description of Premises */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            5. Description of Premises:
          </h3>

          <div className="space-y-6">
            {/* Ground Plan */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.1 Ground Plan of the site indicating all points of exit, entry, area of storage, area of manufacturing, 
                earmarked area of office, area occupied by third parties, location and sizes of all accesses to the site for 
                pedestrians/vehicles and location and sizes and others accesses including doors and windows Template 
                for reference.
              </label>
              <div className="flex items-center">
                <div className={`flex-1 px-4  ${formData.groundPlanFile ? "py-3.5" : "py-6"} bg-gray-100 border border-gray-300 rounded-l-md text-gray-500 text-sm`}>
                  {formData.groundPlanFile ? formData.groundPlanFile.name : ''}
                </div>
                <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                  <span className="text-gray-700 font-medium">Browse</span>
                  <input
                    type="file"
                    name="groundPlanFile"
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

            {/* Floor Area */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.2 Floor Area * (in square feet)
              </label>
              <input
                type="number"
                name="floorArea"
                value={formData.floorArea}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Number of Storeys */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.3 Number of Storeys*
              </label>
              <input
                type="number"
                name="numberOfStoreys"
                value={formData.numberOfStoreys}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Total area for storage */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.4 Total area (or cubic capacity) available for storage*
              </label>
              <input
                type="text"
                name="totalAreaForStorage"
                value={formData.totalAreaForStorage}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Type of Construction */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.5 Type of Construction of Walls or Roof * (for instance concrete/wood/metal/asbestos)
              </label>
              <input
                type="text"
                name="constructionType"
                value={formData.constructionType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Year of establishment */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.6 Year of establishment of the building*
              </label>
              <input
                type="number"
                name="yearOfEstablishment"
                value={formData.yearOfEstablishment}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Date of remodeling */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                5.7 Date of remodelling of building (if applicable)
              </label>
              <input
                type="date"
                name="remodelingDate"
                value={formData.remodelingDate}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
             <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          5.8 Whether premises have been authorised for commercial use by local Government Authorities?*
        </h3>

        <div className="space-y-3">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="isCommercialUseAuthorized"
              value="yes"
              checked={formData.isCommercialUseAuthorized === 'yes'}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-gray-700">Yes</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name="isCommercialUseAuthorized"
              value="no"
              checked={formData.isCommercialUseAuthorized === 'no'}
              onChange={handleRadioChange}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-gray-700">No</span>
          </label>
        </div>

        <p className="text-sm text-gray-600 mt-3 italic">
          Note: The applicant must comply with the provisions of the customs act 1962, as well as with all other applicable compliances issued by government of Ghana for doing business in Ghana.
        </p>
      </div>

      {/* Goods proposed to be manufactured */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          6. Goods proposed to be manufactured or other operations proposed to be carried out
        </h3>

        <p className="text-sm text-gray-600 mb-3 italic">Template for reference</p>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Attachment*
          </label>
          <div className="flex items-center">
            <div className={`flex-1 px-4  ${formData.goodsOperationsFile ? "py-3.5" : "py-6"} bg-gray-100 border border-gray-300 rounded-l-md text-gray-500 text-sm`}>
              {formData.goodsOperationsFile ? formData.goodsOperationsFile.name : ''}
            </div>
            <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-gray-700 font-medium">Browse</span>
              <input
                type="file"
                name="goodsOperationsFile"
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

        <p className="text-sm text-gray-600 mt-3 italic">
          Note: In case of any change in the nature of operations subsequent to the grant of permission, the same shall be informed to the Jurisdictional Commissioner of Customs within 15 days
        </p>
      </div>

      {/* Security Facilities */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">
          7. Security Facilities At The Premise, Existing Or Proposed:
        </h3>

        <div className="space-y-6">
          {/* Burglar Alarm System */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              7.1 Burglar Alarm System*
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="burglarAlarmSystem"
                  value="installed"
                  checked={formData.burglarAlarmSystem === 'installed'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700">Installed</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="burglarAlarmSystem"
                  value="not_installed"
                  checked={formData.burglarAlarmSystem === 'not_installed'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700">Not Installed</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="burglarAlarmSystem"
                  value="under_installation"
                  checked={formData.burglarAlarmSystem === 'under_installation'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700">Under Installation</span>
              </label>
            </div>
          </div>

          {/* CCTV System */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              7.2 Is CCTV monitoring system installed to cover the surrounding area of the site and storage area?
            </label>
            <div className="space-y-2">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="hasCCTV"
                  value="yes"
                  checked={formData.hasCCTV === 'yes'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700">Yes</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="hasCCTV"
                  value="no"
                  checked={formData.hasCCTV === 'no'}
                  onChange={handleRadioChange}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                />
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          {/* Security Personnel */}
          <div>
            <h4 className="text-base font-medium text-gray-800 mb-3">
              7.3 Security personnel
            </h4>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  (a) DETAILS OF ARRANGEMENT ROUND-THE-CLOCK SECURITY PROVIDED FOR THE WAREHOUSE
                </label>
                <textarea
                  name="securityArrangement"
                  value={formData.securityArrangement}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  (b) Name of the contracted firm
                </label>
                <input
                  type="text"
                  name="securityFirmName"
                  value={formData.securityFirmName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  (c) Address of contracted firm
                </label>
                <textarea
                  name="securityFirmAddress"
                  value={formData.securityFirmAddress}
                  onChange={handleInputChange}
                  rows={2}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  (d) NUMBER OF PERSONNEL TO BE DEPLOYED ON EACH SHIFT FOR ROUND-THE-CLOCK SECURITY
                </label>
                <input
                  type="number"
                  name="securityPersonnelPerShift"
                  value={formData.securityPersonnelPerShift}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Fire Security */}
          <div>
            <h4 className="text-base font-medium text-gray-800 mb-3">
              7.4 Fire security
            </h4>

            <label className="block text-sm font-medium text-gray-700 mb-2">
              Scanned copy of fire security audit certificate issued by qualified independent agency*
            </label>
            <div className="flex items-center">
              <div className={`flex-1 px-4  ${formData.fireSecurityCertificateFile ? "py-3.5" : "py-6"} bg-gray-100 border border-gray-300 rounded-l-md text-gray-500 text-sm`}>
                {formData.fireSecurityCertificateFile ? formData.fireSecurityCertificateFile.name : ''}
              </div>
              <label className="px-6 py-3 bg-white border border-gray-300 border-l-0 rounded-r-md cursor-pointer hover:bg-gray-50 transition-colors">
                <span className="text-gray-700 font-medium">Browse</span>
                <input
                  type="file"
                  name="fireSecurityCertificateFile"
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
      </div>
          </div>
        </div>
      </div>
    </div>
  );
}