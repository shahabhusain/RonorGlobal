import React from 'react'
import CivilAviation from '../../components/AllStates/Germs/CivilAviation'
import AviationSectorUI from '../../components/AllStates/Germs/Aviation'
import Blog from '../../components/AllStates/Germs/Blog'

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