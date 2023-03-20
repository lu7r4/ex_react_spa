import './App.css';
import { Header } from "./layout/Header"
import { About } from "./layout/About"
import { Cat1 } from "./layout/Cat1"
import { Cat2 } from "./layout/Cat2"
import { Cat3 } from "./layout/Cat3"
import { Cat4 } from "./layout/Cat4"
import { Cat5 } from "./layout/Cat5"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



function App() {
  return (
    
<>
<Header />

  <Router>
    <About />
      <Routes>
        <Route exact path="/" element={<Cat1/>}/>
        <Route path="/cat2" element={<Cat2/>}/>
        <Route path="/Cat3" element={<Cat3/>}/>
        <Route path="/Cat4" element={<Cat4/>}/>
        <Route path="/Cat5" element={<Cat5/>}/>
      </Routes>
  </Router>
</>
  );
}

export default App;
