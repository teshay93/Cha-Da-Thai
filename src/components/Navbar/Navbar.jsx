import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu} from 'react-icons/md';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="app__navbar">
        <div className="app__navabr-logo">
            <img src="" />
        </div>
        <ul className="app__navbar-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
        </ul>
        
        <div className="app__navbar-smallscreen">
            <GiHamburgerMenu color="#fff" size={27} onClick={() => {}} />
            <div className="app__navbar-smallscreen_overlay flex_center slide-bottom">
                <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={() => {}} />
            </div>
            <ul className="app__navbar-smallscreen-links">
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
            <li className="p__opensans"><a href="#home">Home</a></li>
        </ul>
        </div>
    </nav>
  )
}

export default Navbar