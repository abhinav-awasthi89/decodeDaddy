import React, { useState, useEffect } from 'react';
import decodeDaddy from './assets/images/cube-logo.png';
import ddlogo from './assets/images/ddlogo.png';
import facebook_logo from './assets/images/facebook-logo.jpg';
import instagram_logo from './assets/images/instagram-logo.jpg';
import linkedin_logo from './assets/images/linkedin-logo.png';
import decodeDaddy2 from './assets/images/6.png';
import mobile_logo from './assets/images/mobile-logo.png';
import star from './assets/images/star.png';
import './App.css';

function App() {
  const [scrollDirection, setScrollDirection] = useState('down');
  const [visibleIndexes, setVisibleIndexes] = useState([]);

  useEffect(() => {
    const handleWheel = (event) => {
      const wheelDelta = event.deltaY;
      if (wheelDelta > 0) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
    };

    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const images = document.querySelectorAll('.sidelogo');
      const newVisibleIndexes = [];
      images.forEach((image, index) => {
        const rect = image.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          newVisibleIndexes.push(index);
        }
      });
      setVisibleIndexes(newVisibleIndexes);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call to show images already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderImages = () => {
    const images = [];
    for (let i = 0; i < 10; i++) {
      images.push(
        <img
          key={i}
          src={decodeDaddy2}
          className={`sidelogo ${visibleIndexes.includes(i) ? 'fade-in' : ''}`}
          alt="logo"
          style={{ margin: "50px", padding: "20%"}}
        />
      );
    }
    return images;
  };

  return (
    <>
    <div className='main'>
    <div className='content'>
      <div className='nav-container'>
        <img src={decodeDaddy} alt="Decode daddy logo" className='logo'/>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
          <div className="animation start-home"></div>
        </nav>
        <button type='button' id='learn-more-btn'>LEARN MORE</button>
      </div>

      <div className='body-content'>
        <div className='content1'>
          <h1>Transforming <br/> businesses <br/> <span id='sep'>digitally.</span></h1>
          <p>
            Helping businesses shift from Physical to Digital embracing digital transformation.
          </p>
          <button type='button' id='getq-btn'>GET A QUOTE</button>
        </div>

        <img src={mobile_logo} id='mobile'/>
      </div>

      <div className={`App ${scrollDirection}`}>
        <div className='rolling-queue'>
          <div id='item'><img src={star} id='star'/><span id='it'>Creators</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Innovators</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Imaginator</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Maverick</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Visionary</span></div>
        </div>
      </div>
      </div>

      <div id="right_side_bar">
          {renderImages()}
      </div>
      </div>

      {/* <div className={`App ${scrollDirection}`}>
        <div className='rolling-queue'>
          <div id='item'><img src={star} id='star'/><span id='it'>Creators</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Innovators</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Imaginator</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Maverick</span></div>
          <div id='item'><img src={star} id='star'/><span id='it'>Visionary</span></div>
        </div>
      </div> */}

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
    </>
  );
}

export default App;
