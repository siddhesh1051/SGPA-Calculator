
import './App.css';

import Navbar from './components/Navbar';
import Textin from './components/Textin';


function App() {
  return (
    <>
        <Navbar title="SGPA Calculator"/>
      <div className="big-container">

        <Textin />
        {/* <Textin subject="Enter Analog Communication Grades Below:" />
        <Textin subject="Enter Embedded System Grades Below:" />
        <Textin subject="Enter Electronic Instrumentation Grades Below:" />
        <Textin subject="Enter OOPs Grades Below:" /> */}
      {/* <div className="btn-div">
        <Button/>
      </div> */}
        
      </div>

    </>

  );
}

export default App;
