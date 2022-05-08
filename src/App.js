
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ProjectPage from './Pages/ProjectPage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} exact/>
        <Route path="/project" element={<ProjectPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
