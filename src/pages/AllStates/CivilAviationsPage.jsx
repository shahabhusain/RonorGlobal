import React from 'react'
import CivilAviation from '../../components/AllStates/CivilAviation'
import AviationSectorUI from '../../components/AllStates/Aviation'
import PolicyArchiveAndSuccessStories from '../../components/AllStates/Major'
import Blog from '../../components/AllStates/Blog'

const CivilAviationsPage = () => {
  return (
    <div className=' mt-20'>
        <CivilAviation />
        <AviationSectorUI />
        <PolicyArchiveAndSuccessStories />
        <Blog />
    </div>
  )
}

export default CivilAviationsPage