import React from 'react'
import { useState } from 'react';
// import img1 from './image/trophy.svg';
import swal from 'sweetalert';
import { Link } from 'react-router-dom'



export default function CSE(props) {
  const [Text1, setText1] = useState("");
  const [Text2, setText2] = useState("");
  const [Text3, setText3] = useState("");
  const [Text4, setText4] = useState("");
  const [Text5, setText5] = useState("");

  const arr = [0, 0, 0, 0, 0];


  // let popup = document.getElementById("popup");
  // // const openPopup = () => {
  // //   popup.classList.add("open-popup");
  // // }
  // const closePopup = () => {
  //   popup.classList.remove("open-popup");
  // }


  const handleOnChange1 = (event) => {
    setText1(event.target.value)
    arr[0] = Text1;
    arr[1] = Text2;
    arr[2] = Text3;
    arr[3] = Text4;
    arr[4] = Text5;
    console.log(arr);
  }
  const handleOnChange2 = (event) => {
    setText2(event.target.value)
    arr[0] = Text1;
    arr[1] = Text2;
    arr[2] = Text3;
    arr[3] = Text4;
    arr[4] = Text5;
    console.log(arr);
  }
  const handleOnChange3 = (event) => {
    setText3(event.target.value)
    arr[0] = Text1;
    arr[1] = Text2;
    arr[2] = Text3;
    arr[3] = Text4;
    arr[4] = Text5;
  }
  const handleOnChange4 = (event) => {
    setText4(event.target.value)
    arr[0] = Text1;
    arr[1] = Text2;
    arr[2] = Text3;
    arr[3] = Text4;
    arr[4] = Text5;
  }
  const handleOnChange5 = (event) => {
    setText5(event.target.value)
    arr[0] = Text1;
    arr[1] = Text2;
    arr[2] = Text3;
    arr[3] = Text4;
    arr[4] = Text5;
  }

  const handleOnClick = () => {
    let numerator = 4 * (Number(Text1) + Number(Text2) + Number(Text3)) + 3 * Number(Text4) + 3 * Number(Text5);
    let tempans = numerator / 18;
    let ans = Math.round(tempans * 100) / 100;
    let toShow = "Your SGPA is: " + ans +" 🎉";
    swal({
      title: toShow,
      icon: "success",
      button: "Ok",
      
    }
    );
    //openPopup();
  }



  return (
    <>
      <div className='container'>
        <h3>Enter DBMS Grade Points Below:</h3>
        <div className="text-box mb-3">
          <textarea className="form-control" id="myBox" value={Text1} onChange={handleOnChange1} placeholder="Enter Grade " rows="1"></textarea>
        </div>

      </div>
      <div className='container'>
        <h3>Enter Computer Networks Grade Points Below:</h3>
        <div className="text-box mb-3">
          <textarea className="form-control" id="myBox" value={Text2} onChange={handleOnChange2} placeholder="Enter Grade " rows="1"></textarea>
        </div>

      </div>
      <div className='container'>
        <h3>Enter Theory of Computation Grade Points Below:</h3>
        <div className="text-box mb-3">
          <textarea className="form-control" id="myBox" value={Text3} onChange={handleOnChange3} placeholder="Enter Grade " rows="1"></textarea>
        </div>

      </div>
      <div className='container'>
        <h3>Enter Cloud Computing Grade Points Below:</h3>
        <div className="text-box mb-3">
          <textarea className="form-control" id="myBox" value={Text4} onChange={handleOnChange4} placeholder="Enter Grade " rows="1"></textarea>
        </div>

      </div>
      <div className='container'>
        <h3>Enter TC/PE Grade Points Below:(For Embedded System <Link  to="/embedded">Click Here</Link>)</h3>
        <div className="text-box mb-3">
          <textarea className="form-control" id="myBox" value={Text5} onChange={handleOnChange5} placeholder="Enter Grade " rows="1"></textarea>
        </div>

      </div>

      <div className='container' id='calculate'>

        <button className="btn btn-primary " onClick={handleOnClick}>Calculate</button>
      </div>
      {/* <div className="popup" id='popup'>
        <img src={img1} alt="" />
        <h2>Congrats🎉</h2>

        <button type='button' className='btn' onClick={closePopup}>Ok</button>

      </div> */}
    </>

  )

}


// 