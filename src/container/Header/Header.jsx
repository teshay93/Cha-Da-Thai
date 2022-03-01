import React from 'react';
import image from '../../assets/thai1.jpg';
import './Header.css';

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
            <h1 className="app__header-h1">Cha Da Thai</h1>
            <p className="p__opensans" style={{ margin: '2rem 0', color: '#DCCA87' }}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>

            <button type="button" className="custom__button">Explore Menu</button>
        </div>
        <div className="app__wrapper_img">
        <img src={image} alt="header_img" />

        </div>
    </div>
  );
};

export default Header