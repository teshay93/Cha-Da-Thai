import React from 'react';

import './AboutUs.css';
import knife from '../../assets/knife.png';

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
        <div className="app__aboutus-overlay flex__center">
        </div>

        <div className="app__aboutus-content flex__center">
            <div className="app__aboutus-content_about">
            <h1 className="headtext__cormorant">What We Offer</h1>
                <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                <button type="button" className="custom__button">Know More</button>
            </div>

            <div className="app__aboutus-content_knife flex__center">
                    <img src={knife} alt="about_knife" />
                </div>
                <div className="app__aboutus-content_history">
                <h1 className="headtext__cormorant">Our History</h1>
                <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
        <button type="button" className="custom__button">Know More</button>
                </div>
        </div>

    </div>
  );
};

export default AboutUs