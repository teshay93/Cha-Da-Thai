import React from 'react'
import FooterOverlay from '../../components/Footer/FooterOverlay';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import dragon from '../../assets/dragon.jpg';
import "./Footer.css";
import Newsletter from '../../components/Footer/NewsLetter';

const Footer = () => {
    return (
        <div className="app__footer section__padding" id="login">
            <FooterOverlay />
            <Newsletter />
            <div className="app__footer-links">
                <div className="app__footer-links_contact">
                    <h1 className="app__footer-headtext">Contact Us</h1>
                    <p className="p__opensans">420 Jonestown Rd Ste J, Winston-Salem, NC 27104</p>
                    <p className="p__opensans">(336) 659-8466</p>
                </div>

                <div className="app__footer-links_logo">
                    <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
                    <img src="" className="spoon__img" style={{ marginTop: 15 }} />

                    <div className="app__footer-links_icons">
                        <FiFacebook />
                        <FiTwitter />
                        <FiInstagram />
                    </div>
                    </div>

                    <div className="app__footer-links_work">
                        <h1 className="app__footer-headtext">Working Hours</h1>
                        <p className="p__opensans">Monday-Friday:</p>
                        <p className="p__opensans">08:00 am - 12:00 am</p>
                        <p className="p__opensans">Saturday-Sunday:</p>
                        <p className="p__opensans">07:00 am - 11:00 pm</p>
                    </div>
            </div>
            <div className="footer__copyright">
                <p className="p__opensans">2021 Gericht. All Rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer