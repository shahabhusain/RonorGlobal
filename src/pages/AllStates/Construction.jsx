import React from 'react'
import CivilAviation from '../../components/AllStates/Constructor/CivilAviation'
import AviationSectorUI from '../../components/AllStates/Constructor/Aviation'
import PolicyArchiveAndSuccessStories from '../../components/AllStates/Constructor/Major'
import Blog from '../../components/AllStates/Constructor/Blog'

const Construction = () => {
  return (
    <div className='mt-20'>
        <CivilAviation />
        <AviationSectorUI />
        <PolicyArchiveAndSuccessStories />
        <Blog />
    </div>
  )
}

export default Construction