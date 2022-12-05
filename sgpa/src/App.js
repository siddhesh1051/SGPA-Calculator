
import './App.css';

import Navbar from './components/Navbar';
import Textin from './components/Textin';
import Cse from './components/Cse';
import DSA from './components/DSA';
import About from './components/About';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
          </Routes>
        </Router>

    </>

  );
}

export default App;
