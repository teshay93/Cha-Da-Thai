import React from 'react';

const FIndUs = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">420 Jonestown Rd Ste J, Winston-Salem, NC 27104</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Sun - Fri: 11am-3pm, 5:00pm-10pm</p>
        <p className="p__opensans">Saturday: 11:30am-10pm</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
    </div>
  </div>  );
};

export default FIndUs;