import React, { useEffect } from "react";
import styles from "./Footer.css";
import ddlogo from '../assets/images/ddlogo.png';
import facebook_logo from '../assets/images/facebook-logo.jpg';
import instagram_logo from '../assets/images/instagram-logo.jpg';
import linkedin_logo from '../assets/images/linkedin-logo.png';
import decodeDaddy2 from '../assets/images/6.png';

function Footer() {
    return (
        <div className='footer-container'>
            <div id='footer'>
            <table className='foot-tab1'>
                <tr>
                <td>
                    <img src={ddlogo} alt="Decode daddy logo" className='logo2'/>
                </td>
                <td id='cols' rowSpan={2}>
                    <p id='connect'>Connect with us</p>
                    <a href='#'><img src={linkedin_logo} alt="Decode daddy logo" className='icon'/></a>
                    <a href='#'><img src={instagram_logo} alt="Decode daddy logo" className='icon'/></a>
                    <a href='#'><img src={facebook_logo} alt="Decode daddy logo" className='icon'/></a>
                </td>
                </tr>
                <tr>
                <td>
                    <p id='copyright'>&copy; 2024 SJSV VENTURES PVT LTD.<br /> All Rights Reserved</p>
                </td>
                </tr>
            </table>
            <div className='tab2-container'>
                <table className='foot-tab2'>
                <tr id='tabs'>
                    <td>OUR SERVICES</td>
                    <td>COMPANY</td>
                </tr>
                <br/>
                <tr>
                    <td><a href="#">Web Design & Development</a></td>
                    <td><a href="#">About Us</a></td>
                </tr>
                <tr>
                    <td><a href="#">IT Solutions</a></td>
                    <td><a href="#">Contact Us</a></td>
                </tr>
                <tr>
                    <td><a href="#">Digital Marketing</a></td>
                    <td><a href="#">Jobs</a></td>
                </tr>
                <tr>
                    <td><a href="#">SEO</a></td>
                    <td><a href="#">Privacy Policy</a></td>
                </tr>
                <tr>
                    <td><a href="#">App Development</a></td>
                    <td><a href="#">Terms & Conditions</a></td>
                </tr>           
                </table>
            </div>
            <div className='foot-log'>
                <img src={decodeDaddy2} id='logo3' alt='logo'/>
            </div>
            </div>
        </div>
    )
}

export default Footer
