import React, { useState } from 'react';
import './navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {

    const [isClicked, setIsClicked] = useState(false)
  return (
    <div>
        <nav>
        <div className="nav-logo-text">
            <span>Tom</span>
            <span>Concepts</span>
        </div>
        <div>
            <ul className={isClicked ? "nav-list drop" : "nav-list"}>
                <li> <a href="#">Home</a> </li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="dropdown" onClick={()=>{setIsClicked(!isClicked)}}><GiHamburgerMenu /></div>

        </div>
    </nav>
    </div>
  )
}

export default Navbar