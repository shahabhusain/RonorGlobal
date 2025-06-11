import React, { useState } from 'react';
import logo from '../../assets/logo.png'
import { AiOutlineShareAlt } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import { IoLocationSharp } from "react-icons/io5";
import error from '../../assets/Career/error.png'
import { Link } from 'react-router-dom';
const jobData = [
  { id: 1, title: 'Junior Specialist', group: 'Company Secretary', experience: '5–6 Years', location: 'Delhi', posted: '1 week ago', role: 'Analyst', department: 'DPIIT' },
  { id: 2, title: 'Mid Specialist', group: 'Project Monitoring Group (PMG)', experience: '5–6 Years', location: 'Delhi', posted: '3 weeks ago', role: 'Assistant Manager', department: 'DPIIT' },
  { id: 3, title: 'Junior Specialist', group: 'PMG', experience: '1–4 Years', location: 'Delhi', posted: '3 weeks ago', role: '3rd Party', department: 'DPIIT' },
  { id: 4, title: 'Junior Specialist', group: 'Company Secretary', experience: '5–6 Years', location: 'Delhi', posted: '1 week ago', role: 'Admin', department: 'DPIIT' },
  { id: 5, title: 'Mid Specialist', group: 'PMG', experience: '5–6 Years', location: 'Delhi', posted: '3 weeks ago', role: 'Assistant Manager', department: 'DPIIT' },
  { id: 6, title: 'Junior Specialist', group: 'PMG', experience: '1–4 Years', location: 'Delhi', posted: '3 weeks ago', role: 'Creative', department: 'DPIIT' },
  { id: 7, title: 'Mid Specialist', group: 'PMG', experience: '5–6 Years', location: 'Delhi', posted: '3 weeks ago', role: 'Creative', department: 'DPIIT' },
  { id: 8, title: 'Junior Specialist', group: 'PMG', experience: '1–4 Years', location: 'Delhi', posted: '3 weeks ago', role: '3rd Party', department: 'DPIIT' },
];

function JobBoard() {
  const [search, setSearch] = useState('');
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredJobs = jobData
    .filter(job =>
      job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.group.toLowerCase().includes(search.toLowerCase())
    )
    .filter(job => department ? job.department === department : true)
    .filter(job => role ? job.role === role : true);

  const visibleJobs = filteredJobs.slice(0, visibleCount);

  return (
     <div className=' mt-20'>
           <h1 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px]  font-bold mb-4 text-center text-white bg-red-600 py-3 ">
        Latest Jobs Opportunities
      </h1>
        <div className="w-[95%] mx-auto mt-16">
   

      {/* Filters */}
      <div className="flex justify-between gap-4 mb-6 ">
        <input
          type="text"
          placeholder="Search Here..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-4 py-3 w-full "
        />

        <select
          onChange={(e) => setDepartment(e.target.value)}
          className="border rounded px-4 py-3 w-full"
          value={department}
        >
          <option value="">Select Department</option>
          <option value="DPIIT">DPIIT</option>
        </select>

        <select
          onChange={(e) => setRole(e.target.value)}
          className="border rounded px-4 py-3 w-full"
          value={role}
        >
          <option value="">Role</option>
          <option value="3rd Party">3rd Party</option>
          <option value="Admin">Admin/Executive Assistant</option>
          <option value="Analyst">Analyst</option>
          <option value="Assistant Manager">Assistant Manager</option>
          <option value="Creative">Assistant Manager - Social & Creative</option>
        </select>
      </div>

      {/* Job Cards */}
     {visibleJobs.length > 0 ? (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {visibleJobs.map((job) => (
      <div key={job.id} className="border flex flex-col rounded-lg p-4 shadow">
         <div className=' flex items-center justify-between'>
        
            
            <div className=' flex items-center gap-4'>
                  <div>
                     <h2 className="font-bold text-lg">{job.title}</h2>
        <p className="text-sm text-gray-600">{job.group}</p>
                  </div>
            </div>
<span className=' bg-[#E2F0F9] p-2 rounded-md'><AiOutlineShareAlt size={20} /></span>
         </div>
             <p className=' text-[20px] font-[500] text-[#6968689a] mt-5 border-b-[#6968689a] border-b-[2px] pb-3'>Posted 1 week ago</p>
        <div className="flex justify-between items-center text-sm mt-4">
          <span className=' flex items-center gap-2'><span className=' bg-[#E2F0F9] p-2 rounded-md'><GiShoppingBag size={20} /></span> {job.experience}</span>
          <span className=' flex items-center gap-2'><span className=' bg-[#E2F0F9] p-2 rounded-md'><IoLocationSharp size={20} /></span> {job.location}</span>
        </div>

            <Link to="/careersdetail" className="mt-4 text-center bg-[#00105C]  text-white px-4 py-2  rounded">
          View
        </Link>

      </div>
    ))}
  </div>
) : (
  <div className="flex flex-col items-center justify-center p-10 bg-white rounded-lg shadow my-12">
    <img
      src={error} // ← Make sure this matches the file path in your `public` folder
      alt="No Job Found"
      className="w-40 h-40 object-contain mb-4"
    />
    <h2 className="text-xl font-semibold mb-2">NO JOB FOUND</h2>
    <p className="text-sm text-gray-600 text-center">
      We searched far and wide and couldn’t find any Job matching your search
    </p>
  </div>
)}


      {/* Load More */}
      {visibleCount < filteredJobs.length && (
        <div className="text-center my-20">
          <button
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded"
            onClick={() => setVisibleCount(visibleCount + 3)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
     </div>
  );
}

export default JobBoard;
