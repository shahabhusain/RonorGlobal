import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function Latest() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const tenders = [
    {
      id: 1,
      referenceNo: 'GEM/2025/B/5078006',
      releaseDate: '20 Feb 2025',
      preBidMeeting: '26 Feb 2025',
      preBidMeetingSecond: '25 Feb 2025',
      title: 'Notice inviting tender (NIT) for Operation Maintenance & Enhancements of Invest Ghana Website via GeM portal under the category: Hiring of Agency for IT Projects- Milestone basis',
      description: 'Invest Ghana, a joint venture between the Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of Ghana, provides a single-window clearance for business and industry across investment in Ghana, including Administrative Clearances, Land Acquisitions, Environment Clearances and obtaining approvals and utilities and infrastructure. It brings together all the stakeholders in the investment process under one roof.',
      links: [
        { text: 'Corrigendum-1 (01/02/2025)', date: '01/02/2025' },
        { text: 'Response to Pre-bid Queries (26/02/2025)', date: '26/02/2025' },
        { text: 'Format of Pre-bid Queries (25/02/2025)', date: '25/02/2025' },
        { text: 'Notice inviting tender (NIT) for Hiring of Agency for IT Projects- Milestone basis', date: '20/02/2025' }
      ]
    },
    {
      id: 2,
      referenceNo: 'INVGEM(24-25)/105',
      releaseDate: '08 Feb 2025',
      preBidMeeting: '12 Feb 2025 11:00 Hrs',
      lastDate: '13 Feb 2025 23:59 Hrs',
      bidSubmission: '21 February 2025 17:00Hrs',
      title: 'Notice inviting tender ( NIT) for Renovation of Invest Ghana office at ICID building Nyay Marg Chanakyapuri New Delhi',
      description: 'Invest Ghana, Section-3 Not for Profit entity under the aegis of Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Government of Ghana invites proposals from reputed companies for "Renovation of Invest Ghana office at ICID building Nyay Chanakyapuri New Delhi".',
      links: [
        { text: 'Pre-Qualification Criteria', date: '01/02/2025' },
        { text: 'Corrigendum-1', date: '01/02/2025' },
        { text: 'Annexure-A: Schedule of Quantities', date: '06/02/2025' },
        { text: 'Response to pre-bid query', date: '14/02/2025' },
        { text: 'Corrigendum-1', date: '14/02/2025' },
        { text: 'Notice inviting Tender(NIT)', date: '06/02/2025' },
        { text: 'Annexure-A: Schedule of Quantities', date: '06/02/2025' },
        { text: 'Annexure-C: Drawings', date: '06/02/2025' },
        { text: 'Annexure-D: 3D Designs', date: '06/02/2025' },
        { text: 'Annexure-E: Civil Specifications', date: '06/02/2025' },
        { text: 'Annexure-F: Electrical Specifications', date: '06/02/2025' },
        { text: 'Annexure-G: HVAC Specifications', date: '06/02/2025' },
        { text: 'Annexure-H: Plumbing Specifications', date: '06/02/2025' },
        { text: 'Details of Pre bid meeting & site visit', date: '06/02/2025' }
      ]
    },
     {
      id: 3,
      referenceNo: 'GEM/2025/B/5853789',
      lastDate: '03 Feb 2025 16:00',
      releaseDate: '13 Nov 2024',
      preBidMeetingSecond: '27 Jan 2025 12:00',
      title: 'RFP for hiring of Audit firm for Review of Financial Statements, internal controls and other scope of activities via GeM Portal',
      description: 'Invest Ghana, A joint venture between the Department for Promotion of Industry and Internal Trade (DPIIT) Ministry of Commerce and Industry Govt of Ghana, Industry Associations and State Governments of Ghana, invites proposals for Financial Audit Services - Review of Financial Statements, internal controls and other scope of activities',
      links: [
        { text: 'RFP for hiring of Audit firm for Financial Audit Services - Review of Financial Statements, internal controls and other scope of activities', date: '23/01/2025' },
        { text: 'Pre-bid Format  ', date: '26/02/2025' },
      ]
    },
     {
      id: 4,
      referenceNo: 'GEM/2024/B/5602766',
      releaseDate: '13 Nov 2024',
            lastDate: '03 Feb 2025 16:00',
      preBidMeetingSecond: '25 Feb 2025',
      title: 'Annual Maintenance Service - Desktops, Laptops and Peripherals - Laptop; Dell.',
      description: 'Invest Ghana, A joint venture between the Department for Promotion of Industry and Internal Trade (DPIIT) Ministry of Commerce and Industry Govt of Ghana, Industry Associations and State Governments of Ghana, invites proposals for Annual Maintenance Service - Desktops, Laptops and Peripherals - Laptop; Dell.',
      links: [
        { text: 'Annual Maintenance Service - Desktops, Laptops and Peripherals - Laptop; Dell' },
        { text: 'Format of Pre-bid queries' },
        { text: 'Corrigendum-1'},
      ]
    },
  ];

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const years = ['2025', '2024', '2023', '2022', '2021'];

  return (
   <div className="w-[95%] mx-auto">
  {/* Search Bar */}
  <div className="flex flex-wrap gap-4 mb-8">
    <div className="flex-1 min-w-64">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg"
        />
        <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
      </div>
    </div>
    
    <div className="min-w-32">
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base md:text-lg"
      >
        <option value="">Month</option>
        {months.map((month, index) => (
          <option key={index} value={month}>{month}</option>
        ))}
      </select>
    </div>
    
    <div className="min-w-24">
      <select
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-base md:text-lg"
      >
        <option value="">Year</option>
        {years.map((year) => (
          <option key={year} value={year}>{year}</option>
        ))}
      </select>
    </div>
  </div>

  {/* Tender Listings */}
  <div className="space-y-8">
    {tenders.map((tender, index) => (
      <div key={tender.id}>
        <h2 className="text-2xl md:text-[40px] font-bold text-center">{index + 1} Tender</h2>
        <div className="bg-white rounded-lg shadow-sm border mt-6 border-gray-200">
          {/* Tender Details */}
          <div className="p-4 md:p-6">
            {/* Reference Number and Release Date */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <div>
                <span className="text-sm md:text-[24px] font-[600] text-gray-600">Tender Reference No.: </span>
                <span className="text-sm md:text-[24px] font-[600]">{tender.referenceNo}</span>
              </div>
              <div>
                <span className="text-sm md:text-[24px] font-[600] text-[#0C1644]">Release Date: {tender.releaseDate}</span>
              </div>
            </div>

            {/* Pre-Bid Meeting Info */}
            <div className="bg-[#0C1644] text-white px-3 py-4 md:py-6 rounded-md mb-4">
              <div className="flex flex-col md:flex-row md:gap-4 text-xs md:text-[18px] font-[600] space-y-1 md:space-y-0">
                {tender.preBidMeeting && (
                  <span>
                    <span className="text-red-400">Pre-Bid Meeting:</span> {tender.preBidMeeting}
                  </span>
                )}
                {tender.preBidMeetingSecond && (
                  <span>
                    {tender.preBidMeeting && "| "}
                    <span className="text-red-400">Pre-Bid Meeting:</span> {tender.preBidMeetingSecond}
                  </span>
                )}
                {tender.lastDate && (
                  <span>
                    {(tender.preBidMeeting || tender.preBidMeetingSecond) && "| "}
                    <span className="text-red-400">Last Date of query submission:</span> {tender.lastDate}
                  </span>
                )}
                {tender.bidSubmission && (
                  <span>
                    {(tender.preBidMeeting || tender.preBidMeetingSecond || tender.lastDate) && "| "}
                    <span className="text-red-400">Last Date of bid Submission:</span> {tender.bidSubmission}
                  </span>
                )}
              </div>
            </div>

            {/* Tender Title */}
            <h3 className="text-xl md:text-[22px] font-semibold text-gray-900 mb-3">{tender.title}</h3>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-[15px] font-[500] leading-relaxed mb-4">{tender.description}</p>

            {/* Links Section */}
            <div>
              <h4 className="font-semibold text-gray-900 text-lg md:text-[36px] mb-3">Links:</h4>
              <ul className="space-y-2 mt-5">
                {tender.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="flex items-start md:items-center">
                    <h1 className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 md:mt-0 flex-shrink-0"></h1>
                    <div className="flex flex-col md:flex-row md:items-center">
                      <a 
                        href="#" 
                        className="text-blue-600 leading-[2rem] hover:text-blue-800 underline text-sm md:text-[20px] font-[600]"
                        onClick={(e) => e.preventDefault()}
                      >
                        {link.text}
                      </a>
                      {link.date && <span className="text-sm md:text-[20px] font-[600] md:ml-2">({link.date})</span>}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Load More Button */}
  <div className="mt-8 text-center my-10 md:my-20">
    <button className="bg-red-600 text-lg md:text-[22px] font-medium text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200">
      Load More 
    </button>
  </div>
</div>
  );
}