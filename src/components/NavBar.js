import React, { useState } from 'react'
import Logo from '../assets/icon.png'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {

  const [isDropDownOpen, setDropDown] = useState(false);
  const accountDropDown = () => {
    setDropDown(!isDropDownOpen)
  }

  return (
    <div className="navbar">
      <div className="leftBar">
        <img src={Logo}/>
      </div>
      <div className="rightBar">
        <Link to="/"> Home </Link>
        <Link to="/listings"> Listings </Link>
        <Link to="/contact"> Contact </Link>
        <div className="account">
          <button> Account </button>
          <div className="dropdown">
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar