import React from 'react';
import styles from './HeroBackground.module.css';

function HeroBackground() {
  // const [isHidden, setIsHidden] = useState(false);


  return (
    <div id="calendarContainer">
      <img className={styles.phone} src='img/phone.webp' draggable="false" alt='phone'></img>
      <img className={styles.ring} src="img/ring.webp" draggable="false" alt='ring'></img>
      {/* <img className="_7_i_XA" crossOrigin="anonymous" src="https://media-public.canva.com/lMISc/MAFtUzlMISc/1/s.png" draggable="false" alt="Mobile Phone Frame"></img> */}
      <svg
        className={styles.matrix}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 408 408"
        id="__id145_sqodvq0x5"
      >
        <path
          d="M406,138.67a2,2,0,0,0,0-4H340.67V71.33H406a2,2,0,0,0,0-4H340.67V2a2,2,0,0,0-4,0V67.33H273.33V2a2,2,0,0,0-4,0V67.33H206V2a2,2,0,0,0-4,0V67.33H138.67V2a2,2,0,0,0-4,0V67.33H71.33V2a2,2,0,0,0-4,0V67.33H2a2,2,0,0,0,0,4H67.33v63.34H2a2,2,0,0,0,0,4H67.33V202H2a2,2,0,0,0,0,4H67.33v63.33H2a2,2,0,0,0,0,4H67.33v63.34H2a2,2,0,0,0,0,4H67.33V406a2,2,0,0,0,4,0V340.67h63.34V406a2,2,0,0,0,4,0V340.67H202V406a2,2,0,0,0,4,0V340.67h63.33V406a2,2,0,0,0,4,0V340.67h63.34V406a2,2,0,0,0,4,0V340.67H406a2,2,0,0,0,0-4H340.67V273.33H406a2,2,0,0,0,0-4H340.67V206H406a2,2,0,0,0,0-4H340.67V138.67ZM336.67,71.33v63.34H273.33V71.33Zm-67.34,0v63.34H206V71.33ZM202,206v63.33H138.67V206Zm-63.33-4V138.67H202V202ZM206,206h63.33v63.33H206Zm0-4V138.67h63.33V202ZM202,71.33v63.34H138.67V71.33Zm-130.67,0h63.34v63.34H71.33Zm0,67.34h63.34V202H71.33Zm0,67.33h63.34v63.33H71.33Zm0,130.67V273.33h63.34v63.34Zm67.34,0V273.33H202v63.34Zm67.33,0V273.33h63.33v63.34Zm130.67,0H273.33V273.33h63.34Zm0-67.34H273.33V206h63.34Zm0-67.33H273.33V138.67h63.34Z"
          style={{ fill: 'rgb(166, 166, 166)' }}
        />
      </svg>

    </div>
  );
}

export default HeroBackground;
