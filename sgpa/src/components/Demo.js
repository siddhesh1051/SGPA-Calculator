import React from 'react'
import sc1 from './Screenshots/sc1.jpg';
import sc2 from './Screenshots/sc2.jpg';
import swal from 'sweetalert';

let table = `AA --> 10\nAB --> 9\nBB --> 8\nBC --> 7\nCC --> 6\nCD --> 5\nDD --> 4\n` ;

export default function Demo() {
  const openPopup = () => {
    
    swal({
      title: "Grade to Grade point conversion",
      text: table,
      
      
    });
    
  }
  return (
    
    <div className='sc1' onLoad={openPopup}>
          <img src={sc1} id='sc1' alt="" />
      <img src={sc2} id='sc2' alt="" />
      </div>

    //   <div className="sc2">

    // /  </div>
      
  )
}
