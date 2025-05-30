import React from 'react'
import Part1 from '../../components/About/NewApplication/Part1'
import Part2 from '../../components/About/NewApplication/Part2'
import Part3 from '../../components/About/NewApplication/Part3'
import OnlineApplication from '../../components/About/NewApplication/OnlineApplication'

const NewApplication = () => {
  return (
    <div>
        <OnlineApplication />
        <Part1 />
        <Part2 />
        <Part3 />
    </div>
  )
}

export default NewApplication