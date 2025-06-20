import React, { useState } from 'react'
import icon1 from '../../assets/icons/icon1.png'
import icon2 from '../../assets/icons/icon2.png'
import icon3 from '../../assets/icons/icon3.png'
import icon4 from '../../assets/icons/icon4.png'
import icon5 from '../../assets/icons/icon5.png'
import icon6 from '../../assets/icons/icon6.png'
import icon7 from '../../assets/icons/icon7.png'
import icon8 from '../../assets/icons/icon8.png'
import img from '../../assets/img.png'
import w_icon1 from '../../assets/w-icon/icon1.png'
import w_icon2 from '../../assets/w-icon/icon2.png'
import w_icon3 from '../../assets/w-icon/icon3.png'
import w_icon4 from '../../assets/w-icon/icon4.png'
import w_icon5 from '../../assets/w-icon/icon5.png'
import w_icon6 from '../../assets/w-icon/icon6.png'
import w_icon7 from '../../assets/w-icon/icon7.png'
import w_icon8 from '../../assets/w-icon/icon8.png'
import ThirdLargest from './ThirdLargest'
import GreenEnergy from './GreenEnergy'
import Ev from './Ev'
import Pharmace from './Pharmace'
import Es from './Es'
import Chemical from './Chemical'
import Food from './Food'
import Texttile from './Textile'
const Transforming = () => {
    const [select, setSelect] = useState(0)
    const Data = [
        {
            img:icon1,
            title:"Infrastructure",
            w_icon:w_icon1
        },

        {
            img:icon2,
            title:"Green Energy",
            w_icon:w_icon2
        },

        {
            img:icon3,
            title:"EV/Auto",
            w_icon:w_icon3
        },

        {
            img:icon4,
             title:"Pharmaceuticals",
             w_icon:w_icon4
        },

        {
            img:icon5,
            title:"ESDM",
            w_icon:w_icon5
        },

        {
            img:icon6,
            title:"Food Processing",
            w_icon:w_icon6
        },

        {
            img:icon7,
            title:"Chemicals",
            w_icon:w_icon7
        },

        {
            img:icon8,
            title:"Textiles",
            w_icon:w_icon8
        },
    ]
  return (
    <div className=' my-20 w-[95%] mx-auto'>
       <div className=''>
       <h1 className=' text-[30px] max-w-[333px] font-[700] text-red-500 border-b-[3px] border-[#000] rounded-sm pb-4 '>Transforming Ghana sectors</h1>
       </div>
       <div className=' mt-12 flex justify-between'>
        <div className=' flex flex-col gap-4 md:w-[20%] w-[35%]'>
              {
                Data.map((item, index)=>(
                    <button onClick={()=>setSelect(index)}  key={index} className={`${select === index ? "" : "border-[2px] rounded-lg border-[#7A7A7A]"} text-[#00105C] xl:text-[20px] lg:text-[15px] md:text-[15px] text-[8px] font-[700] md:py-3 py-1 md:px-2 px-1 flex items-center`}>{select === index ? <div className=' relative'><img src={img} alt="" className='' /> <div className=' flex flex-col md:pl-4 pl-2 absolute xl:top-10 top-4'>
                         <img className=' xl:w-[30px] w-[15px]' src={item.w_icon} alt="" /> <h1 className=' text-white xl:text-[20px] lg:text-[17px] md:text-[15px] text-[8px]'>{item.title}</h1></div></div> : <div className=' flex items-center md:gap-4 gap-1'><img src={item.img} alt="" />{item.title} </div>}</button>
                ))
              }
        </div>
        <div className=' md:w-[70%] w-[60%]'>
           {select === 0 ? <><ThirdLargest /></> : select === 1 ? <><GreenEnergy /></> : select === 2 ? <><Ev /></> : select === 3 ? <><Pharmace /></> : select === 4 ? <><Es /></> : select === 6 ? <><Chemical /></> : select === 5 ? <><Food /></> : select === 7 ? <><Texttile /></> : null}
        </div>
       </div>
    </div>
  )
}

export default Transforming