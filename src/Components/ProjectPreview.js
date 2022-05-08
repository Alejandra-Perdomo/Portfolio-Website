import React from 'react'
import '../Styles/ProjectPreview.css'

function ProjectPreview({data}) {
  return (
    <div className='projects-prev-list'>
      {data.map((info,index)=>
      <div className="project-prev-container" key={index}>
      <img src={info.image} className="project-prev-img"/>
      <div className="project-prev-content">
          <div className="project-prev-title">{info.title}</div>
          <div className="project-prev-text">{info.content}</div>
      </div>
      </div> 
      )}
    </div>
  )
}

export default ProjectPreview;