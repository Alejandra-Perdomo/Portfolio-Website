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

function ProjectPreview({data, mobile, tablet}) {

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
        <div className={mobile?"project-prev-container-mobile":tablet?
        "project-prev-container-tablet":"project-prev-container"} key={index}>
          <img src={getImage(index)} className={mobile?"project-prev-img-mobile":"project-prev-img"}/>
          <div className={mobile?"project-prev-content-mobile":"project-prev-content"}>
              <div className={mobile?"project-prev-title-mobile":
              tablet?"project-prev-title":"project-prev-title"}>{info.title}</div>
              <div className={mobile?"project-prev-text-mobile":tablet?
              "project-prev-text-tablet":"project-prev-text"}>
                {info.content.length>200? info.content.substring(0,200)+'...' : info.content}</div>
          </div>
        </div> 
      </Link>
      )}
    </div>
  )
}

export default ProjectPreview;