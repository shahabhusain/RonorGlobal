import React from 'react'
import lead1 from '../../assets/lead1.png'
import lead2 from '../../assets/lead2.png'
import lead3 from '../../assets/lead3.png'
import lead4 from '../../assets/lead4.png'
import lead5 from '../../assets/lead5.png'
import lead6 from '../../assets/lead6.png'
import lead7 from '../../assets/lead7.png'
import lead8 from '../../assets/lead8.png'
import lead9 from '../../assets/lead9.png'
import lead10 from '../../assets/lead10.png'
import lead11 from '../../assets/lead11.png'
import lead12 from '../../assets/lead12.png'
import lead13 from '../../assets/lead13.png'
import lead14 from '../../assets/lead14.png'
import lead15 from '../../assets/lead15.png'
const LeaderShip = () => {
        const data = [
            {
                img:lead1,
                title:"Ms Nivruti Rai",
                desc:"Managing Director and CEO"
            },
    
            {
                img:lead2,
                title:"Amulya Sah",
                desc:"Sr. VP & Chief Human Resources Officer"
            },
    
            {
                img:lead3,
                title:"Ananthanarayanan Shanmugam",
                desc:"Sr. VP & Chief Facilitation and Govt Relations Officer"
            },
    
            {
                img:lead4,
                title:"Bhaskar Kumar Chaturvedi",
                desc:"VP & Chief Financial Officer"
            },
    
            {
                img:lead5,
                title:"Kiran Bishnoi",
                desc:"Vice President & Legal Counsel"
            },
    
            {
                img:lead6,
                title:"Mohit Dhawan",
                desc:"Sr. Assistant Vice President – ISO Processes"
            },
    
            {
                img:lead7,
                title:"Neel Harkishin Bhatia",
                desc:"Sr. Vice President"
            },
    
            {
                img:lead8,
                title:"Pankaj Ahuja",
                desc:"Sr. Assistant Vice President"
            },
    
            {
                img:lead9,
                title:"Prem Kumar",
                desc:"Sr. VP & Chief Corporate Services Officer"
            },
    
            {
                img:lead10,
                title:"Ravi Kathuria",
                desc:"Sr. VP & Chief Marketing Officer"
            },
    
            {
                img:lead11,
                title:"Sidharth Narayanan",
                desc:"Sr. VP & Chief Strategy Officer"
            },

            {
                img:lead12,
                title:"Sunita Mohanty",
                desc:"Sr. VP & Chief Economic Relations Officer"
            },

            {
                img:lead13,
                title:"Dr. Suruchi Mittar",
                desc:"Sr. VP & Chief Industry Officer- Non-Tech Sector"
            },

            {
                img:lead14,
                title:"Vikrant Khazanchi",
                desc:"Sr. Assistant Vice President"
            },

            {
                img:lead15,
                title:"Vinod Subramanian",
                desc:"Vice President"
            },

        ]
  return (
      <div className=' grid grid-cols-4 gap-x-12 gap-y-52 my-20'>
         {
            data.map((item, index)=>(
                <div key={index} className=' relative'>
                <img className=' w-[250px] ml-8' src={item.img} alt="" />
                <div className=' bg-[#00105C] p-12 pt-32 rounded-b-2xl flex flex-col gap-2 absolute top-[142px] z-[-1]'>
                     <h1 className=' text-[20px] text-white font-[600] text-center'>{item.title}</h1>
                     <div className=' w-full h-[2px] bg-red-500'></div>
                     <p className=' text-[16px] font-[400] text-white text-center'>{item.desc}</p>
                </div>
            </div>
            ))
         }
      </div>
  )
}

export default LeaderShip