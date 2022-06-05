import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../Styles/ProjectPage.css'
import { Messages } from '../Data';
import sound from './Drum Sticks Hit 3.mp3';
import image0 from '../Styles/images/blackjack.png';
import image1 from '../Styles/images/beatbox.png';
import image2 from '../Styles/images/netflix.png'
import image3 from '../Styles/images/todoapp.png'
import image4 from '../Styles/images/twitter.png'
import image5 from '../Styles/images/amazon.png'
import image6 from '../Styles/images/locator.png'
import image7 from '../Styles/images/weatherapp.png'
import image8 from '../Styles/images/instagram.png'

function ProjectPage({project,index}) {

  const [audio] = useState(new Audio(sound));

  const [mobile, setMobile] = useState(false);
  const [tablet, setTablet] = useState(false);

  const getDeviceSize = () =>{
    if(window.innerWidth <= 600){
      setMobile(true);
      setTablet(false);
    }else if(window.innerWidth>600 && window.innerWidth<=900){
      setMobile(false);
      setTablet(true);
    }else{
      setMobile(false);
      setTablet(false);
    }
  }

  window.addEventListener('resize', getDeviceSize);

  useEffect(()=>{
    getDeviceSize();
  },[])

  const playSound=()=>{
    audio.play();
  }

  function getImage(){
    let images=[image0,image1,image2,image3,image4,image5,image6,image7,image8]
    return images[index]
  }

  return (
    <div>
      <div className={mobile?'project-header-mobile':'project-header'} 
      style={{backgroundImage: `url(${getImage()})`}}></div>
      <div className='content-container'>
        <div className={mobile?'content-mobile':tablet?'content-tablet':'content'}>
        <Link to='/' className='go-back-btn' onClick={()=>playSound()}>Regresar</Link>
        {project.cloudLink && !mobile && !tablet?<a className='cloud-link' onClick={()=>playSound()} href={project.cloudLink} target="_blank">Ver Proyecto</a>:''}
        <div className={mobile?'title-mobile':tablet?'title-tablet':'title'}>{project.title}</div>
        <div className={mobile?'text-mobile':tablet?'text-tablet':'text'}>{project.content}</div>
        {project.cloudLink && (mobile || tablet)?<div className='text-mobile'>{Messages.projectView}</div>:null}
        </div>
      </div>
      <footer><div>Made with ♡ by Alejandra</div></footer>
    </div>
  )
}

export default ProjectPage