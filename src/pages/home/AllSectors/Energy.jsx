import React from 'react'
import oil from '../../../assets/AllSectors/energy.pdf';
import { FiDownload } from 'react-icons/fi';
const Energy = () => {
  return (
    <div className=' my-20'>
      <div className=' trans8'>
          <h1 className=' text-[60px] text-white font-[700]  pt-80 pl-12'>Energy</h1>
      </div>

         <div className="mt-20 w-[90%] mx-auto flex items-center justify-between gap-12">
        <div className="w-full h-screen mt-4">
        <iframe
          src={oil}
          title="Agriculture PDF"
          width="100%"
          height="100%"
          className="border-0"
        ></iframe>
      </div>

      <div className=' bg-[#ebeaea] flex flex-col items-center justify-center p-6 gap-y-5'>
        <h1 className=' text-red-700 text-[30px] font-medium'>Sector Profile</h1>
         <button
      className="inline-flex items-center gap-2 bg-red-700 text-white font-medium py-3 px-6 rounded-full hover:bg-green-800 transition-all"
    >
      <div className="bg-white text-red-700 p-2 rounded-full">
        <FiDownload size={18} />
      </div>
      <div className="text-left flex flex-col gap-0 leading-tight">
        <span className="text-sm">Download</span>
        <span className="text-xs opacity-80">5 MB</span>
      </div>
    </button>

<iframe
  src="https://www.youtube.com/embed/UTEr4chaYJY"
  title="YouTube video player"
  width="100%"
  height="100%"
  className="border-0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

<iframe
  src="https://www.youtube.com/embed/UTEr4chaYJY"
  title="YouTube video player"
  width="100%"
  height="100%"
  className="border-0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

<iframe
  src="https://www.youtube.com/embed/UTEr4chaYJY"
  title="YouTube video player"
  width="100%"
  height="100%"
  className="border-0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
></iframe>

      </div>
    </div>
    </div>
  )
}

export default Energy