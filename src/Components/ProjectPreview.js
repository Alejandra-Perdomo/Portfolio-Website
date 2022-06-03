import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../Styles/ProjectPreview.css';
import sound from '../Pages/Drum Sticks Hit 3.mp3';
import image0 from '../Styles/images/blackjack.png';
import image1 from '../Styles/images/beatbox.png';
import image2 from '../Styles/images/netflix.png'
import image3 from '../Styles/images/todoapp.png'
import image4 from '../Styles/images/twitter.png'
import image5 from '../Styles/images/amazon.png'
import image6 from '../Styles/images/locator.png'
import image7 from '../Styles/images/weatherapp.png'
import image8 from '../Styles/images/instagram.png'

function ProjectPreview({data}) {

  const [audio] = useState(new Audio(sound));

  const playSound=()=>{
    audio.play();
  }

  function getImage(index){
    let images=[image0,image1,image2,image3,image4,image5,image6,image7,image8]
    return images[index]
  }

  return (
    <div>
      {data.map((info,index)=>
      <Link to={info.link} className='link' key={index} onClick={()=>playSound()}>
        <div className="project-prev-container" key={index}>
          <img src={getImage(index)} className="project-prev-img"/>
          <div className="project-prev-content">
              <div className="project-prev-title">{info.title}</div>
              <div className="project-prev-text">{info.content}</div>
          </div>
        </div> 
      </Link>
      )}
    </div>
  )
}

export default ProjectPreview;