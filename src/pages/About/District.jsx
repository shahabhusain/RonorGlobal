import React from 'react'
import Hero from '../../components/About/District/Hero'
import Snapshot from '../../components/About/District/Snapshot'
import WhatWeDo from '../../components/About/District/WhatWeDo'
import Odop from '../../components/About/District/Odop'
import State from '../../components/About/District/State'
import Links from '../../components/About/District/Links'
import Contact from '../../components/About/Ghana/Contact'

const District = () => {
  return (
    <div className=' my-32'>
        <Hero />
        <Snapshot />
        <WhatWeDo />
        <Odop />
        <State />
        <Links />
        <Contact />
    </div>
  )
}

export default District