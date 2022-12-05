import React from 'react'
import PropTypes from 'prop-types'
import logo from '../components/image/logo.png'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary" id='navbar-box' >
      <div className="container-fluid">
        <div className="img" href="/">
        <img className="logo" src={logo} alt="" href="/"/>
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-3 mb-lg-0">
            
            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">ECE</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/Cse">CSE</Link>
            </li>
            
            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/">Demo</Link>
            </li>

            <li className="nav-item">
            <Link className="nav-link " aria-current="page" to="/About">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes={
    title: PropTypes.string,
    about: PropTypes.string
}