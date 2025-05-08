import React, { useState } from 'react'
import img1 from '../../assets/About/img1.png'
import img2 from '../../assets/About/img2.png'
import img3 from '../../assets/About/img3.png'
import img4 from '../../assets/About/img4.png'
import img5 from '../../assets/About/img5.png'
import img6 from '../../assets/About/img6.png'
import img7 from '../../assets/About/img7.png'
import img8 from '../../assets/About/img8.png'
import img9 from '../../assets/About/img9.png'
import img10 from '../../assets/About/img10.png'
import img11 from '../../assets/About/img11.png'
import img12 from '../../assets/About/img12.png'
import img13 from '../../assets/About/img13.png'
const DropDown = () => {
    const [open, setOpen] = useState(0)
    const drop1 = [
        {
            img:img1,
            title:"Defense Acquisition Procedure",
            desc:""
        },
        {
            img:img2,
            title:"Bharatamala Pariyojana – Visionary Corridor across ...",
            desc:""
        },
        {
            img:img3,
            title:"The Farming Produce Trade and Commerce Act, 2020",
            desc:""
        },
        {
            img:img4,
            title:"RBI measure to fight COVID-19",
            desc:"Discover how RBI tackled COVID-19's......."
        },
        {
            img:img5,
            title:"Enhancing Investment Ecosystem",
            desc:"Discover Ghana investor-friendly ecosystem gains momentum with the Empowered Group of Secretaries..."
        },
        {
            img:img6,
            title:"Revival of Business Including MSMEs",
            desc:" Discover Ghana business revival measures! Explore aid for employees, employers, and MSMEs to resume ......."
        },
        {
            img:img7,
            title:"Redefining MSME Champions",
            desc:"Explore Ghana revamped MSME support! Discover the CHAMPIONS platform and new financial schemes. See how these........"
        },
        {
            img:img8,
            title:"Atmanirbhar Bharat Abhiyaan",
            desc:"Explore the Atmanirbhar Bharat Abhiyaan, a comprehensive economic package announced by Hon'ble PM ........."
        },
        {
            img:img9,
            title:"Sector Highlights: Pharmaceuticals",
            desc:"Discover Ghana pharmaceutical prowess! Explore its global role as the 'Pharmacy of the World', dominating ......"
        },
        {
            img:img10,
            title:"Startup Ecosystem In Ghana",
            desc:"Explore Ghana vibrant Startup Ecosystem: From the Startup Ghana initiative's impact to government support, discover........"
        },
        {
            img:img11,
            title:"Defence Industrial Corridors in Ghana",
            desc:"Discover Ghana Defence Industrial Corridors, boosting indigenous defence production. Spanning Uttar Pradesh and........"
        },
        {
            img:img12,
            title:"National Broadband Mission Connecting Ghana",
            desc:"Ghana National Broadband Mission aims to ensure universal, bridging socio-economic gaps. With goals to connect all........"
        },
        {
            img:img13,
            title:"PM Formalization of Micro Food Processing Enterpri ...",
            desc:"Boosting micro food processing: PM FME Scheme aids units with upgrades, technical training, branding, and....... "
        },
    ]

    const drop2 = [
        {
            img:img1,
            title:"Defense Acquisition Procedure",
            desc:""
        },
        {
            img:img2,
            title:"Bharatamala Pariyojana – Visionary Corridor across ...",
            desc:""
        },
        {
            img:img3,
            title:"The Farming Produce Trade and Commerce Act, 2020",
            desc:""
        },
    ]



    const drop3 = [
        {
            img:img4,
            title:"Defense Acquisition Procedure",
            desc:""
        },
        {
            img:img5,
            title:"Bharatamala Pariyojana – Visionary Corridor across ...",
            desc:""
        },
        {
            img:img6,
            title:"The Farming Produce Trade and Commerce Act, 2020",
            desc:""
        },
    ]


    const drop4 = [
        {
            img:img7,
            title:"Defense Acquisition Procedure",
            desc:""
        },
        {
            img:img8,
            title:"Bharatamala Pariyojana – Visionary Corridor across ...",
            desc:""
        },
        {
            img:img9,
            title:"The Farming Produce Trade and Commerce Act, 2020",
            desc:""
        },
    ]


    const drop5 = [
        {
            img:img10,
            title:"Defense Acquisition Procedure",
            desc:""
        },
        {
            img:img11,
            title:"Bharatamala Pariyojana – Visionary Corridor across ...",
            desc:""
        },
        {
            img:img12,
            title:"The Farming Produce Trade and Commerce Act, 2020",
            desc:""
        },
    ]
  return (
    <div className=' w-[90%] mx-auto mb-20 flex flex-col gap-4'>
          <div>
          <div onClick={()=>setOpen(1)} className='bg-[#FF0000] cursor-pointer  py-3 px-5 text-white flex items-center justify-between'>
            <h1 className=' text-[48px] font-[800]'>SPOTLIGHT</h1>
            <button onClick={()=>setOpen(1)} className=' text-[48px] font-[800]'>{open === 1 ? <>-</> : <>+</>}</button>
        </div>
          {open === 1 ? <>
             <div className=' grid grid-cols-2 gap-5 mt-6'>
             {
            drop1.map((item, index)=>(
                <div key={index} className=' flex-col flex gap-3'>
                   <img src={item.img} alt="" />
                   <h1 className=' text-[25px] font-[700] text-[#00105C]'>{item.title}</h1>
                   <p className=' text-[20px] font-[400] text-[#00105C]'>{item.desc}</p>
                </div>
            ))
          }
             </div>
          </> : <></>}
          </div>

        <div>
        <div onClick={()=>setOpen(2)} className='bg-[#00105C] cursor-pointer  py-3 px-5 text-white flex items-center justify-between'>
            <h1 className=' text-[48px] font-[800]'>SPOTLIGHT</h1>
            <button onClick={()=>setOpen(2)} className=' text-[48px] font-[800]'>{open === 2 ? <>-</> : <>+</>}</button>
        </div>
        {open === 2 ? <>
             <div className=' grid grid-cols-2 gap-5 mt-6'>
             {
            drop2.map((item, index)=>(
                <div key={index} className=' flex-col flex gap-3'>
                   <img src={item.img} alt="" />
                   <h1 className=' text-[25px] font-[700] text-[#00105C]'>{item.title}</h1>
                   <p className=' text-[20px] font-[400] text-[#00105C]'>{item.desc}</p>
                </div>
            ))
          }
             </div>
          </> : <></>}
        </div>

          <div>
          <div onClick={()=>setOpen(3)} className='bg-[#8B8B8B] cursor-pointer  py-3 px-5 text-white flex items-center justify-between'>
            <h1 className=' text-[48px] font-[800]'>SPOTLIGHT</h1>
            <button onClick={()=>setOpen(3)} className=' text-[48px] font-[800]'>{open === 3 ? <>-</> : <>+</>}</button>
        </div>
        {open === 3 ? <>
             <div className=' grid grid-cols-2 gap-5 mt-6'>
             {
            drop3.map((item, index)=>(
                <div key={index} className=' flex-col flex gap-3'>
                   <img src={item.img} alt="" />
                   <h1 className=' text-[25px] font-[700] text-[#00105C]'>{item.title}</h1>
                   <p className=' text-[20px] font-[400] text-[#00105C]'>{item.desc}</p>
                </div>
            ))
          }
             </div>
          </> : <></>}
          </div>

          <div>
          <div onClick={()=>setOpen(4)} className='bg-[#2B71B5] cursor-pointer  py-3 px-5 text-white flex items-center justify-between'>
            <h1 className=' text-[48px] font-[800]'>SPOTLIGHT</h1>
            <button onClick={()=>setOpen(4)} className=' text-[48px] font-[800]'>{open === 4 ? <>-</> : <>+</>}</button>
        </div>
        {open === 4 ? <>
             <div className=' grid grid-cols-2 gap-5 mt-6'>
             {
            drop4.map((item, index)=>(
                <div key={index} className=' flex-col flex gap-3'>
                   <img src={item.img} alt="" />
                   <h1 className=' text-[25px] font-[700] text-[#00105C]'>{item.title}</h1>
                   <p className=' text-[20px] font-[400] text-[#00105C]'>{item.desc}</p>
                </div>
            ))
          }
             </div>
          </> : <></>}
          </div>

          <div>
          <div onClick={()=>setOpen(5)} className='bg-[#48cd86] cursor-pointer  py-3 px-5 text-white flex items-center justify-between'>
            <h1 className=' text-[48px] font-[800]'>SPOTLIGHT</h1>
            <button onClick={()=>setOpen(5)} className=' text-[48px] font-[800]'>{open === 5 ? <>-</> : <>+</>}</button>
        </div>
        {open === 5 ? <>
             <div className=' grid grid-cols-2 gap-5 mt-6'>
             {
            drop5.map((item, index)=>(
                <div key={index} className=' flex-col flex gap-3'>
                   <img src={item.img} alt="" />
                   <h1 className=' text-[25px] font-[700] text-[#00105C]'>{item.title}</h1>
                   <p className=' text-[20px] font-[400] text-[#00105C]'>{item.desc}</p>
                </div>
            ))
          }
             </div>
          </> : <></>}
          </div>
    </div>
  )
}

export default DropDown