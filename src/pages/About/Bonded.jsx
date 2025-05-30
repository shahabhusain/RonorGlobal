import React from 'react'
import Hero from '../../components/About/Bonded/Hero'
import Overview from '../../components/About/Bonded/Overview'
import Note from '../../components/About/Bonded/Note'
import Advantages from '../../components/About/Bonded/Advantages'
import Ease from '../../components/About/Bonded/Ease'
import Types from '../../components/About/Bonded/Types'
import Requirment from '../../components/About/Bonded/Requirment'
import Stakholder from '../../components/About/Bonded/Stakholder'

const Bonded = () => {
  return (
    <div className=' mb-32 mt-20'>
        <Hero />
        <Overview />
        <Note />
        <Advantages />
        <Ease />
        <Types />
        <Requirment />
        <Stakholder />
    </div>
  )
}

export default Bonded