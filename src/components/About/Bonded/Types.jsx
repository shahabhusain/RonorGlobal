import React, { useState } from 'react'

const Types = () => {
    const [open, setOpen] = useState(1)
  return (
    <div className=' w-[95%] mx-auto mt-20'>
        <h1 className=' text-[40px] font-[800] text-red-500 text-center'>Types of Beneficiaries</h1>
        <p className=' text-[20px] font-[500] text-[#00105C] text-center mt-12'>Through bonded manufacturing, all types of businesscan <span className=' text-[700]'>avail exemption on customs duty on imported</span> used in the production of finished goods to be exported.
In the case of domestic consumption, the <span className=' text-[700]'>duty on imported inputs is deferred until</span> the finished goods are cleared to the domestic market.

<span className=' text-[700]'>For better understanding, illustration below</span> show how a manufacturer benefits from bonded manufacturing.</p>
<div className=' mt-12 flex flex-col gap-5'>
    <button onClick={()=>setOpen(1)} className={` text-[40px] font-[800] ${open === 1 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Manufacture <span>{open === 1 ? <>+</> : <>-</>}</span></button>
    <div>
        {
            open === 1 ? <>box1</> : null
        }
    </div>
    <button onClick={()=>setOpen(2)} className={` text-[40px] font-[800] ${open === 2 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Export goods <span>{open === 2 ? <>+</> : <>-</>}</span></button> 
    <div>
        {
            open === 2 ? <>box2</> : null
        }
    </div>
    <button onClick={()=>setOpen(3)} className={` text-[40px] font-[800] ${open === 3 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Goods for home consumption <span>{open === 3 ? <>+</> : <>-</>}</span></button>
    <div>
        {
            open === 3 ? <>box3</> : null
        }
    </div>
    <button onClick={()=>setOpen(4)} className={` text-[40px] font-[800] ${open === 4 ? "text-white bg-[#00105C]" : "bg-[#bbabab38] text-black"} w-full px-12 py-6 flex items-center justify-between`}>Waste/ refused goods <span>{open === 4 ? <>+</> : <>-</>}</span></button>
    <div>
        {
            open === 4 ? <>box4</> : null
        }
    </div>
</div>
    </div>
  )
}

export default Types