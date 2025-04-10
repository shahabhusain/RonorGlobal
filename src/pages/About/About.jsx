import React from 'react'
import Hero from '../../components/About/Hero'
import Investing from '../../components/About/Investing'
import Services from '../../components/Home/Services'

const About = () => {
  return (
    <div className=' mt-20'>
        <Hero />
        <Investing />
        <Services />
    </div>
  )
}

export default About