import React from 'react'
import CivilAviation from '../../components/AllStates/Jewelery/CivilAviation'
import AviationSectorUI from '../../components/AllStates/Jewelery/Aviation'
import PolicyArchiveAndSuccessStories from '../../components/AllStates/Jewelery/Major'
import Blog from '../../components/AllStates/Jewelery/Blog'

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