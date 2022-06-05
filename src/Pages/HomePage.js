import React, { useState, useEffect} from 'react'
import Header from '../Components/Header'
import ProjectPreview from '../Components/ProjectPreview'
import { Data, Messages } from '../Data';
import '../Styles/HomePage.css';
import helloWorldGif from '../Styles/images/helloWorld.gif'

function HomePage() {

  const [data]=useState(Data);
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
      setTablet(false)
    }
  }

  window.addEventListener('resize', getDeviceSize);

  useEffect(()=>{
    getDeviceSize();
  },[])

  return (
    <div>
      <Header mobile={mobile}/>
      <div className='msg-container'>
          <div className={mobile?'welcome-msg-mobile':tablet?'welcome-msg-tablet':'welcome-msg'}>
            <div>{Messages.welcomeMsg}</div>
            <img className={mobile? 'gif-mobile':'gif'} src={helloWorldGif}/> 
          </div>
      </div>
      <ProjectPreview data={data} mobile={mobile} tablet={tablet}/>
      <footer><div>Made with ♡ by Alejandra</div></footer>
    </div>
  )
}

export default HomePage