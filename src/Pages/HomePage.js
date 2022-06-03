import React, { useState} from 'react'
import Header from '../Components/Header'
import ProjectPreview from '../Components/ProjectPreview'
import Data from '../Data'
import '../Styles/HomePage.css';
import helloWorldGif from '../Styles/images/helloWorld.gif'

function HomePage() {

  const [data]=useState(Data);

  return (
    <div>
      <Header/>
      <div className='msg-container'>
          <div className='welcome-msg'>
            <div>¡Hola! Gracias por visitar mi portafolio. Soy estudiante de sistemas
            y programadora autodidacta. He reunido aquí todos los proyectos en los que he trabajado hasta ahora.
            Echa un vistazo... Feliz código 🙂 </div>
            <img className='gif' src={helloWorldGif}/> 
          </div>
      </div>
      <ProjectPreview data={data}/>
      <footer><div>Made with ♡ by Alejandra</div></footer>
    </div>
  )
}

export default HomePage