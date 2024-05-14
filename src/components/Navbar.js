import React from 'react';
import Logo from '../assets/gamecard.png';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {
  return (
    <div className="navbar">
       <div className="leftside">
            <img src = {Logo} alt="Game card Logo"/>
        </div>

        <div className="rightside">
            <Link to="/">Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
        </div>

    </div>
  );
}

export default Navbar;
