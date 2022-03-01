import React, { useState } from 'react';

import './Menu.css';

const Menu = () => {

    return (
        <div className="app__specialMenu flex__center section__padding" id="menu">
            <div className="app__specialMenu-title">
                <h1 className="headtext__cormorant">Menu</h1>
            </div>
                <div className="btn-box">
                    <button>Menu</button>
                </div>
            
        </div>

    );
};

export default Menu;