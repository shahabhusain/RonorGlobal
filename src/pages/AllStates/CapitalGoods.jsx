import React from 'react'
import CivilAviation from '../../components/AllStates/CapitalGoods/CivilAviation'
import AviationSectorUI from '../../components/AllStates/CapitalGoods/Aviation'
import PolicyArchiveAndSuccessStories from '../../components/AllStates/CapitalGoods/Major'
import Blog from '../../components/AllStates/CapitalGoods/Blog'

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