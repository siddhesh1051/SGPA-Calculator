import React from 'react'
import { useState } from 'react';


export default function Textin(props) {
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const [Text4, setText4] = useState("");
  const [Text5, setText5] = useState("");
  
  const arr = [0,0,0,0,0];
  
  
  


  const handleOnChange1 = (event) =>{
        setText1(event.target.value)
        arr[0] = Text1;
        arr[1] = Text2;
        arr[2] = Text3;
        arr[3] = Text4;
        arr[4] = Text5;
        console.log(arr);
}
  const handleOnChange2 = (event) =>{
        setText2(event.target.value)
        arr[0] = Text1;
        arr[1] = Text2;
        arr[2] = Text3;
        arr[3] = Text4;
        arr[4] = Text5;
        console.log(arr);
}
  const handleOnChange3 = (event) =>{
        setText3(event.target.value)
        arr[0] = Text1;
        arr[1] = Text2;
        arr[2] = Text3;
        arr[3] = Text4;
        arr[4] = Text5;
}
  const handleOnChange4 = (event) =>{
        setText4(event.target.value)
        arr[0] = Text1;
        arr[1] = Text2;
        arr[2] = Text3;
        arr[3] = Text4;
        arr[4] = Text5;
}
  const handleOnChange5 = (event) =>{
        setText5(event.target.value)
        arr[0] = Text1;
        arr[1] = Text2;
        arr[2] = Text3;
        arr[3] = Text4;
        arr[4] = Text5;
}

const handleOnClick = () =>{
  let numerator = 4*(Number(Text1) + Number(Text2) + Number(Text3) + Number(Text5)) + 3*Number(Text4);
  let tempans = numerator/19;
  let ans = Math.round(tempans * 100) / 100
   alert("Your SGPA for 5th sem is : " + ans);
}

  
return (
    <>
    <div className='container'>
    <h3>Enter Waveguides and Antennas Grades Below:</h3>
    <div className="text-box mb-3">
      <textarea className="form-control" id="myBox" value={Text1} onChange={handleOnChange1} placeholder="Enter Grade " rows="1"></textarea>
    </div>

  </div>
  <div className='container'>
      <h3>Enter Analog Communication Grades Below:</h3>
      <div className="text-box mb-3">
        <textarea className="form-control" id="myBox" value={Text2} onChange={handleOnChange2} placeholder="Enter Grade " rows="1"></textarea>
      </div>

    </div>
    <div className='container'>
      <h3>Enter Embedded System Grades Below:</h3>
      <div className="text-box mb-3">
        <textarea className="form-control" id="myBox" value={Text3} onChange={handleOnChange3} placeholder="Enter Grade " rows="1"></textarea>
      </div>

    </div>
    <div className='container'>
      <h3>Enter Electronic Instrumentation Grades Below:</h3>
      <div className="text-box mb-3">
        <textarea className="form-control" id="myBox" value={Text4} onChange={handleOnChange4} placeholder="Enter Grade " rows="1"></textarea>
      </div>

    </div>
    <div className='container'>
      <h3>Enter OOPs Grades Below:</h3>
      <div className="text-box mb-3">
        <textarea className="form-control" id="myBox" value={Text5} onChange={handleOnChange5} placeholder="Enter Grade " rows="1"></textarea>
      </div>

    </div>

    <div className='container' id='calculate'>
          
          <div className="btn-div">
              
              <button className="btn btn-primary " onClick={handleOnClick}>Calculate</button>
          </div>

      </div>
    </>
  )
}


// 