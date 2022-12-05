
import './App.css';

import Navbar from './components/Navbar';
import Textin from './components/Textin';
import Cse from './components/Cse';
import DSA from './components/DSA';
import About from './components/About';
import Demo from './components/Demo';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Embedded from './components/Embedded';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Textin/>}/>
            <Route path="/Cse" element={<Cse/>}/>
            <Route path="/dsa" element={<DSA/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/demo" element={<Demo/>}/>
            <Route path="/embedded" element={<Embedded/>}/>
          </Routes>
        </Router>

    </>

  );
}

export default App;
