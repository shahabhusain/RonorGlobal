import React from 'react'
import Hero from '../../components/About/Hero'
import Investing from '../../components/About/Investing'
import Services from '../../components/Home/Services'
import Initiatives from '../../components/About/Initiatives'
import Client from '../../components/About/Client'
import Team from '../../components/About/Team'

const About = () => {
  return (
    <div className=' mt-20'>
        <Hero />
        <Investing />
        <Services />
        <Initiatives />
        <Client />
        <Team />
    </div>
  )
}

export default About