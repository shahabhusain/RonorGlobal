import React from 'react'
import Hero from '../../components/Home/Hero'
import Investible from '../../components/Home/Investible'
import Invest from '../../components/Home/Invest'
import Services from '../../components/Home/Services'
import Features from '../../components/Home/Features'
import Resource from '../../components/Home/Resource'

const Home = () => {
  return (
    <div className=' mt-20'>
      <Hero />
      <Investible />
      <Invest />
      <Services />
      <Features />
      <Resource />
    </div>
  )
}

export default Home