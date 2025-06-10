import React from 'react'
import Hero from '../../components/About/Ghana/Hero'
import Overview from '../../components/About/Ghana/Overview'
import Agenda from '../../components/About/Ghana/Agenda'
import Participating from '../../components/About/Ghana/Participating'
import Brochures from '../../components/About/Ghana/Brochures'
import Contact from '../../components/About/Ghana/Contact'

const Ghana = () => {
  return (
    <div className=' mb-32 mt-20'>
        <Hero />
        <Overview />
        <Agenda />
        {/* <Participating /> */}
        {/* <Brochures /> */}
        <Contact />
    </div>
  )
}

export default Ghana