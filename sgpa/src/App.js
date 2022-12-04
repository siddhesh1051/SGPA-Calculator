
import './App.css';

import Navbar from './components/Navbar';
import Textin from './components/Textin';
import Cse from './components/Cse';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar title="SGPA Calculator"/>
        <Router>
          <Routes>
            <Route path="/" element={<Textin/>}/>
            <Route path="/Cse" element={<Cse/>}/>
          </Routes>
        </Router>

    </>

  );
}

export default App;
