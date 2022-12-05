import React from 'react'


export default function About() {
  return (
    <>
    <div className='about-div'>
          <h1>Made by Siddhesh Patil</h1>
          <a
          className="btn btn-primary btn-lg btn-floating"
          id='linkedin'
          href="https://www.linkedin.com/in/siddhesh1052001"
          role="button">
         <i class="fa-brands fa-linkedin"></i>
         </a>

         <a
          className="btn btn-primary btn-lg btn-floating"
          id='github'
          href="https://github.com/siddhesh1051"
          role="button">
         <i class="fa-brands fa-github"></i>
         </a>

         <a
          className="btn btn-primary btn-lg btn-floating"
          id='instagram'
          href="https://www.instagram.com/sid.patil.01/"
          role="button">
         <i class="fa-brands fa-instagram"></i>
         </a>
      </div>
      </>
  )
}
