import React, { useState } from 'react'
import Header from '../Components/Header'
import ProjectPreview from '../Components/ProjectPreview'
import Data from '../Data'

function HomePage() {

  const [data,setData]=useState(Data);

  return (
    <div>
      <Header/>
      <h3>This is the homepage</h3>
      <ProjectPreview data={data}/>
    </div>
  )
}

export default HomePage