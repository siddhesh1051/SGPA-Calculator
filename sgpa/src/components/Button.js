import React from 'react'

export default function Button(props) {

  const handleOnClick = () =>{
    // let numerator = 4*(Number(Text1) + Number(Text2) + Number(Text3) + Number(Text5)) + 3*Number(Text4);
    // let ans = numerator/19;
    // console.log(ans);
}
  return (
    <div className='container' id='calculate'>
          
          <div className="btn-div">
              
              <button className="btn btn-primary " onClick={handleOnClick}>Calculate</button>
          </div>

      </div>
  )
}
