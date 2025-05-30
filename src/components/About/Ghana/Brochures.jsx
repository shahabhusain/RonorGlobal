import React from 'react'
import img1 from '../../../assets/About/pd1.png'
import img2 from '../../../assets/About/pd2.png'
import img3 from '../../../assets/About/pd3.png'
import img4 from '../../../assets/About/pd4.png'
import img5 from '../../../assets/About/pd5.png'
import img6 from '../../../assets/About/pd6.png'
import img7 from '../../../assets/About/pd7.png'
import img8 from '../../../assets/About/pd8.png'
import img9 from '../../../assets/About/pd9.png'
import img10 from '../../../assets/About/pd10.png'
import img11 from '../../../assets/About/pd11.png'
const Brochures = () => {
  return (
    <div>
                 <h1 className=' bg-[#00105C] text-center p-4 my-20 text-[40px] font-[700] text-white'>Brochures</h1>
                 <div className=' grid grid-cols-4 gap-5 w-[95%] mx-auto'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />
                    <img src={img8} alt="" />
                    <img src={img9} alt="" />
                    <img src={img10} alt="" />
                    <img src={img11} alt="" />
                 </div>
    </div>
  )
}

export default Brochures