
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';
import Data from'./Data';
import { useState } from 'react';

function App() {

  const [data,setData]=useState(Data);

  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/project/Blackjack" element={<ProjectPage project={data[0]} index={0}/>}/>
        <Route path="/project/BeatBox" element={<ProjectPage project={data[1]} index={1}/>}/>
        <Route path="/project/Netflix" element={<ProjectPage project={data[2]} index={2}/>}/>
        <Route path="/project/ToDoApp" element={<ProjectPage project={data[3]} index={3}/>}/>
        <Route path="/project/TwitterClone" element={<ProjectPage project={data[4]} index={4}/>}/>
        <Route path="/project/AmazonCart" element={<ProjectPage project={data[5]} index={5}/>}/>
        <Route path="/project/StoreLocator" element={<ProjectPage project={data[6]} index={6}/>}/>
        <Route path="/project/WeatherApp" element={<ProjectPage project={data[7]} index={7}/>}/>
        <Route path="/project/InstagramClone" element={<ProjectPage project={data[8]} index={8}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
