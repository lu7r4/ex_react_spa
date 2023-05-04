import './App.css';
import {Header} from './layout/Header'
import { About } from "./layout/About"
// import { Dashboard } from "./layout/Dashboard"
// import { TwoLetters } from "./layout/TwoLetters"
// import { ThreeLetters } from "./layout/ThreeLetters"
import { Test } from './layout/Test';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  
  return (
    
    <>
        <Header/>
        <div className='main'>
          <div className='aboutt'>
            <About />
          </div>
<Test/>
        </div>
    </>
  );
}

export default App;
