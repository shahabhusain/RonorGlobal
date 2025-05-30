import React from 'react'
import CivilAviation from '../../components/AllStates/Beautiful/CivilAviation'
import AviationSectorUI from '../../components/AllStates/Beautiful/Aviation'
import Blog from '../../components/AllStates/Beautiful/Blog'

const CivilAviationsPage = () => {
  return (
    <div className=' mt-20'>
        <CivilAviation />
        <AviationSectorUI />
        <Blog />
    </div>
  )
}

export default CivilAviationsPage